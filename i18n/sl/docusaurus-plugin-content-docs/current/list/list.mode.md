---
title: List.Mode
---

# List.Mode


Vrne najpogostejšo vrednost na seznamu.


## Syntax

```powerquery
List.Mode(
    list as list,
    optional equationCriteria as any
) as any
```


## Remarks

Vrne element, ki je najpogosteje prikazan v `list`. Če je seznam prazen, pride do napake. Če je prikazanih več elementov z enako največjo pogostostjo, je izbran zadnji. Določite lahko izbirno vrednost merila primerjanja `equationCriteria` za nadzor preskušanja enakosti.


## Examples

### Example #1
Poiščite element, ki je najpogosteje prikazan na seznamu `{"A", 1, 2, 3, 3, 4, 5}`.
```powerquery
List.Mode({"A", 1, 2, 3, 3, 4, 5})
```

Result: 
```powerquery
3
```


### Example #2
Poiščite element, ki je najpogosteje prikazan na seznamu `{"A", 1, 2, 3, 3, 4, 5, 5}`.
```powerquery
List.Mode({"A", 1, 2, 3, 3, 4, 5, 5})
```

Result: 
```powerquery
5
```




## Category
List.Averages
