---
title: List.ContainsAll
---

# List.ContainsAll


## Description

Jelzi, hogy egy lista tartalmazza-e egy másik lista összes értékét.


## Syntax

```powerquery
List.ContainsAll(
    list as list,
    values as list,
    optional equationCriteria as any
) as logical
```


## Details

Jelzi, hogy a(z) <code>list</code> lista tartalmazza-e egy másik lista (<code>values</code>) összes értékét.    Igaz értéket ad vissza, ha az érték megtalálható a listán, egyéb esetben pedig hamis értéket ad vissza. Megadható egy nem kötelező <code>equationCriteria</code> egyenlőségi feltétel érték is az egyenlőségvizsgálat szabályozásához. 


## Examples

### Example #1 
Annak meghatározása, hogy az \{1, 2, 3, 4, 5} lista tartalmazza-e a 3-at és a 4-et
```powerquery
List.ContainsAll({1, 2, 3, 4, 5}, {3, 4})
```

Result: 
```powerquery
true
```


### Example #2 
Annak meghatározása, hogy az \{1, 2, 3, 4, 5} lista tartalmazza-e az 5-öt és a 6-ot
```powerquery
List.ContainsAll({1, 2, 3, 4, 5}, {5, 6})
```

Result: 
```powerquery
false
```




## Category
List.Membership functions
