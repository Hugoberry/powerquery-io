---
title: Type.OpenRecord
---

# Type.OpenRecord


## Description

A megadott rekordtípus nyitott verziójának (vagy ha már nyitott, akkor ugyanazon típus) visszaadása.


## Syntax

```powerquery
Type.OpenRecord(
    type as type
) as type
```


## Details

A megadott <code>type</code> <code>record</code> típus nyitott verziójának (vagy ha már nyitott, akkor ugyanazon típus) visszaadása.


## Examples

### Example #1 
A &lt;code&gt;type [ A = number,…]&lt;/code&gt; nyitott zárt verziójának létrehozása.
```powerquery
Type.OpenRecord(type [A = number])
```

Result: 
```powerquery
type [A = number, ...]
```




## Category
Type
