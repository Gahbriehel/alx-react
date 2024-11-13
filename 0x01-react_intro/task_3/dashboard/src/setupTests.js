// learn more: https://github.com/testing-library/jest-dom
import "@testing-library/jest-dom";

import Enzyme from "enzyme";
import Adapter from "@cfaester/enzyme-adapter-react-18";
import { TextEncoder, TextDecoder } from "util";

global.TextEncoder = TextEncoder;
global.TextDecoder = TextDecoder;

Enzyme.configure({ adapter: new Adapter() });
