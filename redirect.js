async function init() {
	var host = window.location.host;
	var subdomain = host.split('.')[0];
	if(subdomain == "www") {
		window.location.replace(`https://breezewiki.com/`);
	} else {
		window.location.replace(`https://breezewiki.com/${subdomain}${window.location.pathname}`)
	}
}

init();
