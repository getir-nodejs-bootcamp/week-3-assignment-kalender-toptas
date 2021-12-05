function validate(obj, requiredKeys) {
  let isValid = true;

  requiredKeys.forEach((key) => {
    const hasKey = Object.keys(obj).includes(key);

    if (!hasKey) isValid = false;
  });

  return isValid;
}

module.exports = validate;

