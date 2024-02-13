---
title: Type.ListItem
---

# Type.ListItem


リスト型からアイテム型を返します。


## Syntax

```powerquery
Type.ListItem(
    type as type
) as type
```


## Remarks

リスト <code>type</code> からアイテム型を返します。


## Examples

### Example #1 
リスト &lt;code&gt;\{number}&lt;/code&gt; からアイテム型を検索します。
```powerquery
Type.ListItem(type {number})
```

Result: 
```powerquery
type number
```




## Category
Type
