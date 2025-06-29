<h1>Notes App Backend</h1>
  <p>A simple and secure RESTful API built with <strong>Node.js</strong>, <strong>Express</strong>, and <strong>MongoDB</strong> that allows users to sign up, log in, and manage their personal notes.</p>

  <h2>Features</h2>
  <ul>
    <li>User Signup &amp; Login (JWT Authentication)</li>
    <li>Create, Read personal notes</li>
    <li>Protected routes using middleware</li>
    <li>MongoDB database integration</li>
  </ul>

  <h2>Tech Stack</h2>
  <ul>
    <li>Node.js</li>
    <li>Express.js</li>
    <li>MongoDB (with Mongoose)</li>
    <li>JSON Web Token (JWT)</li>
  </ul>

  <h2>Getting Started</h2>
  <pre>
git clone https://github.com/azeembashir/Notes_app_backend.git
cd Notes_app_backend
npm install
  </pre>

  <p>Create a <code>.env</code> file with:</p>
  <pre>
JWT_SECRET=your_secret_key
MONGODB_URI=your_mongodb_uri
  </pre>

  <p>Start the server:</p>
  <pre>node server.js</pre>

  <h2>API Routes</h2>
  <table border="1" cellpadding="6">
    <tr>
      <th>Method</th>
      <th>Route</th>
      <th>Description</th>
    </tr>
    <tr>
      <td>POST</td>
      <td>/signup</td>
      <td>Register new user</td>
    </tr>
    <tr>
      <td>POST</td>
      <td>/login</td>
      <td>Authenticate user</td>
    </tr>
    <tr>
      <td>POST</td>
      <td>/notes/create</td>
      <td>Create a new note</td>
    </tr>
    <tr>
      <td>GET</td>
      <td>/notes</td>
      <td>Get user’s notes</td>
    </tr>
  </table>
