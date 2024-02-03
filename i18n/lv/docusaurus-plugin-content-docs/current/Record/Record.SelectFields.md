---
title: Record.SelectFields
---

# Record.SelectFields


## Description

Tiek atgriezts ieraksts, kurā ir ietverti tikai norādītie lauki.


## Syntax

```powerquery
Record.SelectFields(
    record as record,
    fields as any,
    optional missingField as MissingField.Type
) as record
```


## Details

Tiek atgriezts ieraksts, kurā ir ietverti tikai tie ievades ieraksta <code>record</code> lauki, kas ir norādīti sarakstā <code>fields</code>.


## Examples

### Example #1 
Atlasiet ieraksta laukus &#34;Item&#34; un &#34;Price&#34;.
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
