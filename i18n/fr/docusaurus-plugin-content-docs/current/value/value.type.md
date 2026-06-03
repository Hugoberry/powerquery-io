---
title: Value.Type
---

# Value.Type


Retourne le type d'une valeur donnée.


## Syntax

```powerquery
Value.Type(
    value as any
) as type
```


## Remarks

Retourne le type d'une valeur donnée.

-   `value` : La valeur dont le type est retourné.


## Examples

### Example #1
Retournez le type du nombre spécifié.
```powerquery
Value.Type(243.448)
```

Result: 
```powerquery
type number
```


### Example #2
Retournez le type de la date spécifiée.
```powerquery
Value.Type(#date(2010, 12, 31))
```

Result: 
```powerquery
type date
```


### Example #3
Retournez le type de l’enregistrement spécifié.
```powerquery
Value.Type([a = 1, b = 2])
```

Result: 
```powerquery
type record
```




## Category
Values
