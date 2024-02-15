import { render, screen } from "@testing-library/react";
import { FirstTestComponent } from "../components/testcomponent";
import {
  TestInputFieldAndButtons,
  TestWithMockData,
  TestWithMockDataBranches,
} from "../components/TestWithMockData";
import { mockData } from "../utils/constants";
import { userEvent } from "@testing-library/user-event";

test("Example First Test renders successfully", () => {
  render(<FirstTestComponent />);
  const element = screen.getByText(/First Test/i);
  expect(element).toBeInTheDocument();
});

test("Test Mock Data with Props", () => {
  render(<TestWithMockData data={mockData} />);
  const element = screen.getByText(/Fletcher/i);
  expect(element).toBeInTheDocument();
});

test("Test Mock Data with Props Branched", () => {
  render(
    <TestWithMockDataBranches data={mockData} displayUnorderedList={false} />
  );
  const element = screen.getByText(/McVanamy/i);
  expect(element).toBeInTheDocument();
});

test("Email link handler click called", async () => {
  const mockHandleClick = jest.fn();
  render(
    <TestWithMockDataBranches
      data={mockData}
      displayUnorderedList={true}
      handleClick={mockHandleClick}
    />
  );
  await userEvent.click(screen.getByText(/mmcvanamy0@e-recht24.de/i));
  expect(mockHandleClick).toHaveBeenCalled();
});

test("Input Field Typed Successfully", () => {
  render(<TestInputFieldAndButtons />);
  const element = screen.getByRole("textbox");
  expect();
});
