# Myshop (Frontend)

<!-- Logo -->

<div align="center">
<img src="./src/assets/myshop-logo.png" align="center" width="200" height="auto" />
</div>

<!-- Table of Contents -->

## Table of Contents

<details>
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
      <ul>
        <li><a href="#built-with">Built With</a></li>
      </ul>
    </li>
    <li>
      <a href="#getting-started">Getting Started</a>
      <ul>
        <li><a href="#prerequisites">Prerequisites</a></li>
        <li><a href="#requirements">Requirements</a></li>
        <li><a href="#installation">Installation</a></li>
        <li><a href="#setup-env-example">Setup .env example</a></li>
      </ul>
    </li>
    <li><a href="#contributing">Contributing</a></li>
    <li><a href="#screenshoots">Screenshoots</a></li>
    <li><a href="#related-project">Related Projects</a></li>
  </ol>
</details>

<!-- About The Project -->

## About The Project

Myshop is a shopping web app made with PERN stack.
Start by register a new account with email or simply sign with with you Google account.
You can manage your cart by adding and/or removing products, and lastly proceed to payment process.
The item you have bought will be displayed in your purchase history.

### Built With

This app was built with some technologies below:

- [JavaScript](https://www.javascript.com)
- [Node.js](https://nodejs.org/en)
- [React.js](https://reactjs.org)
- [Axios](https://axios-http.com)
- [Firebase](https://firebase.google.com)
- [Stripe](https://stripe.com)

<p align="right">(<a href="#top">back to top</a>)</p>

<!-- Getting Started -->

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/en/download)
- [React.js](https://reactjs.org/docs/create-a-new-react-app.html)
- [Firebase](https://firebase.google.com/docs/auth/web/start)
- [Stripe](https://stripe.com/docs/payments)

### Installation

- Clone the repository

```
git clone https://github.com/brndnwjy/myshop-app
```

- Go to repository folder

```
cd myshop-app
```

- Install Module

```
npm install / npm i
```

- Prepare Firebase project
- Prepare Stripe payment
- Connect with database
- <a href="#setup-env-example">Setup .env</a>
- Type ` npm run dev` To Start Development
- Type ` npm run start` To Start Production

<p align="right">(<a href="#top">back to top</a>)</p>

### Setup .env example

Create .env file in your root project folder.

```env
# api
REACT_APP_API_URL = yourBackendURL

# firebase
REACT_APP_FIREBASE_KEY = yourFirebaseKey
REACT_APP_FIREBASE_DOMAIN  = yourFirebaseDomain
REACT_APP_FIREBASE_PROJECT_ID = yourFirebaseProjectId
REACT_APP_FIREBASE_STORAGE_BUCKET = yourFirebaseStorageBucket
REACT_APP_FIREBASE_SENDER_ID = yourFirebaseSenderId
REACT_APP_FIREBASE_APP_ID = yourFirebaseAppId

# stripe
STRIPE_PUBLIC_KEY = yourStripePublicKey
```

<p align="right">(<a href="#top">back to top</a>)</p>

<!-- Contributing -->

## Contributing

Contributions are what make the open source community such an amazing place to be learn, inspire, and create. Any contributions you make are **greatly appreciated**.

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

<p align="right">(<a href="#top">back to top</a>)</p>

<!-- Screenshoots -->

## Screenshoots

<table>
  <tr>
    <td><image src="./documentation/register.png" alt="Register" width=100% ></td>
    <td><image src="./documentation/login.png" alt="Login" width=100%/></td>
  </tr>
  <tr>
    <td align="center">Register</td>
    <td align="center">Login</td>
  </tr>
  
  <tr>
    <td><image src="./documentation/product-list.png" alt="Product List" width=100%></td>
    <td><image src="./documentation/product-detail.png" alt="Product Detail" width=100%></td>
  </tr>
  <tr>
      <td align="center">Product List</td>
      <td align="center">Product Detail</td>
  </tr>
  
  <tr>
    <td><image src="./documentation/cart.png" alt="Cart" width=100%></td>  
    <td><image src="./documentation/checkout.png" alt="Checkout" width=100%></td>
  </tr>
  <tr>
      <td align="center">Cart</td>
       <td align="center">Checkout (Stripe template)</td>
  </tr>
  
   <tr>
    <td><image src="./documentation/thankyou-page.png" alt="Thankyou Page" width=100%></td>
    <td><image src="./documentation/purchase-history.png" alt="History" width=100%></td>
  </tr>
  <tr>
      <td align="center">Thankyou Page</td>
       <td align="center">Purchase History</td>
  </tr>

  <tr>
    <td><image src="./documentation/product-detail-empty.png" alt="Product - Empty" width=100%></td>
    <td><image src="./documentation/cart-empty.png" alt="Cart - Empty" width=100%></td>
  </tr>
  <tr>
      <td align="center">Product - Empty</td>
       <td align="center">Cart - Empty</td>
  </tr>
</table>

<p align="right">(<a href="#top">back to top</a>)</p>

<!-- Related Projects -->

## Related Project

:rocket: [`Myshop (Backend)`](https://github.com/brndnwjy/myshop-api)

<p align="right">(<a href="#top">back to top</a>)</p>
