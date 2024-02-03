---
title: Record.RemoveFields
---

# Record.RemoveFields


## Description

Suprimeix els camps especificats a partir del registre d&#39;entrada.


## Syntax

```powerquery
Record.RemoveFields(
    record as record,
    fields as any,
    optional missingField as MissingField.Type
) as record
```


## Details

Retorna un registre que suprimeix tots els camps especificats a la llista <code>fields</code> a partir de l'entrada <code>record</code>. Si no existeix el camp especificat, es produeix una excepció.


## Examples

### Example #1 
Suprimeix el camp &#34;Price&#34; del registre.
```powerquery
Record.RemoveFields([CustomerID = 1, Item = "Fishing rod", Price = 18.00], "Price")
```

Result: 
```powerquery
[CustomerID = 1, Item = "Fishing rod"]
```


### Example #2 
Suprimeix els camps &#34;Price&#34; i &#34;Item&#34; del registre.
```powerquery
Record.RemoveFields([CustomerID = 1, Item = "Fishing rod", Price = 18.00], {"Price", "Item"})
```

Result: 
```powerquery
[CustomerID = 1]
```




## Category
Record.Transformations
