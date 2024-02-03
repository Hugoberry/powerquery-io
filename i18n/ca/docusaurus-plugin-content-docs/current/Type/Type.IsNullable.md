---
title: Type.IsNullable
---

# Type.IsNullable


## Description

Retorna el valor true si un tipus és nullable (es pot anul·lar); en cas contrari, el valor false.


## Syntax

```powerquery
Type.IsNullable(
    type as type
) as logical
```


## Details

Retorna el valor <code>true</code> si un tipus és <code>nullable</code>; en cas contrari, el valor <code>false</code>.


## Examples

### Example #1 
Determineu si &lt;code&gt;number&lt;/code&gt; és nullable.
```powerquery
Type.IsNullable(type number)
```

Result: 
```powerquery
false
```


### Example #2 
Determineu si &lt;code&gt;type nullable number&lt;/code&gt; és nullable.
```powerquery
Type.IsNullable(type nullable number)
```

Result: 
```powerquery
true
```




## Category
Type
