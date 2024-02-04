---
title: Record.FieldCount
---

# Record.FieldCount


## Description

Gibt die Anzahl von Feldern im Datensatz zurück.


## Syntax

```powerquery
Record.FieldCount(
    record as record
) as number
```


## Details

Gibt die Anzahl von Feldern im Datensatz "<code>record</code>" zurück.


## Examples

### Example #1 
Ermittelt die Anzahl von Feldern im Datensatz.
```powerquery
Record.FieldCount([CustomerID = 1, Name = "Bob"])
```

Result: 
```powerquery
2
```




## Category
Record.Information
