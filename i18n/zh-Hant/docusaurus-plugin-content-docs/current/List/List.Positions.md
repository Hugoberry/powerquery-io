---
title: List.Positions
---

# List.Positions


傳回輸入的位移清單。


## Syntax

```powerquery
List.Positions(
    list as list
) as list
```


## Remarks

傳回輸入清單 <code>list</code> 的位移清單。    使用 List.Transform 變更清單時，可以使用位置清單讓轉換能夠存取位置。


## Examples

### Example #1 
找出清單 \{1, 2, 3, 4, null, 5} 中值的位移。
```powerquery
List.Positions({1, 2, 3, 4, null, 5})
```

Result: 
```powerquery
{0, 1, 2, 3, 4, 5}
```




## Category
List.Selection
