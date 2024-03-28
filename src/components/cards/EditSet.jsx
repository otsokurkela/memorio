import React from 'react';
import { useState } from 'react';

export default function EditSet(props) {
  const [set, setSet] = useState(props.data);
  return <div>Edit set {set.set_name}</div>;
}
