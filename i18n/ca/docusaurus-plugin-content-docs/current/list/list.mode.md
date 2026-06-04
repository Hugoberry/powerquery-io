---
title: List.Mode
---

# List.Mode


Retorna el valor més freqüent de la llista.


## Syntax

```powerquery
List.Mode(
    list as list,
    optional equationCriteria as any
) as any
```


## Remarks

Retorna l'element que apareix amb més freqüència a `list`. Si la llista és buida, es produeix un error. Si apareixen diversos elements amb la mateixa freqüència màxima, es tria l'últim. Es pot especificar un valor de criteris de comparació, `equationCriteria`, per controlar la prova d'igualtat.


## Examples

### Example #1
Troba l'element que apareix amb més freqüència a la llista `{"A", 1, 2, 3, 3, 4, 5}`.
```powerquery
List.Mode({"A", 1, 2, 3, 3, 4, 5})
```

Result: 
```powerquery
3
```


### Example #2
Troba l'element que apareix amb més freqüència a la llista `{"A", 1, 2, 3, 3, 4, 5, 5}`.
```powerquery
List.Mode({"A", 1, 2, 3, 3, 4, 5, 5})
```

Result: 
```powerquery
5
```




## Category
List.Averages
