---
title: Record.SelectFields
---

# Record.SelectFields


## Description

Palauttaa tietueen, joka sisältää ainoastaan määritetyt kentät.


## Syntax

```powerquery
Record.SelectFields(
    record as record,
    fields as any,
    optional missingField as MissingField.Type
) as record
```


## Details

Palauttaa tietueen, joka sisältää ainoastaan luettelossa <code>fields</code> määritetyt kentät syötteestä <code>record</code>.


## Examples

### Example #1 
Valitse kentät &#34;Item&#34; ja &#34;Price&#34; tietueessa.
```powerquery
Record.SelectFields(
    [OrderID = 1, CustomerID = 1, Item = "Fishing rod", Price = 100.0],
    {"Item", "Price"}
)
```

Result: 
```powerquery
[Item = "Fishing rod", Price = 100]
```




## Category
Record.Selection
