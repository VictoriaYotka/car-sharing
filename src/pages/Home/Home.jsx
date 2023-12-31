import { NavLink } from "react-router-dom";
import Button from "../../components/Button/Button";
import css from "./Home.module.scss";
import buttonCss from "../../components/Button/Button.module.scss";

const Home = () => {
  return (
    <div className={css.wrapper}>
      <div className={css.content}>
        <div className={css.backprop}>
          <p className={css.paragr}>
            Welcome to ukrainian{" "}
            <span className={css.paragr_part}> Car Sharing</span> project!
          </p>
          <NavLink to="/cars">
            <Button text="Start now" className={buttonCss.homepage_button} />
          </NavLink>
        </div>

        <img
          className={css.image}
          src="https://images.pexels.com/photos/1213294/pexels-photo-1213294.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt="Car sharing illustration"
        />
      </div>
      <div className={css.article}>
        Carsharing is a model of car rental where people rent cars for short
        periods of time, often by the hour. It differs from traditional car
        rental in that the owners of the cars are often private individuals
        themselves, and the carsharing facilitator is generally distinct from
        the car owner. Carsharing is part of a larger trend of shared mobility.
        Carsharing enables an occasional use of a vehicle or access to different
        brands of vehicles. The renting organization may be a commercial
        business. Users can also organize as a company, public agency,
        cooperative, or ad hoc grouping. The network of cars on the network
        becomes available to the users through a variety of means, ranging from
        the simplicity of using an app to unlock the car in real time, to
        meeting the owner of the car in order to exchange keys.
      </div>
    </div>
  );
};

export default Home;
