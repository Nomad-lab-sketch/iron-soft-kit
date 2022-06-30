import './common.scss';

export const switchTheme = ({ color }: { color: string }) => {
  document.body.style.setProperty('--background-color-one', color);
};
