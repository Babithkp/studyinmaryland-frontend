import { Button } from "../../../ui/button";interface cardType {
  image: string;
  title: string;
  content: string;
  url: string;
}
export default function CardApply({ image, title, content,url }: cardType) {
  const re_direct_to_contactUs = () => [(window.location.href = `/${url}`)];
  return (
    <div className="flex max-w-[17rem] flex-col items-center gap-3 rounded-lg border-[1px] bg-white py-5 px-4 drop-shadow-lg">
      <img src={image} alt="counselling icon" className="h-14 w-14" />
      <span className="text-xl font-semibold">{title}</span>
      <p className="text-center text-sm">{content}</p>
      <Button
        className="w-fit rounded-lg bg-[#004890]  px-4 py-2 text-white hover:bg-red-500"
        onClick={re_direct_to_contactUs}
      >
        Proceed
      </Button>
    </div>
  );
}
