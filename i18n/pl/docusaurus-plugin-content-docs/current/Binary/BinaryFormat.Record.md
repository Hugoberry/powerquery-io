---
title: BinaryFormat.Record
---

# BinaryFormat.Record


Zwraca format binarny odczytujący rekord.


## Syntax

```powerquery
BinaryFormat.Record(
    record as record
) as function
```


## Remarks

Zwraca format binarny odczytujący rekord.  Parametr <code>record</code> określa format rekordu.  Każde pole w rekordzie może mieć inny format binarny.  Jeśli pole zawiera wartość, która nie jest wartością formatu binarnego, nie są odczytywane dane dla tego pola, a wartość pola jest powtarzana w wyniku.


## Examples

### Example #1 
Odczytaj rekord zawierający jedną 16-bitową i jedną 32-bitową liczbę całkowitą.
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
