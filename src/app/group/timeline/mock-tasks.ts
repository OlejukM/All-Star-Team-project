import { Task } from './task';

export const TASKS: Task[] = [

  { id: 1, name: 'lesson', date: '10/20/18', lectureTitle: 'CSS Frameworks', lecturerName: 'Yuriy Dzhavala', description: 'A CSS framework is a pre-prepared software framework that is meant to allow for easier, more standards-compliant web design using the Cascading Style Sheets language. Most of these frameworks contain at least a grid', materials: [['Thoughtful CSS Architecture ', 'https://seesparkbox.com/foundry/thoughtful_css_architecture'], ['CSS Utility Classes and "Separation of Concerns"', 'https://adamwathan.me/css-utility-classes-and-separation-of-concerns/'], ['SMACSS book', 'https://smacss.com/book/'], ['Bem by examples', 'https://seesparkbox.com/foundry/bem_by_example'], ['Bootstrap. Getting started', 'https://getbootstrap.com/docs/4.0/getting-started/introduction/']]},
  { id: 2, name: 'lesson', date: '10/22/18', lectureTitle: 'OOP', lecturerName: 'Vasyl Motsyak', description: 'Object-oriented programming is a programming paradigm based on the concept of "objects", which may contain data, in the form of fields, often known as attributes; and code, in the form of procedures, often known as methods', materials: [['Object-oriented Programming', 'http://eloquentjavascript.net/1st_edition/chapter8.html'], ['Object-oriented JavaScript for beginners', 'https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Objects/Object-oriented_JS'], ['Video: Alex Samilyak, OOP in JS','https://youtu.be/Qn3Qah7W6Vs']]},
  { id: 3, name: 'lesson', date: '11/05/18', lectureTitle: 'ES Next', lecturerName: 'Bohdan Lobor', description: 'ECMAScript is a trademarked scripting-language specification standardized by Ecma International in ECMA-262 and ISO/IEC 16262. It was created to standardize JavaScript, so as to foster multiple independent implementations', materials: [['Getting Started es6','http://2ality.com/2015/08/getting-started-es6.html'],['Ecmascript 2016','http://2ality.com/2016/01/ecmascript-2016.html'],['Ecmascript 2017', 'http://2ality.com/2016/02/ecmascript-2017.html'], ['Ecmascript 2018', 'http://2ality.com/2017/02/ecmascript-2018.html'], ['Exploringjs es6', 'http://exploringjs.com/es6/'], ['Exploringjs es2016-es2017', 'http://exploringjs.com/es2016-es2017.html'], ['Exploringjs es2018-es2019', 'http://exploringjs.com/es2018-es2019/index.html']]},
  { id: 4, name: 'lesson', date: '11/10/18', lectureTitle: 'AJAX', lecturerName: 'Mykyta Morachov', description: 'Ajax is a set of Web development techniques using many Web technologies on the client side to create asynchronous Web applications. With Ajax, Web applications can send and retrieve data from a server asynchronously without interfering with the display and behavior of the existing page', materials: [['About Promises','https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise'], ['XMLHttpRequest', 'https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequest']]},
  { id: 5, name: 'lesson', date: '12/03/18', lectureTitle: 'Webpack', lecturerName: 'Orest Soroka', description: 'Webpack is an open-source JavaScript module bundler. Its main purpose is to bundle JavaScript files for usage in a browser, yet it is also capable of transforming, bundling, or packaging just about any resource or asset. Webpack takes modules with dependencies and generates static assets representing those modules', materials: [['Writing modular js','http://addyosmani.com/writing-modular-js'],['Webpack','http://webpack.js.org']]},
  { id: 6, name: 'lesson', date: '12/05/18', lectureTitle: 'JS Patterns', lecturerName: 'Yevhen Lysyakov', description: 'Design patterns are reusable solutions to commonly occurring problems in software design. They are both exciting and a fascinating topic to explore in any programming language.', materials: [['Decorator pattern','https://addyosmani.com/blog/decorator-pattern/'],['Singleton pattern','https://www.dofactory.com/javascript/singleton-design-pattern'],['Factory pattern', 'https://www.dofactory.com/javascript/factory-method-design-pattern'], ['Facade pattern', 'https://www.dofactory.com/javascript/facade-design-pattern'],['Mediator pattern', 'https://www.dofactory.com/javascript/mediator-design-pattern'], ['Observer pattern', 'https://www.dofactory.com/javascript/observer-design-pattern']]},
  { id: 7, name: 'lesson', date: '12/07/18', lectureTitle: 'Architectural Patterns', lecturerName: 'Yura Shkoropad', description: 'It is a general, reusable solution to a commonly occurring problem in software architecture within a give context. Architectural patterns are similar to software design pattern but have a broader scope.', materials: [['Classic MVC on vanilla js','https://medium.com/@patrickackerman/classic-front-end-mvc-with-vanilla-javascript-7eee550bc702'],['Todo app example on different frameworks','http://todomvc.com/'],['Flux', 'https://facebook.github.io/flux/'], ['Reflux', 'https://github.com/reflux/refluxjs'], ['Redux', 'https://redux.js.org/']]},
  { id: 8, name: 'lesson', date: '12/10/18', lectureTitle: 'React.js/JSX', lecturerName: 'Roman Mahotskyi', description: 'In computing, React is a JavaScript library for building user interfaces. It is maintained by Facebook and a community of individual developers and companies. React can be used as a base in the development of single-page or mobile applications', materials: [['React tutorial','https://reactjs.org/tutorial/tutorial.html'],['React patterns','https://github.com/planningcenter/react-patterns'],['Video: beginners guide to React', 'https://egghead.io/courses/the-beginner-s-guide-to-react'], ['Video: getting started with Redux', 'https://egghead.io/courses/getting-started-with-redux']]},
  { id: 9, name: 'lesson', date: '12/12/18', lectureTitle: 'Angular', lecturerName: 'Kostiantyn Kubusha and Ihor Silantiev', description: 'Angular is a TypeScript-based open-source front-end web application platform led by the Angular Team at Google and by a community of individuals and corporations', materials: [['AngularJS API Reference','https://docs.angularjs.org/api'],['Creating AngularJS Custom Directives','https://weblogs.asp.net/dwahlin/creating-custom-angularjs-directives-part-i-the-fundamentals'],['Angular 1 Style Guide', 'https://github.com/johnpapa/angular-styleguide/blob/master/a1/README.md']]},
  { id: 10, name: 'lesson', date: '12/15/18', lectureTitle: 'NodeJS/ExpressJS', lecturerName: 'Yuriy Teslenko', description: 'Node.js is an open-source, cross-platform JavaScript run-time environment that executes JavaScript code outside of a browser.', materials: [['NodeJs Documentation','https://nodejs.org/en/docs/'],['RisingStack','https://blog.risingstack.com/']]}

];
