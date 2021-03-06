import React from 'react';
import { renderToStaticMarkup } from 'react-dom/server';
import { StaticRouter } from 'react-router';
import { Helmet } from 'react-helmet';
import App from 'components/App';


export default function(locals) {
	const app = renderToStaticMarkup(
		<StaticRouter location={locals.path}>
			<App />
		</StaticRouter>
	);

	const helmet = Helmet.renderStatic();
	const regexp = / data-react-helmet="true"/g;

	return `<!doctype html>
<html lang="en">
	<head>	
		<meta charset="utf-8">
		<meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
		<link rel="icon" type="image/png" sizes="192x192" href="/icon.png">
		<link rel="apple-touch-icon" type="image/png" sizes="192x192" href="/icon.png">
		<link href="/main.css" rel="stylesheet" />
		${helmet.title.toString().replace(regexp, '')}
		${helmet.meta.toString().replace(regexp, '')}
		${helmet.link.toString().replace(regexp, '')}

		<!-- Global site tag (gtag.js) - Google Analytics -->
		<script async src="https://www.googletagmanager.com/gtag/js?id=UA-110926016-1"></script>
		<script>
		  window.dataLayer = window.dataLayer || [];
		  function gtag(){dataLayer.push(arguments);}
		  gtag('js', new Date());

		  gtag('config', 'UA-110926016-1');
		</script>
	</head>
	<body>
		${app}
	</body>
</html>`;
}
