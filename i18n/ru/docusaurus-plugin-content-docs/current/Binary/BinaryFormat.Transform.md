---
title: BinaryFormat.Transform
---

# BinaryFormat.Transform


## Description

Возвращает двоичный формат, который преобразует значения, считанные другим двоичным форматом.


## Syntax

```powerquery
BinaryFormat.Transform(
    binaryFormat as function,
    function as function
) as function
```


## Details

Возвращает двоичный формат, который преобразует значения, считанные другим двоичным форматом.  Параметр <code>binaryFormat</code> указывает двоичный формат, который будет использоваться для считывания значений.  <code>function</code> вызывается со считанным значением и возвращает преобразованное значение.


## Examples

### Example #1 
Считывает байт и добавляет к нему единицу.
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
