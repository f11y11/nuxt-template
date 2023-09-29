export default defineEventHandler(async (event) => {
  const body = await readBody(event) as {text: string}

  return body.text.split("").reverse().join("") // reverse text
})