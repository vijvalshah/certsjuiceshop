interface CertificateDisplayProps {
  certificatePath: string;
}

const CertificateDisplay: React.FC<CertificateDisplayProps> = ({ certificatePath }) => {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80">
      <div className="max-w-5xl w-full mx-4 bg-black rounded-lg shadow-2xl border border-neon-green/20">
        <h2 className="text-2xl font-bold neon-text p-4 text-center">
          Your Certificate
        </h2>
        
        <div className="p-4">
          <div className="bg-gray-900 rounded-lg overflow-hidden">
            <img
              src={certificatePath}
              className="w-full h-auto max-h-[70vh] object-contain mx-auto"
              alt="Your Certificate"
            />
          </div>
        </div>

        <div className="p-4 flex justify-center">
          <a
            href={certificatePath}
            download
            className="px-6 py-2 bg-neon-green/20 hover:bg-neon-green/30 text-neon-green rounded transition-colors duration-200 border border-neon-green/50"
          >
            Download Certificate
          </a>
        </div>
      </div>
    </div>
  );
};

export default CertificateDisplay; 