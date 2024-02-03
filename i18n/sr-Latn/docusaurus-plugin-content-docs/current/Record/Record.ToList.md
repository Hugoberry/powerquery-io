---
title: Record.ToList
---

# Record.ToList


## Description

Vraća listu vrednosti koja sadrži vrednosti polja iz ulaznog zapisa.


## Syntax

```powerquery
Record.ToList(
    record as record
) as list
```


## Details

Vraća listu vrednosti koja sadrži vrednosti polja iz unosa <code>record</code>.


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
