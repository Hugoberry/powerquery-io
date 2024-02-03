---
title: Type.IsNullable
---

# Type.IsNullable


## Description

Atgriež &#34;true&#34;, ja tips ir Nullējams. Pretējā gadījumā vērtība ir &#34;false&#34;.


## Syntax

```powerquery
Type.IsNullable(
    type as type
) as logical
```


## Details

Atgriež <code>true</code>, ja tips ir <code>Nullable</code>. Pretējā gadījumā vērtība ir <code>false</code>.


## Examples

### Example #1 
Nosakiet, vai &lt;code&gt;number&lt;/code&gt; ir Nullējams.
```powerquery
Type.IsNullable(type number)
```

Result: 
```powerquery
false
```


### Example #2 
Nosakiet, vai &lt;code&gt;type Nullable number&lt;/code&gt; ir Nullējams.
```powerquery
Type.IsNullable(type nullable number)
```

Result: 
```powerquery
true
```




## Category
Type
