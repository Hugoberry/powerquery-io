---
title: Record.FieldValues
---

# Record.FieldValues


## Description

Palauttaa kenttien arvojen luettelon.


## Syntax

```powerquery
Record.FieldValues(
    record as record
) as list
```


## Details

Palauttaa tietueen <code>record</code> kenttien arvojen luettelon.


## Examples

### Example #1 
Selvitä kenttien arvot tietueessa.
```powerquery
Record.FieldValues([CustomerID = 1, Name = "Bob", Phone = "123-4567"])
```

Result: 
```powerquery
{1, "Bob", "123-4567"}
```




## Category
Record.Selection
