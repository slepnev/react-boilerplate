import React from 'react';

interface OwnProps {}

type Props = OwnProps;

const Spinner: React.FC<Props> = (props) => {

  return (
    <div>Загрузка</div>
  );
};

export default Spinner;
