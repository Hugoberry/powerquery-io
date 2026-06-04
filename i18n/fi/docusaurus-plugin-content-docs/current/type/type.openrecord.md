---
title: Type.OpenRecord
---

# Type.OpenRecord


Palauttaa avatun version annetusta tietuetyypistä (tai saman tyypin, jos se on jo avattu).


## Syntax

```powerquery
Type.OpenRecord(
    type as type
) as type
```


## Remarks

Palauttaa avatun version annetusta kohteesta `record` `type` (tai saman tyypin, jos se on jo avattu).


## Examples

### Example #1
Luo avattu versio kohteesta `type [ A = number]`.
```powerquery
Type.OpenRecord(type [A = number])
```

Result: 
```powerquery
type [A = number, ...]
```




## Category
Type
