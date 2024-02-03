---
title: List.ContainsAny
---

# List.ContainsAny


## Description

Jelzi, hogy egy lista tartalmazza-e egy másik lista valamely értékét.


## Syntax

```powerquery
List.ContainsAny(
    list as list,
    values as list,
    optional equationCriteria as any
) as logical
```


## Details

Jelzi, hogy a(z) <code>list</code> lista tartalmazza-e egy másik lista (<code>values</code>) valamely értékét.        Igaz értéket ad vissza, ha valamely érték megtalálható a listán, egyéb esetben pedig hamis értéket ad vissza. Megadható egy nem kötelező <code>equationCriteria</code> egyenlőségi feltétel érték is az egyenlőségvizsgálat szabályozásához. 


## Examples

### Example #1 
Annak meghatározása, hogy az \{1, 2, 3, 4, 5} lista tartalmazza-e a 3-at vagy a 9-et
```powerquery
List.ContainsAny({1, 2, 3, 4, 5}, {3, 9})
```

Result: 
```powerquery
true
```


### Example #2 
Annak meghatározása, hogy az \{1, 2, 3, 4, 5} lista tartalmazza-e a 6-ot vagy a 7-et
```powerquery
List.ContainsAny({1, 2, 3, 4, 5}, {6, 7})
```

Result: 
```powerquery
false
```




## Category
List.Membership functions
