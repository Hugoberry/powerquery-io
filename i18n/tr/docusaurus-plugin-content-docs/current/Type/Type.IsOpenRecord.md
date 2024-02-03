---
title: Type.IsOpenRecord
---

# Type.IsOpenRecord


## Description

Bir kayıt türünün açık olup olmadığını döndürür.


## Syntax

```powerquery
Type.IsOpenRecord(
    type as type
) as logical
```


## Details

Bir <code>type</code> kaydının açık olup olmadığı belirten bir <code>logical</code> değeri döndürür.


## Examples

### Example #1 
Kaydın &lt;code&gt;type [ A = number, ...]&lt;/code&gt; açık olup olmadığı belirlenir.
```powerquery
Type.IsOpenRecord(type [A = number, ...])
```

Result: 
```powerquery
true
```




## Category
Type
