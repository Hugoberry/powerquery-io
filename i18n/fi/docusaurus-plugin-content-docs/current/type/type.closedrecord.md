---
title: Type.ClosedRecord
---

# Type.ClosedRecord


Palauttaa suljetun version annetusta tietuetyypistä (tai saman tyypin, jos se on jo suljettu).


## Syntax

```powerquery
Type.ClosedRecord(
    type as type
) as type
```


## Remarks

Palauttaa suljetun version annetusta kohteesta `record` `type` (tai saman tyypin, jos se on jo suljettu).


## Examples

### Example #1
Luo suljettu versio kohteesta `type [ A = number,...]`.
```powerquery
Type.ClosedRecord(type [A = number, ...])
```

Result: 
```powerquery
type [A = number]
```




## Category
Type
