---
title: List.PositionOfAny
---

# List.PositionOfAny


## Description

Retorna el primer desplaçament d&#39;un valor en una llista.


## Syntax

```powerquery
List.PositionOfAny(
    list as list,
    values as list,
    optional occurrence as Occurrence.Type,
    optional equationCriteria as any
) as any
```


## Details

Retorna el desplaçament en una llista <code>list</code> de la primera aparició d'un valor en una llista <code>values</code>. Retorna -1 si no es troba cap aparició.    Es pot especificar un paràmetre d'aparició opcional <code>occurrence</code>.<ul>   <li><code>occurrence</code>: nombre màxim d'aparicions que es pot retornar.</li></ul>


## Examples

### Example #1 
Troba la primera posició a la llista \{1, 2, 3} en la qual apareix el valor 2 o 3.
```powerquery
List.PositionOfAny({1, 2, 3}, {2, 3})
```

Result: 
```powerquery
1
```




## Category
List.Membership functions
