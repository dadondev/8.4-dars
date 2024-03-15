"use client";
import { Provider } from "react-redux";
import Content from "./components/Content";
import Form from "./components/Form";
import Header from "./components/Header";
import store from "./redux/store";

export default function Home() {
  return (
    <div className="h-full font-mono">
      <Provider store={store}>
        <div className="container mx-auto sm:max-w-[573px] lg:max-w-[763px] pb-10">
          <Header />
          <Form />
          <Content />
        </div>
      </Provider>
    </div>
  );
}
