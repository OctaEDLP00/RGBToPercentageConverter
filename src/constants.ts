import { $, $$ } from './lib/dom'

const $inputRed = $<'input'>('#red')
const $inputRedPercentage = $<'input'>('#red-percentage')
const $paragraphRedError = $<'p'>('#errorRedInput')
const $inputGreen = $<'input'>('#green')
const $inputGreenPercentage = $<'input'>('#green-percentage')
const $paragraphGreenError = $<'p'>('#errorGreenInput')
const $inputBlue = $<'input'>('#blue')
const $inputBluePercentage = $<'input'>('#blue-percentage')
const $paragraphBlueError = $<'p'>('#errorBlueInput')
const $buttonConverter = $<'button'>('#converter')
const $colorPreview = $<'s'>('#colorPreview')
const $inputRGBToPercentage = $<'input'>('#rgbToPercentage')
const i18n = $$('[data-i18n]')

export {
  $inputBlue,
  $inputBluePercentage,
  $inputRed,
  $inputRedPercentage,
  $inputGreen,
  $inputGreenPercentage,
  $buttonConverter,
  $colorPreview,
  $inputRGBToPercentage,
  $paragraphRedError,
  $paragraphGreenError,
  $paragraphBlueError,
  i18n,
}
