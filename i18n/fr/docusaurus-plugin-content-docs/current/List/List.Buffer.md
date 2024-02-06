---
title: List.Buffer
---

# List.Buffer


Place une liste en mémoire tampon.


## Syntax

```powerquery
List.Buffer(
    list as list
) as list
```


## Remarks

Place la liste <code>list</code> dans la mémoire. Le résultat de cet appel est une liste stable.


## Examples

### Example #1 
Créer une copie stable de la liste \{1..10}.
```powerquery
List.Buffer({1..10})
```

Result: 
```powerquery
{1, 2, 3, 4, 5, 6, 7, 8, 9, 10}
```




## Category
List.Selection
