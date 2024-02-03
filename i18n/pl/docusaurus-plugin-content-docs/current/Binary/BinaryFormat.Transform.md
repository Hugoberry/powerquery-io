---
title: BinaryFormat.Transform
---

# BinaryFormat.Transform


## Description

Zwraca format binarny, który przekształci wartości odczytane przez inny format binarny.


## Syntax

```powerquery
BinaryFormat.Transform(
    binaryFormat as function,
    function as function
) as function
```


## Details

Zwraca format binarny, który przekształci wartości odczytane przez inny format binarny.  Parametr <code>binaryFormat</code> określa format binarny, który będzie używany do odczytywania wartości.  Funkcja <code>function</code> jest wywoływana z użyciem odczytanej wartości i zwraca przekształconą wartość.


## Examples

### Example #1 
Odczytaj bajt i dodaj jeden do niego.
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
