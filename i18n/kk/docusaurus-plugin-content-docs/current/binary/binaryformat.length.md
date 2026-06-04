---
title: BinaryFormat.Length
---

# BinaryFormat.Length


Оқуға болатын деректер мөлшерін шектейтін екілік пішімді қайтарады.


## Syntax

```powerquery
BinaryFormat.Length(
    binaryFormat as function,
    length as any
) as function
```


## Remarks

Оқуға болатын деректер мөлшерін шектейтін екілік пішімді қайтарады. Деректерді соңына дейін оқу үшін `BinaryFormat.List` немесе `BinaryFormat.Binary` пайдалануға болады. Оқылатын байттар санын шектеу үшін `BinaryFormat.Length` параметрін пайдалануға болады. `binaryFormat` параметрі шектелетін екілік пішімді көрсетеді. `length` параметрі оқылатын байттар санын көрсетеді. `length` параметрі сандық мән немесе оқылып жатқан мәннің алдында келетін ұзындық мәнінің пішімін көрсететін екілік пішімдегі мән болуы мүмкін.


## Examples

### Example #1
Байттар тізімін оқу кезінде байттар санын 2 мәнімен шектеу.
```powerquery
let
    binaryData = #binary({1, 2, 3}),
    listFormat = BinaryFormat.Length(
        BinaryFormat.List(BinaryFormat.Byte),
        2
    )
in
    listFormat(binaryData)
```

Result: 
```powerquery
{1, 2}
```


### Example #2
Байттар тізімін оқу кезінде оқылатын байттар санын тізім алдындағы байт мәнімен шектеу.
```powerquery
let
    binaryData = #binary({1, 2, 3}),
    listFormat = BinaryFormat.Length(
        BinaryFormat.List(BinaryFormat.Byte),
        BinaryFormat.Byte
    )
in
    listFormat(binaryData)
```

Result: 
```powerquery
{2}
```




## Category
Binary Formats.Limiting input
