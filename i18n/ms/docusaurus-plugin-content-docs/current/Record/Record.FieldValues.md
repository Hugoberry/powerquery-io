---
title: Record.FieldValues
---

# Record.FieldValues


## Description

Mengembalikan senarai nilai medan.


## Syntax

```powerquery
Record.FieldValues(
    record as record
) as list
```


## Details

Mengembalikan senarai nilai medan dalam rekod <code>record</code>.


## Examples

### Example #1 
Cari nilai medan dalam rekod.
```powerquery
Record.FieldValues([CustomerID = 1, Name = "Bob", Phone = "123-4567"])
```

Result: 
```powerquery
{1, "Bob", "123-4567"}
```




## Category
Record.Selection
