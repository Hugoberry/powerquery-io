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

Возвращает двоичный формат, ограничивающий объем данных, который можно прочитать. Для чтения до конца данных можно использовать как `BinaryFormat.List`, так и `BinaryFormat.Binary`. `BinaryFormat.Length` можно использовать для ограничения количества считываемого количества байт. Параметр `binaryFormat` указывает двоичный формат, который нужно ограничить. Параметр `length` указывает число байт для считывания. Параметр `length` может быть числовым значением или значением двоичного формата, указывающим формат значения длины, предшествующей считываемому значению.


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
