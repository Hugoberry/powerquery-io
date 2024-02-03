---
title: List.Difference
---

# List.Difference


## Description

指定された 2 つのリストの相違を返します。


## Syntax

```powerquery
List.Difference(
    list1 as list,
    list2 as list,
    optional equationCriteria as any
) as list
```


## Details

リスト <code>list1</code> 内の、リスト <code>list2</code> に含まれていない項目を返します。重複する値がサポートされています。    省略可能な数式条件値 <code>equationCriteria</code> を指定して、値が等しいかどうかのテストを制御できます。


## Examples

### Example #1 
リスト \{1, 2, 3, 4, 5} 内の、\{4, 5, 3} に含まれていない項目を求めます。
```powerquery
List.Difference({1, 2, 3, 4, 5}, {4, 5, 3})
```

Result: 
```powerquery
{1, 2}
```


### Example #2 
リスト \{1, 2} 内の、\{1, 2, 3} に含まれていない項目を求めます。
```powerquery
List.Difference({1, 2}, {1, 2, 3})
```

Result: 
```powerquery
{}
```




## Category
List.Set operations
