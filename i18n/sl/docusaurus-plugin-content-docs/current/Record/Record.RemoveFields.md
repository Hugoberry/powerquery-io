---
title: Record.RemoveFields
---

# Record.RemoveFields


## Description

Odstrani navedena polja iz vhodnega zapisa.


## Syntax

```powerquery
Record.RemoveFields(
    record as record,
    fields as any,
    optional missingField as MissingField.Type
) as record
```


## Details

Vrne zapis, ki odstrani vsa polja, navedena na seznamu <code>fields</code> iz vnosa <code>record</code>. Če navedeno polje ne obstaja, pride do izjeme.


## Examples

### Example #1 
Odstranite polje &#34;Cena&#34; iz zapisa.
```powerquery
Record.RemoveFields([CustomerID = 1, Item = "Fishing rod", Price = 18.00], "Price")
```

Result: 
```powerquery
[CustomerID = 1, Item = "Fishing rod"]
```


### Example #2 
Odstranite polji &#34;Cena&#34; in &#34;Izdelek&#34; iz zapisa.
```powerquery
Record.RemoveFields([CustomerID = 1, Item = "Fishing rod", Price = 18.00], {"Price", "Item"})
```

Result: 
```powerquery
[CustomerID = 1]
```




## Category
Record.Transformations
