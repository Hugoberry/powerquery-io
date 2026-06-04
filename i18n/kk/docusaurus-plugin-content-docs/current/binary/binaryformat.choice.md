---
title: BinaryFormat.Choice
---

# BinaryFormat.Choice


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


## Remarks

Оқылып қойылған мәннің негізінде келесі екілік пішімді таңдайтын екілік пішімді қайтарады. Бұл функция жасаған екілік пішім мәні кезеңдермен жұмыс істейді:

-   `binaryFormat` параметрі арқылы көрсетілген екілік пішім мәнді оқу үшін пайдаланылады.
-   Мән `chooseFunction` параметрі арқылы көрсетілген таңдау функциясына беріледі.
-   Таңдау функциясы мәнді тексереді және екінші екілік пішімді қайтарады.
-   Екінші екілік пішім екінші мәнді оқу үшін пайдаланылады.
-   Егер біріктіру функциясы көрсетілген болса, онда бірінші және екінші мәндер біріктіру функциясына беріледі, сөйтіп нәтижесіндегі мән қайтарылады.
-   Егер біріктіру функциясы көрсетілмеген болса, екінші мән қайтарылады.
-   Екінші мән қайтарылады.

Қосымша `type` параметрі таңдау функциясы қайтаратын екілік пішімнің түрін қайтарады. `type any`, `type list` немесе `type binary` көрсетуге болады. Егер `type` параметрі көрсетілмеген болса, онда `type any` пайдаланылады. Егер `type list` немесе `type binary` пайдаланылса, онда жүйе буферге сақталғанның орнына ағындық `binary` немесе `list` мәнін қайтара алады, бұл пішімді оқу үшін қажет жад мөлшерін азайта алады.


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
