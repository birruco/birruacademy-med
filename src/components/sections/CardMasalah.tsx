const problems = [
  {
    icon: "😭",
    description: "Anak sering menangis atau tantrum karena kesulitan menyampaikan keinginannya?",
  },
  {
    icon: "☝️",
    description: "Anak hanya menunjuk atau menggunakan isyarat tanpa kata-kata?",
  },
  {
    icon: "😵",
    description: 'Ingin anak bisa berkata "mau makan", "aku mau main", tapi bingung cara mengajarkannya?',
  }
];

export default function CardMasalah() {
  return (
    <section className="py-16 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">
          Apakah Ayah Bunda Mengalami Ini Pada Anak?
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          {problems.map((problem, index) => (
            <div
              key={index}
              className="bg-white p-8 rounded-xl shadow-md hover:shadow-xl transition-shadow duration-300 border border-gray-100 text-center"
            >
              <div className="text-5xl mb-4">{problem.icon}</div>
              <p className="text-gray-700 leading-relaxed">{problem.description}</p>
            </div>
          ))}
        </div>

        <p className="text-center text-lg font-medium text-gray-700 mt-12">
          Jika ya, Ayah Bunda tidak sendirian
        </p>
      </div>
    </section>
  );
}