import { Navmenu } from "../Components/Navbar/Navbar"

export const AboutPage = () => {
  return (
    <>
        <Navmenu />
        <div className="p-5">
            <h1 className="text-center fw-bold my-5">Tentang Kami</h1>
            <p className="about-text lead fw-semibold article-text-justify">
                Kami membantu pelajar internasional untuk mewujudkan impian mereka studi di luar negeri. Mulai dari riset awal hingga aplikasi pendaftaran universitas luar negeri, Broaders Indonesia membantu pelajar untuk menemukan jurusan kuliah dan universitas yang sempurna lewat saran, panduan dan alat pencari jurusan yang muktahir.
            </p>
        </div>
    </>
  )
}
