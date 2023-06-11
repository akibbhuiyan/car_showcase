import { MouseEventHandler } from "react";

export interface CustomButtonProps {
  title: string;
  containerStyles?: string;
  textStyles?: string;
  rightIcon?: string;
  handleClick?: MouseEventHandler<HTMLButtonElement>;
  btnType?: "button" | "submit";
  isDisabled?: boolean;
}
export interface SearchMenufacturerProps {
  menufacturer: string;
  setMenufacturer: (menufacturer: string) => void;
}

export interface CarsProps {
  city_mpg: number;
  class: string;
  combination_mpg: number;
  cylinders: number;
  displacement: number;
  drive: string;
  fuel_type: string;
  highway_mpg: number;
  make: string;
  model: string;
  transmission: string;
  year: number;
}

export interface FilterProps {
  menufacturer: string;
  year: number;
  fuel: string;
  limit: number;
  model: string;
}
export interface OptionProps {
  title: string;
  value: string;
}
export interface CustomFilterProps {
  title: string;
  options: OptionProps[];
}
export interface ShowMoreProps {
  pageNumber: number;
  isNext: boolean;
}
