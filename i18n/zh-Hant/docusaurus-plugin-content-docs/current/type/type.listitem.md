---
title: Type.ListItem
---

# Type.ListItem


從清單類型傳回項目類型。


## Syntax

```powerquery
Type.ListItem(
    type as type
) as type
```


## Remarks

從清單 `type` 傳回項目類型。


## Examples

### Example #1
從清單 `{number}` 中尋找項目類型。
```powerquery
Type.ListItem(type {number})
```

Result: 
```powerquery
type number
```




## Category
Type
