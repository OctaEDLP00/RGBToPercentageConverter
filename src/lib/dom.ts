/**
 *
 */
const $ = <K extends keyof HTMLElementTagNameMap>(
  selectors: string,
  ctx: Document = document,
): HTMLElementTagNameMap[K] | null => ctx.querySelector(selectors)

/**
 *
 */
const $$ = <K extends keyof HTMLElementTagNameMap>(
  selectors: string,
  ctx: Document = document,
): NodeListOf<HTMLElementTagNameMap[K]> => ctx.querySelectorAll(selectors)

const print = console.log
const println = console.dir

export { $, $$, print, println }
