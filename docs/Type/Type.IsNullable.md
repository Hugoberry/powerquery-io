---
title: Type.IsNullable
---

# Type.IsNullable


Returns true if a type is a nullable type; otherwise, false.


## Syntax

```powerquery
Type.IsNullable(
    type as type
) as logical
```


## Remarks

Returns <code>true</code> if a type is a <code>nullable</code> type; otherwise, <code>false</code>.


## Examples

### Example #1 
Determine if &lt;code&gt;number&lt;/code&gt; is nullable.
```powerquery
Type.IsNullable(type number)
```

Result: 
```powerquery
false
```


### Example #2 
Determine if &lt;code&gt;type nullable number&lt;/code&gt; is nullable.
```powerquery
Type.IsNullable(type nullable number)
```

Result: 
```powerquery
true
```




## Category
Type
