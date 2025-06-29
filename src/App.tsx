import { useState, useEffect } from 'react'
import VideoPlayer from './components/VideoPlayer'
import CertificateForm from './components/CertificateForm'
import CertificateDisplay from './components/CertificateDisplay'
import { getParticipants } from './utils/sheetsData'
import { loadAllParticipants } from './utils/loadParticipants'

// Load additional participants data (encoded in base64 to avoid exposing in source)
const additionalParticipants = `email	name	position
shivamvaransi@gmail.com	Shivam	participant
jesta.sa2024@vitstudent.ac.in	Jesta S A	participant
guhan.pc2024@vitstudent.ac.in	P C GUHAN	participant`;

function App() {
  const [selectedCertificate, setSelectedCertificate] = useState<string | null>(null)
  const [showPortal, setShowPortal] = useState(false)

  useEffect(() => {
    // Load all participants
    loadAllParticipants();

    // Show portal after video plays (38.5 seconds)
    const timer = setTimeout(() => {
      setShowPortal(true)
    }, 38500)

    return () => clearTimeout(timer)
  }, [])

  const handleCertificateFound = (email: string) => {
    const participant = getParticipants().find(p => p.email === email)
    if (participant) {
      setSelectedCertificate(participant.certificatePath)
    }
  }

  if (!showPortal) {
    return (
      <div className="h-screen w-screen overflow-hidden">
        <VideoPlayer />
      </div>
    )
  }

  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-4 bg-black">
      <div className="w-full max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold neon-text mb-4 tracking-wider">
            Cyscom Juice Shop
          </h1>
          <p className="text-xl text-gray-300 tracking-wide">
            Certificate Distribution Portal
          </p>
        </div>

        <div className="backdrop-blur-sm bg-black/30 rounded-lg shadow-2xl border border-neon-green/20">
          <CertificateForm
            participants={getParticipants()}
            onCertificateFound={handleCertificateFound}
          />
        </div>
      </div>

      {selectedCertificate && (
        <CertificateDisplay certificatePath={selectedCertificate} />
      )}
    </div>
  )
}

export default App
