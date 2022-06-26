export function classNameBuilder(className: string, flag?: string): string {
  const classes = [className];
  if (flag) {
    classes.push(flag);
  }
  return classes.join(" ");
}
