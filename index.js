const express = require('express');
const app = express();
const port = 3000;

// Middleware to parse JSON bodies
app.use(express.json());

// In-memory storage for customers
let customers = [];

// Create a new customer
app.post('/v1/customers', (req, res) => {
  const newCustomer = req.body;
  newCustomer.id = Date.now().toString(); // Simple ID generation
  customers.push(newCustomer);
  res.status(201).json(newCustomer);
});

// Get all customers
app.get('/v1/customers', (req, res) => {
  res.json(customers);
});

// Get a specific customer
app.get('/v1/customers/:customerId', (req, res) => {
  const customer = customers.find(c => c.id === req.params.customerId);
  if (customer) {
    res.json(customer);
  } else {
    res.status(404).json({ message: "Customer not found" });
  }
});

// Update a customer
app.put('/v1/customers/:customerId', (req, res) => {
  const index = customers.findIndex(c => c.id === req.params.customerId);
  if (index !== -1) {
    customers[index] = { ...customers[index], ...req.body, id: req.params.customerId };
    res.json(customers[index]);
  } else {
    res.status(404).json({ message: "Customer not found" });
  }
});

// Delete a customer
app.delete('/v1/customers/:customerId', (req, res) => {
  const index = customers.findIndex(c => c.id === req.params.customerId);
  if (index !== -1) {
    customers.splice(index, 1);
    res.status(204).send();
  } else {
    res.status(404).json({ message: "Customer not found" });
  }
});

// Update customer's postal address
app.put('/v1/customers/:customerId/postaladdress', (req, res) => {
  const customer = customers.find(c => c.id === req.params.customerId);
  if (customer) {
    customer.postaladdress = req.body;
    res.json({ message: "Postal address updated successfully" });
  } else {
    res.status(404).json({ message: "Customer not found" });
  }
});

// Update customer's home address
app.put('/v1/customers/:customerId/homeaddress', (req, res) => {
  const customer = customers.find(c => c.id === req.params.customerId);
  if (customer) {
    customer.homeaddress = req.body;
    res.json({ message: "Home address updated successfully" });
  } else {
    res.status(404).json({ message: "Customer not found" });
  }
});

// Create a new account for a customer
app.post('/v1/customers/:customerId/:accountNumber', (req, res) => {
  const customer = customers.find(c => c.id === req.params.customerId);
  if (customer) {
    const newAccount = {
      accountNumber: req.params.accountNumber,
      ...req.body
    };
    if (!customer.accounts) customer.accounts = [];
    customer.accounts.push(newAccount);
    res.status(201).json(newAccount);
  } else {
    res.status(404).json({ message: "Customer not found" });
  }
});

// Get account details
app.get('/v1/customers/:customerId/:accountNumber', (req, res) => {
  const customer = customers.find(c => c.id === req.params.customerId);
  if (customer) {
    const account = customer.accounts.find(a => a.accountNumber === req.params.accountNumber);
    if (account) {
      res.json(account);
    } else {
      res.status(404).json({ message: "Account not found" });
    }
  } else {
    res.status(404).json({ message: "Customer not found" });
  }
});

// Update an account
app.put('/v1/customers/:customerId/:accountNumber', (req, res) => {
  const customer = customers.find(c => c.id === req.params.customerId);
  if (customer) {
    const accountIndex = customer.accounts.findIndex(a => a.accountNumber === req.params.accountNumber);
    if (accountIndex !== -1) {
      customer.accounts[accountIndex] = { ...customer.accounts[accountIndex], ...req.body };
      res.json(customer.accounts[accountIndex]);
    } else {
      res.status(404).json({ message: "Account not found" });
    }
  } else {
    res.status(404).json({ message: "Customer not found" });
  }
});

// Delete an account
app.delete('/v1/customers/:customerId/:accountNumber', (req, res) => {
  const customer = customers.find(c => c.id === req.params.customerId);
  if (customer) {
    const accountIndex = customer.accounts.findIndex(a => a.accountNumber === req.params.accountNumber);
    if (accountIndex !== -1) {
      customer.accounts.splice(accountIndex, 1);
      res.status(204).send();
    } else {
      res.status(404).json({ message: "Account not found" });
    }
  } else {
    res.status(404).json({ message: "Customer not found" });
  }
});

app.listen(port, () => {
  console.log(`Customer Management API listening at http://localhost:${port}`);
});