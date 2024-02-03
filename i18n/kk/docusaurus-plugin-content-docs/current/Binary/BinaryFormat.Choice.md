---
title: BinaryFormat.Choice
---

# BinaryFormat.Choice


## Description

Оқылып қойылған мәннің негізінде келесі екілік пішімді таңдайтын екілік пішімді қайтарады.


## Syntax

```powerquery
BinaryFormat.Choice(
    binaryFormat as function,
    chooseFunction as function,
    optional type as type,
    optional combineFunction as function
) as function
```


## Details

Оқылып қойылған мәннің негізінде келесі екілік пішімді таңдайтын екілік пішімді қайтарады.  Бұл функция жасаған екілік пішім мәні кезеңдермен жұмыс істейді:<ul><li><code>binaryFormat</code> параметрі арқылы көрсетілген екілік пішім мәнді оқу үшін пайдаланылады.</li><li>Мән <code>chooseFunction</code> параметрі арқылы көрсетілген таңдау функциясына беріледі.</li><li>Таңдау функциясы мәнді тексереді және екінші екілік пішімді қайтарады.</li><li>Екінші екілік пішім екінші мәнді оқу үшін пайдаланылады.</li><li>Егер біріктіру функциясы көрсетілген болса, онда бірінші және екінші мәндер біріктіру функциясына беріледі, сөйтіп нәтижесіндегі мән қайтарылады.</li><li>Егер біріктіру функциясы көрсетілмеген болса, екінші мән қайтарылады.</li><li>Екінші мән қайтарылады.</li></ul>Қосымша <code>type</code> параметрі таңдау функциясы қайтаратын екілік пішімнің түрін қайтарады.  <code>type any</code>, <code>type list</code> немесе <code>type binary</code> көрсетуге болады.  Егер <code>type</code> параметрі көрсетілмеген болса, онда <code>type any</code> пайдаланылады.   Егер <code>type list</code> немесе <code>type binary</code> пайдаланылса, онда жүйе буферге сақталғанның орнына ағындық <code>binary</code> немесе <code>list</code> мәнін қайтара алады, бұл пішімді оқу үшін қажет жад мөлшерін азайта алады.


## Examples

### Example #1 
Байттар тізімін оқу, мұндағы элементтер саны бірінші байт арқылы анықталады.
```powerquery
let
    binaryData = #binary({2, 3, 4, 5}),
    listFormat = BinaryFormat.Choice(
        BinaryFormat.Byte,
        (length) => BinaryFormat.List(BinaryFormat.Byte, length)
    )
in
    listFormat(binaryData)
```

Result: 
```powerquery
{3, 4}
```


### Example #2 
Байттар тізімін оқу, мұндағы элементтер саны бірінші байт арқылы анықталады, сөйтіп бірінші байтты оқуды сақтау.
```powerquery
let
    binaryData = #binary({2, 3, 4, 5}),
    listFormat = BinaryFormat.Choice(
        BinaryFormat.Byte,
        (length) => BinaryFormat.Record([
            length = length,
            list = BinaryFormat.List(BinaryFormat.Byte, length)
        ])
    )
in
    listFormat(binaryData)
```

Result: 
```powerquery
[length = 2, list = {3, 4}]
```


### Example #3 
Байттар тізімін оқу, мұндағы элементтер саны бірінші байт арқылы ағын тізімін пайдаланып анықталады.
```powerquery
let
    binaryData = #binary({2, 3, 4, 5}),
    listFormat = BinaryFormat.Choice(
        BinaryFormat.Byte,
        (length) => BinaryFormat.List(BinaryFormat.Byte, length),
        type list
    )
in
    listFormat(binaryData)
```

Result: 
```powerquery
{3, 4}
```




## Category
Binary Formats.Controlling what comes next
