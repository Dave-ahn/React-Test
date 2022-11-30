import React from 'react';
import { useSearchParams } from 'react-router-dom';
import './Dropdown.scss';

const Dropdown = () => {
  const [searchParams, setSearchParams] = useSearchParams();

  const filterParams = id => {
    searchParams.set('cate_id', id);
    searchParams.set('sweetness', id);
    searchParams.set('sourness', id);
    searchParams.set('carbon', id);
    searchParams.set('fruits', id);
    searchParams.set('flowers', id);
    searchParams.set('grains', id);
    setSearchParams(searchParams);
  };
  return (
    <div className="product-filter-box">
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <div className="drop-down-wrapper">
        {filterList.map(filterItem => (
          //필터 버튼
          <button className="filter-btn" key={filterItem.id}>
            {filterItem.title}
            {filterItem.type.map(type => (
              //내용 버튼 내용 버튼
              <div className="filter-item-box" key={type.id}>
                <div className="filter-item-wrapper">
                  <div className="filter-item">
                    <button
                      className="filter-item-btn"
                      onClick={() => filterParams(type.id)}
                    >
                      <p className="filter-item-text">{type.option}</p>
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Dropdown;

const filterList = [
  {
    id: 0,
    title: '주종',
    type: [
      { id: 1, option: '탁주' },
      { id: 2, option: '청주' },
      { id: 3, option: '과실주' },
      { id: 4, option: '증류주' },
    ],
  },
  {
    id: 1,
    title: '단맛',
    type: [
      { id: 1, option: '약' },
      { id: 2, option: '중' },
      { id: 3, option: '강' },
    ],
  },
  {
    id: 2,
    title: '신맛',
    type: [
      { id: 1, option: '약' },
      { id: 2, option: '중' },
      { id: 3, option: '강' },
    ],
  },
  {
    id: 3,
    title: '탄산',
    type: [
      { id: 1, option: '약' },
      { id: 2, option: '중' },
      { id: 3, option: '강' },
    ],
  },
  {
    id: 4,
    title: '과일',
    type: [
      { id: 1, option: '포도' },
      { id: 2, option: '배' },
      { id: 3, option: '매실' },
      { id: 4, option: '사과' },
      { id: 5, option: '베리' },
    ],
  },
  {
    id: 5,
    title: '꽃',
    type: [
      { id: 1, option: '국화' },
      { id: 2, option: '유채' },
      { id: 3, option: '동백꽃' },
      { id: 4, option: '매화' },
      { id: 5, option: '진달래' },
    ],
  },
  {
    id: 6,
    title: '곡물',
    type: [
      { id: 1, option: '땅콩' },
      { id: 2, option: '밤' },
      { id: 3, option: '사탕수수' },
      { id: 4, option: '고구마' },
      { id: 5, option: '보리' },
    ],
  },
];
