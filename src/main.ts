import './style.css'
import { gsap } from 'gsap'

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  <div class="min-h-screen bg-gradient-to-br from-gray-900 to-gray-800 flex flex-col justify-center items-center">
    <div class="bg-white p-8 rounded-lg shadow-xl max-w-md w-full mx-4" id="card">
      <h1 class="text-4xl font-bold text-gray-800 mb-6 text-center">
        Vite + TypeScript + Tailwind + GSAP
      </h1>
      <p class="text-gray-600 mb-6 text-center">
        Edit <code class="bg-gray-100 p-1 rounded">src/main.ts</code> to test hot module replacement.
      </p>
      <button id="animate" class="w-full bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded transition-colors">
        Animate!
      </button>
    </div>
  </div>
`

const card = document.querySelector('#card')
const button = document.querySelector('#animate')

if (card && button) {
  button.addEventListener('click', () => {
    gsap.to(card, {
      rotation: 360,
      duration: 1,
      ease: 'power2.inOut',
      onComplete: () => {
        gsap.set(card, { rotation: 0 })
      }
    })
  })
}
