---
title: BinaryFormat.Choice
---

# BinaryFormat.Choice


Vraća binarni format koji bira sledeći binarni format na osnovu već pročitane vrednosti.


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

Vraća binarni format koji bira sledeći binarni format na osnovu već pročitane vrednosti. Vrednost binarnog formata koji je proizvela ova funkcija funkcioniše u fazama:

-   Binarni format koji je naveo parametar `binaryFormat` koristi se za čitanje vrednosti.
-   Vrednost se prosleđuje funkciji izbora koju je naveo parametar `chooseFunction`.
-   Funkcija izbora ispituje vrednost i vraća drugi binarni format.
-   Drugi binarni format se koristi za čitanje druge vrednosti.
-   Ako se navede funkcija kombinovanja, prva i druga vrednost se prosleđuju funkciji kombinovanja i vraća se vrednost koja se dobije.
-   Ako se ne navede funkcija kombinovanja, vraća se druga vrednost.
-   Vraća se druga vrednost.

Opcionalni parametar `type` ukazuje na tip binarnog formata koji će vratiti funkcija izbora. Može se navesti `type any`, `type list` ili `type binary`. Ako se parametar `type` ne navede, koristi se `type any`. Ako se koristi `type list` ili `type binary`, sistem će možda moći da vrati protočnu `binary` ili `list` vrednost umesto baferovane, što može da smanji količinu memorije potrebne za čitanje formata.


## Examples

### Example #1
Čitanje liste bajtova kod koje se broj elemenata određuje prvim bajtom.
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
Čitanje liste bajtova kod koje se broj elemenata određuje prvim bajtom i zadržavanje prvog pročitanog bajta.
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
Čitanje liste bajtova kod koje se broj elemenata određuje prvim bajtom pomoću protočne liste.
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
