---
title: List.Single
---

# List.Single


長さが 1 のリストに対して 1 つのリスト項目を返し、それ以外の場合は例外をスローします。


## Syntax

```powerquery
List.Single(
    list as list
) as any
```


## Remarks

リスト <code>list</code> に含まれる項目が 1 つしかない場合は、その項目を返します。    複数の項目が存在するか、リストが空の場合、この関数は例外をスローします。


## Examples

### Example #1 
リスト \{1} 内の単独の値を求めます。
```powerquery
List.Single({1})
```

Result: 
```powerquery
1
```


### Example #2 
リスト \{1, 2, 3} 内の単独の値を求めます。
```powerquery
List.Single({1, 2, 3})
```

Result: 
```powerquery
[Expression.Error] There were too many elements in the enumeration to complete the operation.
```




## Category
List.Selection
