import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";

export default function OffersHeader() {
  const navigate = useNavigate();
  const backHandler = () => {
    navigate("/");
  };
  return (
    <div>
      Flight Information
      <span>
        <FontAwesomeIcon
          icon={faChevronRight}
          className="float-right"
          onClick={backHandler}
        />
      </span>
    </div>
  );
}
