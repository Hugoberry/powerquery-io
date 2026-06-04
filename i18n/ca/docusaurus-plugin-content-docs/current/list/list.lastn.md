---
title: List.LastN
---

# List.LastN


Retorna una llista dels darrers elements de la llista especificada. Pot especificar de manera opcional quants valors s'han de retornar o una condició qualificada.


## Syntax

```powerquery
List.LastN(
    list as list,
    optional countOrCondition as any
) as any
```


## Remarks

Retorna una llista dels darrers elements de la llista especificada.

-   `list`: la llista que s'ha d'examinar. Si la llista està buida, es retorna una llista buida.
-   `countOrCondition`: (opcional) admet obtenir diversos elements o filtrar elements. Tot i que aquest paràmetre és opcional, es produeix un error si no es proporciona aquest valor o és `null`. Aquest paràmetre es pot especificar de dues maneres:
    -   Si s’especifica un nombre, es retornarà fins a aquesta quantitat d’elements.
    -   Si s'especifica una condició, es retornen tots els elements que compleixen la condició, començant pel final de la llista. Quan un element no compleix la condició, no es consideren més elements.


## Examples

### Example #1
Troba el darrer valor de la llista \{3, 4, 5, -1, 7, 8, 2\}.
```powerquery
List.LastN({3, 4, 5, -1, 7, 8, 2}, 1)
```

Result: 
```powerquery
{2}
```


### Example #2
Troba els darrers valors de la llista \{3, 4, 5, -1, 7, 8, 2\} que són més grans que 0.
```powerquery
List.LastN({3, 4, 5, -1, 7, 8, 2}, each _ > 0)
```

Result: 
```powerquery
{7, 8, 2}
```




## Category
List.Selection
