import * as React from "react";
import Svg, {
  Defs,
  G,
  Path,
  Use,
  Text,
  TSpan,
  SvgProps,
} from "react-native-svg";

const NumberCarIcon = (props: SvgProps) => (
  <Svg {...props} >
    <Defs>
      <G id="b">
        <Path id="a" d="M0 0v1h.5L0 0z" transform="rotate(18 3.157 -.5)" />
        <Use xlinkHref="#a" width={810} height={540} transform="scale(-1 1)" />
      </G>
      <G id="c">
        <Use xlinkHref="#b" width={810} height={540} transform="rotate(72)" />
        <Use xlinkHref="#b" width={810} height={540} transform="rotate(144)" />
      </G>
    </Defs>

    <Path
      d="M-200 0H0v440h-200z"
      fill="#3a75c4"
      fillOpacity={1}
      transform="scale(-1 1)"
    />
    <Path d="M0 220h200v220H0z" fill="#f9dd16" />
    <Path 
      d="M0 0v139.022a24.547 24.547 0 0 0 14.728 22.425L66 184l51.272-22.553A24.547 24.547 0 0 0 132 139.022V0H0z"
      fill="#f9dd16"
      fillOpacity={1}
      fillRule="evenodd"
      stroke="none"
      strokeWidth={0.5}
      strokeLinecap="butt"
      strokeLinejoin="miter"
      strokeOpacity={0.155844}
      transform="matrix(1.03572 0 0 1.03572 31.873 15.395)"
    />
    <Path
      d="M2 2v136c.01 9.196 5.337 17.972 14.281 21.938L66 182l49.719-22.063C124.663 155.972 129.99 147.197 130 138V2H2z"
      fill="#3a75c4"
      fillOpacity={1}
      fillRule="evenodd"
      stroke="none"
      strokeWidth={0.5}
      strokeLinecap="butt"
      strokeLinejoin="miter"
      strokeOpacity={0.155844}
      transform="matrix(1.03572 0 0 1.03572 31.873 15.395)"
    />
    <Path
      d="M66 10.156c-3.728 4.23-6 9.767-6 15.844.22 13.344 1.858 26.66 2 40 .296 12.432-3.434 24.11-7.969 35.5-1.51 3.148-3.145 6.229-4.781 9.313l-4.813-.97c-4.33-.865-7.146-5.075-6.28-9.406.757-3.788 4.092-6.42 7.812-6.437l1.75.188-3.907-32.626C42.536 47.035 35.04 34.291 24 26a50.26 50.26 0 0 0-6-3.875V138h26.75c2 10.858 7.976 20.317 16.375 26.813A16.144 16.144 0 0 1 66 170.125a16.144 16.144 0 0 1 4.875-5.313c8.4-6.495 14.375-15.954 16.375-26.812H114V22.125A50.259 50.259 0 0 0 108 26c-11.04 8.291-18.536 21.034-19.813 35.563l-3.906 32.624 1.75-.187c3.72.017 7.055 2.648 7.813 6.438.866 4.33-1.951 8.54-6.281 9.406l-4.813.969c-1.636-3.084-3.27-6.165-4.781-9.313C73.434 90.11 69.704 78.432 70 66c.142-13.34 1.78-26.656 2-40 0-6.077-2.272-11.614-6-15.844zM26 38.813a41.802 41.802 0 0 1 9.688 21.968l3.218 26.907c-4.098 2.04-7.205 5.783-8.375 10.312H26V38.812zm80 0V98h-4.531c-1.17-4.529-4.277-8.272-8.375-10.313l3.219-26.906A41.802 41.802 0 0 1 106 38.813zM66 92.906a91.53 91.53 0 0 0 8.781 19.906A17.975 17.975 0 0 0 66 118.72a17.975 17.975 0 0 0-8.781-5.906A91.53 91.53 0 0 0 66 92.906zM26 106h4.531c1.429 5.521 5.74 9.883 11.219 11.406l3.844.875A44.025 44.025 0 0 0 44 130H26v-24zm75.469 0H106v24H88c0-4.057-.565-7.988-1.594-11.719l3.844-.875c5.48-1.523 9.79-5.885 11.219-11.406zm-48.063 14.125C58.26 120.811 62 124.959 62 130H52c0-3.43.508-6.734 1.406-9.875zm25.188 0A35.832 35.832 0 0 1 80 130H70c0-5.041 3.74-9.19 8.594-9.875zM52.906 138H62v16.844A36.026 36.026 0 0 1 52.906 138zM70 138h9.094A36.026 36.026 0 0 1 70 154.844V138z"
      fill="#f9dd16"
      fillOpacity={1}
      fillRule="evenodd"
      stroke="none"
      strokeWidth={0.5}
      strokeLinejoin="miter"
      strokeMiterlimit={4}
      strokeDasharray="none"
      strokeOpacity={0.155844}
      transform="matrix(1.03572 0 0 1.03572 31.873 15.395)"
    />
    <Text
      x={13.525}
      y={307.544}
      fontSize="30.50380898px" // Set the fontSize directly as a prop
      fontStyle="normal"
      fontWeight={700} // Set fontWeight as a number
      fill="#000"
      fillOpacity={1}
      stroke="none"
      strokeWidth={1}
      strokeLinecap="butt"
      strokeLinejoin="miter"
      strokeOpacity={1} // Change to 1 to match fillOpacity
      fontFamily="Bitstream Vera Sans"
      transform="scale(.77642 1.28797)"
    >
      <TSpan
        x={13.525}
        y={307.544}
        fontSize="152.51904297px" // Set the fontSize directly as a prop
        fill="#000"
        fillOpacity={1}
      >
        {"UA"}
      </TSpan>
    </Text>
  </Svg>
);

export default NumberCarIcon;
