import { pexelsApiClient } from "./pexelsApiClient";
//import { TagsRepository } from "./tagsRepository";
import { Random } from "../common/random";

export class PhotosRepository {
    static #apiClient = pexelsApiClient;
    static #baseUrl = 'https://api.pexels.com/v1';

    static #formUrl(urlPath) {
        return `${this.#baseUrl}/${urlPath}`;
    }

    static async getSearchingPhotos(query) {
        const url = this.#formUrl(`search?query=${query.query}`);
        const response = await this.#apiClient.get(url);
        const { photos } = response.data;

        return photos;
    }

    static async getRandomPhoto() {
        //const tag = TagsRepository.getRandomTag();
        const url = this.#formUrl(`search?query=nature&orientation=landscape`);
        const response = await this.#apiClient.get(url);

        const { photos } = response.data;
        const randomPhoto = Random.getRandomItem(photos);

        return randomPhoto.src.landscape;
    }
}
