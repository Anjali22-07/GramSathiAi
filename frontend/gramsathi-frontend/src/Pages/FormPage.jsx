import Navbar from "../component/Navbar";
import ElgibilityForm from "../component/ElgibilityForm";

function FormPage() {
  return (
    <>
      <Navbar />
        <div className="flex justify-center px-4 py-4" style={{ marginTop: "50px"}}>
      <ElgibilityForm />
      </div>
    </>
  );
}

export default FormPage;