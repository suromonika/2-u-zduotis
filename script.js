var salys = [
  {
    valstybe: 'Singapūras',
    plotas: 719.4 * 1000000,
    gyventojai: 5784538,
  },
  {
    valstybe: 'Taivanas',
    plotas: 36197 * 1000000,
    gyventojai: 23568378,
  },
  {
    valstybe: 'Ukraina',
    plotas: 603628 * 1000000,
    gyventojai: 44130000,
  },
  {
    valstybe: 'Prancūzija',
    plotas: 643801 * 1000000,
    gyventojai: 67413000,
  },
  {
    valstybe: 'Lietuva',
    plotas: 65300 * 1000000,
    gyventojai: 2795680,
  },
];

for (var x of salys) {
  console.log(`Šalis: 
   ${x.valstybe}, joje gyvena ${(x.gyventojai / 1000000).toFixed(
    2
  )} mln. gyventojų.
  `);
  console.log(
    `Valstybės plotas: ${
      x.plotas / 1000000
    } km², plotas tenkantis vienam gyventojui: ${(
      x.plotas / x.gyventojai
    ).toFixed(2)} m²  `
  );
}

console.log('+++++++++++Papildomai+++++++++++++');

function salysPrint(valstybe, plotas, gyventojai) {
  console.log(`Šalis: 
   ${x.valstybe}, joje gyvena ${(x.gyventojai / 1000000).toFixed(
    2
  )} mln. gyventojų.
  `);
  console.log(
    `Valstybės plotas: ${
      x.plotas / 1000000
    } km², plotas tenkantis vienam gyventojui: ${(
      x.plotas / x.gyventojai
    ).toFixed(2)} m²  `
  );
}

for (var x of salys) {
  salysPrint(x.valstybe, x.plotas, x.gyventojai);
}
