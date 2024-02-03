---
title: Table.AlternateRows
---

# Table.AlternateRows


## Description

保留初始偏移量，然后交替选取和跳过下列行。


## Syntax

```powerquery
Table.AlternateRows(
    table as table,
    offset as number,
    skip as number,
    take as number
) as table
```


## Details

保留初始偏移量，然后交替选取和跳过下列行。    <ul>       <li><code>table</code>: 输入表。</li>       <li><code>offset</code>: 在开始迭代之前要保留的行数。</li>       <li><code>skip</code>: 每次迭代中要删除的行数。</li>       <li><code>take</code>: 每次迭代中要保留的行数。</li>    </ul>    


## Examples

### Example #1 
从表中创建一个表，从第一行开始，跳过 1 个值，然后保留 1 个值。
```powerquery
Table.AlternateRows(
    Table.FromRecords({
        [CustomerID = 1, Name = "Bob", Phone = "123-4567"],
        [CustomerID = 2, Name = "Jim", Phone = "987-6543"],
        [CustomerID = 3, Name = "Paul", Phone = "543-7890"]
    }),
    1,
    1,
    1
)
```

Result: 
```powerquery
Table.FromRecords({
    [CustomerID = 1, Name = "Bob", Phone = "123-4567"],
    [CustomerID = 3, Name = "Paul", Phone = "543-7890"]
})
```




## Category
Table.Row operations
