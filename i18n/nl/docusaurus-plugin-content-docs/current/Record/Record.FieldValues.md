---
title: Record.FieldValues
---

# Record.FieldValues


## Description

Retourneert een lijst met de veldwaarden.


## Syntax

```powerquery
Record.FieldValues(
    record as record
) as list
```


## Details

Retourneert een lijst met de veldwaarden in record <code>record</code>.


## Examples

### Example #1 
De veldwaarden in de record zoeken.
```powerquery
Record.FieldValues([CustomerID = 1, Name = "Bob", Phone = "123-4567"])
```

Result: 
```powerquery
{1, "Bob", "123-4567"}
```




## Category
Record.Selection
