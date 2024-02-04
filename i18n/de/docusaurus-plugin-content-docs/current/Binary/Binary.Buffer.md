---
title: Binary.Buffer
---

# Binary.Buffer


## Description

Puffert den Binärwert im Arbeitsspeicher.


## Syntax

```powerquery
Binary.Buffer(
    binary as binary
) as binary
```


## Details

Puffert den Binärwert im Arbeitsspeicher. Das Ergebnis dieses Aufrufs ist ein stabiler binärer Wert. Das bedeutet, er hat eine deterministische Länge und Bytereihenfolge.


## Examples

### Example #1 
Erstellen Sie eine stabile Version des binären Werts.
```powerquery
Binary.Buffer(Binary.FromList({0..10}))
```

Result: 
```powerquery
#binary({0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10})
```




## Category
Binary
