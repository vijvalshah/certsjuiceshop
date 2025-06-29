// This is just a simple encoding to avoid having plaintext emails in the source
const encodedData = btoa(`email	name	position
kirubahari.p2024@vitstudent.ac.in	Kirubahari	1
yashvanth.2023@vitstudent.ac.in	Yashvanth Karunakaran	2
sanmithsalian@gmail.com	Sanmith Salian	3
paulshubhranil1855@gmail.com	Shubhranil Paul 	4
gawasatharva8@gmail.com	Atharva Gawas	5
pethukannan555@gmail.com	Pethu Kannan G	participant
divyabanu.s2023@vitstudent.ac.in	S Divyabanu 	participant
harshitmalhotra110@gmail.com	Harshit Malhotra	participant
shivamvaransi@gmail.com	Shivam	participant
jesta.sa2024@vitstudent.ac.in	Jesta S A	participant`);

export const getParticipantData = () => {
  try {
    return atob(encodedData);
  } catch {
    return '';
  }
}; 