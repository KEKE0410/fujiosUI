"use client";

const { useCookies } = require("react-cookie");
import {
  Avatar,
  Button,
  HeaderNav,
  HeaderNavMenu,
  HeaderNavMenuItem,
  HeaderNavSubMenu,
} from "@fujios/ui";
import Link from "next/link";
const Nav = () => {
  const [cookies, setCookie, removeCookie] = useCookies();
  return (
    <HeaderNav>
      <HeaderNavMenu>
        <HeaderNavMenuItem type="logo">
          <svg
            viewBox="0 0 456.61169 74.122009"
            version="1.1"
            id="svg1"
            className="w-32 h-10"
          >
            <g id="layer1" transform="translate(-150.10747,227.06593)">
              <path
                d="m 150.10747,-154.16235 h 15.94131 v -28.12575 h 32.0857 v -13.7075 h -32.0857 v -16.14438 h 33.71029 v -13.7075 h -49.6516 z m 88.74336,1.1169 c 17.66744,0 29.75034,-12.28597 29.75034,-29.24265 v -43.55938 h -16.04284 v 44.47321 c 0,8.52911 -5.78761,13.80903 -13.7075,13.80903 -7.91989,0 -13.91057,-5.27992 -13.91057,-13.91057 v -44.37167 h -16.04284 v 43.45784 c 0,16.95668 12.38751,29.34419 29.95341,29.34419 z m 53.10383,0 c 16.24592,0 26.39962,-10.1537 26.39962,-26.29808 v -46.50395 h -16.04284 v 47.41778 c 0,7.10759 -4.16302,10.86446 -10.1537,10.86446 -4.16302,0 -7.51374,-1.82766 -9.95063,-5.17838 l -10.66139,10.25523 c 4.77224,5.99069 11.37215,9.44294 20.40894,9.44294 z m 39.09172,-1.1169 h 15.94131 v -71.68513 h -15.94131 z m 63.96823,1.21844 c 21.22123,0 37.46715,-16.14438 37.46715,-37.06101 0,-21.01815 -16.24592,-37.061 -37.67023,-37.061 -21.42431,0 -37.67023,16.04285 -37.67023,36.95947 0,20.91662 16.449,37.16254 37.87331,37.16254 z m -0.20308,-14.51979 c -12.79366,0 -21.32277,-9.13833 -21.32277,-22.64275 0,-13.50442 8.52911,-22.43968 21.32277,-22.43968 12.69213,0 21.32277,9.03679 21.32277,22.43968 0,13.50442 -8.52911,22.64275 -21.32277,22.64275 z m 67.72508,14.41825 c 17.26129,0 27.51653,-8.22449 27.51653,-21.93199 0,-26.09501 -33.60875,-19.90125 -33.60875,-32.3903 0,-3.95995 3.35072,-6.09222 9.03679,-6.09222 5.483,0 9.74755,2.13227 14.01211,6.5999 l 10.35677,-10.25524 c -5.38146,-5.99068 -14.0121,-9.84908 -24.06427,-9.84908 -14.8244,0 -25.18117,7.91988 -25.18117,21.11969 0,25.18118 33.60874,18.78435 33.60874,32.28877 0,4.26455 -3.95994,6.90452 -10.66138,6.90452 -7.51374,0 -12.8952,-2.94458 -17.46437,-8.32604 l -10.35677,10.25524 c 7.00605,7.91988 15.02748,11.67675 26.80577,11.67675 z m 85.79885,0 c 17.66744,0 29.75034,-12.28597 29.75034,-29.24265 v -43.55938 h -16.04284 v 44.47321 c 0,8.52911 -5.78761,13.80903 -13.7075,13.80903 -7.91988,0 -13.91057,-5.27992 -13.91057,-13.91057 v -44.37167 h -16.04284 v 43.45784 c 0,16.95668 12.38751,29.34419 29.95341,29.34419 z m 42.44242,-1.1169 h 15.94131 v -71.68513 h -15.94131 z"
                id="text1"
                style={{
                  fontWeight: "bold",
                  fontSize: "101.537px",
                  fontFamily: "Outfit",
                  InkscapeFontSpecification: '"Outfit, Bold"',
                  letterSpacing: 0,
                  strokeWidth: "0.4",
                  strokeLinecap: "round",
                  strokeLinejoin: "round",
                  paintOrder: "stroke fill markers",
                }}
                aria-label="FUJIOS UI"
              />
            </g>
          </svg>
        </HeaderNavMenuItem>
        <HeaderNavMenuItem>ドキュメント</HeaderNavMenuItem>
        <HeaderNavMenuItem>コンポーネント</HeaderNavMenuItem>
        <HeaderNavMenuItem>カラー</HeaderNavMenuItem>
      </HeaderNavMenu>
      <HeaderNavSubMenu>
        <HeaderNavMenuItem type="native">
          {cookies["uuid"] ? (
            <Link href="https://account.fujios.net/account">
              <Avatar src={cookies["imageUrl"]} />
            </Link>
          ) : (
            <Link href="https://account.fujios.net/login">
              <Button>ログイン</Button>
            </Link>
          )}
        </HeaderNavMenuItem>
      </HeaderNavSubMenu>
    </HeaderNav>
  );
};
export default Nav;
