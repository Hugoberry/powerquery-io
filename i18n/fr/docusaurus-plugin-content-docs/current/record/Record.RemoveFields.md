---
title: Record.RemoveFields
---

# Record.RemoveFields


Supprime les champs spécifiés de l&#39;enregistrement d&#39;entrée.


## Syntax

```powerquery
Record.RemoveFields(
    record as record,
    fields as any,
    optional missingField as MissingField.Type
) as record
```


## Remarks

Retourne un enregistrement qui supprime tous les champs spécifiés dans la liste <code>fields</code> à partir de l'entrée <code>record</code>. Si le champ spécifié n'existe pas, une exception est levée.


## Examples

### Example #1 
Supprime le champ &#34; Price &#34; de l&#39;enregistrement.
```powerquery
Record.RemoveFields([CustomerID = 1, Item = "Fishing rod", Price = 18.00], "Price")
```

Result: 
```powerquery
[CustomerID = 1, Item = "Fishing rod"]
```


### Example #2 
Supprime les champs &#34; Price &#34; et &#34; Item &#34; de l&#39;enregistrement.
```powerquery
Record.RemoveFields([CustomerID = 1, Item = "Fishing rod", Price = 18.00], {"Price", "Item"})
```

Result: 
```powerquery
[CustomerID = 1]
```




## Category
Record.Transformations
