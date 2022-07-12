import { Root } from '../models/common';
import './common.scss';

export const changeVariableStyles = ({
  variable,
  meaning
}: {
  variable: Root;
  meaning: string;
}) => {
  if (variable && meaning) {
    document.body.style.setProperty(variable, meaning);
  }
};
