'use client'

import '../src/web-component/simple-greeter';

export default function ClientComponent() {
  return (
    <div style={{ padding: "20px", margin: "20px", border: "4px solid green" }}>
      <h1>Client Component</h1>
      <simple-greeter name="I'm rendering from Client Component" />
    </div>
  )
}