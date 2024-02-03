---
title: Record.RemoveFields
---

# Record.RemoveFields


## Description

Eltávolítja a megadott mező(ke)t a bemeneti rekordból.


## Syntax

```powerquery
Record.RemoveFields(
    record as record,
    fields as any,
    optional missingField as MissingField.Type
) as record
```


## Details

Egy olyan rekordot ad vissza, amelyből el van távolítva a bemeneti <code>record</code> összes olyan mezője, amely meg van adva a(z) <code>fields</code> listán. Ha a megadott mező nem létezik, a függvény kivételt vált ki.


## Examples

### Example #1 
Eltávolítja a Price mezőt a rekordból.
```powerquery
Record.RemoveFields([CustomerID = 1, Item = "Fishing rod", Price = 18.00], "Price")
```

Result: 
```powerquery
[CustomerID = 1, Item = "Fishing rod"]
```


### Example #2 
Eltávolítja a Price és az Item mezőt a rekordból.
```powerquery
Record.RemoveFields([CustomerID = 1, Item = "Fishing rod", Price = 18.00], {"Price", "Item"})
```

Result: 
```powerquery
[CustomerID = 1]
```




## Category
Record.Transformations
