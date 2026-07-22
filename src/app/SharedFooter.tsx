import svgPaths from "@/imports/HomePage/svg-osov5ohrcl";
import imgFooter11 from "@/imports/HomePage/c31b0a6fa3247f3c7d6bbef1fd5cba8e623d2fef.png";
import imgImageCozmoTravelLogo from "@/imports/HomePage/062b8c77cc337ab4f66d335a34f36ca2ed8625ec.png";

function FooterBgImage() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0">
      <div className="col-1 h-[754px] ml-0 mt-0 relative row-1 w-[1810px]">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgFooter11} />
      </div>
    </div>
  );
}

function CtaHeadline() {
  return (
    <div className="absolute contents left-[200px] top-[109.86px]">
      <p className="[word-break:break-word] absolute font-['Helvetica_Neue:Bold',sans-serif] leading-none left-[200px] not-italic text-[96px] text-white top-[109.86px] tracking-[-3.84px] w-[924px]">
        Ready to plan your next adventure?
      </p>
    </div>
  );
}

function CtaArrowIcon() {
  return (
    <div className="relative shrink-0 size-[16px]">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon">
          <path d={svgPaths.p154e6c80} id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.9" strokeWidth="1.33333" />
          <path d={svgPaths.p22879fc0} id="Vector_2" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.9" strokeWidth="1.33333" />
        </g>
      </svg>
    </div>
  );
}

function CtaContactButton() {
  return (
    <div className="absolute bg-[#101828] content-stretch drop-shadow-[0px_10px_7.5px_rgba(0,0,0,0.1),0px_4px_3px_rgba(0,0,0,0.1)] flex flex-col items-start left-[200px] px-[32px] py-[14px] rounded-[16777200px] top-[437.41px]" data-name="Link">
      <p className="[word-break:break-word] font-['Helvetica_Neue:Medium',sans-serif] leading-[24px] not-italic relative shrink-0 text-[16px] text-white whitespace-nowrap">Contact Us Today</p>
    </div>
  );
}

function CtaExploreButton() {
  return (
    <div className="absolute content-stretch flex gap-[8px] items-center left-[420px] top-[451.41px]" data-name="Link">
      <p className="[word-break:break-word] font-['Helvetica_Neue:Medium',sans-serif] leading-[24px] not-italic relative shrink-0 text-[16px] text-[rgba(255,255,255,0.9)] whitespace-nowrap">Explore destinations</p>
      <CtaArrowIcon />
    </div>
  );
}

function CtaSubtitle() {
  return (
    <div className="absolute contents left-[200px] top-[332.41px]">
      <p className="[word-break:break-word] absolute font-['Helvetica_Neue:Regular',sans-serif] leading-[28px] left-[200px] not-italic text-[18px] text-[rgba(255,255,255,0.8)] top-[332.41px] whitespace-nowrap">
        Our travel experts are ready to craft your perfect getaway.
      </p>
    </div>
  );
}

function CtaSection() {
  return (
    <div className="absolute bg-[#0062e3] content-stretch flex flex-col h-[599px] items-end justify-end left-0 pl-[200px] pt-[104px] top-[154px] w-[1920px]">
      <FooterBgImage />
      <CtaHeadline />
      <CtaSubtitle />
      <CtaContactButton />
      <CtaExploreButton />
    </div>
  );
}

/* ── Footer nav links ── */

function FooterLinksCompany() {
  return (
    <div className="col-1 justify-self-stretch relative row-1 self-stretch shrink-0">
      <div className="content-stretch flex flex-col items-start relative size-full">
        <p className="[word-break:break-word] font-['Helvetica_Neue:Bold',sans-serif] leading-[28px] not-italic relative shrink-0 text-[#101828] text-[18px] whitespace-nowrap">Company</p>
        <div className="h-[168px] relative shrink-0 w-[264px]">
          <div className="content-stretch flex flex-col gap-[16px] items-start pt-[24px] relative size-full">
            {["About Us", "Offers & Deals", "Mission & Vision", "Careers"].map((t) => (
              <div key={t} className="relative shrink-0 w-full" data-name="Link">
                <p className="[word-break:break-word] font-['Helvetica_Neue:Medium',sans-serif] leading-[24px] not-italic relative shrink-0 text-[#6a7282] text-[16px] whitespace-nowrap">{t}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

function FooterLinksServices() {
  return (
    <div className="col-2 justify-self-stretch relative row-1 self-stretch shrink-0">
      <div className="content-stretch flex flex-col items-start relative size-full">
        <p className="[word-break:break-word] font-['Helvetica_Neue:Bold',sans-serif] leading-[28px] not-italic relative shrink-0 text-[#101828] text-[18px] whitespace-nowrap">Our Services</p>
        <div className="h-[248px] relative shrink-0 w-[264px]">
          <div className="content-stretch flex flex-col gap-[16px] items-start pt-[24px] relative size-full">
            {["Holiday & Leisure", "Corporate & Business", "Visa Services", "Flights", "Accommodation", "Car Rentals"].map((t) => (
              <div key={t} className="relative shrink-0 w-full" data-name="Link">
                <p className="[word-break:break-word] font-['Helvetica_Neue:Medium',sans-serif] leading-[24px] not-italic relative shrink-0 text-[#6a7282] text-[16px] whitespace-nowrap">{t}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

function FooterLinksSpecialized() {
  return (
    <div className="col-3 justify-self-stretch relative row-1 self-stretch shrink-0">
      <div className="content-stretch flex flex-col items-start relative size-full">
        <p className="[word-break:break-word] font-['Helvetica_Neue:Bold',sans-serif] leading-[28px] not-italic relative shrink-0 text-[#101828] text-[18px] whitespace-nowrap">Specialized Services</p>
        <div className="h-[208px] relative shrink-0 w-[264px]">
          <div className="content-stretch flex flex-col gap-[16px] items-start pt-[24px] relative size-full">
            {["Logistics", "Marine & Offshore", "gocozmo", "Sayara", "Travtrolley"].map((t) => (
              <div key={t} className="relative shrink-0 w-full" data-name="Link">
                <p className="[word-break:break-word] font-['Helvetica_Neue:Medium',sans-serif] leading-[24px] not-italic relative shrink-0 text-[#6a7282] text-[16px] whitespace-nowrap">{t}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

function FooterLinksSubscribe() {
  return (
    <div className="col-4 justify-self-start relative row-1 self-stretch shrink-0 w-[389px]">
      <div className="content-stretch flex flex-col items-start relative size-full">
        <p className="[word-break:break-word] font-['Helvetica_Neue:Bold',sans-serif] leading-[28px] not-italic relative shrink-0 text-[#101828] text-[18px] whitespace-nowrap">Subscribe</p>
        <div className="content-stretch flex flex-col items-start pt-[24px] relative size-full">
          <p className="[word-break:break-word] font-['Helvetica_Neue:Medium',sans-serif] leading-[22.5px] not-italic relative shrink-0 text-[#6a7282] text-[15px] w-[264px]">
            Join our community to receive updates and exclusive offers.
          </p>
          <div className="content-stretch flex flex-col gap-[12px] items-start pt-[16px] relative w-[264px]">
            <div className="relative shrink-0 w-[264px]">
              <div className="content-stretch flex items-start relative size-full">
                <div className="bg-[rgba(243,244,246,0.8)] h-[49px] relative rounded-bl-[16777200px] rounded-tl-[16777200px] shrink-0 w-[153px]">
                  <div className="content-stretch flex flex-col items-start justify-center overflow-clip px-[17px] py-[13px] relative rounded-[inherit] size-full">
                    <p className="[word-break:break-word] font-['Helvetica_Neue:Regular',sans-serif] leading-[normal] not-italic relative shrink-0 text-[15px] text-[rgba(16,24,40,0.5)] w-full">Enter your email</p>
                  </div>
                  <div aria-hidden className="absolute border border-[#e5e7eb] border-solid inset-0 pointer-events-none rounded-bl-[16777200px] rounded-tl-[16777200px]" />
                </div>
                <div className="bg-[#0057ff] relative rounded-br-[16777200px] rounded-tr-[16777200px] self-stretch shrink-0 w-[135px]">
                  <div className="flex flex-col items-center justify-center size-full">
                    <div className="content-stretch flex flex-col items-center justify-center px-[24px] py-[12px] relative size-full">
                      <p className="[word-break:break-word] font-['Helvetica_Neue:Medium',sans-serif] leading-[24px] not-italic relative shrink-0 text-[16px] text-center text-white whitespace-nowrap">Subscribe</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <p className="[word-break:break-word] font-['Helvetica_Neue:Regular',sans-serif] leading-[16px] not-italic relative shrink-0 text-[#99a1af] text-[12px] whitespace-nowrap">By subscribing, you agree to our Privacy Policy</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function FooterLinksGrid() {
  return (
    <div className="absolute bg-white content-stretch flex flex-col h-[332px] items-center justify-center left-0 top-[793px] w-[1920px]">
      <div className="gap-x-[145px] gap-y-[48px] grid grid-cols-[264px_264px_264px_264px] grid-rows-[276px] h-[276px] relative shrink-0 w-[1520px]">
        <FooterLinksCompany />
        <FooterLinksServices />
        <FooterLinksSpecialized />
        <FooterLinksSubscribe />
      </div>
    </div>
  );
}

/* ── Logo + social row ── */

function SocialIcon({ paths, clipId }: { paths: string[]; clipId?: string }) {
  return (
    <div className="bg-[#f9fafb] relative rounded-[16777200px] shrink-0 size-[40px]" data-name="Link">
      <div className="content-stretch flex items-center justify-center relative size-full">
        <div className="relative shrink-0 size-[20px]">
          <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
            {clipId && (
              <defs>
                <clipPath id={clipId}><rect fill="white" height="20" width="20" /></clipPath>
              </defs>
            )}
            <g id="Icon" clipPath={clipId ? `url(#${clipId})` : undefined}>
              {paths.map((d, i) => (
                <path key={i} clipRule="evenodd" d={d} fill="var(--fill-0, #00104A)" fillRule="evenodd" id="Vector" />
              ))}
            </g>
          </svg>
        </div>
      </div>
    </div>
  );
}

function LogoAndSocialRow() {
  return (
    <div className="absolute content-stretch flex h-[88px] items-center justify-between left-0 pl-[201px] pt-[40px] top-[1125px] w-[1720px]">
      <div className="h-[48px] relative shrink-0 w-[404.203px]" data-name="Link">
        <img alt="Cozmo Travel" className="absolute inset-0 max-w-none object-contain pointer-events-none size-full" src={imgImageCozmoTravelLogo} />
      </div>
      <div className="content-stretch flex gap-[16px] items-center relative">
        <SocialIcon paths={[svgPaths.p3cb86600]} />
        <SocialIcon paths={[svgPaths.p138d980]} />
        <SocialIcon paths={[svgPaths.p3e7f1900]} clipId="footer-ig-clip" />
      </div>
    </div>
  );
}

/* ── Bottom bar ── */

function BottomBar() {
  return (
    <div className="absolute content-stretch flex flex-col items-center left-0 pt-[32px] top-[1213px] w-[1920px]">
      <div className="content-stretch flex h-[71px] items-center justify-between pt-px relative shrink-0 w-[1520px]">
        <div aria-hidden className="absolute border-[#f3f4f6] border-solid border-t inset-0 pointer-events-none" />
        <div className="content-stretch flex gap-[24px] items-center justify-center relative">
          {["Privacy Policy", "Terms of Service", "Cookie Policy"].map((t) => (
            <div key={t} className="relative shrink-0" data-name="Link">
              <p className="[word-break:break-word] font-['Helvetica_Neue:Medium',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#6a7282] text-[14px] whitespace-nowrap">{t}</p>
            </div>
          ))}
        </div>
        <p className="[word-break:break-word] font-['Helvetica_Neue:Regular',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#99a1af] text-[14px] whitespace-nowrap">
          © 2026 Cozmo Travel. All rights reserved
        </p>
      </div>
    </div>
  );
}

/* ── Root export ── */

export default function SharedFooter() {
  return (
    <div className="bg-white h-[1316px] overflow-clip relative shrink-0 w-[1920px]">
      <div className="-translate-x-1/2 absolute flex h-[1063px] items-center justify-center left-1/2 top-[253px] w-[1920px]">
        <div className="-scale-y-100 flex-none">
          <div className="bg-white h-[1063px] relative w-[1920px]" />
        </div>
      </div>
      <CtaSection />
      <FooterLinksGrid />
      <LogoAndSocialRow />
      <BottomBar />
    </div>
  );
}
