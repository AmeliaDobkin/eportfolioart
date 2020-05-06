const textElement = document.getElementById('text')
const optionButtonsElement = document.getElementById('option-buttons')

let state = {}

function startGame() {
  state = {}
  showTextNode(1)
}

function showTextNode(textNodeIndex) {
  const textNode = textNodes.find(textNode => textNode.id === textNodeIndex)
  textElement.innerText = textNode.text
  while (optionButtonsElement.firstChild) {
    optionButtonsElement.removeChild(optionButtonsElement.firstChild)
  }

  textNode.options.forEach(option => {
    if (showOption(option)) {
      const button = document.createElement('button')
      button.innerText = option.text
      button.classList.add('btn')
      button.addEventListener('click', () => selectOption(option))
      optionButtonsElement.appendChild(button)
    }
  })
}

function showOption(option) {
  return option.requiredState == null || option.requiredState(state)
}

function selectOption(option) {
  const nextTextNodeId = option.nextText
  if (nextTextNodeId <= 0) {
    return startGame()
  }
  state = Object.assign(state, option.setState)
  showTextNode(nextTextNodeId)
}

const textNodes = [
  {
    id: 1,
    text: 'Hello.',
    options: [
      {
        text: '...Hello.',
        nextText: 2
      }
    ]
  },
  {
    id: 2,
    text: 'How are you?',
    options: [
      {
        text: 'Fine. You?',
        nextText: 3
      },
      {
        text: 'Eh...',
        nextText: 8
      },
      {
        text: 'Terrible.',
        nextText: 10
      }
    ]
  },
  {
    id: 3,
    text: 'Alright, I suppose.  ...Might sound weird, but I assumed you were bored...',
    options: [
      {
        text: 'Why?',
        nextText: 4
      },
    ]
  },
  {
    id: 4,
    text: 'Why else would you talk with me?',
    options: [
      {
        text: '...',
        nextText: 5
      },
      {
        text: 'Maybe I wanted to talk to you...',
        nextText: 12
      }


    ]
  },
  {
    id: 5,
    text: 'Exactly.',
    options: [
      {
        text: '[nod]',
        setState: {startCon: true, checkView: true, dragonDance: true},
        nextText: 6
      }

    ]
  },
  {
    id: 6,
    text: 'Just to be clear, I`m thankful that you did.   What would you like to talk about?',
    options: [
      {
        text: 'How`s...you`re day been?',
        requiredState: (currentState) => currentState.startCon,
        nextText: 7
      },
      {
        text: '[check other viewers]',
        requiredState: (currentState) => currentState.checkView,
        nextText: 14
      },
      {
        text: 'Ever been to the dragon dances?',
        requiredState: (currentState) => currentState.dragonDance,
        nextText: 21
      },
      {
        text: '[move on to other topics]',
        nextText: 9
      }
    ]
  },
  {
    id: 7,
    text: 'Boring. Been swishing my tail back and forth between meals. The usual.',
    options: [
      {
        text: 'Uh huh...[ask another question]',
        setState: { howYou: true, startCon: false },
        nextText: 6
      },
      {
        text: 'Uh huh [move on to other topics]',
        setState: { howYou: true, startCon: false  },
        nextText: 9
      }
    ]
  },
  {
    id: 8,
    text: 'I see. ...Might sound weird, but I assumed you were bored...',
    options: [
      {
        text: 'Why?',
        nextText: 4
      }
    ]
  },
  {
    id: 9,
    text: '...',
    options: [
      {
        text: '[look at watch]',
        nextText: 39
      }
    ]
  },
  {
    id: 10,
    text: 'I`m sorry to hear that.  Might I ask why?',
    options: [
      {
        text: 'No.',
        nextText: 8
      },
      {
        text: 'I`m not comfortable talking about it...',
        nextText: 11
      },
      {
        text: 'I`m tired, I`m in debt, I`m hungry, I`m underpaid, I`m lonely...you get the idea...',
        nextText: 38
      }
    ]
  },
   
  {
    id: 11,
    text: 'Ah. I understand...Might sound weird, but I assumed you were bored...',
    options: [
      {
        text: 'Why?',
        nextText: 4
      }
    ]
  },
  {
    id: 12,
    text: 'Exac- Wait, what?',
    options: [
      {
        text: '...',
        nextText: 13
      }
    ]
  }, 
  {
    id: 13,
    text: 'Well, either way...',
    options: [
      {
        text: '...',
        setState: {startCon: true, checkView: true, dragonDance: true},
        nextText: 6
      }
    ]
  },
  {
    id: 14,
    text: '[the other inmates aren`t doing very much]   Do you...guard anyone else?',
    options: [
      {
        text: 'Not yet.  I`m just trying to get familiar with the the tech, so to speak.',
        nextText: 15
      }
    ]
  },
  {
    id: 15,
    text: 'Ah...How`s the job been so far?',
    options: [
      {
        text: '...',
        nextText: 16
      },
      {
        text: 'It`s ok',
        nextText: 17
      },
      {
        text: 'It sucks.',
        nextText: 18
      }
    ]
  },
  {
    id: 16,
    text: '...I...won`t press you further...',
    options: [
      {
        text: 'Thanks...[ask another question]',
        setState: {checkView: false},
        nextText: 6
      },
      {
        text: 'Thanks...[go on to other topics]',
        setState: {checkView: false},
        nextText: 9
      }
    ]
  },
  {
    id: 17,
    text: 'Uh Huh...',
    options: [
      {
        text: 'Yeah...[ask another question]',
        setState: {checkView: false},
        nextText: 6
      },
      {
        text: 'Yeah...[go on to other topics]',
        setState: {checkView: false},
        nextText: 9
      }
    ]
  },
  {
    id: 18,
    text: 'Oh...sorry to hear that...',
    options: [
      {
        text: 'Yeah...',
        nextText: 19
      },
      {
        text: '*Sigh* At least it pays the bill...if only barely...',
        nextText: 20
      }
    ]
  },
  {
    id: 19,
    text: '...',
    options: [
      {
        text: '...[ask another question]',
        setState: {checkView: false},
        nextText: 6
      },
      {
        text: '...[go on to other topics]',
        setState: {checkView: false},
        nextText: 9
      }
    ]
  },
  {
    id: 20,
    text: 'Yeah. I get that.',
    options: [
      {
        text: '...[ask another question]',
        setState: {checkView: false},
        nextText: 6
      },
      {
        text: '...[go on to other topics]',
        setState: {checkView: false},
        nextText: 9
      }
    ]
  },
  {
    id: 21,
    text: 'Yes! Years ago. Tess and I took the kits out. Haha. The little one hid behind us the whole time.......*Sniff*.....',
    options: [
      {
        text: '...',
        nextText: 22
      }
    ]
  },
  {
    id: 22,
    text: '*Sniff* Sorry...',
    options: [
      {
        text: 'It`s alright...W-who did you see?',
        nextText: 23
      }
    ]
  },
  {
    id: 23,
    text: 'The Princesses.  Well, they were princesses at the time.  They had their coronation recently, didn`t they?',
    options: [
      {
        text: 'Yes.  A year ago, I believe.',
        nextText: 24
      }
    ]
  },
  {
    id: 24,
    text: 'Ah.  How about you? Have you seen any dragon dances?',
    options: [
      {
        text: 'Yes.',
        nextText: 25
      },
      {
        text: 'No.',
        nextText: 26
      }
    ]
  },
  {
    id: 25,
    text: 'Who`d you see?',
    options: [
      {
        text: 'I also saw the Princesses.',
        nextText: 28
      },
      {
        text: 'The Soaring Shields.',
        nextText: 29
      },
      {
        text:'Terr the Water.',
        nextText: 32
      }
    ]
  },
  {
    id: 26,
    text: 'That`s a shame.  I recommend the Princesses -er Queens, of course, though they are a little hard to catch.  If you`re not free at dawn or dusk, the Soaring Shields are always good.',
    options: [
      {
        text: 'Sounds good. Thanks',
        nextText: 27
      }
    ]
  },
  {
    id: 27,
    text: 'No problem.',
    options: [
      {
        text: '[ask another question]',
        setState: {dragonDance: false},
        nextText: 6
      },
      {
        text: '[go on to other topics]',
        setState: {dragonDance: false},
        nextText: 9
      }
    ]
  },
  {
    id: 28,
    text: 'They`re amazing, aren`t they? I mean, the choreography, the heights, the sonics. The sonics, especially.',
    options: [
      {
        text: 'Yeah. I know. They`re great.[ask another question]',
        setState: {dragonDance: false},
        nextText: 6
      },
      {
        text: 'Yeah. I know. They`re great.[go on to other topics]',
        setState: {dragonDance: false},
        nextText: 9
      }
    ]
  },
  {
    id: 29,
    text: 'Ah yes. Theyre a solid act.',
    options: [
      {
        text: 'Literally, in a sense.',
        nextText: 30
      }
    ]
  },
  {
    id: 30,
    text: 'Haha! I guess so.  The last time I saw them, I nearly went blind.',
    options: [
      {
        text: 'Same. Their armor is so bright.',
        nextText: 31
      }
    ]
  },
  {
    id: 31,
    text: 'Haha. Yeah.',
    options: [
      {
        text: '[ask another question]',
        setState: {dragonDance: false},
        nextText: 6
      },
      {
        text: '[go on to other topics]',
        setState: {dragonDance: false},
        nextText: 9
      }
    ]
  },
  {
    id: 32,
    text: 'Hmm. I don`t think I`ve heard of them.',
    options: [
      {
        text: 'They`re pretty new.',
        nextText: 33
      },
      {
        text: 'They`re a little obscure.',
        nextText: 35
      }
    ]
  },
  {
    id: 33,
    text: 'I see. When did they debut?',
    options: [
      {
        text: 'A few months ago.',
        nextText: 34
      }
    ]
  },
  {
    id: 34,
    text: 'So they`re really new then, huh?',
    options: [
      {
        text: 'Yeah. [ask another question]',
        setState: {dragonDance: false},
        nextText: 6
      },
      {
        text: 'Yeah. [go on to other topics]',
        setState: {dragonDance: false},
        nextText: 9
      }
    ]
  },
  {
    id: 35,
    text: 'I see. What is their act like?',
    options: [
      {
        text: 'Usually, two of the members stay on or near the ground making most of the sonics while the other two do most of the flying and windsweeping ans stuff. They also have water in their routines...as the name would imply.',
        nextText: 36
      }
    ]
  },
  {
    id: 36,
    text: 'Interesting. I`ve never heard of that format for a routine before.',
    options: [
      {
        text: 'Yeah. They`re the only ones who make routines like that as far as I know.',
        nextText: 37
      }
    ]
  },
  {
    id: 37,
    text: 'Hmm...I`d look into them if I could...',
    options: [
      {
        text: 'Hmm...[ask another question]',
        setState: {dragonDance: false},
        nextText: 6
      },
      {
        text: 'Hmm...[move on to other topics]',
        setState: {dragonDance: false},
        nextText: 9
      }
    ]
  },
  {
    id: 38,
    text: '*Sigh* I know the feeling...Might sound weird, but I assumed you were bored...',
    options: [
      {
        text: 'Why?',
        nextText: 4
      }
    ]
  },
  {
    id: 39,
    text: '...Anything...else you want to talk about?',
    options: [
      {
        text: 'Well, my shift is almost up, so...',
        nextText: 40
      }
    ]
  },
  {
    id: 40,
    text: 'I see...Well, real quick, tell me what youre doing after work. If you dont mind, that is...',
    options: [
      {
        text: 'I`d rather not...',
        nextText: 41
      },
      {
        text: 'I`m going to Ehora. Some friends and I are getting drinks. Might even catch a dragon dance if we`re lucky.',
        nextText: 42
      }
    ]
  },
  {
    id: 41,
    text: 'I understand. Nice talking to you.',
    options: [
      {
        text: 'Nice talking to you, too.[this will return you to the beginning]',
        nextText: -1
      }
    ]
  },
  {
    id: 42,
    text: 'Sounds nice...Hope you have a good time.',
    options: [
      {
        text: 'Thanks. And nice talking to you, too.[this will return you to the beginning]',
        nextText: -1
      },
      {
        text: 'Thanks. I`ll tell you about it tomorrow if you want.',
        nextText: 43
      }
    ]
  },
  {
    id: 43,
    text: 'I`d love that! Thank you!',
    options: [
    {
      text: 'No problem',
      nextText: 44
    }
    ]
  },
  {
    id: 44,
    text: 'And...',
    options: [
    {
      text: '...Yes?',
      nextText: 45
    }
   ]
  },
  {
    id: 45,
    text: 'Could you...',
    options: [
    {
      text: '...',
      nextText: 46
    }
    ]
  },
  {
    id: 46,
    text: '...Say `Hi` to Tessa for me...if you see her...As far as I know, she still works at the concession stand by the soaring field...',
    options: [
    {
      text: '...',
      nextText: 47
    }
    ]
  },
  {
  id: 47,
  text: '...Please...',
  options: [
  {
    text: 'I will if I can find her.',
    nextText: 48
  }
  ]
},
  {
    id: 48,
    text: 'Thank you...',
    options: [
    {
      text: 'Of course. [this will return you to the beginning]',
      nextText: -1
    },
    {
      text: 'It`s the least I could do.[this will return you to the beginning]',
      nextText: -1
    }
    ]
  }
]

startGame()
