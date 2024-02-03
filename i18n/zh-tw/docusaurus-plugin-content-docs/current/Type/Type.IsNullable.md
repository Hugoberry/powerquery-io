---
title: Type.IsNullable
---

# Type.IsNullable


## Description

若類型為可為 Null 類型時傳回 true；否則傳回 false。


## Syntax

```powerquery
Type.IsNullable(
    type as type
) as logical
```


## Details

若類型為 <code>nullable</code> 類型時傳回 <code>true</code>；否則為 <code>false</code>。


## Examples

### Example #1 
判斷 &lt;code&gt;number&lt;/code&gt; 是否可為 Null。
```powerquery
Type.IsNullable(type number)
```

Result: 
```powerquery
false
```


### Example #2 
判斷是否 &lt;code&gt;type nullable number&lt;/code&gt; 可為 Null。
```powerquery
Type.IsNullable(type nullable number)
```

Result: 
```powerquery
true
```




## Category
Type
