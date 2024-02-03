---
title: BinaryFormat.List
---

# BinaryFormat.List


## Description

Повертає двійковий формат, який читає послідовність елементів і повертає список.


## Syntax

```powerquery
BinaryFormat.List(
    binaryFormat as function,
    optional countOrCondition as any
) as function
```


## Details

Повертає двійковий формат, який зчитує послідовність елементів і повертає список за параметром <code>list</code>. Параметр <code>binaryFormat</code> слугує, щоб указати двійковий формат кожного елемента. Визначити кількість елементів для читання можна трьома способами. <ul><li>Якщо <code>countOrCondition</code> не задано, двійковий формат зчитуватиме послідовність, доки не залишиться жодного елемента.</li><li>Якщо <code>countOrCondition</code> – це число, за ним визначатиметься кількість зчитуваних елементів.</li><li>Якщо <code>countOrCondition</code> – це функція, вона викликатиметься для кожного зчитуваного елемента. Функція повертає значення true, щоб продовжити читання елементів, і false, щоб зупинити його. До списку включається останній елемент.</li><li>Якщо <code>countOrCondition</code> має двійковий формат, очікується, що списку передуватиме кількість елементів, для читання якої використовуватиметься вказаний формат.</li></ul>


## Examples

### Example #1 
Читання байтів даних до кінця.
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
Читання двох байтів.
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
Читання байтів, доки значення байту не буде більше або дорівнювати двом.
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
