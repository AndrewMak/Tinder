import styled, { keyframes, css } from "styled-components";
import { darken } from "polished";

const rotate = keyframes`
  from{
    transform:rotate(0deg);
  }
  to{
      transform: rotate(360deg)
  }
`;

export const Productlist = styled.ul`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 2rem;
  list-style: none;

  .promotion {
    display: flex;
    flex-direction:column;
    span {
        color: #1ceb68;
        font-size: 2.1rem;
        font-weight: 700;
        margin-top:0.7rem;

      &:first-child {
        color: #8c8c8c;
        font-size: 1.5rem;
        margin-top:0.3rem;
        text-decoration: line-through;
      }
      &:last-child {
        color: #333;
        font-size: 1.5rem;
        font-weight: 400;
        margin-top:0.3rem;
        margin-bottom:10px;
      }
    }
  }

  // header {
  //   display: flex;
  //   justify-content: flex-end;
  //   align-items: center;
  //   button {
  //     transition: background 0.2s;
  //     display: flex;
  //     padding: 4px;
  //     align-items: center;
  //     background: #eeee !important;
  //     border-radius: 50%;
  //     &:hover {
  //       background: ${darken(0.02, "#eee")};
  //     }
  //   }
  // }

  li {

    // display: flex;
    // flex-direction: column;
    // background: #fff;
    // padding: 2rem;
    // border-radius: 4px;

    img {
      align-self: center;
      //max-width: 250px;
      width: 100%;
      cursor: pointer;
      border-radius: 15px 15px 0 0;
    }

    // > strong {
    //   line-height: 2rem;
    //   color: #333;
    //   margin-top: 5px;
    // }

    // > span {
    //   font-weight: bold;
    //   font-size: 2.1rem;
    //   margin: 5px 0 20px;
    // }

    //  .buttons {
    //     margin-top:10px;
    //     display:grid;
    //     grid-template-columns:repeat(2, 1fr);
    //     grid-gap: 10px;
    // }

    //  .buttons button {
    //     height:50px;
    //     box-shadow: 0 2px 2px 0 rgb(0,0,0,0.05);
    //     border:0;
    //     border-radius: 4px;
    //     background: #fff;
    //     cursor: pointer;
    // }

    //  .buttons button:hover img{
    //     transform: translateY(-5px);
    //     transition: all 0.2s;
    // }

    //   div {
    //     display: flex;
    //     align-items: center;
    //     justify-content: center;
    //     padding: 1.2rem;
    //     background: rgba(0, 0, 0, 0.2);

    //     svg {
    //       margin-left: 5px;
    //     }
    //   }

    //   span {
    //     flex: 1;
    //     text-align: center;
    //     font-weight: bold;
    //   }
    // }
  }

  hr {
    border: none;
    border-top: #CCC 1px solid;
  }

.rounded {
  border-radius: 10px;
}

.panel {    
  background-color: rgb(248, 248, 248);
  position: relative;
  height: 170px;
  width: 240px;
  margin: 70px auto 0 auto;
}

.panel .header {
  position: absolute;
  top: -65px;
  height: 100px;
  width: 150px;   
  z-index: -1;
  vertical-align: middle;
  line-height: 50px;
}

// .panel .header.santander {
//   background-color: red;
// }
// .panel .header.sofisa {
//   background-color: #0cb598;
// }

.panel .content {
  padding: 8px 10px;
}

.panel .content .title {
  font-size: 8pt;
}

.panel .content .center {
  width: 80%;
  text-align: center;
  height: 100%;
  margin: 0 auto;
  line-height: 25px;
}

.panel .content .center .text-top {
  text-decoration: line-through;
}

.panel .content .center .text-middle {
  color: rgb(47, 236, 57);
  font-size: 14pt;
}

.panel .content .footer {
  text-align: center;
  width: 80%;
  margin: 10px auto;
  position: relative;
}

.panel .content .footer .icon {
  border-radius: 40px;
  width: 40px;
  height: 40px;
  font-size: 15px;
  padding: 10px;
  position: absolute;
  font-weight: bold;
  cursor: pointer;
}

.panel .content .footer .icon.like {
  border: 1px solid lightgreen;
  color: lightgreen;
  left: 0;
}

.panel .content .footer .icon.dislike {
  border: 1px solid lightsalmon;
  color: lightsalmon;
  right: 0;
}

`;

export const Load = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  ${props =>
    props.loading &&
    css`
      svg {
        animation: ${rotate} 2s linear infinite;
      }
    `}
`;
