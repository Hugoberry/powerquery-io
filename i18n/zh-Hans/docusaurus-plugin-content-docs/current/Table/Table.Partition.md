---
title: Table.Partition
---

# Table.Partition


## Description

根据指定的组和列的数目，将表分区为一系列表。


## Syntax

```powerquery
Table.Partition(
    table as table,
    column as text,
    groups as number,
    hash as function
) as list
```


## Details

根据 <code>column</code> 和 <code>hash</code> 函数的值，将 <code>table</code> 分区为一组 <code>groups</code> 个表。    <code>hash</code> 函数应用于 <code>column</code> 行的值，以获取该行的哈希值。哈希值模数 <code>groups</code> 确定要将该行放入所返回的哪个表中。    <ul>       <li><code>table</code>: 要分区的表。</li>       <li><code>column</code>: 要执行哈希运算以确定该行位于返回的哪个表中的列。</li>       <li><code>groups</code>: 要对输入表进行分区的表数。</li>       <li><code>hash</code>: 应用以获取哈希值的函数。</li>    </ul>  


## Examples

### Example #1 
使用列的值作为哈希函数，基于列 [a] 将表 &lt;code&gt;(\{[a = 2, b = 4], [a = 6, b = 8], [a = 2, b = 4], [a = 1, b = 4]})&lt;/code&gt; 分区为 2 个表。
```powerquery
Table.Partition(
    Table.FromRecords({
        [a = 2, b = 4],
        [a = 1, b = 4],
        [a = 2, b = 4],
        [a = 1, b = 4]
    }),
    "a",
    2,
    each _
)
```

Result: 
```powerquery
{
    Table.FromRecords({
        [a = 2, b = 4],
        [a = 2, b = 4]
    }),
    Table.FromRecords({
        [a = 1, b = 4],
        [a = 1, b = 4]
    })
}
```




## Category
Table.Row operations
