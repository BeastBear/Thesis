import Stripe from "stripe";
import { Request, Response } from "express";
import Restaurant from "../models/restaurant";

const STRIPE = new Stripe(process.env.STRIPE_API_KEY as string);
const FRONTEND_URL = process.env.FRONTEND_URL as string;

type CheckoutSessionRequest = {
  cartItems: {
    menuItemId: string;
    name: string;
    quantity: number;
  }[];
  deliveryDetails: {
    email: string;
    name: string;
    addressLine1: string;
    city: string;
  };
  restaurantId: string;
};

const createCheckoutSession = async (req: Request, res: Response) => {
  try {
    const checkoutSessionRequest: CheckoutSessionRequest = req.body;

    const restaurant = await Restaurant.findById(
      checkoutSessionRequest.restaurantId
    );

    if (!restaurant) {
      throw new Error("Restaurant not found");
    }

    const lineItems = createLineItems(checkoutSessionRequest, restaurant.menuItems)
  } catch (error: any) {
    console.log(error);
    res.status(500).json({ error: error.raw.message });
  }
};

const createLineItems = (checkoutSessionRequest: CheckoutSessionRequest, menuItems) => { 
  
}

export default createCheckoutSession;
