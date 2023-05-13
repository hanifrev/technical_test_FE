import React, { useState } from "react";

const Index = () => {
  const [ratings, setRatings] = useState({
    aspek_penilaian_1: {},
    aspek_penilaian_2: {},
    aspek_penilaian_3: {},
    aspek_penilaian_4: {},
  });

  const handleNilai = (aspek, student, value) => {
    setRatings((prevRatings) => ({
      ...prevRatings,
      [aspek]: {
        ...prevRatings[aspek],
        [student]: value,
      },
    }));
  };

  const handleSimpan = () => {
    const jsonOutput = JSON.stringify(ratings, null, 2);
    console.log(jsonOutput);
  };

  return (
    <div id="home" className="w-full mx-auto">
      <h1 className="text-center font-bold text-2xl pt-2 pb-4">
        Aplikasi Penilaian Mahasiswa
      </h1>
      <table className="mx-auto">
        <thead>
          <tr>
            <th>Nama</th>
            <th>Aspek Penilaian 1</th>
            <th>Aspek Penilaian 2</th>
            <th>Aspek Penilaian 3</th>
            <th>Aspek Penilaian 4</th>
          </tr>
        </thead>
        <tbody>
          {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((student) => (
            <tr key={student}>
              <td>Mahasiswa {student}</td>
              {[1, 2, 3, 4].map((item) => (
                <td key={item}>
                  <select
                    value={
                      ratings[`aspek_penilaian_${item}`][
                        `mahasiswa_${student}`
                      ] || ""
                    }
                    onChange={(e) =>
                      handleNilai(
                        `aspek_penilaian_${item}`,
                        `mahasiswa_${student}`,
                        e.target.value
                      )
                    }
                  >
                    <option value="">-</option>
                    {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((value) => (
                      <option key={value} value={value}>
                        {value}
                      </option>
                    ))}
                  </select>
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
      <div className="w-full flex justify-center pt-3">
        <button
          className="text-center bg-blue-400 px-3 py-1 rounded-md text-white font-bold"
          onClick={handleSimpan}
        >
          Simpan
        </button>
      </div>
    </div>
  );
};

export default Index;
