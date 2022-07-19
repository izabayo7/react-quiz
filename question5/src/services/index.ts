export const API_URL = "https://api.datamuse.com/words";


class AppServices {
  async getWordsThatRhymeLike(word:string) {
    const res = await fetch(`${API_URL}/?rel_rhy=${word}`, {
        method: 'get',
        headers: {
            'Accept': 'application/json, text/plain, */*',
            'Content-Type': 'application/json'
        }
    });
    return res.json();
  }
}

export default new AppServices();