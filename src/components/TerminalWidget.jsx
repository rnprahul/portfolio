import React, { useState, useRef, useEffect } from 'react';
import { Play, RotateCw } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export function TerminalWidget({ onOpenModal }) {
  const fileTemplates = [
    {
      id: 'profile.js',
      name: 'profile.js',
      icon: '📄',
      language: 'javascript',
      code: `const dev = { name: "${portfolioData.personal.name}", role: "Software Developer" };
console.log(\`Hi! I build practical web apps as a \${dev.role}\`);`,
      runText: `> node profile.js
✓ ${portfolioData.personal.name} | Software Developer based in ${portfolioData.personal.location}.
✓ Stack: React, JavaScript, Python, SQL, MongoDB, Firebase.
✓ Status: ${portfolioData.personal.statusBadge}`
    },
    {
      id: 'contact.json',
      name: 'contact.json',
      icon: '⚙️',
      language: 'json',
      code: `{
  "email": "${portfolioData.personal.socialLinks.email}",
  "phone": "${portfolioData.personal.phone}",
  "x": "${portfolioData.personal.socialLinks.twitter}",
  "instagram": "${portfolioData.personal.socialLinks.instagram}",
  "facebook": "${portfolioData.personal.socialLinks.facebook}"
}`,
      runText: `> cat contact.json
✓ Email: ${portfolioData.personal.socialLinks.email}
✓ Phone: ${portfolioData.personal.phone}
✓ GitHub: ${portfolioData.personal.socialLinks.github}
✓ LinkedIn: ${portfolioData.personal.socialLinks.linkedin}
✓ X (Twitter): ${portfolioData.personal.socialLinks.twitter}
✓ Instagram: ${portfolioData.personal.socialLinks.instagram}
✓ Facebook: ${portfolioData.personal.socialLinks.facebook}`
    }
  ];

  const [activeFileId, setActiveFileId] = useState('profile.js');
  const [isExecuting, setIsExecuting] = useState(false);
  const [typingOutput, setTypingOutput] = useState('');
  const [lines, setLines] = useState([
    { type: 'welcome', text: '<span class="highlight-cyan">Welcome!</span> Select profile.js or contact.json & click <span class="cmd-badge">▶ RUN</span>.' }
  ]);
  const [inputVal, setInputVal] = useState('');
  const [history, setHistory] = useState([]);
  const [historyIdx, setHistoryIdx] = useState(-1);
  const terminalBodyRef = useRef(null);

  const activeFile = fileTemplates.find(f => f.id === activeFileId) || fileTemplates[0];

  useEffect(() => {
    if (terminalBodyRef.current) {
      terminalBodyRef.current.scrollTop = terminalBodyRef.current.scrollHeight;
    }
  }, [lines, typingOutput, isExecuting]);

  // Clears previous output and types ONLY the current active file output
  const handleRunScript = () => {
    if (isExecuting) return;

    setLines([]);
    setTypingOutput('');
    setIsExecuting(true);

    const targetText = activeFile.runText;
    let charIdx = 0;

    const interval = setInterval(() => {
      if (charIdx <= targetText.length) {
        setTypingOutput(targetText.substring(0, charIdx));
        charIdx++;
      } else {
        clearInterval(interval);
        setIsExecuting(false);
        setLines([{ type: 'runResult', text: targetText }]);
        setTypingOutput('');
      }
    }, 6);
  };

  const handleCommand = (cmdRaw) => {
    const cmd = cmdRaw.trim().toLowerCase();
    if (!cmd) return;

    const newLines = [{ type: 'user', text: cmdRaw }];

    switch (cmd) {
      case 'help':
        newLines.push({
          type: 'output',
          text: `
            <div class="cmd-output">
              <p class="section-head">CLI Commands:</p>
              <table class="cli-table">
                <tr><td><span class="cmd-name">bio</span></td><td>Print developer background</td></tr>
                <tr><td><span class="cmd-name">skills</span></td><td>List tech stack</td></tr>
                <tr><td><span class="cmd-name">contact</span></td><td>Show contact & social links</td></tr>
                <tr><td><span class="cmd-name">sudo hire</span></td><td>🚀 Open fast-track inquiry modal</td></tr>
                <tr><td><span class="cmd-name">clear</span></td><td>Clear terminal window</td></tr>
              </table>
            </div>
          `
        });
        break;

      case 'bio':
        newLines.push({ type: 'runResult', text: fileTemplates[0].runText });
        break;

      case 'skills':
        newLines.push({
          type: 'runResult',
          text: `> python3 skills.py\n✓ Frontend: React, JS, HTML/CSS, Bootstrap\n✓ Backend & DB: Firebase, Firestore, MongoDB, SQL\n✓ Languages: JavaScript, Python, SQL`
        });
        break;

      case 'contact':
        newLines.push({ type: 'runResult', text: fileTemplates[1].runText });
        break;

      case 'sudo hire':
      case 'hire':
        newLines.push({
          type: 'output',
          text: `<div class="cmd-output highlight-gold">🎉 Opening fast-track contact form...</div>`
        });
        if (onOpenModal) {
          setTimeout(() => onOpenModal(), 400);
        }
        break;

      case 'clear':
        setLines([]);
        setTypingOutput('');
        return;

      default:
        newLines.push({
          type: 'output',
          text: `<div class="cmd-output error-msg">Command not recognized: '${cmd}'. Click ▶ RUN or type 'help'.</div>`
        });
        break;
    }

    setLines(newLines);
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      if (inputVal.trim()) {
        setHistory([...history, inputVal]);
        setHistoryIdx(history.length + 1);
        handleCommand(inputVal);
        setInputVal('');
      }
    } else if (e.key === 'ArrowUp') {
      if (history.length > 0 && historyIdx > 0) {
        const newIdx = historyIdx - 1;
        setHistoryIdx(newIdx);
        setInputVal(history[newIdx] || '');
      }
    } else if (e.key === 'ArrowDown') {
      if (historyIdx < history.length - 1) {
        const newIdx = historyIdx + 1;
        setHistoryIdx(newIdx);
        setInputVal(history[newIdx] || '');
      } else {
        setHistoryIdx(history.length);
        setInputVal('');
      }
    }
  };

  return (
    <section className="section" id="terminal">
      <div className="container">
        <div className="section-header" style={{ marginBottom: '2rem' }}>
          <span className="section-subtitle">Interactive Code Runner</span>
          <h2 className="section-title">Developer Command Line</h2>
        </div>

        <div className={`terminal-window ${isExecuting ? 'executing' : ''}`}>
          {/* Header Bar with profile.js & contact.json File Tabs */}
          <div className="terminal-header">
            <div className="terminal-buttons">
              <span className="btn-dot dot-close"></span>
              <span className="btn-dot dot-minimize"></span>
              <span className="btn-dot dot-maximize"></span>
            </div>

            {/* File Tabs */}
            <div className="file-tabs-bar">
              {fileTemplates.map(file => (
                <button
                  key={file.id}
                  className={`file-tab ${activeFileId === file.id ? 'active' : ''}`}
                  onClick={() => {
                    setActiveFileId(file.id);
                    setLines([]);
                    setTypingOutput('');
                  }}
                >
                  <span>{file.icon}</span>
                  <span>{file.name}</span>
                </button>
              ))}
            </div>

            {/* Run Button */}
            <button 
              className={`run-action-btn ${isExecuting ? 'running' : ''}`} 
              onClick={handleRunScript}
              disabled={isExecuting}
            >
              {isExecuting ? (
                <>
                  <RotateCw size={13} className="spinner-icon" /> RUNNING...
                </>
              ) : (
                <>
                  <Play size={13} fill="currentColor" /> RUN
                </>
              )}
            </button>
          </div>

          {/* Compact Code Viewer Pane */}
          <div className="code-editor-pane">
            <pre className="code-pre">
              <code>{activeFile.code}</code>
            </pre>
          </div>

          {/* Terminal Console Output */}
          <div className="terminal-body" ref={terminalBodyRef}>
            {lines.map((line, idx) => (
              <div key={idx} className="terminal-line">
                {line.type === 'user' ? (
                  <>
                    <span className="terminal-prompt terminal-prompt-full">guest@rahul-dev:~$</span>
                    <span className="terminal-prompt terminal-prompt-short" style={{ display: 'none' }}>~$</span>
                    <span className="user-cmd">{line.text}</span>
                  </>
                ) : line.type === 'runResult' ? (
                  <pre style={{ color: '#10b981', fontFamily: 'var(--font-code)', whiteSpace: 'pre-wrap' }}>
                    {line.text}
                  </pre>
                ) : (
                  <div dangerouslySetInnerHTML={{ __html: line.text }} />
                )}
              </div>
            ))}

            {/* Live Character-by-Character Typewriter Output */}
            {isExecuting && (
              <div className="terminal-line">
                <pre style={{ color: '#10b981', fontFamily: 'var(--font-code)', whiteSpace: 'pre-wrap' }}>
                  {typingOutput}<span className="typewriter-cursor"></span>
                </pre>
              </div>
            )}
          </div>

          {/* Interactive Command Input Line */}
          <div className="terminal-input-row">
            <span className="terminal-prompt terminal-prompt-full">guest@rahul-dev:~$</span>
            <span className="terminal-prompt terminal-prompt-short" style={{ display: 'none' }}>~$</span>
            <input 
              type="text" 
              id="terminalInput" 
              value={inputVal}
              onChange={(e) => setInputVal(e.target.value)}
              onKeyDown={handleKeyDown}
              placeholder="Click ▶ RUN or type 'help'..." 
              autoComplete="off" 
              spellCheck="false" 
            />
          </div>
        </div>
      </div>
    </section>
  );
}

