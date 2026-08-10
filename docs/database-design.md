# Gym Management System – Database Design

## 1. Database

Database Management System:

MongoDB

Database Name:

gym_management

## 2. Collections

The system will use the following MongoDB collections:

- users
- members
- trainers
- membershipPlans
- attendance
- payments

## 3. Users Collection

Stores information about system users.

Example fields:

- _id
- name
- email
- password
- role

Possible roles:

- Admin
- Trainer
- Member

## 4. Members Collection

Stores gym member information.

Example fields:

- _id
- name
- email
- phone
- dateOfBirth
- address
- membershipPlanId
- trainerId
- joinDate
- status

## 5. Trainers Collection

Stores trainer information.

Example fields:

- _id
- name
- email
- phone
- specialization
- status

## 6. Membership Plans Collection

Stores available membership plans.

Example fields:

- _id
- planName
- duration
- price
- description
- status

## 7. Attendance Collection

Stores member attendance records.

Example fields:

- _id
- memberId
- date
- checkInTime
- checkOutTime

## 8. Payments Collection

Stores member payment records.

Example fields:

- _id
- memberId
- membershipPlanId
- amount
- paymentDate
- paymentMethod
- paymentStatus