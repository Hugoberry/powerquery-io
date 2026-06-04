---
title: List.Numbers
---

# List.Numbers


Retorna una llista de nombres donat un valor inicial, un recompte i un valor d'increment opcional.


## Syntax

```powerquery
List.Numbers(
    start as number,
    count as number,
    optional increment as number
) as list
```


## Remarks

Retorna una llista de nombres donat un valor inicial, un recompte i un valor d'increment opcional. El valor d'increment per defecte és 1.

-   `start`: el valor inicial de la llista.
-   `count`: el nombre de valors que s'han de crear.
-   `increment`: *(Optional)* El valor pel qual s'ha d'incrementar. Si s'omet, els valors s'incrementen en 1.


## Examples

### Example #1
Genera una llista de 10 nombres consecutius començant per 1.
```powerquery
List.Numbers(1, 10)
```

Result: 
```powerquery
{
    1,
    2,
    3,
    4,
    5,
    6,
    7,
    8,
    9,
    10
}
```


### Example #2
Genera una llista de 10 nombres començant per 1, amb un increment de 2 per a cada nombre subsegüent.
```powerquery
List.Numbers(1, 10, 2)
```

Result: 
```powerquery
{
    1,
    3,
    5,
    7,
    9,
    11,
    13,
    15,
    17,
    19
}
```




## Category
List.Generators
