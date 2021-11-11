import React, { useState } from 'react'
import './Ping.css'

function Ping(): JSX.Element {
  const [ping, setPing] = useState('')
  const [pong, setPong] = useState({
    ping: '',
    received_at: '',
  })

  const handleChange = (e: {
    target: { value: React.SetStateAction<string> }
  }) => {
    setPing(e.target.value)
  }

  const handleSubmit = (e: { preventDefault: () => void }) => {
    e.preventDefault()

    const pingServer = async (query: string) => {
      const response = await fetch(`http://localhost:3000/ping?ping=${query}`)
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
