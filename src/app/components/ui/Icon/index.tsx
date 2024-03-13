import { ButtonProps } from "../Button/ButtonV2";


export const Icon: React.FC<{ icon: ButtonProps['icon'] }> = ({ icon }) => {
  if (!icon) return null;
  const marginClass = icon.position === 'left' ? 'mr-2' : 'ml-2';
  return <span className={marginClass}>{icon.iconReference}</span>;
};