import * as React from "react";
import { useTrackRender } from "../helpers";
import { TestCase } from "../types";

function ChildWrapper() {
  const { useState } = useTrackRender();
  const [mounted, setMounted] = useState("Fail: waiting for mount");

  React.useEffect(() => {
    setMounted("OK");
  }, []);

  return (
    <p>
      {mounted}
      <Child />
    </p>
  );
}

function Child() {
  useTrackRender();
  return <>child element</>;
}

function Root() {
  useTrackRender();
  return <ChildWrapper />;
}

export default {
  title: "Basic render with changed parent element",
  Root,
} as TestCase;
