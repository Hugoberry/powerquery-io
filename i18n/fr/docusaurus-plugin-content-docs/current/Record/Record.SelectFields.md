---
title: Record.SelectFields
---

# Record.SelectFields


Retourne un enregistrement qui contient uniquement les champs spécifiés.


## Syntax

```powerquery
Record.SelectFields(
    record as record,
    fields as any,
    optional missingField as MissingField.Type
) as record
```


## Remarks

Retourne un enregistrement qui comprend uniquement les champs spécifiés dans la liste <code>fields</code> à partir de l'entrée <code>record</code>.


## Examples

### Example #1 
Sélectionne les champs &#34; Item &#34; et &#34; Price &#34; dans l&#39;enregistrement.
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
