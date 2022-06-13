export const platType = {
  green: 'green',
  blue: 'blue',
  brown: 'brown',
  orange: 'orange',
  white: 'white'
}

export const helpType = {
  spring: "spring",
  tramp: 'trampoline',
  rocket: 'rocket',
  shield: 'shield'
}

export const firstTemplate = [
  {
    pos: { x: 350, y: 790 },
    type: platType.green,
    required: false
  },
  {
    pos: { x: 200, y: 650 },
    type: platType.green,
    helper: helpType.tramp,
    required: false
  },
  {
    pos: { x: 500, y: 620 },
    type: platType.green,
    required: false
  },
  {
    pos: { x: 125, y: 500 },
    type: platType.green,
    required: false
  },
  {
    pos: { x: 225, y: 400 },
    type: platType.green,
    required: false
  },
  {
    pos: { x: 50, y: 350 },
    type: platType.green,
    required: false
  },
  {
    pos: { x: 550, y: 225 },
    type: platType.green,
    required: false
  },
  {
    pos: { x: 350, y: 180 },
    type: platType.blue,
    required: false
  },
  {
    pos: { x: 300, y: 50 },
    type: platType.green,
    required: false
  },
]

export const PLATFORMS = [
  [
    {
      pos: { x: 100, y: 180 },
      type: platType.white,
      helper: null,
      required: false
    },
    {
      pos: { x: 200, y: 370 },
      type: platType.white,
      helper: null,
      required: false
    },
    {
      pos: { x: 250, y: 520 },
      type: platType.white,
      helper: null,
      required: false
    },
    {
      pos: { x: 400, y: 600 },
      type: platType.white,
      helper: null,
      required: false
    },
    {
      pos: { x: 550, y: 780 },
      type: platType.white,
      helper: null,
      required: false
    }
  ],
  [
    {
      pos: { x: 100, y: 180 },
      type: platType.blue,
      helper: null,
      required: false
    },
    {
      pos: { x: 200, y: 370 },
      type: platType.blue,
      helper: null,
      required: false
    },
    {
      pos: { x: 250, y: 520 },
      type: platType.blue,
      helper: null,
      required: false
    },
    {
      pos: { x: 400, y: 600 },
      type: platType.blue,
      helper: null,
      required: false
    },
    {
      pos: { x: 550, y: 780 },
      type: platType.blue,
      helper: null,
      required: false
    }
  ],
  [
    {
      pos: { x: 320, y: 150 },
      type: platType.orange,
      helper: null,
      required: false
    },
    {
      pos: { x: 50, y: 500 },
      type: platType.orange,
      helper: null,
      required: false
    },
    {
      pos: { x: 50, y: 500 },
      type: platType.orange,
      helper: null,
      required: false
    },
    {
      pos: { x: 250, y: 650 },
      type: platType.orange,
      helper: null,
      required: false
    },
    {
      pos: { x: 550, y: 650 },
      type: platType.orange,
      helper: null,
      required: false
    },
    {
      pos: { x: 320, y: 150 },
      type: platType.orange,
      helper: null,
      required: true
    },
    {
      pos: { x: 150, y: 300 },
      type: platType.orange,
      helper: null,
      required: true
    },
    {
      pos: { x: 150, y: 420 },
      type: platType.blue,
      helper: null,
      required: true
    },
    {
      pos: { x: 300, y: 400 },
      type: platType.orange,
      helper: null,
      required: true
    },
    {
      pos: { x: 400, y: 600 },
      type: platType.orange,
      helper: null,
      required: true
    },
    {
      pos: { x: 500, y: 780 },
      type: platType.orange,
      helper: null,
      required: true
    }
  ]
]