import React, { useContext, useEffect } from "react";
import UrheilijaTiedot from "./UrheilijaTiedot";
import urheilijatTiedotContext from "../context/UrheilijatTiedotContext";

const UrheilijatTiedot = () => {
  const UrheilijatTiedotContext = useContext(urheilijatTiedotContext);

  console.log(UrheilijatTiedotContext);
  useEffect(() => {
    UrheilijatTiedotContext.getTiedot();
    console.log(UrheilijatTiedotContext);
  }, []);

  return (
    <>
      <h1 className="display-4 mb-2">
        <span className="text-danger">Tiedot urheilijasta</span>
      </h1>
      <React.Fragment>
        {UrheilijatTiedotContext.tiedot.length
          ? UrheilijatTiedotContext.tiedot.map((tieto) => (
              <UrheilijaTiedot key={tieto.id} urheilijaTiedot={tieto} />
            ))
          : null}
      </React.Fragment>
    </>
  );
};
export default UrheilijatTiedot;
