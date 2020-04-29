import React from "react";

import { Loading } from "./LoadingComponet";

import SampleSearchEditor from "./SampleSearchEditor";

function RenderLoading({ item, isLoading, errMssg }) {
  if (isLoading) {
    return <Loading />;
  } else if (errMssg) {
    return <h4>{errMssg}</h4>;
  } else return <SampleSearchEditor products={item} />;
}
function Home(props) {
  return (
    <div className="container">
      <div className="row align-items-start">
        <div className="col-12 col-md m-1">
          <RenderLoading
            item={props.sample}
            isLoading={props.samplesLoading}
            errMssg={props.sampleErrMssg}
          />
        </div>
      </div>
    </div>
  );
}
export default Home;
