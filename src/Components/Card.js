import React from "react";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";

import styled from "styled-components";

const StyledCard = styled(Card)`
  max-width: 350px;
  font-size: 2.5rem;
  margin: 0 0 5% 0;

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

const Content = styled.p`
  padding: 5% 0;
  color: rgb(30, 30, 30);
  font-size: 1.5rem;
`;

const Header = styled.h2`
  color: rgb(30, 30, 30);
  font-size: 2.5rem;
`;

const MuiButton = styled(Button)`
  font-size: 5rem;
`;

export default function MediaCard() {
  return (
    <StyledCard>
      <CardActionArea>
        <StyledMedia
          image="https://picsum.photos/1024/640?random=7"
          title="Zdjęcie samochodu"
        />
        <CardContent>
          <Header>Toyota Auris</Header>
          <Content>
            Krótki opis samochodu Krótki opis samochodu Krótki opis samochodu
            Krótki opis samochodu Krótki opis samochodu Krótki opis samochodu
            Krótki opis samochodu
          </Content>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <MuiButton size="large" color="primary">
          Link do otomoto
        </MuiButton>
      </CardActions>
    </StyledCard>
  );
}
