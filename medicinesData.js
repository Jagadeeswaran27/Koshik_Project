const medicinesData = [
  {
    id: 1,
    name: "Aspirin",
    genericName: "Acetylsalicylic Acid",
    dosageForm: "Tablet",
    strength: "325 mg",
    manufacturer: "Bayer",
    price: 5.99,
    quantity: 80,
    imageUrl:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSr_JxyRcWzXEfM1JjniGxMe1vUAO_9pRsGctj438YnMw&s",
    description: "Aspirin is commonly used to relieve pain and reduce fever.",
  },
  {
    id: 2,
    name: "Paracetamol",
    genericName: "Acetaminophen",
    dosageForm: "Capsule",
    strength: "500 mg",
    manufacturer: "Johnson & Johnson",
    price: 3.49,
    quantity: 95,
    imageUrl:
      "https://www.stelonbiotech.com/wp-content/uploads/2022/04/PYREMUST-650-TAB.jpg",
    description:
      "Paracetamol is a common medication used for pain and fever relief.",
  },
  {
    id: 3,
    name: "Amoxicillin",
    genericName: "Amoxicillin",
    dosageForm: "Capsule",
    strength: "500 mg",
    manufacturer: "Pfizer",
    price: 8.99,
    quantity: 60,
    imageUrl:
      "https://5.imimg.com/data5/SELLER/Default/2023/10/355533983/FO/DH/EN/14432165/amoxicillin-500-mg-capsule-for-franchise.jpg",
    description:
      "Amoxicillin is an antibiotic used to treat bacterial infections.",
  },
  {
    id: 4,
    name: "Loratadine",
    genericName: "Loratadine",
    dosageForm: "Tablet",
    strength: "10 mg",
    manufacturer: "Merck",
    price: 4.75,
    quantity: 95,
    imageUrl:
      "https://www.glasierwellness.com/wp-content/uploads/2022/07/Urtiliv.webp",
    description:
      "Loratadine is an antihistamine used to relieve allergy symptoms.",
  },
  {
    id: 5,
    name: "Omeprazole",
    genericName: "Omeprazole",
    dosageForm: "Capsule",
    strength: "20 mg",
    manufacturer: "AstraZeneca",
    price: 10.25,
    quantity: 75,
    imageUrl:
      "https://i0.wp.com/post.medicalnewstoday.com/wp-content/uploads/sites/3/2019/07/a-packet-of-omeprazole-image-credit-siufaiho-2006.jpg?w=1155&h=1730",
    description:
      "Omeprazole is a proton pump inhibitor used to treat stomach ulcers.",
  },
  {
    id: 6,
    name: "Atorvastatin",
    genericName: "Atorvastatin",
    dosageForm: "Tablet",
    strength: "20 mg",
    manufacturer: "Pfizer",
    price: 15.99,
    quantity: 65,
    imageUrl:
      "https://5.imimg.com/data5/SELLER/Default/2023/7/325710235/RG/XA/JU/74349057/atorvastatin-10-mg.jpg",
    description:
      "Atorvastatin is a statin medication used to lower cholesterol levels.",
  },
  {
    id: 7,
    name: "Metformin",
    genericName: "Metformin",
    dosageForm: "Tablet",
    strength: "500 mg",
    manufacturer: "Novartis",
    price: 6.49,
    quantity: 70,
    imageUrl:
      "https://5.imimg.com/data5/SELLER/Default/2023/8/332774949/NY/WA/ZJ/6299000/metformin-hydrochloride-tablets.jpeg",
    description:
      "Metformin is an oral diabetes medication that helps control blood sugar levels.",
  },
  {
    id: 8,
    name: "Simvastatin",
    genericName: "Simvastatin",
    dosageForm: "Tablet",
    strength: "40 mg",
    manufacturer: "Mylan",
    price: 12.75,
    quantity: 80,
    imageUrl:
      "https://5.imimg.com/data5/SELLER/Default/2023/10/357085613/HL/RR/GE/50963842/simvastatin-tablet-ups-20-mg.jpg",
    description:
      "Simvastatin is used to lower cholesterol and triglycerides in the blood.",
  },
  {
    id: 9,
    name: "Cetirizine",
    genericName: "Cetirizine",
    dosageForm: "Tablet",
    strength: "10 mg",
    manufacturer: "GlaxoSmithKline",
    price: 7.25,
    quantity: 85,
    imageUrl:
      "https://5.imimg.com/data5/SELLER/Default/2023/4/297257277/GQ/YD/EX/105631899/100-mg-cetirizine-capsules.webp",
    description:
      "Cetirizine is an antihistamine used to relieve allergy symptoms.",
  },
  {
    id: 10,
    name: "Ibuprofen",
    genericName: "Ibuprofen",
    dosageForm: "Tablet",
    strength: "200 mg",
    manufacturer: "Pfizer",
    price: 3.99,
    quantity: 70,
    imageUrl:
      "https://5.imimg.com/data5/SELLER/Default/2023/4/301541063/BT/YB/AK/7034457/ibuprofen-tablets-500x500.jpg",
    description:
      "Ibuprofen is a nonsteroidal anti-inflammatory drug used to reduce pain and inflammation.",
  },
  {
    id: 11,
    name: "Metronidazole",
    genericName: "Metronidazole",
    dosageForm: "Tablet",
    strength: "500 mg",
    manufacturer: "Bristol-Myers Squibb",
    price: 9.49,
    quantity: 75,
    imageUrl:
      "https://5.imimg.com/data5/SELLER/Default/2020/9/BN/PD/WY/105453881/metronidazole-tablets-flagyl-400-mg.jpg",
    description:
      "Metronidazole is an antibiotic used to treat various bacterial infections.",
  },
  {
    id: 12,
    name: "Diazepam",
    genericName: "Diazepam",
    dosageForm: "Tablet",
    strength: "5 mg",
    manufacturer: "Roche",
    price: 6.99,
    quantity: 90,
    imageUrl:
      "https://5.imimg.com/data5/SELLER/Default/2022/11/RY/JN/RG/163190213/daizepam-500x500.webp",
    description:
      "Diazepam is a medication used to treat anxiety disorders and muscle spasms.",
  },
  {
    id: 13,
    name: "Prednisone",
    genericName: "Prednisone",
    dosageForm: "Tablet",
    strength: "10 mg",
    manufacturer: "Teva Pharmaceuticals",
    price: 5.25,
    quantity: 55,
    imageUrl:
      "https://5.imimg.com/data5/SELLER/Default/2023/1/RC/FR/OW/57623134/prednisone-2-500x500.JPG",
    description:
      "Prednisone is a corticosteroid used to treat inflammation and autoimmune conditions.",
  },
  {
    id: 14,
    name: "Ciprofloxacin",
    genericName: "Ciprofloxacin",
    dosageForm: "Tablet",
    strength: "500 mg",
    manufacturer: "Bayer",
    price: 11.99,
    quantity: 65,
    imageUrl:
      "https://5.imimg.com/data5/SELLER/Default/2022/8/AV/XL/UD/154726424/ciprofloxacin-500-mg-tablets.jpg",
    description:
      "Ciprofloxacin is an antibiotic used to treat bacterial infections.",
  },
  {
    id: 15,
    name: "Amlodipine",
    genericName: "Amlodipine",
    dosageForm: "Tablet",
    strength: "5 mg",
    manufacturer: "Novartis",
    price: 9.75,
    quantity: 80,
    imageUrl:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT5AjeQ9WkGruIUecwhRvGr5Gii8IZ1RO9g-YAa7Ic04g&s",
    description:
      "Amlodipine is a calcium channel blocker used to treat high blood pressure and angina.",
  },
];

export default medicinesData;
