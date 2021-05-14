import { render, screen, fireEvent, waitFor, waitForElementToBeRemoved } from "@testing-library/react";
import App from "../pages/index";
import '@testing-library/jest-dom'
jest.mock("../pages/api/scan");

describe("App", () => {
  it("renders the form inputs without crashing", () => {
    const utils  = render(<App />);
    const name  = utils.getByLabelText('name')
    const surname  = utils.getByLabelText('surname')
    const email  = utils.getByLabelText('email')
    const phone  = utils.getByLabelText('phone')
    const dob  = utils.getByLabelText('dob')

    expect(name).toBeInTheDocument();
    expect(surname).toBeInTheDocument();
    expect(email).toBeInTheDocument();
    expect(phone).toBeInTheDocument();
    expect(dob).toBeInTheDocument();
  });



  it("accept right information in inputs", async () => {
    const utils  = render(<App />);

    const name  = utils.getByLabelText('name')
    const surname  = utils.getByLabelText('surname')
    const email  = utils.getByLabelText('email')
    const phone  = utils.getByLabelText('phone')
    const dob  = utils.getByLabelText('dob')

    const code  = utils.getByLabelText('code')

    fireEvent.change(name, { target: { value: 'michele' } })
    expect(name.value).toBe('michele')
    fireEvent.change(surname, { target: { value: 'dandrea' } })
    expect(surname.value).toBe('dandrea')
    fireEvent.change(email, { target: { value: 'mikdandre@gmail.com' } })
    expect(email.value).toBe('mikdandre@gmail.com')
    fireEvent.change(phone, { target: { value: '07460757693' } })
    expect(phone.value).toBe('07460757693')
    fireEvent.change(dob, { target: { value: '2020-05-12' } })
    expect(dob.value).toBe('2020-05-12')

    // fireEvent.submit(screen.queryByText(/Get QR/gi))
    // await waitForElementToBeRemoved(() => screen.queryByText("Get QR"));
  });
});