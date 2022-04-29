import clsx from "clsx";

const cardsData = [
  {
    text: "Lincoln Levin",
    stars: 185,
    first: true,
  },
  {
    text: "Lincoln Levin",
    stars: 185,
    second: true,
  },
  {
    text: "Lincoln Levin",
    stars: 185,
    third: true,
  },
  {
    text: "Lincoln Levin",
    stars: 185,
  },
  {
    text: "Lincoln Levin",
    stars: 185,
  },
  {
    text: "Lincoln Levin",
    stars: 185,
  },
  {
    text: "Lincoln Levin",
    stars: 185,
  },
  {
    text: "Lincoln Levin",
    stars: 185,
  },
  {
    text: "Lincoln Levin",
    stars: 185,
  },
  {
    text: "Lincoln Levin",
    stars: 185,
  },
  {
    text: "Lincoln Levin",
    stars: 185,
  },
  {
    text: "Lincoln Levin",
    stars: 185,
  },
  {
    text: "Lincoln Levin",
    stars: 185,
  },
  {
    text: "Lincoln Levin",
    stars: 185,
  },
  {
    text: "Lincoln Levin",
    stars: 185,
  },
  {
    text: "Lincoln Levin",
    stars: 185,
  },
];

function App() {
  return (
    <div id="main-layout">
      <div className="left">
        <h2 className="fw-normal">The competitions</h2>
        <div className="text-light-1 fw-bold">21 May | 18:00 - 22:00</div>

        <div className="items">
          {[
            {
              text: "🥂 Cloudy Bay Sauvignon Blanc ",
              point: 7.5,
            },
            {
              text: " 🌮 Humus With Lafa complet",
              point: 9,
            },
            {
              text: "🍰 Tiramisu",
              point: 3,
            },
          ].map((el, idx) => {
            const { text, point } = el;

            return (
              <div key={"left-item" + idx} className="item">
                <h3>{text}</h3>
                <h3 className="text-light-2 text-light-2 d-flex align-items-center mt-10">
                  <div className="star-wrap me-3">
                    <img src="/assets/vectors/star.svg" alt="star" />
                  </div>
                  {point} point
                </h3>
              </div>
            );
          })}
        </div>
      </div>
      <div className="right">
        <div className="title d-flex justify-content-between">
          <h1>🏆 Compatition Name</h1>
          <h1 className="fw-normal">21 May 20:32</h1>
        </div>

        <div className="cards">
          <div className="container-fluid">
            <div className="row">
              <div className="col-lg-6">
                {cardsData.slice(0, cardsData.length / 2).map((el, idx) => {
                  const { first, second, third, text, stars } = el;

                  return (
                    <div key={"card-" + idx}>
                      <div className={clsx("card", { first, second, third })}>
                        <div className="d-flex justify-content-between align-items-center">
                          <div className="d-flex">
                            <h3 className="number pe-3">{idx + 1}</h3>

                            <h4 className="ps-3">{text}</h4>
                          </div>
                          <div className="d-flex align-items-center">
                            <h4 className="stars-num">{stars}</h4>
                            <div className="star-wrap ms-3">
                              {first ? (
                                <img
                                  src="/assets/vectors/star-dark.svg"
                                  alt="star"
                                />
                              ) : second ? (
                                <img
                                  src="/assets/vectors/star-light.svg"
                                  alt="star"
                                />
                              ) : (
                                <img
                                  src="/assets/vectors/star-white.svg"
                                  alt="star"
                                />
                              )}
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
