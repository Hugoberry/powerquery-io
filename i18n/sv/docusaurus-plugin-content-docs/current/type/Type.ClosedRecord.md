---
title: Type.ClosedRecord
---

# Type.ClosedRecord


Returnerar en stängd version av den givna posttypen (eller samma typ, om den redan är stängd).


## Syntax

```powerquery
Type.ClosedRecord(
    type as type
) as type
```


## Remarks

Returnerar en stängd version av den givna <code>record</code> <code>type</code> (eller samma typ, om den redan är stängd).


## Examples

### Example #1 
Skapa en stängd version av &lt;code&gt;type [ A = number,…]&lt;/code&gt;.
```powerquery
Type.ClosedRecord(type [A = number, ...])
```

Result: 
```powerquery
type [A = number]
```




## Category
Type
