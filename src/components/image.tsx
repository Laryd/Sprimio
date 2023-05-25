import Image from "next/image";
import { CustomComponentProps } from "@/utils/interfaces";
import { mergeClassName } from "@/utils/utils";

interface Props extends CustomComponentProps {
  src: string;
  alt: string;
}

export const MovieImage = (props: Props) => {
  return (
    <div
      className={mergeClassName("bg-primary w-full h-full", props.className)}
    >
      <Image src={props.src} alt={props.alt} fill />
    </div>
  );
};
