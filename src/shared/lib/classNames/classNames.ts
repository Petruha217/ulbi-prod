type Mods = Record<string, boolean | string>

export function classNames (blockClass: string, mods: Mods = {}, addClasses: string[] = []): string {
  return [
    blockClass,
    ...addClasses.filter(Boolean),
    ...Object.entries(mods)
      .filter(([className, value]) => (value))
      .map(([className, value]) => (className))
  ].join(' ')
}
