---
title: List.Min
---

# List.Min


Vrne najmanjšo vrednost ali privzeto vrednost za prazen seznam.


## Syntax

```powerquery
List.Min(
    list as list,
    optional default as any,
    optional comparisonCriteria as any,
    optional includeNulls as logical
) as any
```


## Remarks

Vrne najmanjši element na seznamu `list` ali izbirno privzeto vrednost `default`, če je seznam prazen. Z izbirno vrednostjo"comparisonCriteria", `comparisonCriteria`, lahko določite način primerjave elementov na seznamu. Če je ta parameter ničeln, se uporabi privzeti primerjalnik.


## Examples

### Example #1
Poiščite najmanjšo vrednost na seznamu \{1, 4, 7, 3, -2, 5\}.
```powerquery
List.Min({1, 4, 7, 3, -2, 5})
```

Result: 
```powerquery
-2
```


### Example #2
Poiščite najmanjšo vrednost na seznamu \{\} ali vrnite –1, če je seznam prazen.
```powerquery
List.Min({}, -1)
```

Result: 
```powerquery
-1
```




## Category
List.Ordering
