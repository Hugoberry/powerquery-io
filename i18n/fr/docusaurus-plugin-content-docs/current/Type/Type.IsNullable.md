---
title: Type.IsNullable
---

# Type.IsNullable


## Description

Retourne true si un type est de type nullable ; dans le cas contraire, false.


## Syntax

```powerquery
Type.IsNullable(
    type as type
) as logical
```


## Details

Retourne <code>true</code> si un type est un type <code>nullable</code> ; dans le cas contraire, <code>false</code>.


## Examples

### Example #1 
Déterminez si &lt;code&gt;number&lt;/code&gt; est nullable.
```powerquery
Type.IsNullable(type number)
```

Result: 
```powerquery
false
```


### Example #2 
Déterminez si &lt;code&gt;type nullable number&lt;/code&gt; est nullable.
```powerquery
Type.IsNullable(type nullable number)
```

Result: 
```powerquery
true
```




## Category
Type
