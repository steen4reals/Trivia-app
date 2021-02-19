function Screen({ question }) {
	return <div><p>{question.replace(/&#039|&rsquo;|&quot;|&#39;|;/g, '')}</p></div>;
}

export default Screen;
