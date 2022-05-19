import { RecoilRoot } from "recoil";
import Theme from "../styles/theme";

export default function App({ Component, pageProps }) {
  return (
    <RecoilRoot>
      <Theme>
        <Component {...pageProps} />
      </Theme>
    </RecoilRoot>
  );
}
