import { extendTheme } from "@chakra-ui/react";

export default extendTheme({
  styles: {
    global: {
      body: {
        bg: "#ECECEC",
        fontFamily: "Inter, sans-serif",
      },
    },
  },
  colors: {
    brand: {
      bg: "#F4F4F4",
      btn: "#8CB09F",
      text: "#343A40",
      btntwo: "#A74602",
      footerbg: "#23292A",
      maps: "#1A73E8",
      export: "#D9E2DE",
    },
  },
  components: {
    Button: {
      sizes: {
        md: {
          h: "50px",
          w: "180px",
          fontSize: "lg",
          padding: "20px",
        },
      },
    },
  },
});
