
function OpiskelijaTiedot({tiedot}) {
  
  return (
    <div>
      <h2>Opiskelijan tiedot</h2>
      <p><strong>Nimi:</strong> {tiedot.nimi}</p>
      <p><strong>Ikä:</strong> {tiedot.ika}</p>
      <p><strong>Kurssi:</strong> {tiedot.kurssi}</p>
    </div>
  );
}

export default OpiskelijaTiedot;