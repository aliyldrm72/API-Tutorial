import { useParams } from "react-router-dom";

function Category() {
  const params = useParams();

  console.log(">>> PARAMS",params);
  return <div> BURASI KATEGORİ SAYFASI </div>;
}
export default Category;
