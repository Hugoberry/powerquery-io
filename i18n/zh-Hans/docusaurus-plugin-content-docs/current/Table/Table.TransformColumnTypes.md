---
title: Table.TransformColumnTypes
---

# Table.TransformColumnTypes


使用特定的区域性应用格式 \{ column, type } 的类型转换。


## Syntax

```powerquery
Table.TransformColumnTypes(
    table as table,
    typeTransformations as list,
    optional culture as text
) as table
```


## Remarks

通过对在参数 <code>typeTransformations</code> 中指定的列应用转换操作(其中格式为 \{ column name, type name})，使用可选参数 <code>culture</code> 中的指定区域性(例如 "en-US")，从输入 <code>table</code> 中返回一个表。    如果该列不存在，则引发异常。


## Examples

### Example #1 
在表 &lt;code&gt;(\{[a = 1, b = 2], [a = 3, b = 4]})&lt;/code&gt; 中将列 [a] 中的数值转换为文本值。
```powerquery
Table.TransformColumnTypes(
    Table.FromRecords({
        [a = 1, b = 2],
        [a = 3, b = 4]
    }),
    {"a", type text},
    "en-US"
)
```

Result: 
```powerquery
Table.FromRecords({
    [a = "1", b = 2],
    [a = "3", b = 4]
})
```




## Category
Table.Transformation
