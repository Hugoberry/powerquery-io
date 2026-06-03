---
title: Type.OpenRecord
---

# Type.OpenRecord


Returnerar en öppen version av den givna posttypen (eller samma typ, om den redan är stängd).


## Syntax

```powerquery
Type.OpenRecord(
    type as type
) as type
```


## Remarks

Returnerar en öppen version av den givna `record` `type` (eller samma typ, om den redan är öppen).


## Examples

### Example #1
Skapa en öppen version av `type [ A = number,…]`.
```powerquery
Type.OpenRecord(type [A = number])
```

Result: 
```powerquery
type [A = number, ...]
```




## Category
Type
