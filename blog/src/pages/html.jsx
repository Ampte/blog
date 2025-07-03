import React from 'react';
import { useNavigate } from 'react-router-dom';

const HTMLBasics = () => {

    const navigate = useNavigate();
  return (
    <>
    <div className="html-basics">
      <h1>HTML Basics for Beginners</h1>

      <section>
        <h2>What is HTML?</h2>
        <p>
          HTML stands for HyperText Markup Language. It’s the standard language used to create and structure content on the web. Every website you visit is built using HTML.
        </p>
      </section>

      <section>
        <h2>Basic Structure of an HTML Page</h2>
        <p>Here’s what a very simple HTML page looks like:</p>
        <pre>
          <code>
{`<!DOCTYPE html>
<html>
  <head>
    <title>My First Page</title>
  </head>
  <body>
    <h1>Hello, world!</h1>
    <p>This is my first web page.</p>
  </body>
</html>`}
          </code>
        </pre>
      </section>

      <section>
        <h2>Common HTML Tags</h2>
        <ul>
          <li><code>&lt;h1&gt; to &lt;h6&gt;</code> – Headings (h1 is the biggest, h6 is the smallest)</li>
          <li><code>&lt;p&gt;</code> – Paragraph</li>
          <li><code>&lt;a href=""&gt;</code> – Link</li>
          <li><code>&lt;img src="" alt=""&gt;</code> – Image</li>
          <li><code>&lt;ul&gt;, &lt;ol&gt;, &lt;li&gt;</code> – Lists (unordered, ordered, list items)</li>
          <li><code>&lt;div&gt;</code> – Generic container</li>
          <li><code>&lt;span&gt;</code> – Inline container</li>
        </ul>
      </section>

      <section>
        <h2>Example: A Simple Web Page</h2>
        <p>This example puts everything together:</p>
        <pre>
          <code>
{`<!DOCTYPE html>
<html>
  <head>
    <title>Welcome Page</title>
  </head>
  <body>
    <h1>Welcome to My Website</h1>
    <p>My name is Ampte. I'm learning HTML!</p>
    <a href="https://example.com">Visit Example</a>
  </body>
</html>`}
          </code>
        </pre>
      </section>

      <section>
        <h2>What's Next?</h2>
        <p>After learning the basics of HTML, the next step is to explore:</p>
        <ul>
          <li>CSS – to style your HTML</li>
          <li>JavaScript – to add interactivity</li>
          <li>Practice building pages!</li>
        </ul>
        <p>Don't worry if it feels confusing at first. Like learning any new language, it gets easier with practice.</p>
      </section>
      <div style={{
        textAlign: 'right'
      }}>
        <button className='next' onClick={() => navigate("/css")}>Next</button>
      </div>
      <div className='go-back'>
        <button className='back' onClick={() => window.history.back()}>Back</button>
      </div>
    </div>
    </>
  );
};

export default HTMLBasics;
