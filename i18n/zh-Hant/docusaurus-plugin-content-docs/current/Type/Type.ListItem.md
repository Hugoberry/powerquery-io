---
title: Type.ListItem
---

# Type.ListItem


## Description

從清單類型傳回項目類型。


## Syntax

```powerquery
Type.ListItem(
    type as type
) as type
```


## Details

從清單 <code>type</code> 傳回項目類型。


## Examples

### Example #1 
從清單 &lt;code&gt;\{number}&lt;/code&gt; 中尋找項目類型。
```powerquery
Type.ListItem(type {number})
```

Result: 
```powerquery
type number
```




## Category
Type
