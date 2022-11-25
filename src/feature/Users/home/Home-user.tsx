import React from "react";
import { Link } from "react-router-dom";

type Props = {};

const HomeUser: React.FC<Props> = (props) => (
  <div>
    <Link to='atelier'>test</Link>
    test d'acceuil
  </div>
);

export default HomeUser;