---
title: Type.IsNullable
---

# Type.IsNullable


Түр нөлдік түрде болса, оң мәнді береді, олай болмаса, теріс мәнді береді.


## Syntax

```powerquery
Type.IsNullable(
    type as type
) as logical
```


## Remarks

Түр `нөлдік` түрде болса, `оң мәнді` береді; олай болмаса, `теріс мәнді` береді.


## Examples

### Example #1
`Санның` нөл екендігін анықтаңыз.
```powerquery
Type.IsNullable(type number)
```

Result: 
```powerquery
false
```


### Example #2
`Түрдің нөлдік саны` нөл екендігін анықтыңыз.
```powerquery
Type.IsNullable(type nullable number)
```

Result: 
```powerquery
true
```




## Category
Type
