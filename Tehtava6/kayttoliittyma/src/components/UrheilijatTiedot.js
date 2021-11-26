import React, { useContext, useEffect } from "react";
import UrheilijaTiedot from "./UrheilijaTiedot";
import urheilijatTiedotContext from "../context/UrheilijatTiedotContext";

const UrheilijatTiedot = () => {
  const UrheilijatTiedotContext = useContext(urheilijatTiedotContext);

  useEffect(() => {
    UrheilijatTiedotContext.getTiedot();
  }, []);

  return (
    <>
      <h1 className="display-4 mb-2">
        <span className="text-danger">Tiedot urheilijoista</span>
      </h1>
      <React.Fragment>
        {UrheilijatTiedotContext.tiedot.length
          ? UrheilijatTiedotContext.tiedot.map((tieto) => (
              <UrheilijaTiedot key={tieto.id} tieto={tieto} />
            ))
          : null}
      </React.Fragment>
    </>
  );
};
export default UrheilijatTiedot;
