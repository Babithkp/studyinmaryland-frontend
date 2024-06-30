import { Button } from "../../../ui/button";

interface cardType{
    image: string,
    title: string,
    content: string
}
export default function CardApply({ image, title, content }:cardType) {
  return (
    <div className="flex max-w-[17rem] flex-col items-center gap-3 rounded-lg border-[1px] bg-white py-5 px-4 drop-shadow-lg">
      <img src={image} alt="counselling icon" className="h-14 w-14" />
      <span className="text-xl font-semibold">{title}</span>
      <p className="text-center text-sm">{content}</p>
      <Button className="w-fit rounded-lg bg-blue-600 px-4 py-2 text-white hover:bg-red-500">
        Proceed
      </Button>
    </div>
  );
}
