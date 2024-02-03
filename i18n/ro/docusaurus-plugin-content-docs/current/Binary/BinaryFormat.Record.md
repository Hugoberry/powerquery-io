---
title: BinaryFormat.Record
---

# BinaryFormat.Record


## Description

Returnează un format binar care citeşte o înregistrare.


## Syntax

```powerquery
BinaryFormat.Record(
    record as record
) as function
```


## Details

Returnează un format binar care citeşte o înregistrare.  Parametrul <code>record</code> specifică formatul înregistrării.  Fiecare câmp din înregistrare poate avea un format binar diferit.  Dacă un câmp conţine o valoare care nu este o valoare binară a formatului, atunci nu se va citi nicio dată pentru câmpul respectiv, iar valoarea pentru câmp este repetată în rezultat.


## Examples

### Example #1 
Citiţi o înregistrare ce conţine un număr întreg pe 16 biţi şi un număr întreg pe 32 de biţi.
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
