export function firstNameValidation(value: string): string {
  if (value.length && value.length < 2) return 'Too short'
  return ''
}

export function emailValidation(value: string): string {
  const testValue = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i.test(value)

  if (value.length && !testValue) return 'Not valid email'
  return ''
}