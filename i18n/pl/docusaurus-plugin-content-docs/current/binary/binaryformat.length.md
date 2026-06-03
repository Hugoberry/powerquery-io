---
title: BinaryFormat.Length
---

# BinaryFormat.Length


Zwraca format binarny ograniczający ilość danych, które można odczytać.


## Syntax

```powerquery
BinaryFormat.Length(
    binaryFormat as function,
    length as any
) as function
```


## Remarks

Zwraca format binarny ograniczający ilość danych, które można odczytać. Formaty `BinaryFormat.List`, i `BinaryFormat.Binary` można używać do odczytu aż do końca danych. Za pomocą formatu `BinaryFormat.Length` można ograniczyć liczbę odczytywanych bajtów. Parametr `binaryFormat` określa format binarny służący do ograniczania. Parametr `length` określa liczbę bajtów do odczytania. Parametr `length` może być wartością liczbową lub wartością formatu binarnego określającą format wartości długości, która pojawia się przed odczytywaną wartością.


## Examples

### Example #1
Ogranicz liczbę odczytywanych bajtów do 2 podczas odczytu listy bajtów.
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
Ogranicz liczbę bajtów odczytywanych podczas odczytu listy bajtów do wartości bajtów poprzedzającej listę.
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
