---
title: Record.ToList
---

# Record.ToList


## Description

Gibt eine Liste von Werten mit den Feldwerten des Eingabedatensatzes zurück.


## Syntax

```powerquery
Record.ToList(
    record as record
) as list
```


## Details

Gibt eine Liste von Werten mit den Feldwerten aus der Eingabe <code>record</code> zurück.


## Examples

### Example #1 
Extrahieren Sie die Feldwerte aus einem Datensatz.
```powerquery
Record.ToList([A = 1, B = 2, C = 3])
```

Result: 
```powerquery
{1, 2, 3}
```




## Category
Record.Serialization
