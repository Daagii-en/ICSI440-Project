import "./body.css";
import img1 from "./img1.jpg";
import img2 from "./img2.jpg";
import img3 from "./img3.jpg";

export default function Body() {
  return (
    <div className="container">
      <div className="text">
        <h2>Арван хурууны Бичээч!</h2>
        <p>
          Бичээч нь таныг Монгол хэл дээр 10 хуруугаа ашиглан хурдан шивэхийг
          сонирхолтой бөгөөд үр дүнтэй сургалт болон тэмцээний байдлаар сургах
          зорилготой юм.
        </p>
      </div>
      <div className="main">
        <div>
          <img src={img1} alt="icon" />
          <h4>Тэмцээн</h4>
          <p>
            Бусад хэрэглэгчидтэй өгөгдсөн эхийг зөв бөгөөд хурдан шивж уралдах
          </p>
          <p>
            Дэлгэрэнгүй{" "}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              class="bi bi-arrow-right-short"
              viewBox="0 0 16 16"
            >
              <path
                fill-rule="evenodd"
                d="M4 8a.5.5 0 0 1 .5-.5h5.793L8.146 5.354a.5.5 0 1 1 .708-.708l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L10.293 8.5H4.5A.5.5 0 0 1 4 8z"
              />
            </svg>
          </p>
        </div>
        <div>
          <img src={img2} alt="icon" />
          <h4>Тэргүүлэгчдийн жагсаалт</h4>
          <p>Хэрэглэгчдийн гаргасан амжилт</p>
          <p>
            Дэлгэрэнгүй{" "}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              class="bi bi-arrow-right-short"
              viewBox="0 0 16 16"
            >
              <path
                fill-rule="evenodd"
                d="M4 8a.5.5 0 0 1 .5-.5h5.793L8.146 5.354a.5.5 0 1 1 .708-.708l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L10.293 8.5H4.5A.5.5 0 0 1 4 8z"
              />
            </svg>
          </p>
        </div>
        <div>
          <img src={img3} alt="icon" />
          <h4>Бэлтгэл</h4>
          <p>Гарын зөв байрлалын дагуу өгөгдсөн эхийг шивж сургах</p>
          <p>
            Дэлгэрэнгүй{" "}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              class="bi bi-arrow-right-short"
              viewBox="0 0 16 16"
            >
              <path
                fill-rule="evenodd"
                d="M4 8a.5.5 0 0 1 .5-.5h5.793L8.146 5.354a.5.5 0 1 1 .708-.708l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L10.293 8.5H4.5A.5.5 0 0 1 4 8z"
              />
            </svg>
          </p>
        </div>
      </div>
    </div>
  );
}
