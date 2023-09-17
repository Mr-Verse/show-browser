import { Card } from "@chakra-ui/react";
import { ReactElement } from "react";

interface Props {
  children: ReactElement | ReactElement[];
}

const CardAutoWidth = ({ children }: Props) => {
  return (
    //Card columns in Grid -> { base: 2, sm: 3, md: 3, lg: 5, xl: 6 }
    //gap between columns = 12px
    //padding - 16px
    //Aside component -> {base: "200px 1fr", xl: "300px 1fr"} show above=md

    <Card
      borderRadius="12px"
      overflow="hidden"
      flexShrink="0"
      width={{
        //calc((100vw - widthOfAside)/noOfCards - gap - padding)
        base: "calc(100vw/2 - 6px - 8px)",
        sm: "calc(100vw/3 - 8px - 5px)",
        md: "calc((100vw - 200px)/3 - 8px - 5px)",
        lg: "calc((100vw - 200px)/5 - 9.5px - 3px)",
        xl: "calc((100vw - 300px)/6 - 10px - 2.5px)",
      }}
    >
      {children}
    </Card>
  );
};

export default CardAutoWidth;
