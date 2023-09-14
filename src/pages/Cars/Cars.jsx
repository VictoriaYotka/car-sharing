import { useDispatch } from "react-redux";
import { getAll } from "../../redux/operations/carsOperations";
import { useEffect } from "react";

const Cars = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAll());
  }, [dispatch]);

  return <div>Cars</div>;
};

export default Cars;
