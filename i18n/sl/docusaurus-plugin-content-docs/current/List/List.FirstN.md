---
title: List.FirstN
---

# List.FirstN


## Description

Vrne prvi nabor elementov na seznamu, tako da določi število vrnjenih elementov ali ustrezen pogoj.


## Syntax

```powerquery
List.FirstN(
    list as list,
    countOrCondition as any
) as any
```


## Details

 <ul>  <li>Če navedete število, je vrnjenih največ toliko elementov. </li>  <li>Če navedete pogoj, so vrnjeni vsi elementi, ki prvotno izpolnjujejo pogoj. Ko določen element ne izpolnjuje več pogoja, nadaljnji elementi niso upoštevani. </li> </ul>


## Examples

### Example #1 
Poiščite začetne vrednosti na seznamu \{3, 4, 5, -1, 7, 8, 2}, ki so večje od 0.
```powerquery
List.FirstN({3, 4, 5, -1, 7, 8, 2}, each _ > 0)
```

Result: 
```powerquery
{3, 4, 5}
```




## Category
List.Selection
