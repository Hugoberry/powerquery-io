---
title: Type.NonNullable
---

# Type.NonNullable


Returns the non nullable type from a type.


## Syntax

```powerquery
Type.NonNullable(
    type as type
) as type
```


## Remarks

Returns the non <code>nullable</code> type from the <code>type</code>.


## Examples

### Example #1 
Return the non nullable type of &lt;code&gt;type nullable number&lt;/code&gt;.
```powerquery
Type.NonNullable(type nullable number)
```

Result: 
```powerquery
type number
```




## Category
Type
