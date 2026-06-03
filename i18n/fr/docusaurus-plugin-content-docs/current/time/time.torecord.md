---
title: Time.ToRecord
---

# Time.ToRecord


Retourne un enregistrement qui contient les parties de la valeur d'heure.


## Syntax

```powerquery
Time.ToRecord(
    time as time
) as record
```


## Remarks

Retourne un enregistrement qui contient les parties de la valeur d'heure spécifiée, `time`.

-   `time` : valeur `time` à partir de laquelle l'enregistrement des parties doit être calculé.


## Examples

### Example #1
Convertit la valeur `#time(11, 56, 2)` dans un enregistrement contenant les valeurs d'heure.
```powerquery
Time.ToRecord(#time(11, 56, 2))
```

Result: 
```powerquery
[
      Hour = 11,
      Minute = 56,
      Second = 2
]
```




## Category
Time
