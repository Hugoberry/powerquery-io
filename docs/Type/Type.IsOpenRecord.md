---
title: Type.IsOpenRecord
---

# Type.IsOpenRecord


Returns whether a record type is open.


## Syntax

```powerquery
Type.IsOpenRecord(
    type as type
) as logical
```


## Remarks

Returns a <code>logical</code> indicating whether a record <code>type</code> is open.


## Examples

### Example #1 
Determine if the record &lt;code&gt;type [ A = number, ...]&lt;/code&gt; is open.
```powerquery
Type.IsOpenRecord(type [A = number, ...])
```

Result: 
```powerquery
true
```




## Category
Type
