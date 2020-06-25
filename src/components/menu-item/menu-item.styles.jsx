import styled from "styled-components";

export const MenuItemContainer = styled.div`
  min-width: 30%;
  height: 240px;
  flex: 1 1 auto;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 7.5px 15px;
  overflow: hidden;

  
  }
`;

export const BackgroundImageDiv = styled.div`
  width: 100%;
  height: 100%;
  background-size: cover;
  background-position: center;
  &:first-child {
    margin-right: 7.5px;
  }

  &:last-child {
    margin-left: 7.5px;
  }

  &.large {
    height: 340px;
  }
  &:hover {
    cursor: pointer;
    .content {
      opacity: 0.9;
    }
    .background-img {
      transform: scale(1.1);
      transition: transform 6s cubic-bezier(0.25, 0.45, 0.45, 0.95);
    }
`;

export const ContentDiv = styled.div`
  height: 90px;
  padding: 0 25px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: white;
  opacity: 0.7;
  position: absolute;
`;

export const TitleDiv = styled.div`
  font-weight: bold;
  margin-bottom: 6px;
  font-size: 22px;
  color: #4a4a4a;
`;

export const SubtitleSpan = styled.span`
  font-weight: lighter;
  font-size: 16px;
`;
