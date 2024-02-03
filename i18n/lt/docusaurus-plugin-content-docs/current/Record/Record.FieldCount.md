---
title: Record.FieldCount
---

# Record.FieldCount


## Description

Pateikiamas laukų skaičius įraše.


## Syntax

```powerquery
Record.FieldCount(
    record as record
) as number
```


## Details

Pateikiamas laukų skaičius įraše <code>record</code>.


## Examples

### Example #1 
Raskite laukų skaičių įraše.
```powerquery
Record.FieldCount([CustomerID = 1, Name = "Bob"])
```

Result: 
```powerquery
2
```




## Category
Record.Information
