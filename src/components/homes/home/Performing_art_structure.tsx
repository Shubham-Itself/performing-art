import { useState } from "react";
import AccordianLanding from "./AccordianLanding";



const certificateSemester = [
  {
    title: "Semester 1",
    subjects: [
      "Acting Fundamentals",
      "Introduction to Media and Communication",
      "Acting for Camera and Stage",
      "Workshop: Anchoring and Presentation Skills",
    ],
  },
  {
    title: "Semester 2",
    subjects: [
      "Advanced Acting Techniques",
      "Theatre Arts",
      "Acting for Television and Film",
      "Content Creation Basics",
      "Workshop: Public Speaking and Media Relations",
    ],
  },
  {
    title: "Semester 3",
    subjects: [
      "Acting for Diverse Genres",
      "Content and Media Management",
      "Media Production Techniques",
      "Theatre Production and Direction",
      "Workshop: Improvisation and live Performances",
    ],
  },
  {
    title: "Semester 4",
    subjects: [
      "Media Entrepreneurship",
      "Industry Networking and Career Preparation",
      "Capstone Project",
      "Internship and Industry Exposure",
    ],
  },
];
const degreeSemesters = [
  {
    "title": "Semester 1",
    "subjects": [
      { "title": "Intro to Performing Arts & Allied Arts: History, Evolution, Advances" },
      {
        "title": "Introduction to Acting Fundamentals - Screen & Stage",
        "subtopics": ["Theatre", "Anchoring/ Presentation", "Media Production"]
      },
      { "title": "Media Management: Leadership and Group Dynamics" },
      { "title": "Indian Folk Arts (IKS-I)" },
      { "title": "Media Management - Content Acquisition" },
      { "title": "Communicative English" }
    ]
  },
  {
    "title": "Semester 2",
    "subjects": [
      { "title": "Acting - Theories, techniques & Practices" },
      { "title": "Content Creation: Ideation, Planning & Execution" },
      {
        "title": "Theatre & Anchoring Submodules",
        "subtopics": ["Theatre", "Anchoring/ Presentation"]
      },
      { "title": "Scene Study & Dialogue Writing" },
      { "title": "Film Appreciation" },
      { "title": "Theater Arts: Sound, StageCraft, Lighting, Make up, Costume" },
      { "title": "Foreign Language" }
    ]
  },
  {
    "title": "Semester 3",
    "subjects": [
      { "title": "Genre based Acting: Film & Stage" },
      { "title": "Media Management - Content Mapping - Shows, Events, Print, News" },
      {
        "title": "Content Mapping Submodules",
        "subtopics": ["Business & Copyright", "Entrepreneurship & Management", "Content Mapping", "Creative Communication & Storytelling"]
      },
      { "title": "Body Movement & Improvisation" },
      { "title": "Indian Media Culture (IKS II)" },
      { "title": "Project" }
    ]
  },
  {
    "title": "Semester 4",
    "subjects": [
      { "title": "Advance acting & Character Analysis" },
      { "title": "Film, Plays, OTT & Other forms - Immersive Studies" },
      {
        "title": "Content Positioning & Data Analysis",
        "subtopics": ["Business & Copyright", "Entrepreneurship & Management", "Content Mapping", "Creative Communication & Storytelling"]
      },
      { "title": "Music - Vocal & Instrumental" },
      { "title": "Voice Acting, Dialect, Diction" },
      { "title": "Project" }
    ]
  },
  {
    "title": "Semester 5",
    "subjects": [
      { "title": "Acting for interactive media & Coming of Age Media" },
      { "title": "Media Studies - Camera, Edit, Post Production" },
      {
        "title": "Project Based Elective",
        "subtopics": ["Acting", "Script & Direction", "Production", "Marketing Strategization & Branding"]
      },
      { "title": "Verbal Ability and Comprehension" },
      { "title": "Industry Internship" }
    ]
  },
  {
    "title": "Semester 6",
    "subjects": [
      { "title": "Project Management & Monetisation" },
      { "title": "Professional Portfolio" },
      {
        "title": "Project Based Elective",
        "subtopics": ["Acting", "Script & Direction", "Production", "Marketing Strategization & Branding"]
      },
      { "title": "Radio, Audible & Broadcasting - Principles & Technologies" },
      { "title": "Industry Induction" },
      { "title": "Financial Literacy and Personal Finance" },
      { "title": "Graduation Project/ On Job Training" }
    ]
  },
  {
    "title": "Semester 7",
    "subjects": [
      { "title": "Cultural Studies" },
      { "title": "Data Analytics and Measurement - Media" },
      { "title": "New Age Media" },
      { "title": "Film & Theatre" },
      { "title": "Use Acting for Animation here, AI & VR" },
      { "title": "Pitching & Business Outreach" },
      { "title": "Project Based Internship" }
    ]
  },
  {
    "title": "Semester 8",
    "subjects": [
      { "title": "Advance Media Production - AI, CG, AR/VR" },
      { "title": "Safety & Ethics in Workplace" },
      { "title": "New Age Media" },
      { "title": "Film & Theatre" },
      { "title": "Field Project" },
      { "title": "Digital Marketing" },
      { "title": "Production Based Project" }
    ]
  }
];

const Performing_art_structure = () => {
  const [activeScreen , setActiveScreen ] = useState(1);
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  return (
    <div className="max-w-7xl mx-auto p-6 space-y-10 text-gray-800 !pt-[100px] !pb-0">
    <h1 className="text-3xl font-bold text-center">Program Structure</h1>
    
    <section>
      <h2 className="text-2xl font-semibold">Performing Arts and Media Management</h2>
     
    </section>
  
    <section>
      <h3 className="text-xl font-semibold mt-6">Course Overview</h3>
      <p className="mt-2 text-gray-700">
        This two-year production-oriented performing arts course is meticulously designed to equip students with
        the essential skills, specialized knowledge, and practical experience necessary to excel in the competitive
        fields of theatre, film, television, and digital media. Through a blend of intensive training, creative
        projects, and professional development, graduates will be well-prepared to pursue successful and fulfilling
        careers in the performing arts industry. The course consists of a 21-month intensive training module followed
        by a three-month project focused on creating video and theatrical performances.
      </p>
    </section>
  
    <section className="flex gap-[30px] justify-between tablet:flex-col mobile:flex-col">
      <div className="w-[60%] tablet:w-[70%] mobile:w-full">
      <h3 className="text-xl font-semibold mt-6">Mentors</h3>
      <div className="flex flex-col gap-4 mt-4">
        <div className="bg-gray-50 p-4 rounded-lg shadow">
          <h4 className="font-bold">Chief Mentor</h4>
         <div className="flex gap-[20px] mt-[20px] mobile:flex-col">
          <img src="/assets/iics_image/leaders/amit_behl.webp" alt="" width="100px" className="rounded-[10px]" />
         <div>
         <p className="font-semibold">Dr. (Hon) Amit Behl</p>
          <p className="text-sm text-gray-600">
            Award-Winning Film, Television, Theatre Actor, Professor of Media & Entertainment, Creative Producer & Senior Consultant
          </p>
         </div>
         </div>
        </div>
        <br />
       
        <div className="bg-gray-50 p-4 rounded-lg shadow">
          <h4 className="font-bold">Industry Mentor</h4>
         <div className="flex gap-[20px] mt-[20px] mobile:flex-col">
         <img src="/assets/iics_image/industryMentors/ashish.webp" alt="" width="100px" className="rounded-[10px]" />
         <div>
          <p>Mr. Ashish Kant Tatla</p>
          <p className="text-sm text-gray-600">
            Industry Mentor, School of Performing Arts and Media Management (Performing Arts)
          </p>
          </div>
         </div>
        </div>
      </div>
      </div>
      <div className="w-[30%] tablet:w-[70%] mobile:w-full">
      <section className="bg-yellow-50 border-l-4 border-yellow-400 p-6 rounded-lg shadow-md mt-8">
  <h3 className="text-2xl font-bold text-yellow-800 mb-4">📌 Eligibility Criteria</h3>
  <ul className="list-disc pl-6 text-gray-800 space-y-2 marker:text-yellow-500">
    <li>Open to all aspiring actors, theatre enthusiasts, media professionals, and graduates from related fields.</li>
    <li>12th Pass from a recognized Board with an interest in performing arts and media management.</li>
  </ul>
</section>

<section className="bg-blue-50 border-l-4 border-blue-500 p-6 rounded-lg shadow-md mt-8">
  <h3 className="text-2xl font-bold text-blue-800 mb-4">🗓️ Important Dates</h3>
  <ul className="list-disc pl-6 text-gray-800 space-y-2 marker:text-blue-500">
    <li><strong className="text-blue-700">Registration Start Date:</strong> 28th April 2025</li>
    <li><strong className="text-blue-700">Registration End Date:</strong> 12th May 2025</li>
    <li><strong className="text-blue-700">Online Entrance Exam:</strong> 16th to 18th May 2025</li>
    <li><strong className="text-blue-700">Batch Launch:</strong> 12th June 2025</li>
  </ul>
</section>
      </div>
    </section>
  
  
  
    <section>
      <h3 className="text-2xl font-bold mb-4">Course Curriculum</h3>
      <div className="flex flex-wrap gap-4 mt-4">
      <span className="px-4 py-1 bg-green-100 text-green-800 rounded-full text-sm font-medium cursor-pointer" onClick={() => setActiveScreen(1)}>Degree</span>
        <span className="px-4 py-1 bg-blue-100 text-blue-800 rounded-full text-sm font-medium cursor-pointer" onClick={() => setActiveScreen(2)}>Certificate</span>
        
      </div>
      <div className="space-y-6 mt-4">
       
      <div className="">
  {/* <h2 className="text-2xl font-bold mb-4"> Curriculum</h2> */}
  <div className="overflow-x-auto">
    <table className="min-w-full border border-gray-300 mobile:hidden">
      <thead className="bg-gray-100">
        <tr>
          <th className="border border-gray-300 px-4 py-2 text-left whitespace-nowrap">Semester</th>
          <th className="border border-gray-300 px-4 py-2 text-left whitespace-nowrap">Subjects</th>
        </tr>
      </thead>
      <tbody>
      {activeScreen === 1 && degreeSemesters.map((semester, idx) => (
  <tr key={idx}>
    <td className="border border-gray-300 px-4 py-2 align-top font-semibold text-gray-800 whitespace-nowrap">
      {semester.title}
    </td>
    <td className="border border-gray-300 px-4 py-2">
      <ul className="ml-5 text-gray-700 space-y-1">
        {semester.subjects.map((subject, sIdx) => (
          <li key={sIdx} className="list-disc">
            {subject.title}
            {subject.subtopics && (
              <ul className="ml-6 list-decimal space-y-1">
                {subject.subtopics.map((sub, subIdx) => (
                  <li key={subIdx}>{sub}</li>
                ))}
              </ul>
            )}
          </li>
        ))}
      </ul>
    </td>
  </tr>
))}
        {activeScreen === 2 && certificateSemester.map((semester, idx) => (
          <tr key={idx}>
            <td className="border border-gray-300 px-4 py-2 align-top font-semibold text-gray-800 whitespace-nowrap">
              {semester.title}
            </td>
            <td className="border border-gray-300 px-4 py-2">
              <ul className="list-disc ml-5 text-gray-700 space-y-1">
                {semester.subjects.map((subject, sIdx) => (
                  <li key={sIdx}>{subject}</li>
                ))}
              </ul>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
 {activeScreen === 1 && <div className="mobile:block hidden">
  { degreeSemesters.map((sem, idx) => (
  <AccordianLanding
    key={idx}
    title={sem.title}
    isOpen={openIndex === idx}
    onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
    content={sem.subjects}
  />
))}
  </div>}
  {activeScreen === 2 && <div className="mobile:block hidden">
  { certificateSemester.map((sem, idx) => (
  <AccordianLanding
    key={idx}
    title={sem.title}
    isOpen={openIndex === idx}
    onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
    content={sem.subjects}
  />
))}
  </div>}
  </div>
</div>
      </div>
    </section>
  </div>
  )
}

export default Performing_art_structure
