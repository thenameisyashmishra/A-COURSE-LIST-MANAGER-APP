**📚 Course List Manager — React App**

A dynamic and interactive Course List Manager built with React 19, Vite, and Bootstrap 5. Users can view available courses, add new ones, enroll, and remove courses — all with real-time state updates.

**🚀 Live Demo**

Coming soon 

**🖼️ Preview**

 screenshot

**✨ Features**
✅ View a list of pre-loaded courses (B.Tech, BBA, BCA, MBA, MCA)
➕ Add new courses dynamically using an input field
🗑️ Remove any course from the list
📩 Enroll in a course with one click (with confirmation alert)
💡 Empty state message when no courses are available
📱 Fully responsive UI using Bootstrap 5
🛠️ Tech Stack
Technology	Purpose
React 19	UI library with component-based architecture
Vite 8	Fast development build tool
Bootstrap 5	Responsive styling and layout
JavaScript (ES6+)	Application logic

**📁 Project Structure**
CourseReactProject_2/
├── public/
│   └── favicon.svg
├── src/
│   ├── CourseComponent/
│   │   ├── AppName.jsx          # App header/title component
│   │   ├── CourseInput.jsx      # Input field + Add button
│   │   ├── CourseName.jsx       # "Available Courses" heading
│   │   ├── CourseRender.jsx     # Renders the full course list
│   │   ├── CourseItems.jsx      # Individual course item (Enroll + Remove)
│   │   └── CourseListEmpty.jsx  # Empty state message
│   ├── App.jsx                  # Root component with state management
│   ├── main.jsx                 # React DOM entry point
│   ├── App.css
│   └── index.css
├── index.html
├── vite.config.js
└── package.json

**⚛️ Key React Concepts Used**
useState — managing and updating the course list
Props — passing data and handlers between parent and child components
Controlled Inputs — two-way binding for the course input field
Array Methods — .map() for rendering, .filter() for removing courses
Conditional Rendering — showing empty state when list is empty
Component-based Architecture — 6 dedicated, reusable components
⚙️ Getting Started
Prerequisites
Node.js (v18 or above)
npm
Installation
bash
# Clone the repository
git clone https://github.com/thenameisyashmishra/course-list-react.git

# Navigate into the project directory
cd course-list-react

# Install dependencies
npm install

# Start the development server
npm run dev

Open http://localhost:5173 in your browser to view the app.

📦 Available Scripts
Command	Description
npm run dev	Start development server
npm run build	Build for production
npm run preview	Preview production build
npm run lint	Run ESLint
🙋‍♂️ Author

Yash Mishra
📧 your- yash07mishra05@gmail.com
🔗 LinkedIn | GitHub

**📄 License**

This project is open source and available under the MIT License.
