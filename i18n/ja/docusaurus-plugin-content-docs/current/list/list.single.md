---
title: List.Single
---

# List.Single


長さが 1 のリストに対して 1 つのリスト項目を返し、それ以外の場合はエラーが発生します。


## Syntax

```powerquery
List.Single(
    list as list
) as any
```


## Remarks

リスト `list` に含まれる項目が 1 つしかない場合は、その項目を返します。 複数の項目がある場合、またはリストが空の場合、関数はエラーを発生させます。


## Examples

### Example #1
リスト \{1\} 内の単独の値を求めます。
```powerquery
List.Single({1})
```

Result: 
```powerquery
1
```


### Example #2
リスト \{1, 2, 3\} 内の単独の値を求めます。
```powerquery
List.Single({1, 2, 3})
```

Result: 
```powerquery
[Expression.Error] There were too many elements in the enumeration to complete the operation.
```




## Category
List.Selection
