# AI Notes

## AI Tools Used

I used ChatGPT during the development of this project as a learning and productivity aid. 

---

## 1. Which parts were AI-generated vs. written by me?

### Implemented and modified by me

- Initial Express project setup.
- Organized the project structure.
- Implemented and tested all API endpoints.
- Added input validation and route ordering.
- Performed manual API testing using Thunder Client.
- Created the manual test cases.

### AI-assisted

- Guidance on implementing REST API endpoints.
- Suggestions for handling multiple expense additions in a single request.
- Documentation support for the README and Tests md files.

---

## 2. What did I validated, tested, or changed in the AI's output?

Although I used AI for guidance, I verified every endpoint manually before considering it complete.

Some changes I made during development include:

- Modified the POST endpoint to support both a single expense object and an array of expenses for easier testing.
- Changed category filtering and search to be case-insensitive.
- Reordered the routes to avoid conflicts between specific and generic endpoints.
- Replaced ID generation using `expenses.length + 1` with an incremental `nextId` variable to avoid duplicate IDs after deletions.
- Fixed issues related to query parameters, request formats, and route testing during development.

---

## 3. AI suggestions I decided not to use

Some suggestions were intentionally not included:

- Automated testing using Jest and Supertest. Since the assignment did not explicitly require automated tests, I chose to provide detailed manual test cases instead.
- Using a database such as MongoDB or PostgreSQL. The assignment specified that data could be stored in memory, so I kept the implementation simple.
- Adding Swagger documentation or Docker support. Instead, I chose to implement the Search Expenses and Monthly Summary bonus features because they added more functionality to the API.

---

## Overall

AI was primarily used as a learning assistant to explain concepts, suggest implementation approaches, review code, and for the documentation part. The final project was manually assembled, tested, and refined based on my own understanding and debugging.