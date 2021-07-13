import React from "react";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";

import { useData } from "../context/DataContext";

import styled from "styled-components";

const StyledCard = styled(Card)`
  max-width: 350px;
  width: 100%;
  font-size: 2.5rem;
  margin: 0 auto;

  @media (min-width: 1100px) {
    max-width: 380px;
  }

  @media (min-width: 1300px) {
    max-width: 430px;
  }
`;

const StyledMedia = styled(CardMedia)`
  height: 150px;

  @media (min-width: 1100px) {
    height: 180px;
  }

  @media (min-width: 1300px) {
    height: 280px;
  }
`;

const CardHeader = styled.div`
  display: flex;
  padding: 16px;
  align-items: center;
  color: rgb(30, 30, 30);
  font-size: 2.5rem;
`;

const CardHeaderContent = styled.div`
  flex: 1 1 auto;
`;

const CardHeaderTitle = styled.p`
  display: block;
  font-size: 2.4rem;
  font-weight: bold;
`;
const CardHeaderSubTitle = styled.p`
  display: block;
  font-size: 1.3rem;
  font-weight: normal;
  color: rgba(0, 0, 0, 0.6);
`;

const Content = styled.p`
  padding: 5% 0;
  color: rgb(30, 30, 30);
  font-size: 1.5rem;
  margin-left: auto;
`;

const Price = styled.p`
  padding: 5% 0;
  color: rgb(30, 30, 30);
  font-size: 6rem;
  margin-left: auto;
`;

const MuiButton = styled(Button)`
  font-size: 5rem;
`;

const useStyles = makeStyles({
  price: {
    marginLeft: "auto",
  },
});

export default function MediaCard({ car }) {
  const classes = useStyles();
  const { deleteCarData } = useData();
  return (
    <StyledCard>
      <MuiButton
        onClick={() => deleteCarData(car.id, car.imageName)}
        color="primary"
      >
        Usuń samochód
      </MuiButton>
      <StyledMedia image={car.image} title="Zdjęcie samochodu" />
      <CardContent>
        <CardHeader>
          <CardHeaderContent>
            <CardHeaderTitle>{car.name}</CardHeaderTitle>
            <CardHeaderSubTitle>
              {car.engine} {car.year}
            </CardHeaderSubTitle>
          </CardHeaderContent>
        </CardHeader>
        <Content>{car.desc}</Content>
      </CardContent>
      <CardActionArea>
        <CardActions disableSpacing>
          <MuiButton href={car.link} type="link" size="large" color="primary">
            Link do otomoto
          </MuiButton>
          <Price className={classes.price}>{car.price + " zł"}</Price>
        </CardActions>
      </CardActionArea>
    </StyledCard>
  );
}
