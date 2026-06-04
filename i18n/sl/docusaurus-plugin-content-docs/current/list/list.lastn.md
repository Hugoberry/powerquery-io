---
title: List.LastN
---

# List.LastN


Vrne seznam zadnjega elementa ali elementov na navedenem seznamu. Izbirno lahko določi število vrnjenih vrednosti ali ustrezen pogoj.


## Syntax

```powerquery
List.LastN(
    list as list,
    optional countOrCondition as any
) as any
```


## Remarks

Vrne seznam zadnjega elementa ali elementov na navedenem seznamu.

-   `list`: seznam za pregled. Če je seznam prazen, je vrnjen prazen seznam.
-   `countOrCondition`: (izbirno) podpira zbiranje več elementov ali filtriranje elementov. Čeprav je ta parameter naveden kot izbirni, pride do napake, če ta vrednost ni določena ali je `null`. Ta parameter lahko določite na dva načina:
    -   Če je število določeno, je odstranjenih največ toliko elementov.
    -   Če je določen pogoj, so vrnjeni vsi elementi, ki izpolnjujejo pogoj, z začetkom na koncu seznama. Ko element ne izpolnjuje več pogoja, nadaljnji elementi niso upoštevani.


## Examples

### Example #1
Poiščite zadnjo vrednost na seznamu \{3, 4, 5, -1, 7, 8, 2\}.
```powerquery
List.LastN({3, 4, 5, -1, 7, 8, 2}, 1)
```

Result: 
```powerquery
{2}
```


### Example #2
Poiščite zadnje vrednosti na seznamu \{3, 4, 5, -1, 7, 8, 2\}, ki so večje od 0.
```powerquery
List.LastN({3, 4, 5, -1, 7, 8, 2}, each _ > 0)
```

Result: 
```powerquery
{7, 8, 2}
```




## Category
List.Selection
