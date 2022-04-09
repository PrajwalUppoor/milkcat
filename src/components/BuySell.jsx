import React from "react";
import styled from "styled-components";
import BuySell1 from "../assets/buy-sell-1.png";
import BuySell2 from "../assets/buy-sell-2.png";
import BuySell3 from "../assets/buy-sell-3.png";

export default function BuySell() {
  return (
    <Section>
      <div className="row">
        <div className="col" id="buySell1">
          <img src={BuySell1} alt="Buy Sell 1" />
          <div className="text">
            <h2>
            Phase 1 Currently launching 
            </h2>
            <h4>
              <li>Milk cat out of the cage</li>
              <li>Website and social launch</li>
              <li>Bombard charts</li>
              <li>Hosting AMA’s for our milkers</li>
              <li>KYC once we reach a certain marketcap</li>
              <li>Build and strengthen our community of CAT’s</li>
              <li>Weekly and monthly AMA’s to keep our community updated with progress that we are making, so as to keep them involved in the project</li>
</h4>

          </div>
        </div>
        <div className="col" id="buySell2">
          <h2>
          Phase 2
          </h2>
          <h4>
            <li>Presale of our MILK tokens</li>
            <li>YouTube and social media collabs</li>
            <li>Merch drop</li>
            <li>Daily rewards for MILKers active on the community</li>
            <li>Twitter influencers collab</li>
            <li>First round of NFT reveal</li>
            <li>Begin listing on different exchanges(Milkomeda, BSC)</li>
          </h4>
          <img src={BuySell2} alt="Buy Sell 2" />
        </div>

        <div className="col" id="buySell3">
          <img src={BuySell3} alt="Buy Sell 3" />
          <h2>Phase 3</h2>
          <h4>
            <li>Merch drop</li>
            <li>Introduce staking system once a predetermined marketcap is reached</li>
            <li>Buyback tokens from clients or presalers</li>
            <li>Expand ecosystem with NFT, token staking</li>
            <li>Official Merch reveal of our CAT</li>
            <li>Revealing an astonishing new use case which is in development</li>
            <li>Listing on centralised exchange</li>
            <li>Rewards and merch for all the loyal MILKers who hold our token for an year. (We have some amazing rewards/NFT to giveaway to our loyal HODLers)</li>
          </h4>
        </div>
      </div>
    </Section>
  );
}

const Section = styled.section`
  margin: 6rem 10rem;
  .row {
    display: flex;
    gap: 8rem;
    flex-direction: column;
    .col {
      display: flex;
      justify-content: center;
      align-items: center;
      gap: 2rem;
      img {
        height: 60vh;
      }
      h2 {
        font-size: 3rem;
        span {
          color: var(--primary-color);
        }
      }
    }
  }
  @media screen and (min-width: 280px) and (max-width: 1080px) {
    margin: 2rem 1rem;
    .row {
      gap: 2rem;
      .col {
        flex-direction: column;
        text-align: center;
        img {
          height: 10rem;
        }
        h2 {
          font-size: 1.5rem;
        }
        &:nth-of-type(2) {
          flex-direction: column-reverse;
        }
      }
    }
  }
`;
