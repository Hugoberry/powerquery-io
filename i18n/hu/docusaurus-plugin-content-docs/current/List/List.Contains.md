---
title: List.Contains
---

# List.Contains


## Description

Jelzi, hogy a lista tartalmazza-e az értéket.


## Syntax

```powerquery
List.Contains(
    list as list,
    value as any,
    optional equationCriteria as any
) as logical
```


## Details

Jelzi, hogy a <code>list</code> lista tartalmazza-e a <code>value</code> értéket.    True értéket ad vissza, ha az érték megtalálható a listán, egyéb esetben pedig false értéket ad vissza. Megadható egy nem kötelező <code>equationCriteria</code> egyenlőségi feltétel érték is az egyenlőségvizsgálat szabályozásához. 


## Examples

### Example #1 
Annak meghatározása, hogy az \{1, 2, 3, 4, 5} lista tartalmazza-e a 3-at
```powerquery
List.Contains({1, 2, 3, 4, 5}, 3)
```

Result: 
```powerquery
true
```


### Example #2 
Annak meghatározása, hogy az \{1, 2, 3, 4, 5} lista tartalmazza-e a 6-ot
```powerquery
List.Contains({1, 2, 3, 4, 5}, 6)
```

Result: 
```powerquery
false
```




## Category
List.Membership functions
