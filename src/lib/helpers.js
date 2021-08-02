const NAME_TO_EMOJI = {
  'beer': '\u{1F37A}',
  'wine': '\u{1F377}',  
  'water': '\u{1F6B0}',
  'coffee': '\u{2615}',
  'pee': '\u{1F4A6}',
  'poop': '\u{1F4A9}',
  'coctail': '\u{1F379}',
  'cycling': '\u{1F6B4}',
  'running': '\u{1F3C3}',
  'dog': '\u{1F415}',
}

const EMOJI_NAMES = [
  'beer',
  'wine',
  'water',
  'coffee',
  'pee',
  'poop',
  'coctail',
  'cycling',
  'running',
  'dog'
]

function getEmojiByName(name) {
  if ( name in NAME_TO_EMOJI ) {
    return NAME_TO_EMOJI[name]
  }
  return NAME_TO_EMOJI['poop']
}


export {
  getEmojiByName,
  EMOJI_NAMES
}