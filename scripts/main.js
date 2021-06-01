
	
	
function LFoStorageData(key, dflt_val) {
	var items = dflt_val;
	var data = window.localStorage.getItem('com.moodific.' + key);
	if (data) {
		try {
			items = JSON.parse(data);
		}
		catch(err) {
			items = dflt_val;
		}
	} else {
		items = dflt_val;
	}
	return items;
}
function LFoLocalStorageSave(key, val) {
	window.localStorage.setItem('com.moodific.' + key, JSON.stringify(val));
}
	



	
	
function LFoWishlistToggle(uid) {
	var favorites = LFoStorageData('Favorites', []);

	var idx = favorites.indexOf(uid);
	var state = false;
	if (idx == -1) {
		favorites.push(uid);
		state = true;
	} else {
		favorites.splice(idx, 1);
	}
	LFoLocalStorageSave('Favorites', favorites);

	return state;
}
function LFoWishlistState(uid) {
	var list = LFoStorageData('Favorites', []);
	return list.includes(uid);
}
function LFoWishlistIcons() {
	$('.lfo-wishlist').each(function(idx , el){
		var state = LFoWishlistState($(el).attr('lfo-product-uid'));
		if (state) {
			$(el).addClass('lfo-icon-favorite-on');
			$(el).removeClass('lfo-icon-favorite-off');
		} else {
			$(el).addClass('lfo-icon-favorite-off');
			$(el).removeClass('lfo-icon-favorite-on');
		}
	});
}
function LFoWishlistCounts() {
	var favorites = LFoStorageData('Favorites', []);

	$('.lfo-wishlist-count').html(favorites.length);
}
	



	
	
function LFoLastViewedSetState(uid, state) {
	var items = LFoStorageData('LastViewedItems', []);

	var idx = items.indexOf(uid);
	if (idx == -1) {
		if (state) items.push(uid);
	} else {
		if (!state) items.splice(idx, 1);
	}
	LFoLocalStorageSave('LastViewedItems', items);
}
function LFoLastViewedState(uid) {
	var list = LFoStorageData('LastViewedItems', []);
	return list.includes(uid);
}
	


