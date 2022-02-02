function About() {
  return (
    <div>
      <h1 className="text-6xl mb-4">Github Finder</h1>
      <p className="mb-4 text-2xl font-light">
        A react app to search Github profiles and see profile details. This
        project is part of the{' '}
        <a href="https://www.udemy.com/course/react-front-to-back-2022/">
          React Front To Back
        </a>{' '}
        Udemy Course by{' '}
        <strong>
          <a href="https://traversymedia.com"> Brad Traversy</a>
        </strong>
        .
      </p>
      <p className="text-lg text-gray-400">
        Version <span className="text-white">1.0.0</span>
      </p>
    </div>
  );
}

export default About;
