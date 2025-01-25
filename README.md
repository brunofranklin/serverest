# Serverest - API and E2E Testing with Cypress

This project is a collection of tests for the **Serverest** application, which is an API for managing users and products. The repository contains two main types of tests: **API tests** (for validating communication and functionality of the Serverest API) and **E2E tests** (End-to-End, to check the behavior of the application as a whole).

## Overview

**Serverest** is an API that allows you to perform operations such as:

- **Creating and listing users**
- **Creating and listing products**

The project is structured into two sets of tests:

1. **API Tests**: Ensure that the API is working correctly and performing operations effectively (located in `cypress/tests/api`).
2. **E2E Tests**: Validate the complete application flows, simulating real user actions (located in `cypress/tests/e2e`).

This repository includes a **CI/CD configuration with GitHub Actions** to automatically run tests whenever changes are made to the repository.

## Prerequisites

Before you start, make sure you have the following tools installed on your machine:

- [Git](https://git-scm.com/) – To clone the repository.
- [Node.js](https://nodejs.org/) – To manage the project dependencies.
- [NPM](https://www.npmjs.com/) – To install and manage packages.

## Cloning the Repository

Clone the repository with the following command:

```bash
git clone git@github.com:brunofranklin/serverest.git
