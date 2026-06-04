---
title: Type.OpenRecord
---

# Type.OpenRecord


A megadott rekordtípus nyitott verziójának (vagy ha már nyitott, akkor ugyanazon típus) visszaadása.


## Syntax

```powerquery
Type.OpenRecord(
    type as type
) as type
```


## Remarks

A megadott `type` `record` típus nyitott verziójának (vagy ha már nyitott, akkor ugyanazon típus) visszaadása.


## Examples

### Example #1
A `type [ A = number,…]` nyitott zárt verziójának létrehozása.
```powerquery
Type.OpenRecord(type [A = number])
```

Result: 
```powerquery
type [A = number, ...]
```




## Category
Type
