export default function Spinner() {
  return (
    <div className="flex justify-center items-center h-screen">
      <svg className="animate-spin h-80 w-80 mr-3 ..." viewBox="0 0 100 100">
        <circle className="stroke-yellow stroke-128" cx="50" cy="50" r="40" fill="transparent" strokeDasharray="40 100" strokeDashoffset="0"></circle>
      </svg>
    </div>
  )
}