---
title: BinaryFormat.List
---

# BinaryFormat.List


Элементтер реттілігін оқитын және тізімді қайтаратын екілік пішімді қайтарады.


## Syntax

```powerquery
BinaryFormat.List(
    binaryFormat as function,
    optional countOrCondition as any
) as function
```


## Remarks

Элементтер реттілігін оқитын және `list` қайтаратын екілік пішімді қайтарады. `binaryFormat` параметрі әр элементтің екілік пішімін көрсетеді. Оқылған элементтер санын анықтаудың үш жолы бар:

-   егер `countOrCondition` көрсетілмеген болса, онда екілік пішім элементтер жоқ болғанша оқылады.
-   Егер `countOrCondition` сан болса, онда екілік пішім сонша элементті оқиды.
-   Егер `countOrCondition` функция болса, онда әр оқылатын элемент үшін сол функция шақырылады. Функция элементтерді оқуды жалғастыру үшін шын мәнін және тоқтату үшін өтірік мәнін қайтарады. Түпкілікті элемент тізімге қосылады.
-   Егер `countOrCondition` екілік пішім болса, онда тізім алдында күтілетін элементтер саны және көрсетілген пішім санды оқу үшін пайдаланылады.


## Examples

### Example #1
Байттарды деректердің соңына дейін оқу.
```powerquery
let
    binaryData = #binary({1, 2, 3}),
    listFormat = BinaryFormat.List(BinaryFormat.Byte)
in
    listFormat(binaryData)
```

Result: 
```powerquery
{1, 2, 3}
```


### Example #2
Екі байтты оқу.
```powerquery
let
    binaryData = #binary({1, 2, 3}),
    listFormat = BinaryFormat.List(BinaryFormat.Byte, 2)
in
    listFormat(binaryData)
```

Result: 
```powerquery
{1, 2}
```


### Example #3
Байттарды байт мәні екіден үлкенірек немесе оған тең болғанша оқу.
```powerquery
let
    binaryData = #binary({1, 2, 3}),
    listFormat = BinaryFormat.List(BinaryFormat.Byte, (x) => x < 2)
in
    listFormat(binaryData)
```

Result: 
```powerquery
{1, 2}
```




## Category
Binary Formats.Reading lists
