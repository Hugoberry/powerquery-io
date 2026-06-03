---
title: Time.Second
---

# Time.Second


Retourne le composant des secondes.


## Syntax

```powerquery
Time.Second(
    dateTime as any
) as number
```


## Remarks

Retourne le composant des secondes de la valeur `time`, `datetime` ou `datetimezone` fournie, `dateTime`.


## Examples

### Example #1
Rechercher la deuxième valeur d'une valeur datetime.
```powerquery
Time.Second(#datetime(2011, 12, 31, 9, 15, 36.5))
```

Result: 
```powerquery
36.5
```




## Category
Time
