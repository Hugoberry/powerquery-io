---
title: Type.IsNullable
---

# Type.IsNullable


Retourneert 'true' indien voor een type een null-waarde is toegestaan; anders wordt 'false' geretourneerd.


## Syntax

```powerquery
Type.IsNullable(
    type as type
) as logical
```


## Remarks

Retourneert `true` indien voor een type een `null-waarde is toegestaan`; anders wordt `false` geretourneerd.


## Examples

### Example #1
Bepaal of voor `getal` een null-waarde is toegestaan.
```powerquery
Type.IsNullable(type number)
```

Result: 
```powerquery
false
```


### Example #2
Bepaal of voor `type getal waarvoor null-waarde is toegestaan` een null-waarde is toegestaan.
```powerquery
Type.IsNullable(type nullable number)
```

Result: 
```powerquery
true
```




## Category
Type
