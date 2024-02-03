---
title: Type.ClosedRecord
---

# Type.ClosedRecord


## Description

A megadott rekordtípus zárt verziójának (vagy ha már zárt, akkor ugyanazon típus) visszaadása.


## Syntax

```powerquery
Type.ClosedRecord(
    type as type
) as type
```


## Details

A megadott <code>type</code> <code>record</code> típus zárt verziójának (vagy ha már zárt, akkor ugyanazon típus) visszaadása.


## Examples

### Example #1 
A &lt;code&gt;type [ A = number,…]&lt;/code&gt; típus zárt verziójának létrehozása.
```powerquery
Type.ClosedRecord(type [A = number, ...])
```

Result: 
```powerquery
type [A = number]
```




## Category
Type
