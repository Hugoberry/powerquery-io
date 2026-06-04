---
title: Record.RemoveFields
---

# Record.RemoveFields


Odstrani navedena polja iz vhodnega zapisa.


## Syntax

```powerquery
Record.RemoveFields(
    record as record,
    fields as any,
    optional missingField as MissingField.Type
) as record
```


## Remarks

Vrne zapis, ki odstrani vsa polja, navedena na seznamu `fields` iz vnosa `record`. Če navedeno polje ne obstaja, pride do napake.


## Examples

### Example #1
Odstranite polje"Cena"iz zapisa.
```powerquery
Record.RemoveFields([CustomerID = 1, Item = "Fishing rod", Price = 18.00], "Price")
```

Result: 
```powerquery
[CustomerID = 1, Item = "Fishing rod"]
```


### Example #2
Odstranite polji"Cena"in"Izdelek"iz zapisa.
```powerquery
Record.RemoveFields([CustomerID = 1, Item = "Fishing rod", Price = 18.00], {"Price", "Item"})
```

Result: 
```powerquery
[CustomerID = 1]
```




## Category
Record.Transformations
