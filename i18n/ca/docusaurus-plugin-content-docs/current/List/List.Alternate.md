---
title: List.Alternate
---

# List.Alternate


## Description

Retorna una llista formada per tots els elements imparells desplaçats i numerats d&#39;una llista.


## Syntax

```powerquery
List.Alternate(
    list as list,
    count as number,
    optional repeatInterval as number,
    optional offset as number
) as list
```


## Details

Retorna una llista formada per tots els elements imparells desplaçats i numerats d'una llista. Alterna entre prendre i ometre valors de la llista <code>list</code> en funció dels paràmetres.    <ul>    <li><code>count</code>: especifica el nombre de valors que s'ometen cada vegada.</li>    <li><code>repeatInterval</code>: un interval de repetició opcional per indicar quants valors s'afegeixen entre els valors omesos.</li>    <li><code>offset</code>: un paràmetre de desplaçament opcional per començar a ometre els valors al desplaçament inicial.</li>    </ul>


## Examples

### Example #1 
Crea una llista a partir de \{1..10} que omet el primer nombre.
```powerquery
List.Alternate({1..10}, 1)
```

Result: 
```powerquery
{2, 3, 4, 5, 6, 7, 8, 9, 10}
```


### Example #2 
Creeu una llista a partir de \{1..10} que ometi nombres de manera alterna.
```powerquery
List.Alternate({1..10}, 1, 1)
```

Result: 
```powerquery
{2, 4, 6, 8, 10}
```


### Example #3 
Crea una llista a partir de \{1..10} que comença en 1 i omet nombres de manera alterna.
```powerquery
List.Alternate({1..10}, 1, 1, 1)
```

Result: 
```powerquery
{1, 3, 5, 7, 9}
```


### Example #4 
Creeu una llista a partir de \{1..10} que comenci per 1, ometi un valor, conservi dos valors, etc.
```powerquery
List.Alternate({1..10}, 1, 2, 1)
```

Result: 
```powerquery
{1, 3, 4, 6, 7, 9, 10}
```




## Category
List.Selection
