# Gym Management System – Entity Relationship Diagram

## 1. Purpose

The Entity Relationship Diagram (ERD) represents the main entities
of the Gym Management System and shows the relationships between them.

The ERD was designed based on the requirements identified during
Sprint 2 and the system modules planned in Sprint 3.

## 2. Main Entities

The main entities of the system are:

- User
- Member
- Trainer
- Membership Plan
- Attendance
- Payment

## 3. Entity Relationships

### User and Member

A user account can be associated with a member account.

### Trainer and Member

A trainer can manage multiple members.

### Member and Membership Plan

A member can be assigned a membership plan.

### Member and Attendance

A member can have multiple attendance records.

### Member and Payment

A member can have multiple payment records.

## 4. ER Diagram

The following diagram shows the relationships between the main
entities of the Gym Management System.

![Gym Management System ER Diagram](../assets/erd.png)

## 5. Relationship Summary

| Entity | Relationship | Entity |
|---|---|---|
| Trainer | manages | Member |
| Member | has | Membership Plan |
| Member | has | Attendance |
| Member | makes | Payment |
| User | associated with | Member |