
import './App.css';
import Cart from './Cart.js';
import './Cart.css'

function App() {
  let list = [
    {
      plan: "BASIC",
      team: "For Team of 3-5 Members",
      currency: "$",
      price: " 28",
      price1: "$20",
      features: [
        {
          name: " Perfect of Small Team"
        },
        {
          name: "Unlimited Invoices"
        },
        {
          name: "Project Management"
        }
      ]

    },
    {
      plan: "INTERMEDIATE",
      team: "For Team of 5-10 Members",
      pop: "popular",
      button: "Choose Plan",
      currency: "$",
      price: "39",
      price1: "$30",
      features: [
        {
          name: " Perfect of Small Team"
        },
        {
          name: "Unlimited Invoices"
        },
        {
          name: "Project Management"
        },
        {
          name: "Team Management"
        }
      ]


    },
    {
      plan: "HIGH CLASS",
      team: "For Team of 10-25 Members",
      currency: "$",
      price: "58",
      price1: "$50",
      features: [
        {
          name: " Perfect of Small Team"
        },
        {
          name: "Unlimited Invoices"
        },
        {
          name: "Project Management"
        },
        {
          name: "Team Management"
        },
        {
          name: "Time Tracking"
        }
      ]


    },
    {
      plan: "SUPREME",
      team: "For Team of 25-100 Members",
      currency: "$",
      price: "99",
      price1: "$80",
      features: [
        {
          name: " Perfect of Small Team"
        },
        {
          name: "Unlimited Invoices"
        },
        {
          name: "Project Management"
        },
        {
          name: "Team Management"
        },
        {
          name: "Time Tracking"
        },

      ]

    }
  ]
  return (
    <div class="pricing1 py-5 bg-light">
    <div class="container">
      <div class="row justify-content-center">
        <div class="col-md-8 text-center">
          <h3 class="mt-3 font-weight-medium mb-1">Pricing to make your Work Effective</h3>
          <h6 class="subtitle">We offer 100% satisafaction and Money back Guarantee</h6>
         </div>
          </div>
        </div>
        <div class="row mt-5 col-md-10 offset-md-1">
      {
        list.map(obj => <Cart data={obj}></Cart>)
      }
    </div>
    </div>
  
  );
}

export default App;
