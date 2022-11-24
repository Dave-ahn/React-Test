import React from 'react';
import './Item.scss';

const Item = () => {
  return (
    // 제품 사진 부분
    <div className="item-info-box">
      <div className="style-card">
        <a href="www.naver.com" className="dtr-item">
          <div className="image-wrapper">
            <span className="box-sizing">
              <span>aa</span>
              <img className="productImg" alt={'image'} />
            </span>
          </div>
          {/* 제품 설명 */}
          <div className="style__CardContentWrapper-sc-1jbotc0-1 fLTTQq">
            <div className="wrapper">
              <div className="style--Title-sc">막쿠르트 [2입/4입]</div>
            </div>
            <div className="wrapper">
              <div className="style__PriceWrapper-sc-1jbotc0-3 hqJEqC">
                <p className="originPrice">aa</p>
                <div className="flex discount-wrapper">
                  <p className="discountPrice">
                    13,000
                    <span>원</span>
                  </p>
                </div>
              </div>
              <div className="score-review-wrapper flex">
                <img alt="별점"></img>
                <p>0</p>
                <div className="column-line"></div>
                <p className="numberOfReview">리뷰 0</p>
              </div>
            </div>
            <div className="style__CardFooter-sc-1jbotc0-5 kWPEGN">
              <div className="style__Content-sc-1jbotc0-4 XLrPA">
                <div>#야구르트와 막걸리의 만남</div>
                <div>#한국야구르트</div>
              </div>
            </div>
          </div>
        </a>
      </div>
    </div>
  );
};

export default Item;
