"use client";

import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import svgPaths from "@/imports/svg-lasglpsk63";

const imgImage = "/assets/f7e2551cb869ca3bcf26a39b607254ba142ad1ae.png";
const imgImage1 = "/assets/27f5b63142058765da03e8c1f7d233fd84aafe26.png";
const imgImage2 = "/assets/e6b0ff8832c4cd3c5e8c49a8286fa65d4d1c37d1.png";
const imgImage3 = "/assets/da6f214df68e9135ea7da87f3a6afad486061d61.png";
const imgImage4 = "/assets/73f455577d742a33355c0e1e32220cc2f31ecf0f.png";
const imgImage5 = "/assets/8e342947f328fbee2c161b2ba361c2d1cb901b74.png";
const imgImage6 = "/assets/6c3d626ccfa29c270df4cea4a3c68cab9a0ebc7b.png";
const imgImage7 = "/assets/88654e2f867c824a61814c77d48e19547c949694.png";
const imgImage66 = "/assets/ffeba28eb520fc86d5a21d336c1c9fc39ddb9b41.png";
const imgSubtract = "/assets/2f66065bf70904e46b181fea861d96a697e786a5.png";

function SearchIcon300WRounded() {
  return (
    <div className="relative shrink-0 size-[16px]">
      <div className="absolute bottom-0 left-[-2.84%] right-0 top-0">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 17 16">
          <g id="Search Icon 300W Rounded">
            <path d={svgPaths.p3ecaef00} fill="var(--fill-0, #64748B)" id="Search" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function DropdownArrowIcon300WRounded() {
  return (
    <div className="h-[6px] relative shrink-0 w-[10.95px]">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 11 6">
        <g id="Dropdown Arrow Icon 300W Rounded">
          <path d={svgPaths.p1aa92b00} fill="var(--fill-0, #64748B)" id="Dropdown Arrow" />
        </g>
      </svg>
    </div>
  );
}

interface ProductListProps {
  onNavigate: (page: string, productName?: string) => void;
}

const products = [
  { name: 'Soul Cherries', image: imgImage },
  { name: 'Mango', image: imgImage1 },
  { name: 'Blueberry', image: imgImage2 },
  { name: 'Strawberry', image: imgImage3 },
  { name: 'Apple', image: imgImage4 },
  { name: 'Blackberry', image: imgImage5 },
  { name: 'Raspberry', image: imgImage6 },
  { name: 'Peach', image: imgImage7 },
];

export function ProductList({ onNavigate }: ProductListProps) {
  return (
    <div className="bg-white relative size-full min-h-screen">
      <Header onNavigate={onNavigate} />

      {/* Hero Title Section */}
      <div className="absolute content-stretch flex flex-col gap-[60px] items-start left-[160px] top-[264px] w-[602px]">
        <div className="content-stretch flex flex-col gap-[40px] items-start not-italic relative shrink-0 text-white w-full">
          <p className="font-['Inter:Medium',sans-serif] font-medium leading-[96px] relative shrink-0 text-[80px] text-nowrap whitespace-pre">IQF Products</p>
          <p className="font-['Inter:Regular',sans-serif] font-normal leading-[normal] min-w-full relative shrink-0 text-[21px] w-[min-content]">Explore our full range of premium fruit products, preserved at peak freshness for lasting quality.</p>
        </div>
      </div>

      {/* Hero Background */}
      <div className="absolute h-[400px] left-[80px] top-[110px] w-[1760px]">
        <img alt="" className="block max-w-none size-full" height="400" src={imgSubtract} width="1760" />
      </div>

      {/* Picked. Perfected. Packaged. Section */}
      <div className="absolute box-border content-stretch flex flex-col gap-[120px] items-start left-0 px-[280px] py-[160px] top-[910px] w-[1920px]">
        <div className="content-stretch flex gap-[32px] items-start relative shrink-0 w-full">
          <div className="font-['Inter:Medium',sans-serif] font-medium leading-[normal] not-italic relative shrink-0 text-[#212121] text-[48px] tracking-[-0.96px] w-[664px]">
            <p className="mb-0">Picked.</p>
            <p>Perfected. Packaged.</p>
          </div>
          <div className="content-stretch flex flex-col gap-[40px] items-start relative shrink-0 w-[664px]">
            <p className="font-['Inter:Regular',sans-serif] font-normal leading-[1.6] not-italic relative shrink-0 text-[#303030] text-[18px] w-full">At Meyv, we specialize in delivering high-quality freeze-dried and IQF fruit ingredients to clients worldwide. Founded on the principles of innovation, sustainability, and consistency, our company blends time-tested agricultural practices with state-of-the-art processing technologies.</p>
          </div>
        </div>
      </div>

      {/* Products Section */}
      <div className="absolute content-stretch flex flex-col gap-[60px] items-center left-[280px] top-[1378px] w-[1360px]">
        <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0">
          <p className="[grid-area:1_/_1] font-['Inter:Medium',sans-serif] font-medium leading-[normal] ml-0 mt-0 not-italic relative text-[#212121] text-[48px] tracking-[-0.96px] w-[664px]">Product List</p>
          
          {/* Products Grid */}
          <div className="[grid-area:1_/_1] box-border content-stretch flex flex-col gap-[48px] items-start ml-0 mt-[90px] relative w-[1360px]">
            {/* Row 1 */}
            <div className="content-stretch flex gap-[32px] items-center relative shrink-0 w-full">
              {products.slice(0, 4).map((product, index) => (
                <button
                  key={index}
                  onClick={() => onNavigate('product-detail', product.name)}
                  className="content-stretch flex flex-col gap-[20px] items-center relative shrink-0 w-[316px] cursor-pointer bg-transparent border-none"
                >
                  <div className="h-[316px] relative rounded-[40px] shrink-0 w-full">
                    {product.name === 'Strawberry' ? (
                      <div className="absolute inset-0 overflow-hidden pointer-events-none rounded-[40px]">
                        <img alt="" className="absolute h-[271.84%] left-[-219.62%] max-w-none top-[-62.03%] w-[407.7%]" src={product.image} />
                      </div>
                    ) : (
                      <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none rounded-[40px] size-full" src={product.image} />
                    )}
                  </div>
                  <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[normal] not-italic relative shrink-0 text-[#212121] text-[21px] text-center w-full">{product.name}</p>
                </button>
              ))}
            </div>

            {/* Row 2 */}
            <div className="content-stretch flex gap-[32px] items-center relative shrink-0 w-full">
              {products.slice(4, 8).map((product, index) => (
                <button
                  key={index}
                  onClick={() => onNavigate('product-detail', product.name)}
                  className="content-stretch flex flex-col gap-[20px] items-center relative shrink-0 w-[316px] cursor-pointer bg-transparent border-none"
                >
                  <div className="h-[316px] relative rounded-[40px] shrink-0 w-full">
                    {product.name === 'Apple' ? (
                      <div className="absolute inset-0 overflow-hidden pointer-events-none rounded-[40px]">
                        <img alt="" className="absolute left-[-18.35%] max-w-none size-[133.54%] top-[-13.92%]" src={product.image} />
                      </div>
                    ) : product.name === 'Blackberry' ? (
                      <div className="absolute inset-0 overflow-hidden pointer-events-none rounded-[40px]">
                        <img alt="" className="absolute left-[-16.46%] max-w-none size-[206.01%] top-[-75.32%]" src={product.image} />
                      </div>
                    ) : product.name === 'Peach' ? (
                      <div className="absolute inset-0 overflow-hidden pointer-events-none rounded-[40px]">
                        <img alt="" className="absolute left-[-29.11%] max-w-none size-[161.39%] top-[-31.96%]" src={product.image} />
                      </div>
                    ) : (
                      <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none rounded-[40px] size-full" src={product.image} />
                    )}
                  </div>
                  <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[normal] not-italic relative shrink-0 text-[#212121] text-[21px] text-center w-full">{product.name}</p>
                </button>
              ))}
            </div>
          </div>

          {/* Search and Filter */}
          <div className="[grid-area:1_/_1] box-border content-stretch flex gap-[12px] items-center ml-[848px] mt-[14px] relative">
            <div className="bg-white box-border content-stretch flex gap-[10px] h-[44px] items-center px-[12px] py-[8px] relative rounded-[8px] shrink-0 w-[250px]">
              <div aria-hidden="true" className="absolute border border-[rgba(146,151,165,0.5)] border-solid inset-0 pointer-events-none rounded-[8px]" />
              <SearchIcon300WRounded />
              <input 
                type="text"
                placeholder="Search"
                className="basis-0 font-['Inter:Regular',sans-serif] font-normal grow leading-[normal] min-h-px min-w-px not-italic opacity-[0.55] relative shrink-0 text-[#303030] text-[14px] bg-transparent border-none outline-none"
              />
            </div>
            <div className="bg-white box-border content-stretch flex gap-[10px] h-[44px] items-center px-[12px] py-[8px] relative rounded-[8px] shrink-0 w-[250px]">
              <div aria-hidden="true" className="absolute border border-[rgba(146,151,165,0.5)] border-solid inset-0 pointer-events-none rounded-[8px]" />
              <p className="basis-0 font-['Inter:Regular',sans-serif] font-normal grow leading-[normal] min-h-px min-w-px not-italic opacity-[0.55] relative shrink-0 text-[#303030] text-[14px]">Order by</p>
              <DropdownArrowIcon300WRounded />
            </div>
          </div>
        </div>

        {/* Load More Button */}
        <button className="bg-[#115132] box-border content-stretch flex gap-[16px] h-[64px] items-center justify-center pl-[32px] pr-[6px] py-[10px] relative rounded-[32px] shrink-0 w-[664px] cursor-pointer border-none">
          <p className="font-['Inter:Medium',sans-serif] font-medium leading-[normal] not-italic relative shrink-0 text-[21px] text-nowrap text-white whitespace-pre">Load more product</p>
        </button>
      </div>

      {/* CTA and Footer section */}
      <div className="absolute top-[2948px] left-0 w-[1920px]">
        <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
          {/* CTA */}
          <div className="content-stretch flex flex-col gap-[60px] h-[450px] items-center justify-center relative shrink-0 w-full">
            <div aria-hidden="true" className="absolute inset-0 pointer-events-none">
              <img alt="" className="absolute max-w-none object-50%-50% object-cover size-full" src={imgImage} />
              <div className="absolute bg-gradient-to-b from-[rgba(0,0,0,0)] inset-0 to-[rgba(0,0,0,0.25)]" />
            </div>
            <p className="font-['Inter:Bold',sans-serif] font-bold leading-[normal] min-w-full not-italic relative shrink-0 text-[152px] text-center text-white tracking-[-3.04px] w-[min-content]">Fruit, Reinvented</p>
          </div>

          {/* Footer */}
          <Footer onNavigate={onNavigate} />
        </div>
      </div>
    </div>
  );
}
