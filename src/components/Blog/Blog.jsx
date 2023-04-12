import React from "react";

const Blog = () => {
  return (
    <div className="flex  gap-5 mt-20">
      <div className="card w-96 bg-base-100 shadow-xl">
        <div className="card-body">
          <h2 className="card-title">When the Context API is used ?</h2>
          <p>
            Here are some situations where I might want to use the Context API:
            Theming: If I want to allow users to customize the look and feel of
            my application, I can use the Context API to provide a theme object
            that can be accessed by all components in your application.
            Authentication: If I have an application that requires
            authentication, I can use the Context API to store the
            authentication state and provide it to all components that need it.
            Language localization: If I want to support multiple languages in my
            application, I can use the Context API to store the user's language
            preference and provide translations to all components in my
            application. User preferences: If I have user preferences that need
            to be persisted across different pages or sessions, I can use the
            Context API to store these preferences and make them available to
            all components that need them.
          </p>
        </div>
      </div>
      <div className="card w-96 bg-base-100 shadow-xl">
        <div className="card-body">
          <h2 className="card-title">what is custom hook in react ? </h2>
          <p>A custom hook is a JavaScript function that uses one or more of the existing React hooks to encapsulate a particular piece of functionality, making it reusable across multiple components. Custom hooks are a way to abstract away complex logic into a reusable function, which can then be imported and used just like any other hook in React.</p>
        </div>
      </div>
      <div className="card w-96 bg-base-100 shadow-xl">
        <div className="card-body">
          <h2 className="card-title">
            What is useRef and what is it used for?
          </h2>
          <p>useRef is a hook in React that provides a way to store mutable values or references to DOM elements. It returns a mutable ref object that can be used to persist data across component renders without triggering a re-render.</p>
          <p>Here are some common use cases for useRef:</p>
          <p>1. Storing previous values: You might need to compare the current value of a variable to its previous value. useRef allows you to store the previous value of a variable between renders.</p>
          <p>2. Storing references to DOM elements: When working with forms or animations, you might need to store references to DOM elements. useRef allows you to do this without causing unnecessary re-renders.</p>
          <p>3. Storing unchanging values: If you have a value that needs to persist between renders but doesn't need to be part of your component's state, you can store it in a useRef variable.</p>
        </div>
      </div>
      <div className="card w-96 bg-base-100 shadow-xl">
        <div className="card-body">
          <h2 className="card-title">
            What is UsMemory and what is it used for?
          </h2>
        </div>
      </div>
    </div>
  );
};

export default Blog;
