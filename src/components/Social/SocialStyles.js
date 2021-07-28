import styled from "styled-components"

export const SocialStyles = styled.li`
    width: 5rem;
    height: 5rem;
    display: flex;
    justify-content: center;
    align-items: center;
    transform: scale(1);
    font-size: var(--text-xl);
    margin: 1rem 0.5rem;

    

    a {
        transform: scale(1);
        position: relative;
        display: flex;
        justify-content: center;
        align-items: center;
        width: 50px;
        height: 50px;
        cursor: pointer;
        border: 2px solid var(--color-grey);
        transition: all 0.3s;
        border-radius: 50%;
    }

    svg {
      width: 28px;
      height: 28px;
      fill: var(--color-grey);
      transform: scale(1.1);
      transition: all 0.3s;
   }

   
    &:hover {
        a {
            transform: scale(1.2);
        }

        svg {
            transform: scale(1);
        }

        .item0 {
            svg {
                fill: var(--color-linkedin);
                /* fill: #caf0f8; */
            }
        }

        .item1 {
            svg {
                fill: var(--color-github);
            }
        }

        .item2 {
            svg {
                fill: var(--color-gmail);
                /* fill: #e2afff; */
            }
        }
    }
    
`