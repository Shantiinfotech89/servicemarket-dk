

/**
 * Size: 40px
 * Font style: Open Sans
 * Weight: Bold
 */
export const Heading1B = 'heading1B'

/**
 * Size: 36px
 * Font style: Open Sans
 * Weight: Bold
 */
export const Heading2B = 'heading2B'

/**
 * Size: 24px
 * Font style: Open Sans
 * Weight: Bold
 */
export const Heading3B = 'heading3B'

/**
 * Size: 20px
 * Font style: Open Sans
 * Weight: Bold
 */
export const Heading4B = 'heading4B'

/**
 * Size: 18px
 * Font style: Open Sans
 * Weight: SemiBold
 */
export const Heading5B = 'heading5B'

/**
 * Size: 16px
 * Font style: Open Sans
 * Weight: SemiBold
 */
export const Heading6S = 'heading6S'

/**
 * Size: 16px
 * Font style: Open Sans
 * Weight: SemiBold
 */
export const Button = 'Button'

/**
 * Size: 14px
 * Weight: Regular
 */
export const Body = 'body'

/**
 * Size: 14px
 * Weight: Regular
 */
export const InputLabel = 'inputlabel'

/**
 * Size: 12px
 * Weight: Regular
 */
export const small = 'small'


/**
 * Size: 12px
 * Weight: Regular
 */
export const error = 'error'



export function getFontFamily(fontStyle) {
    return 'Open Sans'
}


export function getFontSize(fontStyle) {
    switch (fontStyle) {
        case Heading1B:
            return '40px'
        case Heading2B:
            return '24px'
        case Heading3B:
            return '20px'
        case Heading4B:
            return '18px'
        case Heading5B:
            return '16px'
        case Heading6S:
            return '16px'
        case Button:
            return '16px'
        case Body:
            return '14px'
        case InputLabel:
            return '14px'
        case small:
            return '12px'
        case error:
            return '12px'
        default:
            return
    }
}

export function getFontWeight(fontStyle) {
    switch (fontStyle) {
        case Heading1B:
            return '700'
        case Heading2B:
            return '700'
        case Heading3B:
            return '700'
        case Heading4B:
            return '600'
        case Heading5B:
            return '600'
        case Heading6S:
            return '400'
        case Button:
            return '600'
        case Body:
            return '400'
        case InputLabel:
            return '400'
        case small:
            return '400'
        case error:
            return '400'
        default:
            return
    }
}