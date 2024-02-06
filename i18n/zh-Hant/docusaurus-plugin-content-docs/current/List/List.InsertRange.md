---
title: List.InsertRange
---

# List.InsertRange


將值插入清單中指定的索引位置。


## Syntax

```powerquery
List.InsertRange(
    list as list,
    index as number,
    values as list
) as list
```


## Remarks

將 <code>values</code> 中的值插入 <code>list</code> 的 <code>index</code> 位置，以傳回所產生的新清單。清單中的第一個位置在索引 0 處。      <ul>        <li><code>list</code>: 要插入值的目標清單。</li>        <li><code>index</code>: 目標清單 (<code>list</code>) 中要插入值的索引位置。清單中的第一個位置在索引 0 處。</li>        <li><code>values</code>: 要插入 <code>list</code> 的值清單。</li>      </ul>


## Examples

### Example #1 
將清單 (\{3, 4}) 插入目標清單 (\{1, 2, 5}) 的索引 2 位置。
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
將包含巢狀清單的清單 (\{1, \{1.1, 1.2}}) 插入目標清單 (\{2, 3, 4}) 的索引 0 位置。
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
