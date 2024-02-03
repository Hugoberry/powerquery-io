---
title: BinaryFormat.Length
---

# BinaryFormat.Length


## Description

Оқуға болатын деректер мөлшерін шектейтін екілік пішімді қайтарады.


## Syntax

```powerquery
BinaryFormat.Length(
    binaryFormat as function,
    length as any
) as function
```


## Details

Оқуға болатын деректер мөлшерін шектейтін екілік пішімді қайтарады.  <code>BinaryFormat.List</code> және <code>BinaryFormat.Binary</code> екеуін де деректердің соңына дейін оқу үшін пайдалануға болады.  <code>BinaryFormat.Length</code> оқылатын байттар санын шектеу үшін пайдалануға болады.  <code>binaryFormat</code> параметрі шектейтін екілік пішімді көрсетеді.  <code>length</code> параметрі оқитын байттар санын көрсетеді.  <code>length</code> параметрі сандық мән немесе оқылып жатқан мәннің алдында келетін ұзындық мәнінің пішімін көрсететін екілік пішімдегі мән болуы мүмкін.


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
