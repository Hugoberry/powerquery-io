---
title: List.Max
---

# List.Max


## Description

Vrne največjo vrednost ali privzeto vrednost za prazen seznam.


## Syntax

```powerquery
List.Max(
    list as list,
    optional default as any,
    optional comparisonCriteria as any,
    optional includeNulls as logical
) as any
```


## Details

Vrne največji element na seznamu <code>list</code> ali izbirno privzeto vrednost <code>default</code>, če je seznam prazen.    Z izbirno vrednostjo "comparisonCriteria", <code>comparisonCriteria</code>, lahko določite način primerjave elementov na seznamu. Če je ta parameter ničeln, se uporabi privzeti primerjalnik.


## Examples

### Example #1 
Poiščite največjo vrednost na seznamu \{1, 4, 7, 3, -2, 5}.
```powerquery
List.Max({1, 4, 7, 3, -2, 5}, 1)
```

Result: 
```powerquery
7
```


### Example #2 
Poiščite največjo vrednost na seznamu \{} ali vrnite –1, če je seznam prazen. 
```powerquery
List.Max({}, -1)
```

Result: 
```powerquery
-1
```




## Category
List.Ordering
