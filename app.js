require('./util');

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

const RELEASES_URL = BASE_URL + "releases";
const TRENDING_URL = BASE_ANIME_URL + "trending";

const ANIME_INFO_URL = BASE_ANIME_URL + "%s";
const DETAILED_ANIME_URL = BASE_ANIME_URL + "%s/detailed";

/* Search URL Params
 * {search} - Required
 * {sb} - Optional [Note: SB stands for Search Bar, this causes results to be limited.]
 */
const ANIME_SEARCH_URL = BASE_ANIME_URL + "search?search=%s";
const ANIME_SEARCH_URL_LIMITED = ANIME_SEARCH_URL + "&sb=true";

// CDN -> Holds Masterani CDN info for image loading.
const CDN = {
    // TODO: Utilize the fact multiple res are available.

    // 3 - Lowest res wallpaper.
  	WALLPAPER_URL: "https://cdn.masterani.me/wallpaper/2/",

    // 2 - 2nd lowest res poster.
    POSTER_URL: "https://cdn.masterani.me/poster/2/",
    // 1 - Highest res poster.
    POSTER_MAXSIZE_URL: "https://cdn.masterani.me/poster/1/",

    // Detailed Anime - Poster URL.
    DETAILED_POSTER_URL: "https://cdn.masterani.me/poster/",

    // Episode Thumbnail
    EPISODE_THUMBNAIL_URL: "https://cdn.masterani.me/episodes/"
}


let masterani = {
	
}