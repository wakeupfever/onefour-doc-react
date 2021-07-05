import styled from 'styled-components'

export const DivAlias = styled.div`
  display: flex;
  height: 44px;
  line-height: 44px;

  .tab-item {
    flex: 1;
    text-align: center;

    .tab-link {
      padding-bottom: 5px;
      color: $color-text-l;
    }

    &.router-link-active {
      .tab-link {
        color: $color-theme;
        border-bottom: 2px solid $color-theme;
      }
    }
  }
`