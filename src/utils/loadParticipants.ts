import { addParticipants } from './sheetsData';

// All participants in exact order
const participantsData = `email	name	position
kirubahari.p2024@vitstudent.ac.in	Kirubahari	1
yashvanth.2023@vitstudent.ac.in	Yashvanth Karunakaran	2
sanmithsalian@gmail.com	Sanmith Salian	3
paulshubhranil1855@gmail.com	Shubhranil Paul 	4
gawasatharva8@gmail.com	Atharva Gawas	5
pethukannan555@gmail.com	Pethu Kannan G	participant
divyabanu.s2023@vitstudent.ac.in	S Divyabanu 	participant
harshitmalhotra110@gmail.com	Harshit Malhotra	participant
shivamvaransi@gmail.com	Shivam	participant
jesta.sa2024@vitstudent.ac.in	Jesta S A	participant
guhan.pc2024@vitstudent.ac.in	P C GUHAN	participant
surajkumar.ps2024@vitstudent.ac.in	P S SURAJ KUMAR 	participant
ranenjoseph@gmail.com	A.Ranen Joseph Solomon	participant
gsjayabhi@gmail.com	G Jayadhev 	participant
machmlightdoublehigh@gmail.com	SAMARJEETH R	participant
notshivzee@gmail.com	Shivam Bhatt	participant
ajithaditya26@gmail.com	Aditya A	participant
mohit.sgeorge2024@vitstudent.ac.in	Mohit S George 	participant
revansh.kumarinhe2024@vitstudent.ac.in	Revansh Kumar Inhe	participant
shearlynambowe@gmail.com	Shearly	participant
vidya.sagarbetapudi2024@vitstudent.ac.in	Vidya Sagar Betapudi 	participant
gulisetty.abhinav2023@vitstudent.ac.in	Gulisetty Abhinav	participant
vaishnavi.gosi2023@vitstudent.ac.in	Vaishnavi Gosi 	participant
adeelchaudary098@gmail.com	Adeel Chaudhary 	participant
srv52310@gmail.com	S Rahul Vignesh 	participant
aditya.rajanvaswani2024@vitstudent.ac.in	Aditya	participant
goutham.krishna2024@vitstudent.ac.in	Goutham Krishna Jayakrishnan	participant
amarnath.p2024@vitstudent.ac.in	Amarnath P	participant
sibhi.s2024@vitstudent.ac.in	Sibhi S	participant
naresh.s2024a@vitstudent.ac.in	Naresh S	participant
hareekshith.as2024@vitstudent.ac.in	Hareekshith AS 	participant
samyukthabr951@gmail.com	Samyuktha BR 	participant
adithiyaa.d2023@vitstudent.ac.in	Adithiyaa D 	participant
salimhmoughrabi@gmail.com	Salim Moughrabi 	participant
kunal.sachdev2024@vitstudent.ac.in	KUNAL SACHDEV	participant
prithvi.pramit2024@vitstudent.ac.in	Prithvi Pramit	participant
varsaa.h2023@vitstudent.ac.in	Varsaa H	participant
vasundhra.sharma2023@vitstudent.ac.in	Vasundhra Sharma	participant
rupiga.k2023@vitstudent.ac.in	Rupiga 	participant
anandhita.sai2024@vitstudent.ac.in	Anandhita	participant
shreejivisha@gmail.com	Jivisha Shree 	participant
emailsuyesha@gmail.com	Suyesha Saha	participant
parv60255@gmail.com	Parv B Jain	participant
23cm10dh7@mitsgwl.ac.in	Dhwani Bijoul	participant
akshitha.2024@vitstudent.ac.in	Akshitha Muralidharan 	participant
ericlazar.antony2022@vitstudent.ac.in	Eric Lazar Antony	participant
jayaninarayanan7@gmail.com	Jayani N	participant
sharondavid169961@gmail.com	Sharon David	participant
ezhil930@gmail.com	Ezhil S	participant
saumyashxrma@gmail.com	SAUMYA SHARMA 	participant
bharath.vaaishnav2023@vitstudent.ac.in	Bharath Vaaishnav T B 	participant
nandhana.sr2024@vitstudent.ac.in	Nandhana SR	participant
rateeshwin.cv2023@vitstudent.ac.in	Rateeshwin CV	participant
aswathnarayan.d2023@vitstudent.ac.in	Aswath Narayan D 	participant
dibyadipan.2024@vitstudent.ac.in	Dibyadipan	participant
vignesh.ks2024a@vitstudent.ac.in	vignesh.ks2024a@vitstudent.ac.in	participant
joel.john2024@vitstudent.ac.in	Joel John Kizhakkayil 	participant
vanshika.jaswani2024@vitstudent.ac.in	Vanshika Jaswani	participant
2196aayush@gmail.com	Aayush Gupta	participant
mvardaa2006@gmail.com	Vardaa Maheshwari 	participant
chehakgupta06@gmail.com	chehak	participant
tejaskotte30@gmail.com	K TEJAS REDDY	participant
alnreddy28@gmail.com	Dinesh	participant
kothapalli.dheeraj2024@vitstudent.ac.in	Dheeraj 	participant
yashwantgokul1@gmail.com	Yashwant Gokul P	participant
rmohnish06@gmail.com	Mohnish	participant
e0222058@sret.edu.in	Eshaa Sumesh	participant
roshni4581@gmail.com	Roshni Ramesh	participant
ramakrishnan.ph2024@vitstudent.ac.in	Ramakrishnan P H	participant
andukuri.navya2024@vitstudent.ac.in	Navya Nandika A 	participant
shagun.gupta2023@vitstudent.ac.in	Shagun Gupta	participant
klmarjun@gmail.com	Arjun M	participant
ankit.raj2023@vitstudent.ac.in	Ankit Raj	participant
rohit.sinha2022@vitstudent.ac.in	Rohit Sinha	participant
sidpara.parth2023@vitstudent.ac.in	Parth Sidpara	participant
janyavula.naga2023@vitstudent.ac.in	J.N.Praneeta	participant
hariharan.s2022b@vitstudent.ac.in	Hariharan 	participant
abhaykrishna.p2024@vitstudent.ac.in	Abhay krisha 	participant
lakshanyasri.sr2022@vitstudent.ac.in	Lakshanyasri S R	participant
swetha.s2022b@vitstudent.ac.in	Swetha S	participant
mtandrita05@gmail.com	Tandrita Mukherjee	participant
pawangambhirr@gmail.com	Pawan Gambhir	participant
ananya.bhar@gmail.com	Ananya Bhardwaj 	participant
shridu.manish2023@vitstudent.ac.in	Shridu Manish 	participant
deepa.rakeshkumar2024@vitstudent.ac.in	Deepa Rakesh Kumar 	participant
sadhanasitaram@gmail.com	Sadhana Sitaraman	participant
tarunjeeth07@gmail.com	TARUNJEETH RK	participant
umarsharuk1981@gmail.com	Umar Sharuk M	participant
tangoc0318@gmail.com	Jay kumar	participant
adarsh.saripaka2024@vitstudent.ac.in	Adarsh saripaka	participant
ziddanratj@gmail.com	Ziddan Rath 	participant
chandru.rt@gmail.com	Chandrasekar Rathinam	participant`;

export const loadAllParticipants = () => {
  addParticipants(participantsData);
}; 