---
title: Record.FieldValues
---

# Record.FieldValues


## Description

Pateikiamas lauko reikšmių sąrašas.


## Syntax

```powerquery
Record.FieldValues(
    record as record
) as list
```


## Details

Pateikiamas lauko reikšmių įraše <code>record</code> sąrašas.


## Examples

### Example #1 
Raskite laukų reikšmes įraše.
```powerquery
Record.FieldValues([CustomerID = 1, Name = "Bob", Phone = "123-4567"])
```

Result: 
```powerquery
{1, "Bob", "123-4567"}
```




## Category
Record.Selection
