import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import CreateSprintTemplate from "../arena/CreateSprintTemplate";

describe("SPRINT", () => {
        const users = testUsers();

        describe("Leaderboard Table with 3 users per page and a current user", () => {
            beforeEach(() => {
            render(
                <CreateSprintTemplate
                  user={ users[1] }
                  history={[]}
                />
            );
            });
            it("displays a sprint H1", () => {
            expect(screen.getByTitle("CreateTemplate")).toBeDefined();
            });
        });
    }
);

function testUsers(): Array<any> {
    const users: Array<any> = [
      {
        rank: 1,
        score: 1000,
        id: 1,
        fName: "First",
        lName: "B",
        email: "aaaa",
        github: "aaa",
        missions: [],
        percentage: 100,
        phone: "123",
        planning: [{ name: "a", code: "b", content: "" }],
        review: "123",
        instructor: false,
      },
      {
        rank: 2,
        score: 900,
        id: 2,
        fName: "Second",
        lName: "B",
        email: "aaaa",
        github: "aaa",
        missions: [],
        percentage: 100,
        phone: "123",
        planning: [{ name: "a", code: "b", content: "" }],
        review: "123",
        instructor: false,
      },
      {
        rank: 3,
        score: 800,
        id: 3,
        fName: "Third",
        lName: "B",
        email: "aaaa",
        github: "aaa",
        missions: [],
        percentage: 100,
        phone: "123",
        planning: [{ name: "a", code: "b", content: "" }],
        review: "123",
        instructor: false,
      },
      {
        rank: 4,
        score: 700,
        id: 4,
        fName: "Alfred",
        lName: "B",
        email: "aaaa",
        github: "aaa",
        missions: [],
        percentage: 100,
        phone: "123",
        planning: [{ name: "a", code: "b", content: "" }],
        review: "123",
        instructor: false,
      },
      {
        rank: 5,
        score: 600,
        id: 5,
        fName: "Adam",
        lName: "B",
        email: "aaaa",
        github: "aaa",
        missions: [],
        percentage: 100,
        phone: "123",
        planning: [{ name: "a", code: "b", content: "" }],
        review: "123",
        instructor: false,
      },
      {
        rank: 6,
        score: 500,
        id: 6,
        fName: "Current",
        lName: "User",
        email: "aaaa",
        github: "aaa",
        missions: [],
        percentage: 100,
        phone: "123",
        planning: [{ name: "a", code: "b", content: "" }],
        review: "123",
        instructor: false,
      },
    ];
    return users;
}