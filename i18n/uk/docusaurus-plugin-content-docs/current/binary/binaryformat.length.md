---
title: BinaryFormat.Length
---

# BinaryFormat.Length


Повертає двійковий формат, що обмежує кількість даних, які можна прочитати.


## Syntax

```powerquery
BinaryFormat.Length(
    binaryFormat as function,
    length as any
) as function
```


## Remarks

Повертає двійковий формат, що обмежує кількість даних, які можна прочитати. Параметри `BinaryFormat.List` і `BinaryFormat.Binary` можна використовувати для читання до кінця даних. `BinaryFormat.Length` можна використовувати для обмеження кількості прочитаних байтів. Параметр `binaryFormat` визначає двійковий формат для обмеження. Параметр `length` указує двійковий формат кількість байтів для читання. Параметр `length` може мати числове значення або значення у двійковому форматі, яке вказує формат значення довжини, що передує зчитаному значенню.


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
