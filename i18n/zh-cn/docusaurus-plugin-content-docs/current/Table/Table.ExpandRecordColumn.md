---
title: Table.ExpandRecordColumn
---

# Table.ExpandRecordColumn


## Description

将记录列扩展为具有每个值的列。


## Syntax

```powerquery
Table.ExpandRecordColumn(
    table as table,
    column as text,
    fieldNames as list,
    optional newColumnNames as list
) as table
```


## Details

给定输入 <code>table</code> 中的 <code>column</code> 条记录后，创建一个表，其中针对记录中的每个字段都有一列。也可以指定 <code>newColumnNames</code>，以确保新表中的各列具有唯一名称。    <ul>        <li><code>table</code>: 原始表以及要扩展的记录列。</li>        <li><code>column</code>: 要扩展的列。</li>        <li><code>fieldNames</code>: 要扩展到表中各列的字段列表。</li>        <li><code>newColumnNames</code>: 给予新列的列名的列表。新列名不能与新表中的任何列重复。</li>    </ul>


## Examples

### Example #1 
将表 &lt;code&gt;(\{[a = [aa = 1, bb = 2, cc = 3], b = 2]})&lt;/code&gt; 中的列 [a] 扩展为 3 列 &#34;aa&#34;、&#34;bb&#34; 和 &#34;cc&#34;。
```powerquery
Table.ExpandRecordColumn(
    Table.FromRecords({
        [
            a = [aa = 1, bb = 2, cc = 3],
            b = 2
        ]
    }),
    "a",
    {"aa", "bb", "cc"}
)
```

Result: 
```powerquery
Table.FromRecords({[aa = 1, bb = 2, cc = 3, b = 2]})
```




## Category
Table.Transformation
