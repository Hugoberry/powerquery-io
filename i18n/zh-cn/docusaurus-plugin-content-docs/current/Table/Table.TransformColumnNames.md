---
title: Table.TransformColumnNames
---

# Table.TransformColumnNames


## Description

使用给定的函数转换列名。


## Syntax

```powerquery
Table.TransformColumnNames(
    table as table,
    nameGenerator as function,
    optional options as record
) as table
```


## Details

使用给定的 <code>nameGenerator</code> 函数转换列名。有效选项:    <div>      <code>MaxLength</code> 指定新列名的最大长度。如果给定函数生成的列名较长，则长名称将被剪裁。    </div>    <div>      <code>Comparer</code> 用于在生成新列名时控制比较。比较器可用于提供不区分大小写或区分区域性和区域设置的比较。    </div>    <div>      以下内置比较器以公式语言提供:    </div>    <ul>      <li><code>Comparer.Ordinal</code>: 用于执行精确的序号比较</li>      <li><code>Comparer.OrdinalIgnoreCase</code>: 用于执行精确的不区分大小写的序号比较</li>      <li> <code>Comparer.FromCulture</code>: 用于执行区分区域性的比较</li>    </ul>    


## Examples

### Example #1 
从列名中删除 &lt;code&gt;#(tab)&lt;/code&gt; 字符
```powerquery
Table.TransformColumnNames(Table.FromRecords({[#"Col#(tab)umn" = 1]}), Text.Clean)
```

Result: 
```powerquery
Table.FromRecords({[Column = 1]})
```


### Example #2 
转换列名以生成不区分大小写的名称(长度为 6)。
```powerquery
Table.TransformColumnNames(
    Table.FromRecords({[ColumnNum = 1, cOlumnnum = 2, coLumnNUM = 3]}),
    Text.Clean,
    [MaxLength = 6, Comparer = Comparer.OrdinalIgnoreCase]
)
```

Result: 
```powerquery
Table.FromRecords({[Column = 1, cOlum1 = 2, coLum2 = 3]})
```




## Category
Table.Column operations
