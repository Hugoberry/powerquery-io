---
title: BinaryFormat.Transform
---

# BinaryFormat.Transform


## Description

Повертає двійковий формат, який перетворить значення, прочитані іншим двійковим форматом.


## Syntax

```powerquery
BinaryFormat.Transform(
    binaryFormat as function,
    function as function
) as function
```


## Details

Повертає двійковий формат, який перетворить значення, прочитані іншим двійковим форматом.  Параметр <code>binaryFormat</code> указує двійковий формат, який використовуватиметься для читання значення.  Під час виклику функції <code>function</code> передається прочитане значення, і нею повертається перетворене значення.


## Examples

### Example #1 
Читання байту та додавання до нього ще одного байту.
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
