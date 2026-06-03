---
title: Record.HasFields
---

# Record.HasFields


Indique si l'enregistrement a les champs spécifiés.


## Syntax

```powerquery
Record.HasFields(
    record as record,
    fields as any
) as logical
```


## Remarks

Indique si l'enregistrement `record` a les champs spécifiés dans `fields`, en retournant une valeur logique (true ou false). Plusieurs valeurs de champ peuvent être spécifiées dans une liste.


## Examples

### Example #1
Vérifie si l'enregistrement a le champ "CustomerID".
```powerquery
Record.HasFields([CustomerID = 1, Name = "Bob", Phone = "123-4567"], "CustomerID")
```

Result: 
```powerquery
true
```


### Example #2
Vérifie si l'enregistrement a les champs "CustomerID" et "Address".
```powerquery
Record.HasFields([CustomerID = 1, Name = "Bob", Phone = "123-4567"], {"CustomerID", "Address"})
```

Result: 
```powerquery
false
```




## Category
Record.Information
