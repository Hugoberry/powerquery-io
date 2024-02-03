---
title: List.LastN
---

# List.LastN


## Description

Vrne zadnjo vrednost na seznamu.  Izbirno lahko določa število vrnjenih vrednosti ali ustrezen pogoj.


## Syntax

```powerquery
List.LastN(
    list as list,
    optional countOrCondition as any
) as any
```


## Details

Vrne zadnji element seznama <code>list</code>. Če je seznam prazen, pride do izjeme. Ta funkcija vzame izbirni parameter <code>countOrCondition</code> za podporo zbiranja več elementov ali filtriranja elementov. Parameter <code>countOrCondition</code> lahko določite na tri načine: <ul>  <li>Če navedete število, je vrnjenih največ toliko elementov. </li>  <li>Če navedete pogoj, so vrnjeni vsi elementi, ki prvotno izpolnjujejo pogoj (z začetkom na koncu seznama). Ko določen element ne izpolnjuje več pogoja, nadaljnji elementi niso upoštevani. </li>  <li>Če je ta parameter ničeln, je vrnjen zadnji element na seznamu.</li> </ul>


## Examples

### Example #1 
Poiščite zadnjo vrednost na seznamu \{3, 4, 5, -1, 7, 8, 2}.
```powerquery
List.LastN({3, 4, 5, -1, 7, 8, 2}, 1)
```

Result: 
```powerquery
{2}
```


### Example #2 
Poiščite zadnje vrednosti na seznamu \{3, 4, 5, -1, 7, 8, 2}, ki so večje od 0.
```powerquery
List.LastN({3, 4, 5, -1, 7, 8, 2}, each _ > 0)
```

Result: 
```powerquery
{7, 8, 2}
```




## Category
List.Selection
