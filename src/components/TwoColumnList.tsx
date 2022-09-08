import { Grid, GridItem, GridProps } from "@chakra-ui/react";

import { CheckIcon, Icon } from "@chakra-ui/icons";

interface TwoColumnList extends GridProps {
  items: string[];
}

const TwoColumnList = ({ items, ...props }: TwoColumnList) => {
  return (
    <Grid
      templateColumns="repeat(auto-fit, minmax(300px, 1fr))"
      gridColumnGap={4}
      {...props}
    >
      {items.map((skill, i) => (
        <GridItem key={i}>
          <Icon as={CheckIcon} mr={2} />
          {skill}
        </GridItem>
      ))}
    </Grid>
  );
};

export default TwoColumnList;
