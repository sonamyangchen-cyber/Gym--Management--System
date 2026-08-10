# Gym Management System – Application Workflow

## 1. Purpose

The application workflow describes how users interact with the Gym
Management System and how information moves through the system.

## 2. General System Workflow

```text
User
  |
  v
Login
  |
  v
Authentication
  |
  v
Dashboard
  |
  +------------------+
  |                  |
  v                  v
Member Management   Other Modules
  |                  |
  v                  |
Add / View / Edit    |
Member               |
  |                  |
  +--------+---------+
           |
           v
       Database
           |
           v
      Updated Data