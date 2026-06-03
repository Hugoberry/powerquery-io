---
title: Type.RecordFields
---

# Type.RecordFields


Retourne un enregistrement décrivant les champs d'un type d'enregistrement avec chaque champ du type d'enregistrement retourné ayant un nom et une valeur correspondants.


## Syntax

```powerquery
Type.RecordFields(
    type as type
) as record
```


## Remarks

Retourne un enregistrement qui décrit les champs d'un enregistrement `type`. Chaque champ du type d'enregistrement retourné a un nom et une valeur correspondants, sous la forme d'un enregistrement `[ Type = type, Optional = logical ]`.


## Examples

### Example #1
Trouvez le nom et la valeur de l'enregistrement `[ A = number, optional B = any]`.
```powerquery
Type.RecordFields(type [A = number, optional B = any])
```

Result: 
```powerquery
[
    A = [Type = type number, Optional = false],
    B = [Type = type any, Optional = true]
]
```




## Category
Type
