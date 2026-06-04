---
title: Table.AddFuzzyClusterColumn
---

# Table.AddFuzzyClusterColumn


添加一个具有代表值的新列，这些值由表中指定列的模糊分组值获得的。


## Syntax

```powerquery
Table.AddFuzzyClusterColumn(
    table as table,
    columnName as text,
    newColumnName as text,
    optional options as record
) as table
```


## Remarks

使用 `columnName` 的代表值将新列 `newColumnName` 添加到 `table` 中。代表值是通过模糊匹配针对每一行匹配 `columnName` 中的值获得的。

可包含一组可选的 `options` 来指定如何比较键列。选项包括:

-   `Culture` : 允许根据区域性特定的规则对记录进行分组。它可以是任何有效的区域性名称。例如，"ja-JP" 的区域性选项基于日语区域性对记录进行分组。默认值为 ""，它基于固定英语区域性进行分组。
-   `IgnoreCase` : 一个逻辑(true/false)值，它允许不区分大小写的键分组。例如，如果为 true，则 "Grapes" 与 "grapes" 分组到一起。默认值为 true。
-   `IgnoreSpace` : 一个逻辑(true/false)值，它允许组合文本部分来查找组。例如，如果为 true，则 "Gra pes" 与 "Grapes" 分组到一起。默认值为 true。
-   `SimilarityColumnName` : 列的名称，该名称显示输入值与该输入的代表值之间的相似之处。默认值为 null，在这种情况下，将不会添加用于相似性的新列。
-   `Threshold` : 一个介于 0.00 和 1.00 之间的数字，指定两个值分组的相似性分数。 例如，仅当此选项设置为小于 0.90 时，“Grapes”和“Graes”(缺少“p”)才会组合在一起。 阈值 1.00 仅允许完全匹配。 (请注意，模糊的“精确匹配”可能会忽略大小写、字词顺序和标点符号等差异。) 默认值为 0.80。
-   `TransformationTable` : 允许根据自定义值映射对记录进行分组的表。它应包含“从”和“到”列。例如，如果提供了一个转换表，表中有包含 "Grapes" 的“从”列和包含 "Raisins" 的“到”列，则 "Grapes" 与 "Raisins" 分组到一起。请注意，转换将应用于转换表中所有出现该文本的位置。通过上述转换表，"Grapes are sweet" 也将与 "Raisins are sweet" 分组到一起。


## Examples

### Example #1
查找员工所在位置的代表值。
```powerquery
Table.AddFuzzyClusterColumn(
    Table.FromRecords(
        {
            [EmployeeID = 1, Location = "Seattle"],
            [EmployeeID = 2, Location = "seattl"],
            [EmployeeID = 3, Location = "Vancouver"],
            [EmployeeID = 4, Location = "Seatle"],
            [EmployeeID = 5, Location = "vancover"],
            [EmployeeID = 6, Location = "Seattle"],
            [EmployeeID = 7, Location = "Vancouver"]
        },
        type table [EmployeeID = nullable number, Location = nullable text]
    ),
    "Location",
    "Location_Cleaned",
    [IgnoreCase = true, IgnoreSpace = true]
)
```

Result: 
```powerquery
Table.FromRecords(
    {
        [EmployeeID = 1, Location = "Seattle", Location_Cleaned = "Seattle"],
        [EmployeeID = 2, Location = "seattl", Location_Cleaned = "Seattle"],
        [EmployeeID = 3, Location = "Vancouver", Location_Cleaned = "Vancouver"],
        [EmployeeID = 4, Location = "Seatle", Location_Cleaned = "Seattle"],
        [EmployeeID = 5, Location = "vancover", Location_Cleaned = "Vancouver"],
        [EmployeeID = 6, Location = "Seattle", Location_Cleaned = "Seattle"],
        [EmployeeID = 7, Location = "Vancouver", Location_Cleaned = "Vancouver"]
    },
    type table [EmployeeID = nullable number, Location = nullable text, Location_Cleaned = nullable text]
)
```




## Category
Table.Transformation
