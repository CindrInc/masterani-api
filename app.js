require('./util');
let request = require('request');

const BASE_URL = "https://www.masterani.me/api/";
const BASE_ANIME_URL = BASE_URL + "anime/";

/* Filter URL Params
 * {order} - Required
 * {type} - Optional
 * {status} - Optional
 * {page} - Required
 */

const BASE_FILTER_URL = BASE_ANIME_URL + "filter?order=%s";
const FILTER_TYPE = "&type=%s";
const FILTER_STATUS = "&status=%s";
const FILTER_PAGE = "&page=%s";

const sort = {
	order: {
		SCORE_HIGH: "score_desc", //Score High
		SCORE_LOW: "score", //Score Low
		TITLE_ASCEND: "title", //A - Z
		TITLE_DESCEND: "title_desc" //Z - A
	},
	type: {
		TV_SERIES: 0,
		OVA: 1,
		MOVIE: 2,
		SPECIAL: 3,
		ONA: 4
	},
	status: {
		COMPLETED: 0,
		ONGOING: 1,
		UN_AIRED: 2
	}
}

/**
 * [RELEASES_URL description]
 * @type {[type]}
 */
const RELEASES_URL = BASE_URL + "releases";
const TRENDING_URL = BASE_ANIME_URL + "trending";

/**
 * requires id of anime
 * @type {[type]}
 */
const ANIME_INFO_URL = BASE_ANIME_URL + "%s";
const DETAILED_ANIME_URL = BASE_ANIME_URL + "%s/detailed";

/* Search URL Params
 * {search} - Required
 * {sb} - Optional [Note: SB stands for Search Bar, this causes results to be limited.]
 */
const ANIME_SEARCH_URL = BASE_ANIME_URL + "search?search=%s";
const ANIME_SEARCH_URL_LIMITED = ANIME_SEARCH_URL + "&sb=true";

// CDN -> Holds Masterani CDN info for image loading.
const imageCDN = {
    WALLPAPER: {
    	LOW: "https://cdn.masterani.me/wallpaper/3/",
    	MEDIUM: "https://cdn.masterani.me/wallpaper/2/",
    	HIGH: "https://cdn.masterani.me/wallpaper/1/"
    },
    POSTER: {
    	LOW: "https://cdn.masterani.me/poster/3/",
    	MEDIUM: "https://cdn.masterani.me/poster/2/",
    	HIGH: "https://cdn.masterani.me/poster/1/",
    	VERY_HIGH: "https://cdn.masterani.me/poster/"
    },
    THUMBNAIL: "https://cdn.masterani.me/episodes/"
}


let masterani = {
	/**
	 * search for anime
	 * @param  {[string]}   query    [search term]
	 * @param  {Function} callback [returns search object]
	 */
	search: function(query, callback) {
		request(ANIME_SEARCH_URL.format(query), (err, res, body) => {
			if(err) {
				callback(err);
				return;
			}

			callback(null, JSON.parse(body));
		});
	},
	search_limited: function(query, callback) {

	},
	anime: function(id) {

	}
}

module.exports = masterani;

