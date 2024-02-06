---
title: Type.ListItem
---

# Type.ListItem


从列表类型中返回项类型。


## Syntax

```powerquery
Type.ListItem(
    type as type
) as type
```


## Remarks

从列表 <code>type</code> 中返回项类型。


## Examples

### Example #1 
从列表 &lt;code&gt;\{number}&lt;/code&gt; 中找到项类型。
```powerquery
Type.ListItem(type {number})
```

Result: 
```powerquery
type number
```




## Category
Type
