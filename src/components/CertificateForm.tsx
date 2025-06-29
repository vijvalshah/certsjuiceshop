import { useState } from 'react';
import { getParticipants } from '../utils/sheetsData';
import confetti from 'canvas-confetti';

interface CertificateFormProps {
  onCertificateFound: (certificatePath: string) => void;
}

const CertificateForm: React.FC<CertificateFormProps> = ({ onCertificateFound }) => {
  const [email, setEmail] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setSuccess(false);

    const participant = getParticipants().find(p => p.email.toLowerCase() === email.toLowerCase());
    
    if (!participant) {
      setError('No certificate found for this email. Please check your email and try again.');
      return;
    }

    setSuccess(true);
    
    // Show confetti for everyone!
    confetti({
      particleCount: 100,
      spread: 70,
      origin: { y: 0.6 },
      colors: ['#4485e9', '#ffffff'],
    });
    
    onCertificateFound(participant.certificatePath);
  };

  return (
    <div className="p-8">
      <h2 className="text-2xl font-bold mb-6 neon-text text-center">
        Certificate Portal
      </h2>
      
      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <input
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email"
            className="w-full px-4 py-2 rounded bg-gray-800 border border-neon-blue/30 focus:border-neon-blue focus:ring-1 focus:ring-neon-blue outline-none"
          />
        </div>

        {error && (
          <p className="text-neon-blue text-sm mt-2">
            {error}
          </p>
        )}

        {success && (
          <p className="text-neon-blue text-sm mt-2">
            Certificate found! Thank you for participating!
          </p>
        )}

        <button
          type="submit"
          className="w-full py-2 px-4 bg-neon-blue/20 hover:bg-neon-blue/30 text-neon-blue rounded transition-colors duration-200 border border-neon-blue/50"
        >
          Get Certificate
        </button>
      </form>
    </div>
  );
};

export default CertificateForm; 