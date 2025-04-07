const DermatologyDetails = Array.from({ length: 23 }, (_, index) => ({
  id: index + 1,
  title: `Dermatology Service ${index + 1}`,
  description: "Detailed description of the service...",
  image: `/images/dermatology-${index + 1}.jpg`,
}));

export default DermatologyDetails;
