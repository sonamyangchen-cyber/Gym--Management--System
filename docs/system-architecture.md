# Gym Management System – System Architecture

## 1. System Architecture

The Gym Management System will use a three-layer architecture consisting
of the frontend, backend, and database.

```text
                 GYM MANAGEMENT SYSTEM
                         |
          +--------------+--------------+
          |                             |
       FRONTEND                       BACKEND
          |                             |
    User Interface              Application Logic
          |                             |
          +--------------+--------------+
                         |
                         v
                    MONGODB
                     DATABASE