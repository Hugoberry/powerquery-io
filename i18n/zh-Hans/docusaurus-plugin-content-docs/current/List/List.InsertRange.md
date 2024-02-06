---
title: List.InsertRange
---

# List.InsertRange


在给定的索引处将值插入列表。


## Syntax

```powerquery
List.InsertRange(
    list as list,
    index as number,
    values as list
) as list
```


## Remarks

返回通过在 <code>index</code> 处将 <code>values</code> 中的值插入 <code>list</code> 来生成的新列表。列表中的第一个位置为索引 0 处。      <ul>        <li><code>list</code>: 要插入值的目标列表。</li>        <li><code>index</code>: 目标列表(<code>list</code>)的索引，要在此处插入值。列表中的第一个位置为索引 0 处。</li>        <li><code>values</code>: 要插入 <code>list</code> 的值列表。</li>      </ul>


## Examples

### Example #1 
在索引 2 处将列表(\{3, 4})插入目标列表(\{1, 2, 5})。
```powerquery
List.InsertRange({1, 2, 5}, 2, {3, 4})
```

Result: 
```powerquery
{
    1,
    2,
    3,
    4,
    5
}
```


### Example #2 
在索引 0 处将带嵌套列表的列表(\{1, \{1.1, 1.2}})插入目标列表(\{2, 3, 4})。
```powerquery
List.InsertRange({2, 3, 4}, 0, {1, {1.1, 1.2}})
```

Result: 
```powerquery
{
    1,
    {
        1.1,
        1.2
    },
    2,
    3,
    4
}
```




## Category
List.Selection
