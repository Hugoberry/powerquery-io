---
title: List.Positions
---

# List.Positions


## Description

Retorna una llista de desplaçaments per a l&#39;entrada.


## Syntax

```powerquery
List.Positions(
    list as list
) as list
```


## Details

Retorna una llista de desplaçaments per a la llista d'entrada <code>list</code>.     Quan s'utilitzi List.Transform per canviar una llista, es pot utilitzar la llista de posicions per donar a la transformació accés a la posició.


## Examples

### Example #1 
Troba els desplaçaments dels valors de la llista \{1, 2, 3, 4, null, 5}.
```powerquery
List.Positions({1, 2, 3, 4, null, 5})
```

Result: 
```powerquery
{0, 1, 2, 3, 4, 5}
```




## Category
List.Selection
