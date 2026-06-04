---
title: BinaryFormat.Text
---

# BinaryFormat.Text


Мәтіндік мәнді оқитын екілік пішімді қайтарады.


## Syntax

```powerquery
BinaryFormat.Text(
    length as any,
    optional encoding as TextEncoding.Type
) as function
```


## Remarks

Мәтіндік мәнді оқитын екілік пішімді қайтарады. `length` кодсыздандыратын байттар санын немесе мәтіннің алдында келетін ұзындықтың екілік пішімін көрсетеді. `encoding` қосымша мәні мәтіннің кодтауын көрсетеді. Егер `encoding` көрсетілмеген болса, онда кодтау Unicode байттар реті белгілерінен анықталады. Егер байттар ретінің белгілері болмаса, онда `TextEncoding.Utf8` пайдаланылады.


## Examples

### Example #1
Екі байтты ASCII мәтіні ретінде кодсыздандыру.
```powerquery
let
    binaryData = #binary({65, 66, 67}),
    textFormat = BinaryFormat.Text(2, TextEncoding.Ascii)
in
    textFormat(binaryData)
```

Result: 
```powerquery
"AB"
```


### Example #2
Байттар түріндегі мәтін ұзындығы мәтін алдында байт ретінде көрсетілетін ASCII мәтінін кодсыздандыру.
```powerquery
let
    binaryData = #binary({2, 65, 66}),
    textFormat = BinaryFormat.Text(
        BinaryFormat.Byte,
        TextEncoding.Ascii
    )
in
    textFormat(binaryData)
```

Result: 
```powerquery
"AB"
```




## Category
Binary Formats.Reading text
