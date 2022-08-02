import { createContext, useState } from "react";

export const MovieContext = createContext();

export const MovieProvider = (props) => {
  const [movies, setMovies] = useState([
    {
      name: "Harry Poter",
      price: "$10",
      id: 23124,
      description:
        "Harry Potter adalah seri tujuh novel fantasi yang dikarang oleh penulis Inggris J. K. Rowling. Novel ini mengisahkan tentang petualangan seorang penyihir remaja bernama Harry Potter dan sahabatnya, Ronald Bilius Weasley dan Hermione Jean Granger, yang merupakan pelajar di Sekolah Sihir Hogwarts.",
    },
    {
      name: "Game of Thrones",
      price: "$10",
      id: 2566124,
      description:
        "Game of Thrones adalah serial televisi drama fantasi Amerika Serikat yang diciptakan oleh David Benioff dan D. B. Weiss untuk saluran HBO. Serial ini merupakan adaptasi dari A Song of Ice and Fire, seri novel fantasi karangan George R. R. Martin, novel pertama adalah A Game of Thrones.",
    },
    {
      name: "Inception",
      price: "$20",
      id: 23524,
      description:
        "Inception adalah film fiksi ilmiah tahun 2010 yang disutradarai oleh Christopher Nolan dan diproduseri oleh Christopher Nolan dan Emma Thomas. Naskah film ini ditulis oleh Christopher Nolan.",
    },
    {
      name: "Spiderman 3",
      price: "$30",
      id: 22122,
      description:
        "Spider-Man 3 adalah film pahlawan super yang diproduksi oleh Marvel Studios, dan didistribusikan oleh Columbia Pictures. Film ini disutradarai oleh Sam Raimi berdasarkan skenario yang ditulis oleh Raimi, kakak laki-lakinya, Iwan, Alvin Seville, Simon Seville, Dan Theodore Seville.",
    },
    {
      name: "Spiderman 4",
      price: "$30",
      id: 22129,
      description:
        "Spider-Man 4 adalah film pahlawan super yang diproduksi oleh Marvel Studios, dan didistribusikan oleh Columbia Pictures. Film ini disutradarai oleh Sam Raimi berdasarkan skenario yang ditulis oleh Raimi, kakak laki-lakinya, Iwan, Alvin Seville, Simon Seville, Dan Theodore Seville.",
    },
  ]);

  return (
    <MovieContext.Provider value={[movies, setMovies]}>
      {props.children}
    </MovieContext.Provider>
  );
};
