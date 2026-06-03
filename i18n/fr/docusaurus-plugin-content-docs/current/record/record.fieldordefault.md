---
title: Record.FieldOrDefault
---

# Record.FieldOrDefault


Retourne la valeur du champ spécifié dans un enregistrement ou la valeur par défaut si le champ est introuvable.


## Syntax

```powerquery
Record.FieldOrDefault(
    record as record,
    field as text,
    optional defaultValue as any
) as any
```


## Remarks

Retourne la valeur du champ spécifié `field` dans l'enregistrement `record`. Si le champ est introuvable, la valeur `defaultValue` facultative est retournée.


## Examples

### Example #1
Recherche la valeur du champ « Phone » dans l'enregistrement ou retourne null s'il n'existe pas.
```powerquery
Record.FieldOrDefault([CustomerID = 1, Name = "Bob"], "Phone")
```

Result: 
```powerquery
null
```


### Example #2
Recherche la valeur du champ « Phone » dans l'enregistrement ou retourne la valeur par défaut s'il n'existe pas.
```powerquery
Record.FieldOrDefault([CustomerID = 1, Name = "Bob"], "Phone", "123-4567")
```

Result: 
```powerquery
"123-4567"
```




## Category
Record.Selection
