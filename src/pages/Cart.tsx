import {
  Box,
  Button,
  Card,
  CardContent,
  Divider,
  Grid,
  Typography,
} from "@mui/material";
import React, { useContext, useEffect } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { CardList, OrderSumary } from "../components/cart";



import { BlockBusterLayout } from "../components/layouts";
import { CartContext } from "../context/cart";

export const Cart = () => {

  const { isLoaded,cart} = useContext(CartContext);
  const  navigate = useNavigate();

  useEffect(() => {
    if (!isLoaded && cart.length === 0 ){
      navigate("/emptycart")
    }
  }, [isLoaded,cart])

  return (
    <BlockBusterLayout>
      <Typography variant="h1" component={"h1"}>
        Carrito
      </Typography>
      <Grid container>
        <Grid item xs={12} sm={7}>
          {/* Card List */}
          <CardList />
        </Grid>
        <Grid item xs={12} sm={5}>
          <Card className="summary-card">
            <CardContent>
              <Typography variant="h2">Orden</Typography>
              <Divider sx={{ my: 3 }} />
              {/* Order Sumary */}
              <OrderSumary />
              <Box sx={{ mt: 3 }}>
                <NavLink to="/confirmation">
                  <Button
                    color={"primary"}
                    className="circular-btn"
                    fullWidth
                  >
                    Confirmar Orden
                  </Button>
                </NavLink>
              </Box>
             
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} sm={7} border={0}>
          <Box
            display={"flex"}
            justifyContent="center"
            alignItems="center"
            flexDirection={"column"}
          >
            <NavLink to="/">
              <Typography
                sx={{ mb: 5, fontSize: 15, fontWeight: 600 }}
                variant="button"
              >
                {/* <Typography sx={{mb:5}} variant='button' fontWeight={600} fontSize={20}> */}
                Regresar
              </Typography>
            </NavLink>
          </Box>
        </Grid>
      </Grid>
    </BlockBusterLayout>
  );
};
