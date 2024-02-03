---
title: Record.RenameFields
---

# Record.RenameFields


## Description

Aplica canvis de nom a partir d&#39;una llista amb la forma \{ old, new }.


## Syntax

```powerquery
Record.RenameFields(
    record as record,
    renames as list,
    optional missingField as MissingField.Type
) as record
```


## Details

Retorna un registre després de canviar el nom dels camps a l'entrada <code>record</code> pels noms de camp nous especificats a la llista <code>renames</code>. Per a diversos canvis de nom es pot utilitzar una llista imbricada (\{ \{old1, new1}, \{old2, new2} }.


## Examples

### Example #1 
Canvia el nom del camp &#34;UnitPrice&#34; per &#34;Price&#34; del registre.
```powerquery
Record.RenameFields(
    [OrderID = 1, CustomerID = 1, Item = "Fishing rod", UnitPrice = 100.0],
    {"UnitPrice", "Price"}
)
```

Result: 
```powerquery
[OrderID = 1, CustomerID = 1, Item = "Fishing rod", Price = 100.0]
```


### Example #2 
Canvia els camps &#34;UnitPrice&#34; per &#34;Price&#34; i &#34;OrderNum&#34; per &#34;OrderID&#34; del registre.
```powerquery
Record.RenameFields(
    [OrderNum = 1, CustomerID = 1, Item = "Fishing rod", UnitPrice = 100.0],
    {
        {"UnitPrice", "Price"},
        {"OrderNum", "OrderID"}
    }
)
```

Result: 
```powerquery
[OrderID = 1, CustomerID = 1, Item = "Fishing rod", Price = 100.0]
```




## Category
Record.Transformations
