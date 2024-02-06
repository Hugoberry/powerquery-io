---
title: List.Range
---

# List.Range


傳回清單從位移處開始的子集。


## Syntax

```powerquery
List.Range(
    list as list,
    offset as number,
    optional count as number
) as list
```


## Remarks

傳回清單從位移 <code>list</code> 開始的子集。選擇性的參數 <code>offset</code> 可設定子集中的最大項目數目。


## Examples

### Example #1 
找出數字 1 到 10 的清單中從位移 6 開始的子集。
```powerquery
List.Range({1..10}, 6)
```

Result: 
```powerquery
{7, 8, 9, 10}
```


### Example #2 
找出數字 1 到 10 的清單中從位移 6 開始、且長度 2 的子集。
```powerquery
List.Range({1..10}, 6, 2)
```

Result: 
```powerquery
{7, 8}
```




## Category
List.Selection
