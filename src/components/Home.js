import React from "react";
import { Button } from "react-bootstrap";
import "./Home.css";

const Home = () => {
  return (
    <React.Fragment>
      <section id="home" class="home">
        <div class="container">
          <div class="row">
            <div class="col-sm-12">
              <div class="main-banner">
                <div class="d-sm-flex justify-content-between">
                  <div>
                    <div class="banner-title">
                      <h3 class="font-weight-medium">
                        Ми допоможемо вам вивчити англійську
                      </h3>
                    </div>
                    <p class="mt-3">
                      Ми молода і енергійна команда, яка складається з людей,
                      які дійсно люблять свою роботу і отримують задоволення,
                      коли студенти досягають бажаного результату. В нас тільки
                      індивідуальний підхід, варіативність доступних курсів і
                      гнучкий графік. Крім того, ви можете отримати приємні
                      бонуси у вигляді знижок і безкоштовних консультацій
                      <br />
                    </p>
                    <Button>Дізнатися більше</Button>
                  </div>
                  <div class="mt-5 mt-lg-0">
                    <img
                      src="images/logoWhite.png"
                      alt="Englishification"
                      class="img-fluid"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </React.Fragment>
  );
};

export default Home;
