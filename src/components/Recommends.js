import styled from "styled-components";
import { Link } from "react-router-dom";

const Recommends = (props) => {
  return (
    <Container>
      <h4>Recommended for you</h4>
      <Content>
        <Wrap>
          <Link to="/">
            <img
              src="https://images.thedirect.com/media/article_full/spidmarket_FXedQbc.jpg"
              alt=""
            />
          </Link>
        </Wrap>
        <Wrap>
          <Link to="/">
            <img
              src="https://images.thedirect.com/media/article_full/tony-stark-snap.jpg"
              alt=""
            />
          </Link>
        </Wrap>
        <Wrap>
          <Link to="/">
            <img
              src="https://www.comingsoon.net/wp-content/uploads/sites/3/2022/04/Dr-Strange-poster.jpeg"
              alt=""
            />
          </Link>
        </Wrap>
        <Wrap>
          <Link to="/">
            <img
              src="https://www.vibe.com/wp-content/uploads/2022/10/BlackPanther-WakandaForever_Payoff_1-Sht_v10_lg-e1665517283161.jpg?w=1024"
              alt=""
            />
          </Link>
        </Wrap>
      </Content>
    </Container>
  );
};

const Container = styled.div`
  padding: 0 0 26px;
`;

const Content = styled.div`
  display: grid;
  grid-gap: 25px;
  gap: 25px;
  grid-template-columns: repeat(4, minmax(0, 1fr));

  @media (max-width: 768px) {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
`;

const Wrap = styled.div`
  padding-top: 56.25%;
  border-radius: 10px;
  box-shadow: rgb(0 0 0 /69%) 0px 26px 30px -10px,
    rgb(0 0 0 /73%) 0px 16px 10px - 10px;
  cursor: pointer;
  overflow: hidden;
  position: relative;
  transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;
  border: 3px solid rgba(249, 249, 249, 0.1);

  img {
    inset: 0px;
    display: block;
    height: 100%;
    object-fit: cover;
    opacity: 1;
    position: absolute;
    transition: opacity 500ms ease-in-out 0s;
    width: 100%;
    z-index: 1;
    top: 0;
  }

  &:hover {
    box-shadow: rgb(0 0 0 / 80%) 0px 40px 58px -16px,
      rgb(0 0 0 /72%) 0px 30px 22px - 10px;
    transform: scale(1.05);
    border-color: rgba(249, 249, 249, 0.8);
  }
`;

export default Recommends;
