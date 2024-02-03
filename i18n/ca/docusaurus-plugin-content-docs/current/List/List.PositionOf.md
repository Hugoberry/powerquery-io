---
title: List.PositionOf
---

# List.PositionOf


## Description

Retorna el desplaçament o els desplaçaments d&#39;un valor en una llista.


## Syntax

```powerquery
List.PositionOf(
    list as list,
    value as any,
    optional occurrence as Occurrence.Type,
    optional equationCriteria as any
) as any
```


## Details

Retorna el desplaçament al qual apareix el valor <code>value</code> a la llista <code>list</code>. Retorna -1 si el valor no apareix.    Es pot especificar un paràmetre d'aparició opcional <code>occurrence</code>.<ul>   <li><code>occurrence</code>: nombre màxim d'aparicions que s'ha de notificar.</li></ul>


## Examples

### Example #1 
Troba la posició a la llista \{1, 2, 3} en la qual apareix el valor 3.
```powerquery
List.PositionOf({1, 2, 3}, 3)
```

Result: 
```powerquery
2
```




## Category
List.Membership functions
