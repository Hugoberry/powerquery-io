---
title: BinaryFormat.Record
---

# BinaryFormat.Record


Retourne un format binaire qui lit un enregistrement.


## Syntax

```powerquery
BinaryFormat.Record(
    record as record
) as function
```


## Remarks

Retourne un format binaire qui lit un enregistrement.  Le paramètre <code>record</code> spécifie le format binaire de l'enregistrement.  Chaque champ dans l'enregistrement peut avoir un format binaire différent.  Si un champ contient une valeur qui n'est pas une valeur de format binaire, alors aucune donnée n'est lue pour ce champ, et la valeur du champ est répercutée dans le résultat.


## Examples

### Example #1 
Lit un enregistrement contenant un entier 16 bits et un entier 32 bits.
```powerquery
let
    binaryData = #binary({
        0x00, 0x01,
        0x00, 0x00, 0x00, 0x02
    }),
    recordFormat = BinaryFormat.Record([
        A = BinaryFormat.UnsignedInteger16,
        B = BinaryFormat.UnsignedInteger32
    ])
in
    recordFormat(binaryData)
```

Result: 
```powerquery
[A = 1, B = 2]
```




## Category
Binary Formats.Reading records
