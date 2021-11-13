import React, { useState } from 'react'
import './Ping.css'

function Ping(): JSX.Element {
  const [ping, setPing] = useState('')
  const [pong, setPong] = useState({
    ping: '',
    received_at: '',
  })

  const createBaseUrl = (): string => {
    const locationToMatchRegex = new RegExp('^http://localhost:[0-9]*')
    if (locationToMatchRegex.test(window.location.origin)) {
      // The http://host:port that serves backend in a single endpoint setup.
      return 'http://localhost:3000'
    }
    // The current window URL in a single endpoint setup.
    // Backend is served via /ping path_prefix.
    return window.location.origin
  }

  const handleChange = (e: {
    target: { value: React.SetStateAction<string> }
  }) => {
    setPing(e.target.value)
  }

  const handleSubmit = (e: { preventDefault: () => void }) => {
    e.preventDefault()

    const pingServer = async (query: string) => {
      const baseUrl = createBaseUrl()
      const response = await fetch(`${baseUrl}/ping?ping=${query}`)
      const data = await response.json()
      setPong(data)
    }

    pingServer(ping)
  }

  return (
    <div className="Ping">
      <form>
        <input
          type="text"
          onKeyDown={() => handleChange}
          onChange={handleChange}
          placeholder="Ping server with some text..."
        />
        <div className="code-display">
          <code>
            {JSON.stringify(
              {
                ping,
              },
              null,
              2
            )}
          </code>
        </div>
        <button type="submit" onClick={handleSubmit}>
          Submit
        </button>
      </form>

      {pong && (
        <div>
          <code>
            {JSON.stringify(
              {
                ping: pong.ping,
                received_at: new Date(pong.received_at).toLocaleString(),
              },
              null,
              2
            )}
          </code>
        </div>
      )}
    </div>
  )
}

export default Ping
