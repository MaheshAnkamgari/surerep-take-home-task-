import { render } from "@testing-library/react";
import TasksRow from "./tasks-row.component";

describe("App Component ", () => {
  const renderComp = () =>
    render(
      <TasksRow
        onDragOver={() => {}}
        onDragStart={() => {}}
        onDrop={() => {}}
        taskTitle="New Tasks"
        status="new"
        tasks={[
          {
            id: 1023,
            created: "1 day ago",
            name: "Mobile account settings view",
            priority: "Normal",
            status: "new",
            scope: "Mobile, App",
            comments: 10,
            attachemnts: 6,
            owner: "male-two.jpeg",
          },
        ]}
        current=""
      />
    );

  it("Title should rendered", () => {
    const { getByText } = renderComp();
    expect(getByText("New Tasks")).toBeInTheDocument();
  });

  it("check weather current new task rendered or not", () => {
    const { getByTestId } = renderComp();
    expect(getByTestId("1023")).toBeInTheDocument();
  });
});
