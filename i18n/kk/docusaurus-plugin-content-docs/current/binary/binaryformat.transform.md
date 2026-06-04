---
title: BinaryFormat.Transform
---

# BinaryFormat.Transform


Оқылған мәндерді басқа екілік пішім арқылы түрлендіретін екілік пішімді қайтарады.


## Syntax

```powerquery
BinaryFormat.Transform(
    binaryFormat as function,
    function as function
) as function
```


## Remarks

Оқылған мәндерді басқа екілік пішім арқылы түрлендіретін екілік пішімді қайтарады. `binaryFormat` параметрі мәнді оқу үшін пайдаланылатын екілік пішімді көрсетеді. `function` оқылған мәнмен шақырылады және түрлендірілген мәнді қайтарады.


## Examples

### Example #1
Байтты қосу және оған біреуін қосу.
```powerquery
let
    binaryData = #binary({1}),
    transformFormat = BinaryFormat.Transform(
        BinaryFormat.Byte,
        (x) => x + 1
    )
in
    transformFormat(binaryData)
```

Result: 
```powerquery
2
```




## Category
Binary Formats.Transforming what was read
