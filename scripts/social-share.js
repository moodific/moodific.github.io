/*  https://github.com/bradvin/social-share-urls  */


LFoSocialMediaShare = {}
LFoSocialMediaShare.shares = {
	'sms'              : {'name' : 'SMS',             'fa-icon' : '<i class="fas fa-sms"></i>'},
	'email'            : {'name' : 'E-mail',          'fa-icon' : '<i class="fas fa-envelope"></i>'},
	'gmail'            : {'name' : 'GMail',           'fa-icon' : '<i class="fas fa-envelope-open-text"></i>'},
	'skype'            : {'name' : 'Skype',           'fa-icon' : '<i class="fab fa-skype"></i>'},
	'threema'          : {'name' : 'Threema',         'fa-icon' : ''},
	'telegram.me'      : {'name' : 'Telegram.me',     'fa-icon' : '<i class="fab fa-telegram-plane"></i>'},
	'facebook'         : {'name' : 'FaceBook',        'fa-icon' : '<i class="fab fa-facebook-square"></i>'},
	'twitter'          : {'name' : 'Twitter',         'fa-icon' : '<i class="fab fa-twitter-square"></i>'},
	'reddit'           : {'name' : 'Reddit',          'fa-icon' : '<i class="fab fa-reddit-square"></i>'},
	'digg'             : {'name' : 'Digg',            'fa-icon' : '<i class="fab fa-digg"></i>'},
	'pinterest'        : {'name' : 'Pinterest',       'fa-icon' : '<i class="fab fa-pinterest-square"></i>'},
	'tumblr'           : {'name' : 'Tumblr',          'fa-icon' : '<i class="fab fa-tumblr-square"></i>'},
	'linkedin'         : {'name' : 'LinkedIn',        'fa-icon' : '<i class="fab fa-linkedin"></i>'},
	'blogger'          : {'name' : 'Blogger',         'fa-icon' : '<i class="fab fa-blogger"></i>'},
	'livejournal'      : {'name' : 'LiveJournal',     'fa-icon' : ''},
	'evernote'         : {'name' : 'EverNote',        'fa-icon' : '<i class="fab fa-evernote"></i>'},
	'add.this'         : {'name' : 'AddThis',         'fa-icon' : ''},
	'getpocket'        : {'name' : 'Pocket',          'fa-icon' : '<i class="fab fa-get-pocket"></i>'},
	'buffer'           : {'name' : 'Buffer',          'fa-icon' : '<i class="fab fa-buffer"></i>'},
	'flipboard'        : {'name' : 'FlipBoard',       'fa-icon' : '<i class="fab fa-flipboard"></i>'},
	'instapaper'       : {'name' : 'InstaPaper',      'fa-icon' : ''},
	'flattr'           : {'name' : 'Flattr',          'fa-icon' : ''},
	'diaspora'         : {'name' : 'Diaspora',        'fa-icon' : '<i class="fab fa-diaspora"></i>'},
	'qzone'            : {'name' : 'QZone',           'fa-icon' : ''},
	'hacker.news'      : {'name' : 'HackerNews',      'fa-icon' : '<i class="fab fa-hacker-news-square"></i>'},
	'vk'               : {'name' : 'VK',              'fa-icon' : '<i class="fab fa-vk"></i>'},
	'weibo'            : {'name' : 'Weibo',           'fa-icon' : '<i class="fab fa-weibo"></i>'},
	'surfingbird.ru'   : {'name' : 'SurfingBird.ru',  'fa-icon' : ''},
	'ok.ru'            : {'name' : 'OK.ru',           'fa-icon' : ''},
	'douban'           : {'name' : 'Douban',          'fa-icon' : ''},
	'xing'             : {'name' : 'Xing',            'fa-icon' : '<i class="fab fa-xing-square"></i>'},
	'yahoo'            : {'name' : 'Yahoo',           'fa-icon' : '<i class="fab fa-yahoo"></i>'},
	'line.me'          : {'name' : 'Line.me',         'fa-icon' : ''},
	'renren'           : {'name' : 'RenRen',          'fa-icon' : '<i class="fab fa-renren"></i>'},
	'google.bookmarks' : {'name' : 'GoogleBookmarks', 'fa-icon' : ''}
};
LFoSocialMediaShare.getCodes = function() {
	return Object.keys(shares);
};
LFoSocialMediaShare.getName = function(code) {
	return this.shares[code]['name'];
};
LFoSocialMediaShare.getIcon = function(code) {
	return this.shares[code]['fa-icon'];
};
LFoSocialMediaShare.shareURL = function(site, args) {
	return allShareURLs(args)[site];
};
LFoSocialMediaShare.allShareURLs = function(args) {
	const validargs = [
		'url',
		'title',
		'image',
		'desc',
		'appid',
		'redirecturl',
		'via',
		'hashtags',
		'provider',
		'language',
		'userid',
		'category',
		'phonenumber',
		'emailaddress',
		'ccemailaddress',
		'bccemailaddress',
	];

	for (var i = 0; i < validargs.length; i++) {
		const validarg = validargs[i];
		if (!args[validarg]) {
			args[validarg] = '';
		}
	}

	const url               = fixedEncodeURIComponent(args.url);
	const title             = fixedEncodeURIComponent(args.title);
	const image             = fixedEncodeURIComponent(args.image);
	const desc              = fixedEncodeURIComponent(args.desc);
	const app_id            = fixedEncodeURIComponent(args.appid);
	const redirect_url      = fixedEncodeURIComponent(args.redirecturl);
	const via               = fixedEncodeURIComponent(args.via);
	const hash_tags         = fixedEncodeURIComponent(args.hashtags);
	const provider          = fixedEncodeURIComponent(args.provider);
	const language          = fixedEncodeURIComponent(args.language);
	const user_id           = fixedEncodeURIComponent(args.userid);
	const category          = fixedEncodeURIComponent(args.category);
	const phone_number      = fixedEncodeURIComponent(args.phonenumber);
	const email_address     = fixedEncodeURIComponent(args.emailaddress);
	const cc_email_address  = fixedEncodeURIComponent(args.ccemailaddress);
	const bcc_email_address = fixedEncodeURIComponent(args.bccemailaddress);

	var text = title;

	if (desc) {
		text += '%20%3A%20';    // This is just this, " : "
		text += desc;
	}

	return {
		'sms'              : 'sms:' + phone_number + '?body=' + text,
		'email'            : 'mailto:' + email_address + '?subject=' + title + '&body=' + desc,
		'gmail'            : 'https://mail.google.com/mail/?view=cm&to=' + email_address + '&su=' + title + '&body=' + url + '&bcc=' + bcc_email_address + '&cc=' + cc_email_address,
		'skype'            : 'https://web.skype.com/share?url=' + url + '&text=' + text,
		'threema'          : 'threema://compose?text=' + text + '&id=' + user_id,
		'telegram.me'      : 'https://t.me/share/url?url=' + url + '&text=' + text + '&to=' + phone_number,
		'facebook'         : 'http://www.facebook.com/sharer.php?u=' + url,
		'twitter'          : 'https://twitter.com/intent/tweet?url=' + url + '&text=' + text + '&via=' + via + '&hashtags=' + hash_tags,
		'reddit'           : 'https://reddit.com/submit?url=' + url + '&title=' + title,
		'digg'             : 'http://digg.com/submit?url=' + url + '&title=' + text,
		'pinterest'        : 'http://pinterest.com/pin/create/button/?url=' + url ,
		'tumblr'           : 'https://www.tumblr.com/widgets/share/tool?canonicalUrl=' + url + '&title=' + title + '&caption=' + desc + '&tags=' + hash_tags,
		'linkedin'         : 'https://www.linkedin.com/shareArticle?mini=true&url=' + url + '&title=' + title + '&summary=' + text + '&source=' + provider,
		'blogger'          : 'https://www.blogger.com/blog-this.g?u=' + url + '&n=' + title + '&t=' + desc,
		'livejournal'      : 'http://www.livejournal.com/update.bml?subject=' + text + '&event=' + url,
		'evernote'         : 'http://www.evernote.com/clip.action?url=' + url + '&title=' + text,
		'add.this'         : 'http://www.addthis.com/bookmark.php?url=' + url,
		'getpocket'        : 'https://getpocket.com/edit?url=' + url,
		'buffer'           : 'https://buffer.com/add?text=' + text + '&url=' + url,
		'flipboard'        : 'https://share.flipboard.com/bookmarklet/popout?v=2&title=' + text + '&url=' + url, 
		'instapaper'       : 'http://www.instapaper.com/edit?url=' + url + '&title=' + title + '&description=' + desc,
		'flattr'           : 'https://flattr.com/submit/auto?user_id=' + user_id + '&url=' + url + '&title=' + title + '&description=' + text + '&language=' + language + '&tags=' + hash_tags + '&hidden=HIDDEN&category=' + category,
		'diaspora'         : 'https://share.diasporafoundation.org/?title=' + title + '&url=' + url,
		'qzone'            : 'http://sns.qzone.qq.com/cgi-bin/qzshare/cgi_qzshare_onekey?url=' + url,
		'hacker.news'      : 'https://news.ycombinator.com/submitlink?u=' + url + '&t=' + title,
		'vk'               : 'http://vk.com/share.php?url=' + url + '&title=' + title + '&comment=' + desc,
		'weibo'            : 'http://service.weibo.com/share/share.php?url=' + url + '&appkey=&title=' + title + '&pic=&ralateUid=',
		'surfingbird.ru'   : 'http://surfingbird.ru/share?url=' + url + '&description=' + desc + '&screenshot=' + image + '&title=' + title,
		'ok.ru'            : 'https://connect.ok.ru/dk?st.cmd=WidgetSharePreview&st.shareUrl=' + url,
		'douban'           : 'http://www.douban.com/recommend/?url=' + url + '&title=' + text,
		'xing'             : 'https://www.xing.com/spi/shares/new?url=' + url,
		'yahoo'            : 'http://compose.mail.yahoo.com/?to=' + email_address + '&subject=' + title + '&body=' + text,
		'line.me'          : 'https://lineit.line.me/share/ui?url=' + url + '&text=' + text,
		'renren'           : 'http://widget.renren.com/dialog/share?resourceUrl=' + url + '&srcUrl=' + url + '&title=' + text + '&description=' + desc,
		'google.bookmarks' : 'https://www.google.com/bookmarks/mark?op=edit&bkmk=' + url + '&title=' + title + '&annotation=' + text + '&labels=' + hash_tags + ''
	};
};
LFoSocialMediaShare.fixedEncodeURIComponent = function(str) {
	return encodeURIComponent(str).replace(/[!'()*]/g, function(c) {
		return '%' + c.charCodeAt(0).toString(16);
	});
};