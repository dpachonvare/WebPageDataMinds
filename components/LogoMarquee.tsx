export default function LogoMarquee() {
  const logos = [
    { name: 'Microsoft', text: 'Microsoft' },
    { name: 'Azure', text: 'Azure' },
    { name: 'Power BI', text: 'Power BI' },
    { name: 'Fabric', text: 'Fabric' },
  ];

  return (
    <section className="bg-white py-8 border-y border-gray-200">
      <div className="section-container">
        <div className="flex justify-center items-center gap-8 md:gap-16 flex-wrap">
          {logos.map((logo) => (
            <div
              key={logo.name}
              className="text-gray-500 font-semibold text-lg md:text-xl opacity-70 hover:opacity-100 transition-opacity"
            >
              {logo.text}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
