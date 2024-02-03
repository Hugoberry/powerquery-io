---
title: Record.RemoveFields
---

# Record.RemoveFields


## Description

Rimuove i campi specificati dal record di input.


## Syntax

```powerquery
Record.RemoveFields(
    record as record,
    fields as any,
    optional missingField as MissingField.Type
) as record
```


## Details

Restituisce un record che rimuove tutti i campi specificati nell'elenco <code>fields</code> dell'input <code>record</code>. Se il campo specificato non esiste, viene generata un'eccezione.


## Examples

### Example #1 
Rimuovere il campo &#34;Price&#34; dal record.
```powerquery
Record.RemoveFields([CustomerID = 1, Item = "Fishing rod", Price = 18.00], "Price")
```

Result: 
```powerquery
[CustomerID = 1, Item = "Fishing rod"]
```


### Example #2 
Rimuovere i campi &#34;Price&#34; e &#34;Item&#34; dal record.
```powerquery
Record.RemoveFields([CustomerID = 1, Item = "Fishing rod", Price = 18.00], {"Price", "Item"})
```

Result: 
```powerquery
[CustomerID = 1]
```




## Category
Record.Transformations
