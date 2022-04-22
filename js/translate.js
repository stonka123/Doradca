var linguJSON = {
	languages: [
		{
			lang_name: 'Polski',
			lang_code: 'pl',
			url_pattern: '?',
		},
		{
			lang_name: 'English',
			lang_code: 'en',
			url_pattern: '?',
		},
		{
			lang_name: 'German',
			lang_code: 'de',
			url_pattern: '?',
		},
	],
	custom_lang_switcher_container_id: 'dropdown',

	custom_lang_switcher_html:
		' <button class="dropbtn">Dropdown</button><div class="dropdown-content"><a href="http://127.0.0.1:5500/index.html?lang=pl#">POL</a> |  <a href="http://127.0.0.1:5500/?lang=en#">EN</a> | <a href="http://127.0.0.1:5500/?lang=de#">DE</a></div>',

	translated_segments: [
		{
			source: 'Doradca kredytowy',
			target_en: 'Credit Expert',
			target_de: 'Dojczland kredyt',
		},
	],
}
