import Img1 from "../../assets/image/instargam/img-1.webp";
import Img2 from "../../assets/image/instargam/img-2.webp";
import Img3 from "../../assets/image/instargam/img-3.webp";
import Img4 from "../../assets/image/instargam/img-4.jpeg";

import styled from "styled-components";
const Instagram = () => {
  return (
    <Selection>
      <div className="container mx-auto">
        <h1 className="text-center text-[20px] font-bold">INSTAGRAM</h1>
        <p className="text-center">@juno.vn</p>
        <div className="grid grid-cols-4 gap-4 mt-10">
          <img
            className="ease-in-out hover:scale-x-100 cursor-pointer img-scale"
            src={Img1}
          />
          <img className="cursor-pointer img-scale" src={Img2} />
          <img className="cursor-pointer img-scale" src={Img3} />
          <img className="cursor-pointer img-scale" src={Img4} />
        </div>
      </div>
    </Selection>
  );
};

export default Instagram;
const Selection = styled.div`
  .img-scale {
    transition: all 0.2s ease-in-out;
    &:hover {
      transform: scale(0.9);
    }
  }
`;
