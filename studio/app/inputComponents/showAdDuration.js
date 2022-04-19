import React, { useEffect, useState } from "react";
import { withDocument } from "part:@sanity/form-builder";
import sanityClient from "part:@sanity/base/client";

const printDate = (startDate, duration = 0) => {
  const date = new Date(startDate);
  date.setDate(date.getDate() + duration);
  return date.toLocaleDateString("no-NO", { dateStyle: "long" });
};

const ShowDuration = React.forwardRef((props, _) => {
  if (!props.parent?.packageType) return null;

  const [duration, setDuration] = useState(null);
  useEffect(() => {
    sanityClient
      .fetch(`*[_type == 'adPackageType' && _id == $ref][0]`, {
        ref: props.parent.packageType._ref,
      })
      .then((result) => setDuration(result.duration));
  }, [props.parent.packageType]);
  return <div>Varer til: {printDate(props.parent.startDate, duration)}</div>;
});

export default withDocument(ShowDuration);
