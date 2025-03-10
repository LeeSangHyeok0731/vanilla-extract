import { style } from "@vanilla-extract/css";

export const Container = style({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
});

export const GreyItems = style({
  background: "grey",
  width: "100px",
  height: "100px",
});

export const RedItems = style({
  background: "red",
  width: "100px",
  height: "100px",
});
