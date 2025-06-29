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
  const [showVideo, setShowVideo] = useState(true)

  useEffect(() => {
    // Load all participants
    loadAllParticipants();
  }, [])

  const handleCertificateFound = (certificatePath: string) => {
    setSelectedCertificate(certificatePath);
  }

  return (
    <div className="min-h-screen bg-pattern font-ibm3270">
      {showVideo ? (
        <VideoPlayer onVideoEnd={() => setShowVideo(false)} />
      ) : (
        <div className="container mx-auto px-4 py-8">
          <div className="text-center mb-12">
            <div className="flex justify-center mb-6">
              <img 
                src="/clogo.jpg" 
                alt="CYSCOM Logo" 
                className="h-24 w-auto rounded-lg shadow-lg shadow-neon-blue/20"
              />
            </div>
            <h1 className="text-5xl font-bold neon-text mb-4 tracking-wider">
              Cyscom Juice Shop
            </h1>
            <p className="text-xl text-gray-300 tracking-wide">
              Certificate Distribution Portal
            </p>
          </div>

          <div className="backdrop-blur-sm bg-black/30 rounded-lg shadow-2xl border border-neon-blue/20">
            <CertificateForm onCertificateFound={handleCertificateFound} />
          </div>

          {selectedCertificate && (
            <CertificateDisplay certificatePath={selectedCertificate} />
          )}
        </div>
      )}
    </div>
  )
}

export default App
