---
title: Table.Group
---

# Table.Group


## Description

对表中具有相同键的行进行分组。


## Syntax

```powerquery
Table.Group(
    table as table,
    key as any,
    aggregatedColumns as list,
    optional groupKind as GroupKind.Type,
    optional comparer as function
) as table
```


## Details

按 <code>key</code> 定义的键列对 <code>table</code> 的行进行分组。<code>key</code> 可以是单个列名，也可以是列名称列表。    每个组会构造一条记录，其中包含键列(和它们的值) 以及由 <code>aggregatedColumns</code> 指定的任何聚合列。    或者，也可以指定 <code>groupKind</code> 和 <code>comparer</code>。<br />    <br />    如果数据已按键列排序，则可以提供 GroupKind.Local 的 <code>groupKind</code>。在某些情况下，这可能会提高分组的性能，    因为具有给定键值集的所有行都被认为是连续的。 <br />    <br />    传递 <code>comparer</code> 时，请注意，如果它将不同的键视为相等，则可能会将行放置在与其键不同的组中。<br />    <br />    此函数不能保证它返回的行的顺序。  


## Examples

### Example #1 
对表进行分组，同时添加一个聚合列 [total]，其中包含价格总和(&#34;each List.Sum([price])&#34;)。
```powerquery
Table.Group(
    Table.FromRecords({
        [CustomerID = 1, price = 20],
        [CustomerID = 2, price = 10],
        [CustomerID = 2, price = 20],
        [CustomerID = 1, price = 10],
        [CustomerID = 3, price = 20],
        [CustomerID = 3, price = 5]
    }),
    "CustomerID",
    {"total", each List.Sum([price])}
)
```

Result: 
```powerquery
Table.FromRecords(
    {
        [CustomerID = 1, total = 30],
        [CustomerID = 2, total = 30],
        [CustomerID = 3, total = 25]
    },
    {"CustomerID", "total"}
)
```




## Category
Table.Transformation
