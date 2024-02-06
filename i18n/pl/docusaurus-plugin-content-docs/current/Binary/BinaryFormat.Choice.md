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

Zwraca format binarny wybierający następny format binarny na podstawie wartości, która została już odczytana.  Wartość formatu binarnego utworzonego przez tę funkcję działa etapowo:<ul><li>Format binarny określony przez parametr <code>binaryFormat</code> jest używany do odczytania wartości.</li><li>Wartość jest przekazywana do funkcji wyboru określonej przez parametr <code>chooseFunction</code>.</li><li>Funkcja wyboru sprawdza wartość i zwraca drugi format binarny.</li><li>Drugi format binarny jest używany do odczytania drugiej wartości.</li><li>Jeśli została określona funkcja łączenia, pierwsza i druga wartość są przekazywane do funkcji łączenia, a następnie jest zwracana wartość wynikowa.</li><li>Jeśli nie została określona funkcja łączenia, zwracana jest druga wartość.</li><li>Zwracana jest druga wartość.</li></ul>Opcjonalny parametr <code>type</code> wskazuje typ formatu binarnego, który zostanie zwrócony przez funkcję wyboru.  Można określić wartość <code>type any</code>, <code>type list</code> lub <code>type binary</code>.  Jeśli parametr <code>type</code> nie został określony, jest używana wartość <code>type any</code>.   Jeśli jest używana wartość <code>type list</code> lub <code>type binary</code>, system może być w stanie zwrócić strumieniową wartość typu <code>binary</code> lub <code>list</code>, zamiast wartości buforowanej, co może zmniejszyć ilość pamięci potrzebnej do odczytania formatu.


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
