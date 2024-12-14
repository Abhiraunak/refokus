
function Navbar() {
  return (
    <div className='max-w-screen-xl mx-auto py-6 flex items-center'>
        <img
                    src="https://assets-global.website-files.com/6334198f239547d0f9cd84b3/63349803431f1562dccf1802_refokus%20logo.svg"
                    alt="refokus-logo"
        />
        <div className="links flex gap-14 ml-20">
          {["Home", "Work", "Culture"].map((elem, index) => 
            (<a className="text-sm flex items-center gap-1" href="#">
              {index === 1 && <span style={{boxShadow:"0 0 0.45em #00FF19" }}className="inline-block w-1 h-1 bg-green-500 rounded-full"></span>}
              {elem}
            </a>))}

        </div>
          
        
    </div>
  )
}

export default Navbar