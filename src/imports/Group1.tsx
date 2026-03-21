import svgPaths from "./svg-0z9vfwvw2m";
import imgImage1 from "figma:asset/73d390def74682512ae90b0e60278fcaf6becb2e.png";

export default function Group() {
  return (
    <div className="relative size-full">
      <div className="absolute h-[1902px] left-[30px] top-[30px] w-[3420px]" data-name="image 1">
        <img alt="" className="absolute block max-w-none size-full" height="1902" src={imgImage1} width="3420" />
      </div>
      <div className="absolute h-[1962px] left-0 top-0 w-[3480px]" data-name="image 1 (Stroke)">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 3480 1962">
          <path d={svgPaths.p180de080} fill="var(--fill-0, #323232)" id="image 1 (Stroke)" />
        </svg>
      </div>
    </div>
  );
}