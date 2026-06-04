---
title: Type.IsOpenRecord
---

# Type.IsOpenRecord


Жазба түрінің ашық екендігін көрсетеді.


## Syntax

```powerquery
Type.IsOpenRecord(
    type as type
) as logical
```


## Remarks

`type` жазбасының ашық екендігін көрсететін `логикалық мәнді` береді.


## Examples

### Example #1
`type [ A = number, ...]`жазбасының ашық екендігін анықтаңыз.
```powerquery
Type.IsOpenRecord(type [A = number, ...])
```

Result: 
```powerquery
true
```




## Category
Type
