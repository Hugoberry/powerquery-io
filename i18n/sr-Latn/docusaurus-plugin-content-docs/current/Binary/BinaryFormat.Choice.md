---
title: BinaryFormat.Choice
---

# BinaryFormat.Choice


## Description

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


## Details

Vraća binarni format koji bira sledeći binarni format na osnovu već pročitane vrednosti.  Vrednost binarnog formata koji je proizvela ova funkcija funkcioniše u fazama:<ul><li>Binarni format koji je naveo parametar <code>binaryFormat</code> koristi se za čitanje vrednosti.</li><li>Vrednost se prosleđuje funkciji izbora koju je naveo parametar <code>chooseFunction</code>.</li><li>Funkcija izbora ispituje vrednost i vraća drugi binarni format.</li><li>Drugi binarni format se koristi za čitanje druge vrednosti.</li><li>Ako se navede funkcija kombinovanja, prva i druga vrednost se prosleđuju funkciji kombinovanja i vraća se vrednost koja se dobije.</li><li>Ako se ne navede funkcija kombinovanja, vraća se druga vrednost.</li><li>Vraća se druga vrednost.</li></ul>Opcionalni parametar <code>type</code> ukazuje na tip binarnog formata koji će vratiti funkcija izbora.  Može se navesti <code>type any</code>, <code>type list</code> ili <code>type binary</code>.  Ako se parametar <code>type</code> ne navede, koristi se <code>type any</code>.   Ako se koristi <code>type list</code> ili <code>type binary</code>, sistem će možda moći da vrati protočnu <code>binary</code> ili <code>list</code> vrednost umesto baferovane, što može da smanji količinu memorije potrebne za čitanje formata.


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
