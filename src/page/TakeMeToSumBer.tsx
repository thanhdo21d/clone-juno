import React, { useState } from "react";
import Banner2 from "../assets/image/banner-3.jpeg";
import Banner3 from "../assets/image/summer.webp";
import Banner4 from "../assets/image/summer/1_769870d9013f43d9a81030e9731f11b0.jpg";
import Banner5 from "../assets/image/summer/ban1.jpeg";
import Tui1 from "../assets/image/summer/tui1.webp";
import Tui2 from "../assets/image/summer/tui2.webp";
import Tui3 from "../assets/image/summer/tui3.jpeg";
import Tui4 from "../assets/image/summer/tui4.jpeg";
import Tui5 from "../assets/image/summer/tui5.webp";
import Tui6 from "../assets/image/summer/tui7.webp";
import Tui7 from "../assets/image/summer/tui8.webp";
import Tui8 from "../assets/image/summer/tui9.webp";
import Tui9 from "../assets/image/summer/tui10.webp";
import Tui10 from "../assets/image/summer/tui11.jpeg";
import Tui11 from "../assets/image/summer/tui12.webp";
import Tui12 from "../assets/image/summer/tui13.webp";
import Tui13 from "../assets/image/summer/tui14.webp";
import Tui14 from "../assets/image/summer/tui15.webp";
import Tui15 from "../assets/image/summer/tui16.webp";
import Tui16 from "../assets/image/summer/tui17.webp";
import Tui17 from "../assets/image/summer/tui18.webp";
import Tui18 from "../assets/image/summer/tui19.webp";
import Tui20 from "../assets/image/summer/tui20.webp";
import Tui21 from "../assets/image/summer/tui21.webp";
import Tui22 from "../assets/image/summer/tui30.webp";
import Tui23 from "../assets/image/summer/tui31.webp";
import Tui24 from "../assets/image/summer/tui32.webp";
import Tui25 from "../assets/image/summer/tui33.webp";

const TakeMeToSumBer = () => {
  const [hoveredImg, setHoveredImg] = useState(null);

  const handleImageHover = (imgSrc: any) => {
    setHoveredImg(imgSrc);
  };
  return (
    <div className="mt-2 ">
      <img className="w-full h-screen" src={Banner2} />
      <img className="w-full mt-7" src={Banner3} />
      {/*  */}
      <div className="container mx-auto">
        <img className="inline-block w-full h-[800px]" src={Banner5} />
      </div>

      <div className="flex justify-center gap-8 mt-5">
        <div>
          <img className="cursor-pointer font-extralight" src={Tui1} />
          <p className="text-center cursor-pointer font-extralight">
            Túi Xách Nhỏ 2 Ngăn Lượn Sóng In Hoa Nhí
          </p>
          <p className="text-center font-bold cursor-pointer pt-1">755,000₫</p>
        </div>
        <div>
          <img src={Tui2} />
          <p className="text-center cursor-pointer font-extralight">
            Túi Xách Nhỏ Đeo Vai Lượn Sóng In Hoa Nhí
          </p>
          <p className="text-center font-bold cursor-pointer pt-1">755,000₫</p>
        </div>
      </div>

      <div className="flex gap-8 container mx-auto mt-10">
        <img className="w-full" src={Tui3} />
        <img className="w-full" src={Tui4} />
      </div>

      <div className="container mx-auto">
        <img className="w-full mt-5  h-[750px]" src={Tui5} />
      </div>

      <div className="flex justify-center gap-8 mt-5">
        <div>
          <img src={Tui6} />
          <p className="text-center cursor-pointer font-extralight">
            Túi Xách Nhỏ Đeo Vai Lượn Sóng In Hoa Nhí
          </p>
          <p className="text-center font-bold cursor-pointer pt-1">755,000₫</p>
        </div>
        <div>
          <img src={Tui7} />
          <p className="text-center cursor-pointer font-extralight">
            Túi Xách Nhỏ Đeo Vai Lượn Sóng In Hoa Nhí
          </p>
          <p className="text-center font-bold cursor-pointer pt-1">755,000₫</p>
        </div>
        <div>
          <img src={Tui8} />
          <p className="text-center cursor-pointer font-extralight">
            Túi Xách Nhỏ Đeo Vai Lượn Sóng In Hoa Nhí
          </p>
          <p className="text-center font-bold cursor-pointer pt-1">755,000₫</p>
        </div>
      </div>

      <div className="container mx-auto">
        <img className="w-full mt-10  h-[750px]" src={Tui9} />
      </div>

      <div className="flex gap-8 container mx-auto mt-10">
        <img className="w-full" src={Tui10} />
        <img className="w-full" src={Tui11} />
      </div>
      <div className="container mx-auto">
        <img className="w-full mt-7" src={Banner3} />
      </div>

      <div className="flex justify-center gap-8 mt-5">
        <div>
          <img src={Tui12} />
          <p className="text-center cursor-pointer font-extralight">
            Túi Xách Nhỏ Đeo Vai Lượn Sóng In Hoa Nhí
          </p>
          <p className="text-center font-bold cursor-pointer pt-1">755,000₫</p>
        </div>
        <div>
          <img src={Tui13} />
          <p className="text-center cursor-pointer font-extralight">
            Túi Xách Nhỏ Đeo Vai Lượn Sóng In Hoa Nhí
          </p>
          <p className="text-center font-bold cursor-pointer pt-1">755,000₫</p>
        </div>
      </div>

      <div className="container w-[250px] mx-auto text-center mt-60">
        <h1 className="text-center font-semibold">TẤT CẢ SẢN PHẨM TRONG BỘ</h1>
        <hr className="border w-[250px] mt-2 " />
      </div>

      <div className="container mx-auto justify-center">
        <div className="flex gap-8 mt-10">
          <div className="relative">
            <p className="absolute w-[100px] h-[40px] border-2 mt-3 ml-3 pl-2 pt-1 cursor-pointer font-extralight">
              Hàng Mới
            </p>
            <img
              className="mb-3 transition-all  h-[360px] w-[480px] ease-in-out rounded-lg cursor-pointer "
              src={hoveredImg === Tui14 ? Tui15 : Tui14}
              onMouseEnter={() => handleImageHover(Tui14)}
              onMouseLeave={() => handleImageHover(null)}
            />
            <p className="text-center text-[15px] text-slate-500 font-extralight">
              Chân váy mini vạt đắp
            </p>
            <span className="text-center block text-[##252a2b]  font-bold">
              459,000
            </span>
          </div>
          {/*  */}
          <div className="relative">
            <p className="absolute w-[100px] h-[40px] border-2 mt-3 ml-3 pl-2 pt-1 cursor-pointer font-extralight">
              Hàng Mới
            </p>

            <img
              className="mb-3 h-[360px] w-[480px]  transition-all ease-in-out rounded-lg cursor-pointer "
              src={hoveredImg === Tui18 ? Tui17 : Tui18}
              onMouseEnter={() => handleImageHover(Tui18)}
              onMouseLeave={() => handleImageHover(null)}
            />
            <p className="text-center text-[15px] text-slate-500 font-extralight">
              Áo thun trắng cổ tim
            </p>
            <span className="text-center block text-[##252a2b]  font-bold">
              299,000
            </span>
          </div>
          {/**/}

          <div className="relative">
            <p className="absolute w-[100px] h-[40px] border-2 mt-3 ml-3 pl-2 pt-1 cursor-pointer font-extralight">
              Hàng Mới
            </p>

            <img
              className="mb-3 transition-all  h-[360px] w-[480px] ease-in-out rounded-lg cursor-pointer "
              src={hoveredImg === Tui20 ? Tui16 : Tui20}
              onMouseEnter={() => handleImageHover(Tui20)}
              onMouseLeave={() => handleImageHover(null)}
            />
            <p className="text-center text-[15px] text-slate-500 font-extralight">
              Áo thun trắng cổ tim
            </p>
            <span className="text-center block text-[##252a2b]  font-bold">
              299,000
            </span>
          </div>
          {/*  */}
          <div className="relative">
            <p className="absolute w-[100px] h-[40px] border-2 mt-3 ml-3 pl-2 pt-1 cursor-pointer font-extralight">
              Hàng Mới
            </p>

            <img
              className="mb-3 transition-all  h-[360px] w-[480px] ease-in-out rounded-lg cursor-pointer "
              src={hoveredImg === Tui21 ? Tui15 : Tui21}
              onMouseEnter={() => handleImageHover(Tui21)}
              onMouseLeave={() => handleImageHover(null)}
            />
            <p className="text-center text-[15px] text-slate-500 font-extralight">
              Áo thun trắng cổ tim
            </p>
            <span className="text-center block text-[##252a2b] font-bold mt-2">
              299,000
            </span>
          </div>
        </div>
        <div className="w-[100px] block text-center mx-auto">
          <h3 className="inline-block cursor-pointer mt-14 font-extralight">
            XEM TẤT CẢ
          </h3>
          <hr className="bg-black border-2 " />
        </div>
      </div>

      <div className="container mx-auto">
        <div className="container w-[250px] mx-auto text-center mt-60">
          <h1 className="text-center font-semibold">
            XEM THÊM BỘ SƯU TẬP KHÁC
          </h1>
          <hr className="border w-[250px] mt-2 " />
        </div>

        <div className="flex  gap-8 mt-10">
          <div className="">
            <img src={Tui22} />
            <p className="cursor-pointer font-extralight text-center mt-2">
              BỘ SƯU TẬP
            </p>
            <h5 className="font-bold text-center my-2 text-[22px]">The Fold</h5>
            <p className="cursor-pointer font-extralight text-center">
              Năm 2020 "restart" mọi thứ trở lại ban đầu, mở ra phía trước một
              trang giấy trắng.
            </p>
            <p className="cursor-pointer font-bold text-center mt-2">
              Xem chi tiết
            </p>
          </div>

          <div>
            <img src={Tui22} />
            <p className="cursor-pointer font-extralight text-center mt-2">
              BỘ SƯU TẬP
            </p>
            <h5 className="font-bold text-center my-2 text-[22px]">
              Disney x Juno
            </h5>
            <p className="cursor-pointer font-extralight text-center">
              Năm 2020 "restart" mọi thứ trở lại ban đầu, mở ra phía trước một
              trang giấy trắng.
            </p>
            <p className="cursor-pointer font-bold text-center mt-2">
              Xem chi tiết
            </p>
          </div>
          <div>
            <img src={Tui22} />
            <p className="cursor-pointer font-extralight text-center mt-2">
              BỘ SƯU TẬP
            </p>
            <h5 className="font-bold text-center my-2 text-[22px]">
              Your Next Move
            </h5>
            <p className="cursor-pointer font-extralight text-center">
              Năm 2020 "restart" mọi thứ trở lại ban đầu, mở ra phía trước một
              trang giấy trắng.
            </p>
            <p className="cursor-pointer font-bold text-center mt-2">
              Xem chi tiết
            </p>
          </div>
          <div>
            <img src={Tui22} />
            <p className="cursor-pointer font-extralight text-center mt-2">
              BỘ SƯU TẬP
            </p>
            <h5 className="font-bold text-center my-2 text-[22px]">Gemstone</h5>
            <p className="cursor-pointer font-extralight text-center">
              Năm 2020 "restart" mọi thứ trở lại ban đầu, mở ra phía trước một
              trang giấy trắng.
            </p>
            <p className="cursor-pointer font-bold text-center mt-2">
              Xem chi tiết
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TakeMeToSumBer;
