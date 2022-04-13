import React from "react";
import styled from "styled-components";



export default function Blogs() {
  
  return (
    <Section id="blogs">
      <div className="title">
        <h2>The mission</h2>
      </div>
      <div className="blogs">
       
         
            <div className="blog" >
              
              <div className="data">
                <p>
                We, the team at Milk cat are ready to disrupt Milkomeda from head to toe🤑. With an enthusiastic team and our relentless effort to disrupt how tokens are perceived, you wouldn’t find another cat that milks the way ours does. Our main focus is to build a genuine community to be able to provide the best of our services and cater to their needs and wants. We have a clear roadmap of what’s to be expected and we are 💯 on track to hit the new milestones that will take everyone by surprise. We do have some nice rewards brewing already with some crazy mouthwatering partnerships. We at MILK CAT will sweep away all the rats and milk your bags. 
                </p>
              </div>
            </div>
         
      </div>
     <div className="title">
        <h2>Tockenomics</h2>
      </div>
      <div className="blogs">
      <div className="blog" >
              
              <div className="data">
                <p>
                Liquidity Fee - 4   
                Marketing Fee - 4
                Rewards Fee - 2
                </p>
              </div>
            </div>
            </div>
    </Section>
  );
}

const Section = styled.section`
  margin: 4rem 10rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2rem;
  .title {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 0.3rem;
  }
  .blogs {
    display: flex;
    gap: 5rem;
    .blog {
      display: flex;
      align-items: center;
      gap: 1rem;
      flex-direction: column;
      background-color: rgba(0, 0, 0, 0.3);
      border-bottom: 0.5rem transparent solid;
      transition: 0.3s ease-in-out;
      &:hover {
        border-color: var(--primary-color);
      }
      img {
        width: 99%;
      }
      .data {
        padding: 1rem;
        gap: 1rem;
        display: flex;
        flex-direction: column;
        p {
          font-size: 0.9rem;
          font-weight: 100;
        }
      }
    }
  }
  @media screen and (min-width: 280px) and (max-width: 1080px) {
    margin: 2rem 1rem;
    .title {
      h2 {
        font-size: 2.4rem;
        color: var(--primary-color);
      }
    }
    .blogs {
      flex-direction: column;
      gap: 2rem;
    }
  }
`;
