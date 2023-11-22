import { classNames } from "./classNames"

describe('classNames', () => {
  test('test whith only arg', () => {
    expect(classNames('someClass')).toBe('someClass')
  })
  test('test with additional class ', () => {
    const expected = 'someClass class1 class2'
    expect(classNames('someClass', {}, ['class1', 'class2'])).toBe(expected)
  })
  test('test with mod ', () => {
    const expected = 'someClass class1 class2 dragbled'
    expect(classNames('someClass', { dragbled: true, readonly: false }, ['class1', 'class2'])).toBe(expected)
  })
})
