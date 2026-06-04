---
title: Record.ToList
---

# Record.ToList


Vraća listu vrednosti koja sadrži vrednosti polja iz ulaznog zapisa.


## Syntax

```powerquery
Record.ToList(
    record as record
) as list
```


## Remarks

Vraća listu vrednosti koja sadrži vrednosti polja iz unosa `record`.


## Examples

### Example #1
Izdvajanje vrednosti polja iz zapisa.
```powerquery
Record.ToList([A = 1, B = 2, C = 3])
```

Result: 
```powerquery
{1, 2, 3}
```




## Category
Record.Serialization
