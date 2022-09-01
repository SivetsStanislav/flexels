import { tags } from "../const/tags";
import { Random } from "../common/random";

export class TagsRepository {
    static #tags = tags;

    static getAllTags() {
        return Array.from(this.#tags)
    }

    static getRandomTags(count = 8) {
        let randomTags = new Set();

        while (randomTags.size !== count) {
            randomTags.add(this.getRandomTag());
        }

        return Array.from(randomTags);
    }

    static getRandomTag() {
        return Random.getRandomItem(this.#tags);
    }
}
