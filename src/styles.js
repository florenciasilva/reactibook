import styled from 'styled-components';


export const Container = styled.main`
    display: flex;
    align-items: center;
    flex-direction: column;
    width: 79vw;
`;

export const ColumnContainer = styled.div`
    flex-direction: column;
    align-items: center;
    justify-content: center;

`

export const Card = styled.article`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    flex-wrap: wrap;
    width: 50vw;
    margin: 10px;
`

export const Content = styled.p`
    font-size: 1.2rem;
    padding-bottom: 0.2rem;
    margin-top: -10px;
    justify-content: space-evenly;
`

export const Wrapper = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    align-items: center;
    width: 50vw;
    margin: 0;
    padding: 0;
`

export const Date = styled.time`
    font-size: 0.8rem;
    margin:0;
    color: #a5a5a5
 `

export const PrimaryBtn = styled.button`
    display: flex;
    align-items: center;
    justify-content: center;
    border: none;
    color: white;
    border-radius: 25px;
    background-color: palevioletred;
    width: 4.5vw;
    height: 3.5vw;
    font-size: 1rem;
    margin-top: -2%;
    `

export const TransparentBtn = styled(PrimaryBtn)`
    background-color: transparent;
    border: .5px solid white;
    width: 6vw;
    margin: 2%
`

export const Divider = styled.hr`
    width: 78.5vw;
    border: 1.5px solid #8d4b60;
    filter: opacity(80%)
`

export const PostArea = styled.textarea`
    width: 40vw;
    height: 15vh;
    border-radius: 25px;
    background-color: transparent;
    border: 2px solid #8d4b60;
    resize: none;
    text-align: center;
    color: white;
    font-size: 1.3rem;

    ::placeholder {
        text-align: center;
        font-size: 1rem;
    }
`

export const Label = styled.label`
    color: #333
`

export const AuthContainer = styled.main`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
`
export const Input = styled.input`
    width: 30vw;
    height: 3vh;
    margin: 1%;
    border-radius: 25px;
        background-color: transparent;
        border: 2px solid #8d4b60;
        resize: none;
        text-align: center;
        color: white;
        font-size: .9rem;

        ::placeholder {
            text-align: center;
            font-size: .9rem;
        }
`

export const LabelInput = styled.label`
    font-size: .9rem;
    margin: 2%;
    letter-spacing: .1rem;
    display: flex;
    flex-direction: column;
    align-items: center;
`

export const PrimarySend = styled(PrimaryBtn)`
    width: 6vw;
    align-self: flex-end;
    margin-top: 2%;
`

export const SecondaryBtn = styled(PrimaryBtn)`
    filter: opacity(90%)
`

export const EditInput = styled(PostArea)`
    width: 20vw;
    height: 10vh;
`

export const SendEditBtn = styled(PrimaryBtn)`
    margin: 2%
    width: 7vw;
`
export const PrivacyWrapper = styled(Wrapper)`
    justify-content: flex-start
`

export const SRonly = styled.span`
    color: #333;
    text-indent: -9999em;
    outline: 0;
    margin: 0;
    padding: 0;
    position: absolute;
`