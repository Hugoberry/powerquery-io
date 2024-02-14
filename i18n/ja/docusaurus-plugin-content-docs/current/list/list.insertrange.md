---
title: List.InsertRange
---

# List.InsertRange


リストの指定されたインデックス位置に値を挿入します。


## Syntax

```powerquery
List.InsertRange(
    list as list,
    index as number,
    values as list
) as list
```


## Remarks

<code>values</code> の値を <code>list</code> の <code>index</code> の位置に挿入することによって生成される新しいリストを返します。リスト内の最初の位置はインデックス 0 になります。      <ul>        <li><code>list</code>: 値の挿入先のリスト。</li>        <li><code>index</code>: 値の挿入先のリスト (<code>list</code>) 内の位置を示すインデックス。リスト内の最初の位置はインデックス 0 になります。</li>        <li><code>values</code>: <code>list</code> に挿入される値のリスト。</li>      </ul>


## Examples

### Example #1 
リスト (\{3, 4}) を挿入先リスト (\{1, 2, 5}) のインデックス 2 に挿入します。
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
入れ子になったリスト (\{1, \{1.1, 1.2}}) を含むリストを挿入先リスト (\{2, 3, 4}) のインデックス 0 に挿入します。
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
