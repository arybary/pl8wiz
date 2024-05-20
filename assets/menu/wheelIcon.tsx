import * as React from "react";
import Svg, { Path, SvgProps } from "react-native-svg";

const WheelIcon = (props: SvgProps) => (
  <Svg {...props} viewBox="0 0 1280 1280">
    <Path d="m617.3 26.7-18.2.3-.3 4.3-.3 4.2-5.2.3-5.3.3-.6-4c-.6-3.7-.9-4-3.3-3.6-1.4.3-11.6 1.6-22.6 3-30.7 3.9-27.8 3-27 7.5l.6 3.8-5.2 1.1c-2.8.6-5.3 1-5.5.9-.1-.2-.6-1.9-1.2-3.8-.5-1.9-1.3-3.5-1.8-3.4-.5.1-12.1 2.7-25.7 6l-24.9 5.8.7 4.2.6 4.2L467 59c-2.8.7-5.2 1.1-5.4.9-.2-.2-.8-1.8-1.3-3.4-.6-1.7-1.6-2.9-2.4-2.8-.8 0-12 3.9-24.9 8.5-16.6 5.9-23.5 8.8-23.4 9.8.1.8.5 2.7.8 4.1.7 2.4.3 2.8-4.2 4.6l-4.9 2.1-1.7-3.5c-1.3-2.7-2.1-3.3-3.6-2.8-1.8.6-45.1 21.4-45.8 22-.2.2.4 1.9 1.2 3.8l1.5 3.6-4.4 2.5c-2.4 1.5-4.6 2.6-4.9 2.6-.3 0-1.2-1.4-2.1-3-.9-1.7-2-3-2.5-3-.9 0-42.4 25.3-44.4 27.1-.5.4.2 2.2 1.4 3.9l2.3 3.3-2.4 1.8c-5.8 4.4-6.8 4.5-9.3 1.4-1.6-2-2.7-2.6-3.7-2-.8.5-10.3 7.8-21.2 16.2L242 172.1l2.5 3.3 2.5 3.3-2.3 1.9c-5.5 4.9-5.5 4.9-8.7 1.9l-2.9-2.8-19 18.4c-10.5 10.1-19.1 18.5-19.1 18.8 0 .3 1.2 1.8 2.7 3.3l2.7 2.8-3.9 4-3.9 4-2.8-2.7c-3.5-3.3-1.3-5.2-22.1 19.7l-15.5 18.5 3.1 2.6 3.1 2.6-3 4.1c-1.6 2.3-3.3 4.2-3.7 4.2-.5 0-2.2-.9-3.7-2l-2.8-2-14.6 21.5c-8 11.8-14.6 21.9-14.6 22.5 0 .5.8 1.4 1.8 1.9 4.5 2.7 4.5 2.6 1.7 7.2-1.5 2.4-2.9 4.5-3 4.7-.2.2-1.8-.4-3.5-1.3-1.9-1-3.6-1.3-4.1-.8-.5.5-6.3 11-12.8 23.4l-11.9 22.4 3.5 1.8c3.7 1.9 3.7 2.9.6 9-1.2 2.3-1.9 2.8-3.6 2.2-5.8-1.8-5.4-2.3-14.8 21.3-11.4 29-10.7 26-6.4 27.8 2.8 1.1 3.5 1.9 3 3.2-.4.9-1.2 3.2-1.7 5.1-1 3.5-1.1 3.5-7.8 1.9-.9-.2-3.3 6.7-8.1 24.2-3.8 13.5-6.9 25.1-6.9 25.8 0 .7 1.4 1.5 3 1.9 4 .8 4.2 1.3 2.9 7.1l-1.2 4.9-3.8-.7c-4.7-.9-3.7-3.7-8.4 25-1.9 11.8-3.8 22.7-4.1 24.2-.5 2.6-.3 2.8 3.6 3.4 4.2.7 4.2.7 3.6 4.3-.3 2-.6 4.4-.6 5.3 0 1.4-.9 1.8-3.9 1.8-3.9 0-4 .1-4.5 4.2-.7 5.3-2.6 38.2-2.6 44.2 0 4.4 0 4.5 3.8 4.8l3.7.3v11l-4 .3-4 .3 1.2 24.2c.6 13.3 1.2 25.2 1.2 26.4.1 2 .6 2.3 4 2.3 3.7 0 3.9.2 4.5 3.7 1.1 6.7.9 7.1-3.5 7.8-3.7.6-4 .9-3.5 3.3.6 2.7 7.6 48.5 7.6 49.5 0 .3 1.7.3 3.9 0 4.4-.6 4.7-.4 5.6 5.8l.7 4.6-3.6.7c-2 .4-3.6 1.2-3.6 1.9s2.9 12.2 6.5 25.6c3.6 13.4 6.5 24.5 6.5 24.8 0 .4.6.3 5.7-1.2 2.5-.7 3.3.6 4.7 7.2.7 2.9.5 3.2-2.9 4.3-2.6.9-3.4 1.6-3 2.8.3 1 4.5 12 9.3 24.7 6.2 16.1 9.3 22.9 10.3 22.8.8-.1 2.5-.5 3.9-.8 2.2-.6 2.8-.1 4.8 4 1.3 2.6 2.2 4.9 2 5-.2.1-1.8 1-3.6 1.9-1.8 1-3.2 2-3 2.4.8 1.9 23.1 45.8 23.4 46.1.3.3 2.1-.3 4-1.3 2-.9 3.7-1.6 3.8-1.4.2.2 1.4 2.3 2.8 4.8l2.6 4.5-3.4 2.3-3.4 2.2 11.7 17.7c6.4 9.8 12.8 19.7 14.2 22 1.4 2.3 3 4.3 3.4 4.3.5 0 2.2-.9 3.7-2l2.8-2 3.1 4.2c1.7 2.3 3.1 4.5 3.1 4.8 0 .3-1.3 1.6-3 2.8l-3 2.2 15.7 19.3c8.6 10.5 16.2 19.8 16.9 20.6 1 1.1 1.7 1 4.4-.9l3.2-2.2 3.4 3.3c1.9 1.8 3.4 3.7 3.4 4.3 0 .5-1.1 2.2-2.5 3.6l-2.5 2.6 18.8 18.7 18.8 18.8 2.8-3 2.9-3 4.3 3.5 4.3 3.6-2.5 3.3-2.5 3.4 20.7 16.6 20.7 16.6 2.7-3.3 2.7-3.2 4.2 3.3c2.2 1.8 4.1 3.5 4.1 3.8 0 .3-.9 1.8-2.1 3.4l-2 2.9 5.8 3.6c3.2 2.1 13.3 8.6 22.5 14.5l16.7 10.8 2.2-3.5 2.1-3.4 4.8 2.6c4.9 2.7 4.9 2.7 3.5 5.5-.8 1.5-1.5 3.3-1.5 3.8 0 1 44.9 24.1 46.8 24.1.5 0 1.6-1.6 2.5-3.5l1.7-3.5 4.9 2.5 5 2.5-1.5 3.5-1.4 3.5 3.6 1.5c2 .8 9.1 3.5 15.8 5.9 6.6 2.5 16.3 6 21.4 7.9l9.3 3.5 1-2.6c.5-1.5 1.1-3.2 1.4-3.9.3-.8 1.7-.7 5.5.5l5.1 1.6-.6 4.1-.6 4 25 6.3c13.8 3.5 25.5 6.1 26 5.8.5-.3 1.1-2 1.5-3.7.6-3.1.6-3.1 5.3-2.4 2.7.4 5.1.9 5.6 1.2.4.2.4 2.2.1 4.4-.4 2.3-.3 3.9.3 3.9s11.9 1.6 25.3 3.5 24.9 3.5 25.6 3.5c.9 0 1.4-1.1 1.4-2.8 0-4.4 1-5 6.8-4.5l5.2.6v3.8c0 4.8-.9 4.6 29.8 5.5l23.2.6v-8.2h5.5c5.3 0 5.5.1 5.5 2.7 0 5.5-.5 5.5 27.6 3.6l25.9-1.8.1-4c0-3.9.1-4 4.5-4.7 5.7-1 6.9-.5 6.9 3.1 0 1.6.4 3.2.8 3.5.4.2 12-1.5 25.7-4 13.8-2.4 25.4-4.4 25.9-4.4.4 0 .5-2 .2-4.4l-.7-4.3 4-.7c2.1-.3 4.6-.9 5.5-1.2 1.1-.4 1.7.4 2.2 3 .3 2 .9 3.8 1.3 4.1.4.2 11.9-2.9 25.7-6.9 26.4-7.7 25.5-7.2 24-13-.5-2.2-.1-2.6 4.1-4 5.9-2 6-2 6.7.7 1.4 5.3 1.1 5.4 24.7-4.3 12.3-5.1 23.4-9.6 24.6-10.1 2.2-.8 2.2-1 .7-4.5-.8-2-1.4-3.7-1.2-3.9.6-.5 8.7-4.5 9.2-4.5.3 0 1.3 1.5 2.2 3.3.9 1.7 1.8 3.3 1.9 3.5.1.1 3.3-1.5 7.1-3.6s14.2-7.8 23.2-12.6c8.9-4.8 16.2-9 16.2-9.4-.1-.4-.7-1.8-1.5-3.2-2-3.5-2-3.6 3.1-6.6 3.8-2.2 4.8-2.5 5.4-1.3 3.4 5.9 1.9 6.4 25.3-9.6 12-8.2 21.7-15.3 21.7-15.8s-.9-2.1-2-3.5l-2.1-2.6 2.8-2.3c5.2-4.4 5.8-4.4 8.8-1.3l2.8 2.9 17.6-15.1c9.7-8.3 18.7-16.1 20-17.3l2.3-2.3-2.3-3.1-2.3-3.2 3.6-3.6 3.7-3.6 3.3 2.5 3.3 2.5 18.2-19.1 18.1-19.1-2.9-3-2.8-3 3.3-3.9c3.3-4 4-4.1 8.2-1.1 2 1.5 2.6.8 18.3-19.6l16.1-21.1-2.2-1.8c-1.3-1.1-2.6-1.9-3-2-1.5 0-.8-2.2 1.9-5.8 1.5-2 2.8-3.9 3-4.1.1-.2 1.7.6 3.6 1.8l3.4 2.1 13.8-22.7c14.8-24.6 14.3-22.9 8.5-26.3-1.3-.8-1.2-1.5.9-5.4 2.6-5.1 3-5.2 7.2-3.1l2.9 1.6 3.4-7.3c1.8-4 6.8-14.6 11-23.5 4.2-9 7.6-16.7 7.6-17.1 0-.5-1.5-1.6-3.4-2.5l-3.5-1.6 2.2-5.1c1.6-3.7 2.5-4.9 3.7-4.5.8.4 2.6.9 4 1.1 2.4.5 2.7 0 10.8-24 4.6-13.5 8.1-24.9 7.8-25.5-.3-.5-2-1.2-3.6-1.6-3.4-.8-3.4-.5-1.8-5.9 1.5-5.5 2-5.9 6.1-4.8l3.5 1 2.6-11.2c7.3-31.3 9.3-40.7 8.7-41-.3-.2-2.1-.7-3.9-1.1-3.3-.7-3.3-.7-2.6-5.3.9-6.3 1-6.4 5.5-5.7 2.3.4 3.9.3 3.9-.3 0-.5 1.3-12.2 3-25.8 1.6-13.7 3-25.2 3-25.6 0-.4-1.8-1.1-4-1.4-4.3-.7-4.7-1.6-3.4-8.3.6-2.8 1-3.1 4.4-3.1h3.8l.4-26c.1-14.3.1-28.2 0-31l-.4-5h-7.8v-11h3.3c1.9 0 3.6-.2 3.8-.5.3-.3-4.4-49.5-5-52.3-.1-.1-1.9-.2-4.1-.2-4.1 0-4.4-.4-5.3-8.9-.1-.9 1.2-1.8 3.3-2.4 1.9-.5 3.6-1 3.8-1.2.3-.3-9.2-45.7-10.4-49.8-.5-1.5-1.2-1.7-4.5-1.2l-3.8.7-1.1-4.4c-1.5-5.8-1.4-6.2 2-7.3 1.6-.6 3-1.5 3.1-2 .1-.6-3.4-11.9-7.7-25.3-7.7-23.8-7.9-24.3-10.4-23.8-1.4.2-3.2.7-4.1 1.1-1.3.5-2.1-.5-3.4-4.5-.9-2.8-1.5-5.3-1.4-5.4.2-.2 1.8-1.1 3.5-1.9l3.2-1.6-10.8-23.6c-5.9-12.9-10.9-23.8-11.3-24.1-.3-.3-1.9.2-3.7 1.1-1.8.9-3.3 1.5-3.4 1.3-.1-.2-1.4-2.4-2.9-4.9l-2.6-4.6 3.5-1.9c2-1.1 3.2-2.4 2.9-3.2-.6-1.6-24.4-42.2-25.8-43.9-.7-1-1.6-.8-3.7.7-1.6 1.1-3.1 2-3.4 2-.3 0-1.9-2-3.5-4.4l-3-4.4 3.2-2.5 3.2-2.5-2.5-3.4c-13-18.1-28.7-38.8-29.3-38.8-.5 0-2 .9-3.4 2-2.9 2.3-3.9 1.8-7.5-3.2l-2-2.9 2.7-2.9 2.7-2.9-17.8-19.4-17.9-19.4-3.3 2.5-3.4 2.4-3.4-3.3c-3.9-3.8-4.1-4.9-1.4-7.4 1.1-1 2-2.2 2-2.6 0-.4-8.8-8.5-19.5-18l-19.6-17.2-2.9 2.8c-3.1 3-3.2 3-9.2-1.8-2.3-1.8-2.2-2.3.2-5.4 1.1-1.4 1.8-2.9 1.5-3.3-.6-1-40.2-29-41.9-29.6-.8-.3-2.3.8-3.5 2.5l-2.2 3.1-4.2-2.7c-2.3-1.5-4.3-2.8-4.5-2.9-.2-.1.5-1.8 1.4-3.8 1-1.9 1.6-3.7 1.3-3.9-.2-.2-8.7-5-18.9-10.7-10.2-5.6-20.4-11.4-22.6-12.7l-4.2-2.4-2.2 3.5-2.1 3.6-5-2.5L901 93l1.7-3.5c.9-1.9 1.5-3.6 1.2-3.8-.3-.3-44-19-47.6-20.4-.7-.3-1.9 1.1-2.7 3.1-.8 2-1.7 3.6-1.9 3.6-.2 0-2.5-.7-5.1-1.6-4.5-1.6-4.7-1.7-4-4.8.3-1.7.7-3.5.8-4 0-.5-1.7-1.5-3.9-2.1-2.2-.7-13.6-4.2-25.2-7.8L793 45.2l-1.2 4c-.8 2.7-1.6 3.7-2.6 3.3-.7-.3-3.2-.8-5.3-1.1l-4-.7.6-4.2.7-4.2-14.9-2.7c-8.1-1.6-19.9-3.8-26.1-5.1L729 32.3l-.6 3.8c-.7 4.2-1.7 4.6-8.3 3.3-2.8-.6-3.1-1-3.1-4.5 0-4.5 2-4.1-30.7-6.7L664 26.4v2.1c-.1 5.4-.8 6-6.5 5.7l-5.5-.4V26l-8.2.2c-4.6.2-16.5.4-26.5.5zm63.2 62.4c85.3 5.7 172.4 33.6 247 79.2 71 43.4 134.3 105.5 178.5 175.2 47.1 74.2 74.6 154.4 84.2 245.5 1.8 16.8 1.8 85 0 102-13.8 133.1-67.8 247.6-160.2 340-118.9 118.9-283.5 176.7-451 158.5-162.1-17.7-308.5-106.9-399.5-243.5-77.9-116.9-107.9-257.3-84.9-397 24.7-150.2 112.3-285.1 239.9-369.5 87-57.6 184.6-88.5 290-91.8 12.5-.4 38.2.2 56 1.4z" />
    <Path d="M592.5 96.5c-130.6 12.4-246.6 66.6-338 158C161 347.9 105.8 468.7 95.9 601c-1.5 20.7-.6 76.7 1.5 96 17.2 153.4 93.5 287.5 216.1 379.7 77.9 58.6 169.9 94.8 269.5 105.9 19.4 2.1 74.7 3 95 1.5 96.8-7.3 184.7-37.3 264.5-90.4 59.6-39.6 113.6-93.9 153-153.8 45.8-69.6 74.9-147.9 85.4-229.9 3.2-24.5 4.2-41.5 4.2-70.7 0-36.6-2.6-66.3-8.7-98.8-25.3-135.3-99.3-254.2-209.9-337.2-78.4-58.8-169.6-94.7-269.5-105.9-20.3-2.3-83.9-2.8-104.5-.9zm77.5 92.6c17.3 1.4 44.2 5.3 64.6 9.4 59.5 12.1 98.4 32.3 110.8 57.8 1.5 3 3.4 9.1 4.3 13.6 1.5 7.5 1.5 8.9 0 18.1-3 18.5-12.7 38.7-29.3 61.1-4.2 5.7-8 10.7-8.3 11.2-.4.4-6-2.2-12.4-5.8-37.7-21.3-84.1-35.8-128.9-40.5-15.6-1.6-49.2-1.3-65.4.5-14.2 1.6-39.1 6.3-47.7 8.9l-4.8 1.4-1.1-2.6c-11.2-28.6-15.9-48.6-15.9-67.7-.1-17 2.9-28.1 10.2-37.7 17.9-23.9 58.3-32.9 123.9-27.7zM360.4 323.5c20 5.2 43.2 26 64.5 57.8l5.2 7.7-3.8 3.2c-7.8 6.7-23.9 22.6-31.8 31.7l-8.3 9.4-11.8.2c-14.7.2-22.5 2-36 8.5-39.3 19-58.2 59.9-64.4 139.9-.5 7.4-1 19.5-1 26.9v13.5l-7.6-.7c-17.6-1.6-37.7-9-47.6-17.6-14-12.2-20.5-33.1-17.9-58.2 3.1-29.5 13.3-60.6 34-103.3 33.1-68.3 66.2-108.3 98.1-118.6 6.9-2.3 20.5-2.4 28.4-.4zm311.4 1c41.5 4.4 84.9 17.9 120.9 37.8 6.2 3.4 11.3 6.5 11.3 6.9 0 .9-12.3 14.6-13.2 14.7-.4.1-.5-.6-.2-1.4.8-2-4-6.5-7.1-6.5-2.8 0-7.5 4-7.5 6.5 0 2.8 3.8 5.5 7.7 5.5h3.6l-1.9 2.1c-10.7 12-70.5 64.3-80.9 70.9-1.8 1-3.7.7-12.8-1.9-5.9-1.7-13.1-3.3-15.8-3.7-4.1-.5-5.2-1.1-6-3.1-1.6-4.4-8.8-5.3-12.3-1.5-1.2 1.5-3.5 1.7-16 1.4l-14.6-.3-10.4-15.2c-21-30.7-37.7-58.6-51.3-85.7-5.9-11.8-7.9-16.6-7-17.1 4-2.3 41.8-9 56.7-10.2 12.8-1 43.5-.5 56.8.8zm-227.4 89.3c3.7 6.7 9.6 18.3 13.1 25.6 14.9 31.2 35.5 83 33.9 85.2-12.1 16.4-23.1 37.1-29.3 54.9l-3.7 10.9-4.9 1.7c-2.8 1-5.6 1.8-6.3 1.8-1.3.1-1.4 1.3 1.8-36.4 1-12.7 2.2-26.7 2.6-31.2.4-5.1 1.1-8.7 2-9.4 2.1-1.7 1.7-6.6-.6-8.2-1.4-1-2.4-3.7-3.5-9.4-5.6-29.2-23.2-52-47.3-60.9l-5.1-2 9.8-10.9c5.4-6.1 14-14.7 19.1-19.3 8.4-7.4 9.4-8 10.5-6.5.7 1 4.2 7.3 7.9 14.1zm570.3 8.8c24.2 11.6 43.9 45.8 57.2 98.9 15.1 60.7 19.5 127 10.6 161-5.6 21.5-16.9 37.7-30.7 44-19.6 9-47.9 7.8-81.2-3.4-6.5-2.1-12-4.2-12.3-4.5-.3-.3.6-6.5 2.1-13.7 4.3-21.1 5.6-33 6.3-56.4.8-30-1.4-53.3-7.8-81-7.6-33.4-22.1-69-40.4-99l-6.7-11 2.9-2.3c41.2-33.7 74.9-44.7 100-32.6zm-103.6 53.7c3.7 6.1 9 15.8 11.8 21.3l5 10.2-3.8-.5c-4.5-.6-8.1 2.1-8.1 6.1 0 5.4 8.2 7.4 12.5 3.2l2.4-2.4 4 10.1c23.2 59.9 28.1 121.7 14.5 183.4l-1.6 7.1-5.1-2.1c-13.1-5.3-50.2-24.8-70-36.7-30-17.9-33.7-20.5-33.7-23.5 0-3.3-4.1-5.9-8-5.1l-3 .5v-9.7c0-20.9-4.2-43.4-11.7-63.6-2.4-6.5-2.5-7.2-1.1-9.7 2.6-4.4 25.6-33.3 39.4-49.4 12.8-14.9 47.4-50.5 49-50.5.5 0 3.9 5.1 7.5 11.3zM484.9 745.9c9.4 14.6 28.9 34.8 44.4 45.9l8.6 6.3-.5 12.2c-2 50.4-5 82.1-11 114.9-1.7 8.8-1.7 8.9-4.3 8.3-1.4-.3-11.6-5-22.6-10.5-21-10.4-41.1-23-57.4-36l-9-7.3 2.4-1.9c3.3-2.5 3.2-6.1-.1-8.7-3.4-2.7-5.4-2.6-8.8 0l-2.8 2.2-4.3-4.3-4.4-4.3 5.7-3.4c18.7-11.3 32.4-27.8 38.8-46.8 4.2-12.6 4.3-23.8.5-46-1.6-9.9-3.1-19.4-3.3-21l-.3-3 11.5-.6c6.3-.3 12-.6 12.6-.7.6-.1 2.5 2 4.3 4.7zM288 782.2c4.5 17.7 15.5 41.9 24.7 54.3 18.2 24.5 43.6 37.2 69.8 35.1 7.8-.6 18.3-2.7 20.4-4 .6-.4 7.1 4.7 14.3 11.4 28.7 26.3 61.5 47.4 96.3 62.1 4.4 1.8 8.2 3.4 8.3 3.5 1.4.9-10.8 36.3-16.1 46.9-9 18-21.9 32.6-34 38.4-34.6 16.5-86.9-9.7-152.9-76.5-25-25.4-37.9-40.6-50.2-59.2-27.7-42.1-30.3-73.5-8-97.1 5.8-6.2 23.1-19.1 25.5-19.1.5 0 1.3 1.9 1.9 4.2zm488.5 6.9c33.9 12.3 60.6 23.8 87.5 37.5 24.1 12.4 22.9 11.5 19.8 15.6-1.4 1.8-6.4 7.5-11.2 12.6-51.5 55.8-122.9 91.6-200.1 100.2-4.9.5-9.6 1-10.4 1-4.1 0 5.7-59.4 17.5-106 3-11.8 5.9-22.9 6.4-24.5.9-2.9 2-3.4 13.7-7.4 20-6.7 44.8-20.1 57.3-31 1.9-1.7 4-3 4.5-3.1.6 0 7.4 2.3 15 5.1zm142.2 71.5c14.8 11.8 28.9 27.8 34.3 38.7 8.4 17.1 8 35-1.2 51.7-10.6 19.2-33.4 40.8-63.5 60.4-42.7 27.6-95.1 51.6-131.8 60.2-14.7 3.4-38.6 4.4-48.9 2-33.6-7.9-48.8-39.9-47.7-100.2l.1-7.1 8.3-.7c59.6-4.9 123.7-29.9 171.7-67 18-13.9 38.8-33.8 50.4-48.3l5-6.1 8.7 5.9c4.9 3.2 11.4 8 14.6 10.5z" />
    <Path d="M642 358.7c-6.6 2.4-6.5 9.2.2 11.6 2.8 1 7.7-1.2 8.4-3.8.9-3.7-.4-6.2-3.8-7.4-1.7-.6-3.1-1.1-3.2-1-.1 0-.8.3-1.6.6zM709.2 385.6c-2.7 1.9-2.9 6.4-.4 8.7 4 3.6 12.2.7 12.2-4.2 0-2.4-4.5-6.1-7.4-6.1-1.2 0-3.2.7-4.4 1.6zM422.1 430.6c-2.9 1.2-3.2 1.7-2.9 5.1.2 3 .9 4.1 3.1 5.1 3.6 1.8 7.2.8 9.3-2.4 3.5-5.3-2.9-10.6-9.5-7.8zM851.6 549.1c-3 2.3-3.3 4.5-1 7.7 1.8 2.7 8.4 3.1 10.8.6 2.4-2.3 2-7-.6-8.8-3.1-2.2-6-2-9.2.5zM898.5 594.5c-3 2.9-3.1 4.9-.5 7.5 2.4 2.4 8.2 2.7 10.4.4 2.4-2.3 2-7-.6-8.8-3.2-2.3-6.5-2-9.3.9zM909.2 675.6c-2.7 1.9-2.9 6.4-.4 8.7 4 3.6 12.2.7 12.2-4.2 0-2.4-4.5-6.1-7.4-6.1-1.2 0-3.2.7-4.4 1.6zM507 812.7c-2.2.8-4 3.4-4 5.8 0 5.1 8 7.6 12.1 3.9 5-4.5-1.4-12.1-8.1-9.7zM482 900.7c-6.6 2.5-6.5 9.2.3 11.6 2 .7 6.8-.9 7.9-2.6 1.2-1.9.9-6.4-.5-7.5-1.6-1.4-5.8-2.2-7.7-1.5zM746 830.2c-2.5 2.8-2.6 5.2 0 7.8 4.3 4.3 12 1.5 12-4.3 0-5.3-8.1-7.7-12-3.5zM835.7 864.8c-3.8 4.2-.8 10.2 5.1 10.2 3.4 0 7.2-3.2 7.2-6 0-5-8.9-8-12.3-4.2zM780.3 900.5c-3.6 1.5-4.9 4.5-3.3 7.5 2.5 4.6 9.8 4.8 12.7.3 3.4-5.1-3.1-10.5-9.4-7.8zM711 908.1c-1.3.6-2.8 1.5-3.2 2.2-1.3 2.1-.9 6.4.8 7.8 2.3 1.9 8 1.6 10.4-.6 2.5-2.2 2.6-4.6.3-7.3-2.3-2.6-5.1-3.3-8.3-2.1z" />
  </Svg>
);
export default WheelIcon;
