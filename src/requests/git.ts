import axios from 'axios'

const url = 'https://api.github.com/search/repositories?'

export async function getRandRepoByLanguage(language: string) {
  try {
    const response = await axios.get(
      `${url}q=language:${language}&per_page=1&page=${Math.round(Math.random() * 1000)}`,
    )
    return response.data.items[0]
  } catch (error) {
    console.error(error)
  }
}
