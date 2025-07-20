import type { KeyLang, KeyTranslation, UI } from './types.d.ts'

export const languages = {
  es: 'Español',
  en: 'English',
  fr: 'Français',
}

/** @type {KeyLang} */
export const defaultLang: KeyLang = 'es'

/**
 * Respect the following contract for translation text string
 * Respetar el siguiente contrato para los strings para la traduccion
 * @example '<component.prop>'
 * In case of adding translation to a <ul> or <ol> add context to the translation key
 * En caso de agregar traduccion a un <ul> o <ol> agregar context a la key de traduccion
 * @example '<component.(ul|ol).prop>'
 */
export const ui = {
  en: {
    'app.title': 'RGB to Percentage Converter',
    'button.convert': 'Convert to Percentage',
    'card.subtitle': 'Enter RGB values and get the equivalent percentages',
    'card.title': 'Color Converter',
    'examples.title':
      '<svg class="text-primary mr-2 h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><g fill="currentColor"><path d="M20.385 2.879a3 3 0 0 0-4.243 0L14.02 5l-.707-.708a1 1 0 1 0-1.414 1.415l5.657 5.656A1 1 0 0 0 18.97 9.95l-.707-.707l2.122-2.122a3 3 0 0 0 0-4.242"/><path fill-rule="evenodd" d="M11.93 7.091L4.152 14.87a3 3 0 0 0-.587 3.415L2 19.85l1.414 1.415l1.565-1.566a3 3 0 0 0 3.415-.586l7.778-7.778zm1.414 4.243L11.93 9.92l-6.364 6.364a1 1 0 0 0 1.414 1.414z" clip-rule="evenodd"></path></g></svg> Common Examples',
    'examples.black': 'Black:',
    'examples.gray': 'Medium Gray:',
    'examples.red': 'Red:',
    'examples.white': 'White:',
    'footer.subtitle': 'Free tool for designers and developers',
    'footer.title': 'RGB to Percentage Converter',
    'header.title': 'RGB to Percentage Converter',
    'info.how':
      '<svg class="text-primary mr-2 h-5 w-5" xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" viewBox="0 0 24 24" ><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg> How does it work?',
    'info.line1': '• RGB values range from 0 to 255',
    'info.line2': '• Percentages range from 0% to 100%',
    'info.line3': '• Formula: (RGB value ÷ 255) × 100',
    'info.line4': '• Example: 128 = (128 ÷ 255) × 100 = 50.2%',
    'label.blue': 'Blue (B)',
    'label.green': 'Green (G)',
    'label.preview': 'Color Preview',
    'label.red': 'Red (R)',
    'output.blue': 'Blue (%)',
    'output.combined': 'RGB as Percentages',
    'output.green': 'Green (%)',
    'output.red': 'Red (%)',
    'section.input': 'RGB Values',
    'section.output': 'Result',
  },
  es: {
    'app.title': 'Convertidor RGB a Porcentaje',
    'button.convert': 'Convertir a Porcentaje',
    'card.subtitle': 'Ingresa los valores RGB y obtén los porcentajes equivalentes',
    'card.title': 'Convertidor de Color',
    'examples.title':
      '<svg class="text-primary mr-2 h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><g fill="currentColor"><path d="M20.385 2.879a3 3 0 0 0-4.243 0L14.02 5l-.707-.708a1 1 0 1 0-1.414 1.415l5.657 5.656A1 1 0 0 0 18.97 9.95l-.707-.707l2.122-2.122a3 3 0 0 0 0-4.242"/><path fill-rule="evenodd" d="M11.93 7.091L4.152 14.87a3 3 0 0 0-.587 3.415L2 19.85l1.414 1.415l1.565-1.566a3 3 0 0 0 3.415-.586l7.778-7.778zm1.414 4.243L11.93 9.92l-6.364 6.364a1 1 0 0 0 1.414 1.414z" clip-rule="evenodd"></path></g></svg> Ejemplos comunes',
    'examples.black': 'Negro:',
    'examples.gray': 'Gris:',
    'examples.red': 'Rojo:',
    'examples.white': 'Blanco:',
    'footer.subtitle': 'Herramienta gratuita para diseñadores y desarrolladores',
    'footer.title': 'Convertidor RGB a Porcentaje',
    'header.title': 'Convertidor RGB a Porcentaje',
    'info.how':
      '<svg class="text-primary mr-2 h-5 w-5" xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" viewBox="0 0 24 24" ><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg> ¿Cómo funciona?',
    'info.line1': 'Los valores RGB van de 0 a 255',
    'info.line2': 'Los porcentajes van de 0% a 100%',
    'info.line3': 'Fórmula: (valor RGB ÷ 255) × 100',
    'info.line4': 'Ejemplo: 128 = (128 ÷ 255) × 100 = 50.2%',
    'label.blue': 'Azul (B)',
    'label.green': 'Verde (G)',
    'label.preview': 'Vista previa del color',
    'label.red': 'Rojo (R)',
    'output.blue': 'Azul (%)',
    'output.combined': 'RGB en porcentajes',
    'output.green': 'Verde (%)',
    'output.red': 'Rojo (%)',
    'section.input': 'Valores RGB',
    'section.output': 'Resultado',
  },
  fr: {
    'app.title': 'Convertisseur RGB en Pourcentage',
    'button.convert': 'Convertir en Pourcentage',
    'card.subtitle': 'Entrez les valeurs RGB et obtenez les pourcentages équivalents',
    'card.title': 'Convertisseur de Couleur',
    'examples.title':
      '<svg class="text-primary mr-2 h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><g fill="currentColor"><path d="M20.385 2.879a3 3 0 0 0-4.243 0L14.02 5l-.707-.708a1 1 0 1 0-1.414 1.415l5.657 5.656A1 1 0 0 0 18.97 9.95l-.707-.707l2.122-2.122a3 3 0 0 0 0-4.242"/><path fill-rule="evenodd" d="M11.93 7.091L4.152 14.87a3 3 0 0 0-.587 3.415L2 19.85l1.414 1.415l1.565-1.566a3 3 0 0 0 3.415-.586l7.778-7.778zm1.414 4.243L11.93 9.92l-6.364 6.364a1 1 0 0 0 1.414 1.414z" clip-rule="evenodd"></path></g></svg> Exemples courants',
    'examples.black': 'Noir :',
    'examples.gray': 'Gris moyen :',
    'examples.red': 'Rouge :',
    'examples.white': 'Blanc :',
    'footer.subtitle': 'Outil gratuit pour les designers et développeurs',
    'footer.title': 'Convertisseur RGB en Pourcentage',
    'header.title': 'Convertisseur RGB en Pourcentage',
    'info.how':
      '<svg class="text-primary mr-2 h-5 w-5" xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" viewBox="0 0 24 24" ><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg> Comment ça fonctionne ?',
    'info.line1': 'Les valeurs RGB vont de 0 à 255',
    'info.line2': 'Les pourcentages vont de 0% à 100%',
    'info.line3': 'Formule : (valeur RGB ÷ 255) × 100',
    'info.line4': 'Exemple : 128 = (128 ÷ 255) × 100 = 50,2%',
    'label.blue': 'Bleu (B)',
    'label.green': 'Vert (G)',
    'label.preview': 'Aperçu de la couleur',
    'label.red': 'Rouge (R)',
    'output.blue': 'Bleu (%)',
    'output.combined': 'RGB en pourcentages',
    'output.green': 'Vert (%)',
    'output.red': 'Rouge (%)',
    'section.input': 'Valeurs RGB',
    'section.output': 'Résultat',
  },
} satisfies UI<KeyLang, KeyTranslation>
