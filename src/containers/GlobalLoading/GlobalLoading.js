import { useSelector } from "react-redux";
import "./GlobalLoading.css";

function GlobalLoading() {
  const globalLoading = useSelector((state) => state.common.loading);

  if (globalLoading) {
    return (
      <div className="global-loading">
        <div className="lds-ellipsis">
          <div />
          <div />
          <div />
          <div />
        </div>
      </div>
    );
  } else {
    return null;
  }
}

export { GlobalLoading };
