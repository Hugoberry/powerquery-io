---
title: Type.IsNullable
---

# Type.IsNullable


Gibt &#39;true&#39; zurück, wenn ein Typ NULL-Werte zulässt; andernfalls &#39;false&#39;.


## Syntax

```powerquery
Type.IsNullable(
    type as type
) as logical
```


## Remarks

Gibt <code>true</code> zurück, wenn ein Typ ein <code>Nullable</code>-Typ ist, der NULL-Werte zulässt; andernfalls <code>false</code>.


## Examples

### Example #1 
Bestimmen Sie, ob &lt;code&gt;number&lt;/code&gt; NULL-Werte zulässt.
```powerquery
Type.IsNullable(type number)
```

Result: 
```powerquery
false
```


### Example #2 
Bestimmen Sie, ob &lt;code&gt;type nullable number&lt;/code&gt; NULL-Werte zulässt.
```powerquery
Type.IsNullable(type nullable number)
```

Result: 
```powerquery
true
```




## Category
Type
