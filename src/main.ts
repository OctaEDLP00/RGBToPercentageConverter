import { RGBToPercentage, RGBToHEX } from './lib/rgb'
import {
  $buttonConverter,
  $inputRed,
  $inputGreen,
  $inputBlue,
  $inputRedPercentage,
  $inputGreenPercentage,
  $inputBluePercentage,
  $inputRGBToPercentage,
  $colorPreview,
  $paragraphBlueError,
  $paragraphGreenError,
  $paragraphRedError,
  i18n,
} from './constants'
// import { testRegex } from './lib/testRegex'
import { useTranslation } from './i18n/utils.ts'
import { defaultLang, languages } from './i18n/ui.ts'
import type { KeyTranslation } from './i18n/types.d.ts'
import './components/Toast'

if ($colorPreview == null) throw Error('')
$colorPreview.setAttribute('data-color', '#000000')

function getUserLang() {
  return (navigator.language || navigator.languages[0] || defaultLang).split(
    '-',
  )[0] as keyof typeof languages
}

const t = useTranslation(getUserLang())

Array.from(i18n).map(ui => {
  const { i18n } = ui.dataset
  const translation = t(i18n as KeyTranslation)
  console.log(translation)
  if (translation.startsWith('<svg')) {
    ui.innerHTML = translation
  } else {
    ui.textContent = translation
  }
})

if ($buttonConverter == null) throw Error('')
function handleClick() {
  // @ts-ignore
  let rgbPercentage: Record<'r' | 'g' | 'b', number> | null = null
  // let error: string | null = null

  if ($inputRed == null) throw Error('')
  if ($inputGreen == null) throw Error('')
  if ($inputBlue == null) throw Error('')
  if ($inputRedPercentage == null) throw Error('')
  if ($inputGreenPercentage == null) throw Error('')
  if ($inputBluePercentage == null) throw Error('')
  if ($paragraphRedError == null) throw Error('')
  if ($paragraphGreenError == null) throw Error('')
  if ($paragraphBlueError == null) throw Error('')
  if ($inputRGBToPercentage == null) throw Error('')
  if ($colorPreview == null) throw Error('')

  /*   if (!testRegex($inputRed.value)) {
    error = `the input size is less than or greater than three. Length: ${$inputRed.value.length}`
    $paragraphRedError.textContent = error
  } else {
    $paragraphRedError.textContent = ''
    error = null
  }

  if (!testRegex($inputGreen.value)) {
    error = `the input size is less than or greater than three. Length: ${$inputGreen.value.length}`
    $paragraphGreenError.textContent = error
  } else {
    $paragraphGreenError.textContent = ''
    error = null
  }

  if (!testRegex($inputGreen.value)) {
    error = `the input size is less than or greater than three. Length:  ${$inputBlue.value.length}`
    $paragraphBlueError.textContent = error
  } else {
    $paragraphBlueError.textContent = ''
    error = null
  } */

  const percentage = RGBToPercentage(
    parseInt($inputRed.value),
    parseInt($inputGreen.value),
    parseInt($inputBlue.value),
  )

  rgbPercentage = percentage

  $inputRedPercentage.value = percentage.r.toString().concat('%')
  $inputGreenPercentage.value = percentage.g.toString().concat('%')
  $inputBluePercentage.value = percentage.b.toString().concat('%')

  $inputRGBToPercentage.value = `red: ${percentage['r']}% green: ${percentage['g']}% blue: ${percentage['b']}%`

  const hex = RGBToHEX($inputRed.value, $inputGreen.value, $inputBlue.value)

  $colorPreview.setAttribute('data-color', hex)
  $colorPreview.style.setProperty('--bg-hex-color', hex)
}

$buttonConverter.addEventListener('click', handleClick)

let clearToast
function showToast() {
  const color = $colorPreview?.getAttribute('data-color')
  const toast = document.createElement('toast-wc')
  if (color == null) {
    throw Error('')
  }
  toast.setAttribute('message', `Copied color ${color}`)
  toast.setAttribute('position', 'bottom-right')
  document.body.insertAdjacentElement('afterbegin', toast)

  navigator.clipboard.writeText(color)
  clearToast = setTimeout(() => {
    toast.remove()
  }, 2000)
}

clearTimeout(clearToast)

$colorPreview?.addEventListener('click', showToast)
