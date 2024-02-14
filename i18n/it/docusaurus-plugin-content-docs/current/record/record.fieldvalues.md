---
title: Record.FieldValues
---

# Record.FieldValues


Restituisce un elenco dei valori dei campi.


## Syntax

```powerquery
Record.FieldValues(
    record as record
) as list
```


## Remarks

Restituisce un elenco dei valori dei campi nel record <code>record</code>.


## Examples

### Example #1 
Trovare i valori dei campi nel record.
```powerquery
Record.FieldValues([CustomerID = 1, Name = "Bob", Phone = "123-4567"])
```

Result: 
```powerquery
{1, "Bob", "123-4567"}
```




## Category
Record.Selection
