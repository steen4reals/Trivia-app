function Screen({ question }) {
	return <div>{question.replace(/&#039|&rsquo;|&quot;|&#39;|;/g, '')}</div>;
}

export default Screen;
