---
title: Record.SelectFields
---

# Record.SelectFields


## Description

Returnerer en post, som kun indeholder de angivne felter.


## Syntax

```powerquery
Record.SelectFields(
    record as record,
    fields as any,
    optional missingField as MissingField.Type
) as record
```


## Details

Returnerer en post, der kun indeholder de felter, som er angivet på listen <code>fields</code>, fra inputtet <code>record</code>.


## Examples

### Example #1 
Vælg felterne &#34;Item&#34; og &#34;Price&#34; i posten.
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
