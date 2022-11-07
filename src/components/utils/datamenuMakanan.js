let dataMenu = [
    {
        id: "1",
        imageUrl: "https://res.cloudinary.com/codingers-enegx/image/upload/v1667748991/jabar%20tradifood/menu%20makanan/cumi-goreng-tepung.jpg",
        title: "Cumi Goreng Tepung",
        description: "Cumi segar yang digoreng renyah dan gurih menggunakan tepung berbumbu rempah.",
        harga: "21.000",
        label: "Cumi",
      },
      {
        id: "2",
        imageUrl: "https://res.cloudinary.com/codingers-enegx/image/upload/v1667748990/jabar%20tradifood/menu%20makanan/empal-gepuk.jpg",
        title: "Empal Gepuk",
        description: "Daging empal yang dimasak dengan bumbu manis. Nikmat disajikan dengan nasi hangat dan sambal.",
        harga: "22.000",
        label: "Empal",
      },
      {
        id: "3",
        imageUrl: "https://res.cloudinary.com/codingers-enegx/image/upload/v1667748990/jabar%20tradifood/menu%20makanan/karedok.jpg",
        title: "Karedok",
        description: "Sayuran segar yang ditambah bumbu kacang khas WarSun.",
        harga: "23.000",
        label: "Karedok",
      },
      {
        id: "4",
        title: "Sambal Terong Bakar",
        imageUrl: "https://res.cloudinary.com/codingers-enegx/image/upload/v1667748990/jabar%20tradifood/menu%20makanan/sambal-terong-bakar.jpg",
        description: "Olahan terong yang dibakar dan disajikan dengan sambal terasi.",
        harga: "24.000",
        label: "Sambal",
      },
      {
        id: "5",
        title: "Sate Kambing",
        imageUrl: "https://res.cloudinary.com/codingers-enegx/image/upload/v1667748990/jabar%20tradifood/menu%20makanan/sate-kambing.jpg",
        description: "Daging kambing yang diolah dengan bumbu khas sate WarSun.",
        harga: "25.000",
        label: "Sate",
      },
      {
        id: "6",
        title: "Sop Buntut Goreng",
        imageUrl: "https://res.cloudinary.com/codingers-enegx/image/upload/v1667748991/jabar%20tradifood/menu%20makanan/sop-buntut-goreng.png",
        description: "Buntut sapi yang digoreng dengan bumbu spesial WarSun.",
        harga: "26.000",
        label: "Sop",
      },
      {
        id: "7",
        title: "Sop Buntut Spesial",
        imageUrl: "https://res.cloudinary.com/codingers-enegx/image/upload/v1667748991/jabar%20tradifood/menu%20makanan/sop-buntut-spesial.jpg",
        description: "Olahan tulang buntut yang dimasak dengan bumbu tradisional spesial WarSun.",
        harga: "27.000",
        label: "Sop",
      },
      {
        id: "8",
        imageUrl: "https://res.cloudinary.com/codingers-enegx/image/upload/v1667748991/jabar%20tradifood/menu%20makanan/tumis-baby-buncis-udang.jpg",
        title: "Tumis Baby Buncis Udang",
        description: "Sayur buncis yang dimasak dengan bumbu bawang putih dan daging udang yang lezat.",
        harga: "28.000",
        label: "Tumis",
      },
      {
        id: "9",
        imageUrl: "https://res.cloudinary.com/codingers-enegx/image/upload/v1667748992/jabar%20tradifood/menu%20makanan/tumis-kangkung-bunga-pepaya.jpg",
        title: "Tumis Kangkung Bunga Pepaya",
        description: "Kangkung dan bunga pepaya yang ditumis dengan bumbu balacan spesial WarSun.",
        harga: "29.000",
        label: "Tumis",
      },
      {
        id: "10",
        imageUrl: "https://res.cloudinary.com/codingers-enegx/image/upload/v1667748992/jabar%20tradifood/menu%20makanan/tumis-pakis-kalimantan.png",
        title: "Tumis Pakis Kalimantan",
        description: "Dra terpisah berdasarkan tanggung jawabnya masing-masing.",
        harga: "30.000",
        label: "Tumis",
      },
      {
        id: "11",
        imageUrl: "https://res.cloudinary.com/codingers-enegx/image/upload/v1667748991/jabar%20tradifood/menu%20makanan/udang-pacet-bakar-spesial.jpg",
        title: "Udang Pacet Bakar Spesial",
        description: "Udang pacet dibakar dengan bahan-bahan spesial dari WarSun yang akan menambah kelezatan hidangan Anda",
        harga: "40.000",
        label: "Udang",
      },
      {
        id: "12",
        title: "Udang Sambal Pete",
        imageUrl: "https://res.cloudinary.com/codingers-enegx/image/upload/v1667748992/jabar%20tradifood/menu%20makanan/udang-sambal-pete.jpg",
        description: "Udang yang dimasak dengan sambal petai khas WarSun.",
        harga: "41.000",
        label: "Udang",
      },
];

function getAllMenu() {
  return dataMenu;
}

function getMenu (id) {
  const foundmenu = dataMenu.find((menu) => menu.id === id);
  return foundmenu;
}

function getLabelMenu () {
    const labelMenu = dataMenu.filter((menu) => menu.label);
    return labelMenu;
}

// function getLabelMenu () {
//   const LabelMenu = dataMenu.filter((menu) => menu.label === 'Udang' );
//   return LabelMenu;
// }

export {
  getAllMenu,
  getMenu,
  getLabelMenu,
};