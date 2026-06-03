---
title: BinaryFormat.List
---

# BinaryFormat.List


Zwraca format binarny odczytujący sekwencję elementów i zwracający listę.


## Syntax

```powerquery
BinaryFormat.List(
    binaryFormat as function,
    optional countOrCondition as any
) as function
```


## Remarks

Zwraca format binarny odczytujący sekwencję elementów i zwracający `listę`. Parametr `binaryFormat` określa format binarny każdego elementu. Istnieją trzy sposoby określania liczby odczytanych elementów:

-   Jeśli nie określono `countOrCondition`, format binarny będzie odczytywany, dopóki nie będzie więcej elementów.
-   Jeśli `countOrCondition` jest liczbą, format binarny odczyta tyle elementów.
-   Jeśli `countOrCondition` jest funkcją, ta funkcja zostanie wywołana dla każdego odczytanego elementu. Funkcja zwraca wartość true, aby kontynuować, i wartość false, aby zatrzymać odczytywanie elementów. Końcowy element jest uwzględniony w elemencie list.
-   Jeśli `countOrCondition` jest formatem binarnym, oczekiwana jest liczba elementów poprzedzających listę, a do odczytania wartości count.


## Examples

### Example #1
Odczytuj bajty do końca danych.
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
Odczytaj dwa bajty.
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
Odczytuj bajty, dopóki wartość bajtu nie będzie większa lub równa dwa.
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
