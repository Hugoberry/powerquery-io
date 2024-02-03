---
title: List.RemoveLastN
---

# List.RemoveLastN


## Description

Vraća listu koja uklanja navedeni broj elemenata na kraju liste.


## Syntax

```powerquery
List.RemoveLastN(
    list as list,
    optional countOrCondition as any
) as list
```


## Details

Vraća listu koja uklanja poslednje elemente (njih <code>countOrCondition</code>) na kraju liste <code>list</code>. Prazna lista se vraća ako <code>list</code> ima manje od sledećeg broja elemenata: <code>countOrCondition</code>. <ul> <li>Ako se navede broj, uklanja se najviše toliko stavki. </li> <li>Ako se navede uslov, vraćena lista se završava prvim elementom sa dna u <code>list</code> koji zadovoljava kriterijume. Ako neka stavka ne zadovolji uslov, kasnije stavke se ne uzimaju u obzir. </li> <li>Ako je ovaj parametar bez vrednosti, samo jedna stavka se uklanja. </li> </ul>


## Examples

### Example #1 
Kreiranje liste od \{1, 2, 3, 4, 5} bez poslednja 3 broja.
```powerquery
List.RemoveLastN({1, 2, 3, 4, 5}, 3)
```

Result: 
```powerquery
{1, 2}
```


### Example #2 
Kreiranje liste od \{5, 4, 2, 6, 4} koja se završava brojem manjim od 3.
```powerquery
List.RemoveLastN({5, 4, 2, 6, 4}, each _ > 3)
```

Result: 
```powerquery
{5, 4, 2}
```




## Category
List.Transformation functions
