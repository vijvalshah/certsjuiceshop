export interface Participant {
  email: string;
  name: string;
  position: string | number;
  certificatePath: string;
}

// Function to parse the raw sheet data into our format
export function parseSheetData(rawData: string): Participant[] {
  let counter = 1;
  return rawData
    .split('\n')
    .slice(1) // Skip header row
    .filter(line => line.trim()) // Remove empty lines
    .map(line => {
      const [email, name, position] = line.split('\t');
      const isTopFive = ['1', '2', '3', '4', '5'].includes(position);
      const certificateId = isTopFive ? position : 'participant';
      
      // Generate a unique identifier for each participant
      const driveFileId = btoa(`${email}-${position}`).replace(/[^a-zA-Z0-9]/g, '');
      
      return {
        email: email.trim(),
        name: name.trim(),
        position: position.trim(),
        isTopFive,
        certificateId,
        driveFileId,
        certificatePath: `/certificates/${counter++}.png`
      };
    });
}

// Store participant data in memory to avoid exposing in source
let participants: Participant[] = [];

// Function to add participants from TSV data
export const addParticipants = (tsvData: string) => {
  const lines = tsvData.split('\n');
  // Skip header row if present
  const startIndex = lines[0].startsWith('email') ? 1 : 0;
  
  let counter = 1; // Start from 1 and increment for each participant
  
  for (let i = startIndex; i < lines.length; i++) {
    const line = lines[i].trim();
    if (!line) continue;
    
    const [email, name, position] = line.split('\t');
    if (email && name) {
      participants.push({
        email: email.trim(),
        name: name.trim(),
        position: position?.trim() || 'participant',
        certificatePath: `/certificates/${counter}.png`
      });
      counter++;
    }
  }
};

// Function to get all participants
export const getParticipants = () => {
  return participants;
};

// Function to search participants
export const searchParticipants = (query: string) => {
  query = query.toLowerCase();
  return participants.filter(p => 
    p.name.toLowerCase().includes(query) || 
    p.email.toLowerCase().includes(query)
  );
};

// Initialize with base data
addParticipants(`email	name	position
kirubahari.p2024@vitstudent.ac.in	Kirubahari	1
yashvanth.2023@vitstudent.ac.in	Yashvanth Karunakaran	2
sanmithsalian@gmail.com	Sanmith Salian	3
paulshubhranil1855@gmail.com	Shubhranil Paul 	4
gawasatharva8@gmail.com	Atharva Gawas	5
pethukannan555@gmail.com	Pethu Kannan G	participant
divyabanu.s2023@vitstudent.ac.in	S Divyabanu 	participant
harshitmalhotra110@gmail.com	Harshit Malhotra	participant`); 