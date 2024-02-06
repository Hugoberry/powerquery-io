---
title: Table.ToRows
---

# Table.ToRows


从表中创建行值的嵌套列表的列表。


## Syntax

```powerquery
Table.ToRows(
    table as table
) as list
```


## Remarks

从表 <code>table</code> 中创建嵌套表的列表。 每个列表项都是一个包含行值的内部列表。


## Examples

### Example #1 
从表中创建行值的列表。
```powerquery
Table.ToRows(
    Table.FromRecords({
        [CustomerID = 1, Name = "Bob", Phone = "123-4567"],
        [CustomerID = 2, Name = "Jim", Phone = "987-6543"],
        [CustomerID = 3, Name = "Paul", Phone = "543-7890"]
    })
)
```

Result: 
```powerquery
{
    {1, "Bob", "123-4567"},
    {2, "Jim", "987-6543"},
    {3, "Paul", "543-7890"}
}
```




## Category
Table.Conversions
