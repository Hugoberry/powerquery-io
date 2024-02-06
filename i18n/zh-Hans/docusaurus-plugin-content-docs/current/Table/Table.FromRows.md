---
title: Table.FromRows
---

# Table.FromRows


从行值列表和可选列创建一个表


## Syntax

```powerquery
Table.FromRows(
    rows as list,
    optional columns as any
) as table
```


## Remarks

从列表 <code>rows</code> 创建一个表，其中该列表的每个元素都是一个包含用于单一行的列值的内部列表。可以为 <code>columns</code> 提供可选的列名列表、表类型或若干列。


## Examples

### Example #1 
使用列 [CustomerID] 以及值 \{1, 2}、列 [Name] 以及值 \{&#34;Bob&#34;, &#34;Jim&#34;}、列 [Phone] 以及值 \{&#34;123-4567&#34;, &#34;987-6543&#34;} 返回一个表。
```powerquery
Table.FromRows(
    {
        {1, "Bob", "123-4567"},
        {2, "Jim", "987-6543"}
    },
    {"CustomerID", "Name", "Phone"}
)
```

Result: 
```powerquery
Table.FromRecords({
    [CustomerID = 1, Name = "Bob", Phone = "123-4567"],
    [CustomerID = 2, Name = "Jim", Phone = "987-6543"]
})
```


### Example #2 
使用列 [CustomerID] 以及值 \{1, 2}、列 [Name] 以及值 \{&#34;Bob&#34;, &#34;Jim&#34;}、列 [Phone] 以及值 \{&#34;123-4567&#34;, &#34;987-6543&#34;} 返回一个表，其中 [CustomerID] 是数值类型，[Name] 和 [Phone] 是文本类型。
```powerquery
Table.FromRows(
    {
        {1, "Bob", "123-4567"},
        {2, "Jim", "987-6543"}
    },
    type table [CustomerID = number, Name = text, Phone = text]
)
```

Result: 
```powerquery
Table.FromRecords({
    [CustomerID = 1, Name = "Bob", Phone = "123-4567"],
    [CustomerID = 2, Name = "Jim", Phone = "987-6543"]
})
```




## Category
Table.Table construction
