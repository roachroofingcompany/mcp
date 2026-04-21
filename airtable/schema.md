# Airtable Base Schema

Operational base for Roach Roofing. Five tables, minimal fields — add more later as needed.

## 1. Contacts

| Field         | Type                | Notes                                    |
| ------------- | ------------------- | ---------------------------------------- |
| Name          | Single line text    | Primary field                            |
| Phone         | Phone number        |                                          |
| Email         | Email               |                                          |
| Address       | Long text           | Full street address                      |
| Source        | Single select       | e.g. Referral, Website, Door Knock, Ad   |
| Date Added    | Created time        | Auto-populated                           |
| Jobs          | Link to Jobs        | Reverse of Jobs → Contact                |
| Maintenance Plans | Link to Maintenance Plans | Reverse of Maintenance Plans → Contact |

## 2. Jobs

| Field          | Type                 | Notes                                         |
| -------------- | -------------------- | --------------------------------------------- |
| Job ID         | Autonumber or Formula | Primary field (e.g. `JOB-0001`)              |
| Contact        | Link to Contacts     | One contact per job                           |
| Type           | Single select        | Repair, Replacement, Inspection, Maintenance  |
| Status         | Single select        | Lead, Scheduled, In Progress, Complete, Lost  |
| Value          | Currency             | Contract value                                |
| Crew Assigned  | Single select or Collaborator | Crew name or team member             |
| Start Date     | Date                 |                                               |
| Completion Date| Date                 |                                               |
| Photos         | Link to Photos       | Reverse of Photos → Job                       |
| Proposals      | Link to Proposals    | Reverse of Proposals → Job                    |

## 3. Photos

| Field      | Type               | Notes                                |
| ---------- | ------------------ | ------------------------------------ |
| Name       | Single line text   | Primary field (filename or caption)  |
| Job        | Link to Jobs       |                                      |
| File       | Attachment         | Uploaded via CompanyCam sync         |
| CompanyCam URL | URL            | Source link in CompanyCam            |
| Uploaded   | Created time       | Auto-populated                       |

## 4. Proposals

| Field         | Type                | Notes                                    |
| ------------- | ------------------- | ---------------------------------------- |
| Proposal ID   | Autonumber or Formula | Primary field (e.g. `PROP-0001`)       |
| Job           | Link to Jobs        |                                          |
| Tier Selected | Single select       | Good, Better, Best                       |
| Sent Date     | Date                |                                          |
| Signed Date   | Date                | Blank until signed                       |

## 5. Maintenance Plans

| Field             | Type              | Notes                              |
| ----------------- | ----------------- | ---------------------------------- |
| Plan ID           | Autonumber or Formula | Primary field                  |
| Contact           | Link to Contacts  |                                    |
| Plan Type         | Single select     | Annual, Bi-Annual, Custom          |
| Next Service Date | Date              |                                    |
| Last Service Date | Date              |                                    |

## Relationships

- Contacts 1 ── * Jobs
- Contacts 1 ── * Maintenance Plans
- Jobs 1 ── * Photos
- Jobs 1 ── * Proposals
