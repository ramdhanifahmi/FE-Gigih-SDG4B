/* eslint-disable react-hooks/exhaustive-deps */
import { useParams } from "react-router-dom";
import { Navmenu } from "../Components/Navbar/Navbar";
import { Image } from "react-bootstrap";
import { useEffect, useState } from "react";
import axios from "axios";

export const ArticleDetail = () => {
    const {id} = useParams();
    const [article, setArticle] = useState({});

    useEffect(() => {
      const loadArticle = async () => {
        try {
            const res = await axios.get(`http://localhost:3000/api/v1/article/${id}`);
            setArticle(res.data.data);
        } catch (err) {
            console.log(err)
        }
      }

      loadArticle();
    }, [])

  return (
    <>
      <Navmenu />

      <div className="articles-data bg-light">
        <h1 className="text-center fw-bold">{article.title}</h1>
        <div className="d-flex justify-content-center m-5">
          <Image src={article.image}/>
        </div>
        <div dangerouslySetInnerHTML={{ __html: article.content }}/>
        {/* <div>
          <p className="mb-3 article-text-justify">Dibandingkan dengan negara Eropa lainnya, biaya kuliah di Belanda relatif lebih murah. Saat ini terdapat lebih dari 80,000 orang mahasiswa internasional di Belanda.</p>
          <p className="mb-3 article-text-justify">Berikut ini Hotcourses Indonesia akan memberikan kisaran biaya kuliah di Belanda. Kisaran dari kami hanyalah sebagai panduan. Selalu konfirmasikan ke universitas yang Anda minati mengenai biaya kuliah terbaru.</p>

          <p className="mt-5 article-text-justify">Universitas yang didanai pemerintah di Belanda menawarkan dua jenis biaya kuliah:</p>
          <ul className="mb-5">
            <li className="mb-3 article-text-justify">biaya kuliah berdasarkan undang-undang (statutory)</li>
            <li className="mb-3 article-text-justify">biaya kuliah institusional</li>
          </ul>

          <p className="mb-4 article-text-justify">
            Biaya berdasarkan undang-undang adalah biaya tetap yang diatur oleh pemerintah Belanda untuk semua universitas. Sebagian besar mahasiswa dari Belanda dan negara-negara Uni Eropa lainnya harus membayar jenis biaya ini untuk program sarjana dan pascasarjana. Tahun 2018-2019, biaya berdasarkan undang-undang ditetapkan sebesar € 2,060 per tahun.
          </p>
          <p className="mb-4 article-text-justify">
            Biaya institusional diatur oleh univeristas terkait dan diaplikasikan kepada mahasiswa dari luar Uni Eropa. Jumlahnya tergantung spesialisasi dan kondisi lainnya. Rata-rata, biaya kelembagaan untuk 2018-2019 jatuh antara € 6,000 dan € 20,000 per tahun.
          </p>
          <p className="mb-4 article-text-justify">
            Biaya kuliah universitas swasta sebanding dengan biaya universitas negeri. Program persiapan biasanya menawarkan biaya yang sama untuk mahasiswa dari dalam dan luar Uni Eropa.
          </p>

          <p className="fw-bold">€ 1 = Rp 17,000 (lebih kurang)</p>

          <table id="article-tbl" className="w-100 border">
            <tr>
              <th>#</th>
              <th>Biaya kuliah per tahun (euro)</th>
              <th>Mahasiswa luar Uni Eropa</th>
            </tr>
            <tr>
              <td>1</td>
              <td>Program persiapan (1–12 bulan)</td>
              <td>€ 6,000 — €12,000</td>
            </tr>
            <tr>
              <td>2</td>
              <td>Sarjana (3–4 tahun)</td>
              <td>€ 6,000 —  €10,000</td>
            </tr>
            <tr>
              <td>3</td>
              <td>Pascasarjana (1–2 tahun)</td>
              <td>€ 7,000 — € 20,000</td>
            </tr>
            <tr>
              <td>4</td>
              <td>Biaya kuliah program MBA bisa mencapai </td>
              <td>€ 40,000 — € 50,000</td>
            </tr>
          </table>

        </div> */}

      </div>
    </>
  )
}
