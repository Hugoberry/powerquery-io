---
title: Type.OpenRecord
---

# Type.OpenRecord


Returns an opened version of the given record type (or the same type, if it is already open).


## Syntax

```powerquery
Type.OpenRecord(
    type as type
) as type
```


## Remarks

Returns an opened version of the given <code>record</code> <code>type</code> (or the same type, if it is already opened).


## Examples

### Example #1 
Create an opened version of &lt;code&gt;type [ A = number]&lt;/code&gt;.
```powerquery
Type.OpenRecord(type [A = number])
```

Result: 
```powerquery
type [A = number, ...]
```




## Category
Type
