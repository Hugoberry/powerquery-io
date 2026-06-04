---
title: Type.ClosedRecord
---

# Type.ClosedRecord


A megadott rekordtípus zárt verziójának (vagy ha már zárt, akkor ugyanazon típus) visszaadása.


## Syntax

```powerquery
Type.ClosedRecord(
    type as type
) as type
```


## Remarks

A megadott `type` `record` típus zárt verziójának (vagy ha már zárt, akkor ugyanazon típus) visszaadása.


## Examples

### Example #1
A `type [ A = number,…]` típus zárt verziójának létrehozása.
```powerquery
Type.ClosedRecord(type [A = number, ...])
```

Result: 
```powerquery
type [A = number]
```




## Category
Type
