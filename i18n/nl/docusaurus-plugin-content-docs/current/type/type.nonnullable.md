---
title: Type.NonNullable
---

# Type.NonNullable


Retourneert het type waarvoor geen null-waarde is toegestaan voor een type.


## Syntax

```powerquery
Type.NonNullable(
    type as type
) as type
```


## Remarks

Retourneert het type waarvoor geen `null-waarde is toegestaan` voor `type`.


## Examples

### Example #1
Retourneert het type waarvoor geen null-waarde is toegestaan van het `type getal waarvoor null-waarde is toegestaan`.
```powerquery
Type.NonNullable(type nullable number)
```

Result: 
```powerquery
type number
```




## Category
Type
