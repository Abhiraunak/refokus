function Marque({ imageurls }) {
  return (
    <div className="flex w-ull py-5 gap-16 whitespace-nowrap overflow-hidden">
      {imageurls.map(url => <img src={url} alt="images" className="flex-shrink-0 w-[6vw]" />)}
      {imageurls.map(url => <img src={url} alt="images" className="" />)}
    </div>

  );
}

export default Marque;