---
title: List.Distinct
---

# List.Distinct


重複が削除された値のリストを返します。


## Syntax

```powerquery
List.Distinct(
    list as list,
    optional equationCriteria as any
) as list
```


## Remarks

重複が削除された、リスト <code>list</code> 内のすべての値を含むリストを返します。リストが空の場合、結果は空のリストになります。


## Examples

### Example #1 
リスト \{1, 1, 2, 3, 3, 3} から重複を削除します。
```powerquery
List.Distinct({1, 1, 2, 3, 3, 3})
```

Result: 
```powerquery
{1, 2, 3}
```




## Category
List.Selection
