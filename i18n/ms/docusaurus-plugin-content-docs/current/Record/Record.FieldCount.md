---
title: Record.FieldCount
---

# Record.FieldCount


## Description

Mengembalikan bilangan medan dalam rekod.


## Syntax

```powerquery
Record.FieldCount(
    record as record
) as number
```


## Details

Mengembalikan bilangan medan dalam rekod <code>record</code>.


## Examples

### Example #1 
Cari bilangan medan dalam rekod.
```powerquery
Record.FieldCount([CustomerID = 1, Name = "Bob"])
```

Result: 
```powerquery
2
```




## Category
Record.Information
