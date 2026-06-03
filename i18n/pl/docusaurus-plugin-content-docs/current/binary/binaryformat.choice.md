---
title: BinaryFormat.Choice
---

# BinaryFormat.Choice


Zwraca format binarny wybierający następny format binarny na podstawie wartości, która została już odczytana.


## Syntax

```powerquery
BinaryFormat.Choice(
    binaryFormat as function,
    chooseFunction as function,
    optional type as type,
    optional combineFunction as function
) as function
```


## Remarks

Zwraca format binarny wybierający następny format binarny na podstawie wartości, która została już odczytana. Wartość formatu binarnego utworzonego przez tę funkcję działa etapowo:

-   Format binarny określony przez parametr `binaryFormat` jest używany do odczytania wartości.
-   Wartość jest przekazywana do funkcji wyboru określonej przez parametr `chooseFunction`.
-   Funkcja wyboru sprawdza wartość i zwraca drugi format binarny.
-   Drugi format binarny jest używany do odczytania drugiej wartości.
-   Jeśli została określona funkcja łączenia, pierwsza i druga wartość są przekazywane do funkcji łączenia, a następnie jest zwracana wartość wynikowa.
-   Jeśli nie została określona funkcja łączenia, zwracana jest druga wartość.
-   Zwracana jest druga wartość.

Opcjonalny parametr `type` wskazuje typ formatu binarnego, który zostanie zwrócony przez funkcję wyboru. Można określić wartość `type any`, `type list` lub `type binary`. Jeśli parametr `type` nie został określony, jest używana wartość `type any`. Jeśli jest używana wartość `type list` lub `type binary`, system może być w stanie zwrócić strumieniową wartość typu `binary` lub `list`, zamiast wartości buforowanej, co może zmniejszyć ilość pamięci potrzebnej do odczytania formatu.


## Examples

### Example #1
Odczytaj listę bajtów, na której liczba elementów jest określana przez pierwszy bajt.
```powerquery
let
    binaryData = #binary({2, 3, 4, 5}),
    listFormat = BinaryFormat.Choice(
        BinaryFormat.Byte,
        (length) => BinaryFormat.List(BinaryFormat.Byte, length)
    )
in
    listFormat(binaryData)
```

Result: 
```powerquery
{3, 4}
```


### Example #2
Odczytaj listę bajtów, na której liczba elementów jest określana przez pierwszy bajt, i zachowaj pierwszy odczytany bajt.
```powerquery
let
    binaryData = #binary({2, 3, 4, 5}),
    listFormat = BinaryFormat.Choice(
        BinaryFormat.Byte,
        (length) => BinaryFormat.Record([
            length = length,
            list = BinaryFormat.List(BinaryFormat.Byte, length)
        ])
    )
in
    listFormat(binaryData)
```

Result: 
```powerquery
[length = 2, list = {3, 4}]
```


### Example #3
Odczytaj listę bajtów, na której liczba elementów jest określana przez pierwszy bajt, używając listy strumieniowej.
```powerquery
let
    binaryData = #binary({2, 3, 4, 5}),
    listFormat = BinaryFormat.Choice(
        BinaryFormat.Byte,
        (length) => BinaryFormat.List(BinaryFormat.Byte, length),
        type list
    )
in
    listFormat(binaryData)
```

Result: 
```powerquery
{3, 4}
```




## Category
Binary Formats.Controlling what comes next
