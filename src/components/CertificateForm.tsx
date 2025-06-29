import { useState } from 'react';
import Fuse from 'fuse.js';
import confetti from 'canvas-confetti';
import type { Participant } from '../utils/sheetsData';

interface CertificateFormProps {
  participants: Participant[];
  onCertificateFound: (email: string) => void;
}

const CertificateForm: React.FC<CertificateFormProps> = ({ participants, onCertificateFound }) => {
  const [name, setName] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState(false);

  const fuse = new Fuse(participants, {
    keys: ['name', 'email'],
    threshold: 0.4, // Increased threshold for better matching
    ignoreLocation: true,
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const results = fuse.search(name);
    
    if (results.length > 0) {
      const match = results[0].item;
      setError('');
      setSuccess(true);
      
      // Show confetti for everyone!
      confetti({
        particleCount: 100,
        spread: 70,
        origin: { y: 0.6 },
        colors: ['#39FF14', '#ffffff'],
      });
      
      onCertificateFound(match.email);
    } else {
      setError('Name not found. Please check your spelling and try again.');
      setSuccess(false);
    }
  };

  return (
    <div className="w-full max-w-md mx-auto p-6">
      <h2 className="text-2xl font-bold mb-6 neon-text text-center">
        Certificate Retrieval
      </h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="name" className="block text-sm font-medium mb-2">
            Enter your name or email
          </label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full px-4 py-2 rounded bg-gray-800 border border-neon-green/30 focus:border-neon-green focus:ring-1 focus:ring-neon-green outline-none"
            placeholder="John Doe or john@example.com"
          />
        </div>
        {error && (
          <p className="text-red-500 text-sm mt-2">{error}</p>
        )}
        {success && (
          <p className="text-neon-green text-sm mt-2">
            Certificate found! Thank you for participating!
          </p>
        )}
        <button
          type="submit"
          className="w-full py-2 px-4 bg-neon-green/20 hover:bg-neon-green/30 text-neon-green rounded transition-colors duration-200 border border-neon-green/50"
        >
          Retrieve Certificate
        </button>
      </form>
    </div>
  );
};

export default CertificateForm; 