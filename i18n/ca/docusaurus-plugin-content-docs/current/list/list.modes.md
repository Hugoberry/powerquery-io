---
title: List.Modes
---

# List.Modes


Retorna una llista dels valors més freqüents de la llista.


## Syntax

```powerquery
List.Modes(
    list as list,
    optional equationCriteria as any
) as list
```


## Remarks

Retorna els elements que apareixen amb més freqüència a `list`. Si la llista és buida, es produeix un error. Si apareixen diversos elements amb la mateixa freqüència màxima, es retornen tots. Es pot especificar un valor de criteris de comparació, `equationCriteria`, per controlar la prova d'igualtat.


## Examples

### Example #1
Troba els elements que apareixen amb més freqüència a la llista `{"A", 1, 2, 3, 3, 4, 5, 5}`.
```powerquery
List.Modes({"A", 1, 2, 3, 3, 4, 5, 5})
```

Result: 
```powerquery
{3, 5}
```




## Category
List.Averages
