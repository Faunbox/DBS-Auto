import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";

import styled from "styled-components";

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
    fontSize: "2.5rem",
  },
  media: {
    height: 140,
  },
});

const Content = styled.p`
  padding: 5% 0;
  color: rgb(30, 30, 30);
  font-size: 1.5rem;
`;

const Header = styled.h2`
  color: rgb(30, 30, 30);
  font-size: 2.5rem;
`;

export default function MediaCard() {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
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
        <Button size="small" color="primary">
          Link do otomoto
        </Button>
      </CardActions>
    </Card>
  );
}
