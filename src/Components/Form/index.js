import { JsonForms } from "@jsonforms/react";
import React, { useState } from "react";
import {
    materialRenderers,
    materialCells,
  } from '@jsonforms/material-renderers';
import { schema, uischema } from "./data";
import styles from "./style.module.css";
import { Fade } from "react-reveal";

export const Form = () => {

    const [data, setData] = useState();

    return (
      <div className={styles.container}>
        <Fade>
          <JsonForms  
            schema={schema}
            uischema={uischema}
            data={data}
            renderers={materialRenderers}
            cells={materialCells}
            onChange={({ data, _errors }) => setData(data)} />
        </Fade>
      </div>
    );

}

