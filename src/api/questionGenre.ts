export enum Genre {
	ANY = 0,
	GENERAL_KNOWLEDGE = 9,
	BOOKS = 10,
	FILM = 11,
	MUSIC = 12,
	THEATRES = 13,
	TELEVISION = 14,
	VIDEO_GAMES = 15,
	BOARD_GAMES = 16,
	NATURE_SCIENCE = 17,
	COMPUTER_SCIENCE = 18,
	MATHEMATICS = 19,
	MYTHOLOGY = 20,
	SPORTS = 21,
	GEOGRAPHY = 22,
	HISTORY = 23,
	POLITICS = 24,
	ART = 25,
	CELEBRITIES = 26,
	ANIMALS = 27,
	VEHICLES = 28,
	COMICS = 29,
	GADGETS = 30,
	ANIME_MANGA = 31,
	CARTOONS_ANIMATIONS = 32,
}

type Dictionary = { [key: string]: number };

export const genreMap: Dictionary = {
	Any: 0,
	'General Knowledge': 9,
	Books: 10,
	Film: 11,
	Music: 12,
	Theatres: 13,
	Television: 14,
	'Video Games': 15,
	'Board Games': 16,
	'Nature Science': 17,
	'Computer Science': 18,
	Mathematics: 19,
	Mythology: 20,
	Sports: 21,
	Geography: 22,
	History: 23,
	Politics: 24,
	Art: 25,
	Celebrities: 26,
	Animals: 27,
	Vehicles: 28,
	Comics: 29,
	Gadgets: 30,
	'Anime & Manga': 31,
	'Cartoons & Animation': 32,
};