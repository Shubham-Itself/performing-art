

const AccordianLanding = ({ title, isOpen, onClick, content }: any) => {
  return (
    <div className="border rounded-xl  p-3 mb-3">
    <button
      onClick={onClick}
      className="w-full flex justify-between items-center text-left font-medium text-lg"
    >
      {title}
      <span
        className={`ml-2 transform transition-transform duration-300 ${
          isOpen ? "rotate-180" : ""
        }`}
      >
        ▼
      </span>
    </button>

    {isOpen && (
      <div
        className="accordion-collapse transition-all duration-300 ease-in-out mt-4"
        aria-labelledby="headingOne"
        data-bs-parent="#accordionExample"
      >
        <ul className="space-y-3">
          {content?.map((subject: any, index: number) => (
            <li key={index}>
              <div className="flex gap-3 items-start">
                <i className="fas fa-file-alt text-blue-500 mt-1" />
                <div>
                  <div className="font-semibold">{subject.title}</div>
                  {subject.subtopics && (
                    <ul className="list-disc list-inside text-sm text-gray-700 mt-1 ml-4 space-y-1">
                      {subject.subtopics.map((sub: string, i: number) => (
                        <li key={i}>{sub}</li>
                      ))}
                    </ul>
                  )}
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    )}
  </div>
  )
}

export default AccordianLanding;
