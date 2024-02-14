---
title: BinaryFormat.Length
---

# BinaryFormat.Length


Возвращает двоичный формат, который ограничивает объем данных, который может быть считан.


## Syntax

```powerquery
BinaryFormat.Length(
    binaryFormat as function,
    length as any
) as function
```


## Remarks

Возвращает двоичный формат, ограничивающий объем данных, который можно считать. И <code>BinaryFormat.List</code>, и <code>BinaryFormat.Binary</code> можно использовать для считывания до конца данных. <code>BinaryFormat.Length</code> можно использовать для ограничения числа считываемых байтов. Параметр <code>binaryFormat</code> указывает двоичный формат, который нужно ограничить. Параметр <code>length</code> указывает число байт для считывания. Параметр <code>length</code> может быть числовым значением или значением двоичного формата, указывающим формат значения длины, предшествующей считываемому значению.


## Examples

### Example #1 
Ограничьте число считанных байтов до 2 при чтении списка байтов.
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
Ограничьте число считанных байтов при чтении списка байтов до байтового значения, предшествующего списку.
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
