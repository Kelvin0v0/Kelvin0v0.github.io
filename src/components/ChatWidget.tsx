import { useMemo, useState } from 'react'
import type { FormEvent } from 'react'

type Message = {
  from: 'bot' | 'user'
  text: string
}

const starters = [
  'Hi! Ask me about skills, projects, or experience.',
]

function getBotReply(input: string): string {
  const lower = input.toLowerCase()

  if (lower.includes('skill')) {
    return 'Kelvin works with React, TypeScript, .NET/.NET Core, SQL Server, and Azure DevOps.'
  }
  if (lower.includes('project')) {
    return 'Key projects include SmartNetwork, SmartBoard, and ANI analytics modules.'
  }
  if (lower.includes('experience') || lower.includes('work')) {
    return 'Kelvin has 4+ years of full-stack experience across telecom and enterprise products.'
  }
  if (lower.includes('contact') || lower.includes('email')) {
    return 'You can reach Kelvin at k@psi.tv.'
  }

  return 'Thanks for your message. I can answer about Kelvin’s skills, work experience, projects, and contact.'
}

export default function ChatWidget() {
  const [open, setOpen] = useState(false)
  const [input, setInput] = useState('')
  const [messages, setMessages] = useState<Message[]>(
    starters.map((text) => ({ from: 'bot', text })),
  )

  const canSend = useMemo(() => input.trim().length > 0, [input])

  const onSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    if (!canSend) return

    const value = input.trim()
    setInput('')
    setMessages((prev) => [...prev, { from: 'user', text: value }])

    window.setTimeout(() => {
      setMessages((prev) => [...prev, { from: 'bot', text: getBotReply(value) }])
    }, 350)
  }

  return (
    <div className="fixed bottom-5 right-5 z-[60]">
      {open ? (
        <div className="card w-[20rem] border border-base-300 bg-base-100 shadow-2xl md:w-[23rem]">
          <div className="flex items-center justify-between border-b border-base-300 px-4 py-3">
            <p className="font-semibold">Chat with Kelvin Bot</p>
            <button
              className="btn btn-xs btn-circle btn-ghost"
              onClick={() => setOpen(false)}
              aria-label="Close chat"
            >
              ✕
            </button>
          </div>

          <div className="max-h-80 space-y-3 overflow-y-auto p-4">
            {messages.map((message, index) => (
              <div
                key={`${message.from}-${index}`}
                className={`chat ${message.from === 'user' ? 'chat-end' : 'chat-start'}`}
              >
                <div
                  className={`chat-bubble ${
                    message.from === 'user' ? 'chat-bubble-primary' : ''
                  }`}
                >
                  {message.text}
                </div>
              </div>
            ))}
          </div>

          <form className="border-t border-base-300 p-3" onSubmit={onSubmit}>
            <div className="join w-full">
              <input
                className="input input-bordered join-item w-full"
                placeholder="Type a message..."
                value={input}
                onChange={(event) => setInput(event.target.value)}
              />
              <button className="btn btn-primary join-item" type="submit" disabled={!canSend}>
                Send
              </button>
            </div>
          </form>
        </div>
      ) : (
        <button className="btn btn-primary btn-circle btn-lg shadow-xl" onClick={() => setOpen(true)}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="h-6 w-6"
            aria-hidden="true"
          >
            <path d="M4 5.5A2.5 2.5 0 0 1 6.5 3h11A2.5 2.5 0 0 1 20 5.5v7A2.5 2.5 0 0 1 17.5 15H10l-4.5 4v-4A2.5 2.5 0 0 1 3 12.5v-7A2.5 2.5 0 0 1 4 5.5z" />
          </svg>
        </button>
      )}
    </div>
  )
}
