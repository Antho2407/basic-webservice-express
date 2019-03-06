interface Logo {
    size: string;
    url: string;
}

const isInvalidDimension = (size: string) => {
    const parsedValue = parseInt(size)
    return parsedValue < 64 || parsedValue > 128
}

const isValidSize = (logo: Logo) => {
    const split = logo.size.split("x")
    return split.length === 2 && split.findIndex(isInvalidDimension) === -1
}

export const getThumbnail = (logos: Array<Logo>) => {
  const validThumbnail = logos.find(isValidSize)
  return validThumbnail
    ? validThumbnail.url
    : null
}
