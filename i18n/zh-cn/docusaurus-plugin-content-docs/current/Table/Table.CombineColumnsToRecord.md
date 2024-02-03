---
title: Table.CombineColumnsToRecord
---

# Table.CombineColumnsToRecord


## Description

将指定的列合并到新的记录值列中，其中每条记录都有与所合并的列的列名和值对应的字段名称和值。


## Syntax

```powerquery
Table.CombineColumnsToRecord(
    table as table,
    newColumnName as text,
    sourceColumns as list,
    optional options as record
) as table
```


## Details

将 <code>table</code> 的指定列合并到名为 <code>newColumnName</code> 的新记录值列中，其中每条记录都具有对应于所合并列的列名和值的字段名称和值。如果为 <code>options</code> 指定了记录，可能会提供以下选项:    <ul>     <li> <code>DisplayNameColumn</code>: 指定为文本时，指示应将给定列名视为记录的显示名称。这不一定要是记录本身包含的列。</li>     <li> <code>TypeName</code>: 指定为文本时，为生成的记录提供逻辑类型名称。在数据加载过程中，加载环境可以使用该逻辑类型名称来驱动行为。</li>    </ul>    



## Category
Table.Transformation
