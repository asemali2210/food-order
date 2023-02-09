import   { Html,Head, Main,NextScript } from "next/document";

export default function Document(){
    return(
        <Html>
            <Head />
            <Main />
            {/*  modal portal  */}
            <div id="backDrop" ></div>
            <NextScript />
        </Html>
    )
}