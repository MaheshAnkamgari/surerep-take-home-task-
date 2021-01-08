import { render } from "@testing-library/react";
import Task from "./task.component";

describe("App Component ", () => {
  const renderComp = () =>
    render(
      <Task
        onDragStart={() => {}}
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

  it("check weather current new task rendered or not", () => {
    const { getByTestId } = renderComp();
    expect(getByTestId("1023")).toBeInTheDocument();
  });
});
