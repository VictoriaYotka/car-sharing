import { Suspense } from "react";
import { Outlet } from "react-router-dom";
import Loader from "../../components/Loader/Loader";
import Header from "../../components/Header/Header";
import Modal from "../../components/Modal/Modal";
import { useSelector } from "react-redux";
import { selectIsModalOpen } from "../../redux/selectors/selectors";
import Footer from "../../components/Footer/Footer";

const SharedLayout = () => {
  const isModalOpen = useSelector(selectIsModalOpen);

  return (
    <>
      <Header />
      <main>
        <Suspense fallback={<Loader />}>
          <Outlet />
        </Suspense>
      </main>
      <Footer />
      {isModalOpen && <Modal />}
    </>
  );
};

export default SharedLayout;
