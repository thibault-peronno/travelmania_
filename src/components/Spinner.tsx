function Spinner() {
  return (
    <div className="flex justify-center items-center fixed top-0 w-screen h-screen bg-background opacity-75">
      <svg className="animate-spin -ml-1 mr-3 h-14 w-14 text-white" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <circle className="opacity-0 bg-evidence_1" cx="12" cy="12" r="10" />
        <path className="" fill="#427AA1" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
      </svg>

      
    </div>
  );
}

export default Spinner;
