export async function getPaths() {
  return ['/about']
}

export function Page({ pathname }) {
  return `<h1>About</h1>`
}
