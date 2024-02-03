---
title: Record.FieldValues
---

# Record.FieldValues


## Description

Vraća listu vrednosti polja.


## Syntax

```powerquery
Record.FieldValues(
    record as record
) as list
```


## Details

Vraća listu vrednosti polja u zapisu <code>record</code>.


## Examples

### Example #1 
Pronalaženje vrednosti polja u zapisu.
```powerquery
Record.FieldValues([CustomerID = 1, Name = "Bob", Phone = "123-4567"])
```

Result: 
```powerquery
{1, "Bob", "123-4567"}
```




## Category
Record.Selection
