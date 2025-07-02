import React from 'react';

const CSSBasics = () => {
  return (
    <div className="css-basics">
      <h1>CSS Basics: Make Your Website Look Good</h1>

      <section>
        <h2>What is CSS?</h2>
        <p>
          CSS stands for Cascading Style Sheets. It’s the language that controls how your HTML looks — things like colors, fonts, layout, and spacing.
        </p>
      </section>

      <section>
        <h2>How to Use CSS</h2>
        <p>You can apply CSS to your HTML in three main ways:</p>
        <ul>
          <li>Inline: Directly on the HTML element</li>
          <li>Internal: Inside a &lt;style&gt; tag in the HTML file</li>
          <li>External: In a separate <code>.css</code> file (recommended)</li>
        </ul>
      </section>

      <section>
        <h2>Example: Styling a Paragraph</h2>
        <p>Here’s how CSS changes the appearance of text:</p>
        <pre>
          <code>
{`<p style="color: blue; font-size: 20px;">This is styled text.</p>`}
          </code>
        </pre>
        <p>Using internal CSS:</p>
        <pre>
          <code>
{`<style>
  p {
    color: red;
    font-weight: bold;
  }
</style>`}
          </code>
        </pre>
      </section>

      <section>
        <h2>CSS Selectors</h2>
        <p>CSS selectors let you target HTML elements to style. Common ones:</p>
        <ul>
          <li><code>p</code> – all paragraph tags</li>
          <li><code>#id</code> – an element with a specific ID</li>
          <li><code>.class</code> – all elements with a certain class</li>
        </ul>
        <pre>
          <code>
{`#title {
  color: green;
}

.intro {
  font-style: italic;
}`}
          </code>
        </pre>
      </section>

      <section>
        <h2>Example: External CSS</h2>
        <p>Create a file called <code>style.css</code>:</p>
        <pre>
          <code>
{`body {
  background-color: #f0f0f0;
  font-family: Arial, sans-serif;
}

h1 {
  color: navy;
}`}
          </code>
        </pre>
        <p>Then link it in your HTML file:</p>
        <pre>
          <code>
{`<link rel="stylesheet" href="style.css">`}
          </code>
        </pre>
      </section>

      <section>
        <h2>What's Next?</h2>
        <p>With HTML and CSS, you can now build and style your own web pages. Next, we’ll learn about layouts (like flexbox and grid) and then move into JavaScript to make things interactive.</p>
      </section>
      <div className='go-back'>
        <button className='back' onClick={() => window.history.back()}>Back</button>
      </div>
    </div>
  );
};

export default CSSBasics;
