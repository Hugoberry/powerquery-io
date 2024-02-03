---
title: BinaryFormat.Length
---

# BinaryFormat.Length


## Description

Повертає двійковий формат, що обмежує кількість даних, які можна прочитати.


## Syntax

```powerquery
BinaryFormat.Length(
    binaryFormat as function,
    length as any
) as function
```


## Details

Повертає двійковий формат, що обмежує кількість даних, які можна прочитати. <code>BinaryFormat.List</code> і <code>BinaryFormat.Binary</code> можна використовувати для читання даних до кінця. <code>BinaryFormat.Length</code> можна використовувати для обмеження кількості байтів, які буде прочитано. Параметр <code>binaryFormat</code> указує двійковий формат для обмеження. Параметр <code>length</code> указує кількість байтів для читання. Параметр <code>length</code> може мати числове значення або значення у двійковому форматі, яке вказує формат значення довжини, що передує зчитаному значенню.


## Examples

### Example #1 
Обмеження кількості байтів для читання до 2 під час читання списку байтів.
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
Обмежте кількість зчитаних байтів під час читання списку байтів до байтового значення, що передує списку.
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
