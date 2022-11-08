export function VssIsValidEmail (val) {
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  if (emailPattern.test(val)) {
    return true
  } else {
    return false
  }
}

export function VssIsValidTelephone (val) {
  const telephonePattern = /^\+\d{7,15}$/
  if (telephonePattern.test(val)) {
    return true
  } else {
    return false
  }
}

export function VssIsValidLength (val, min, max) {
  if (val.length >= min && val.length <= max) {
    return true
  } else {
    return false
  }
}

export function VssIsValidConfirmation (val1, val2) {
  if (val1 === val2) {
    return true
  } else {
    return false
  }
}

export function VssIsGoodPassword (val) {
  return (
    val.length >= 10 &&
    /[a-z]/.test(val) &&
    /[A-Z]/.test(val) &&
    /[0-9]/.test(val) &&
    /[!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?]/.test(val)
  );
}