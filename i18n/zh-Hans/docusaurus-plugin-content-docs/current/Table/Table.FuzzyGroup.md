---
title: Table.FuzzyGroup
---

# Table.FuzzyGroup


根据键的模糊匹配对表中的行进行分组。


## Syntax

```powerquery
Table.FuzzyGroup(
    table as table,
    key as any,
    aggregatedColumns as list,
    optional options as record
) as table
```


## Remarks

通过模糊匹配针对每一行匹配指定的列 <code>key</code> 中的值，对 <code>table</code> 的行进行分组。    对于每个组，记录包含键列(及其值)，还包含 <code>aggregatedColumns</code> 指定的所有聚合列。    此函数无法保证返回固定顺序的行。    可包含一组可能的 <code>options</code> 来指定如何比较键列。选项包括:    <ul><li><code>Culture</code> : 允许根据区域性特定的规则对记录进行分组。它可以是任何有效的区域性名称。例如，&quot;ja-JP&quot; 的区域性选项基于日语区域性对记录进行分组。默认值为 &quot;&quot;，它基于固定英语区域性进行分组。</li><li><code>IgnoreCase</code> : 一个逻辑(true/false)值，它允许不区分大小写的键分组。例如，如果为 true，则 &quot;Grapes&quot; 与 &quot;grapes&quot; 分组到一起。默认值为 true。</li><li><code>IgnoreSpace</code> : 一个逻辑(true/false)值，它允许组合文本部分来查找组。例如，如果为 true，则 &quot;Gra pes&quot; 与 &quot;Grapes&quot; 分组到一起。默认值为 true。</li><li><code>SimilarityColumnName</code> : 列的名称，该名称显示输入值与该输入的代表值之间的相似之处。默认值为 null，在这种情况下，将不会添加用于相似性的新列。</li><li><code>Threshold</code> : 一个介于 0.00 和 1.00 之间的数字，指定两个值分组的相似性分数。    例如，仅当此选项设置为小于 0.90 时，“Grapes”和“Graes”(缺少“p”)才会组合在一起。    阈值 1.00 仅允许完全匹配。    (请注意，模糊的“精确匹配”可能会忽略大小写、字词顺序和标点符号等差异。)    默认值为 0.80。</li><li><code>TransformationTable</code> : 允许根据自定义值映射对记录进行分组的表。它应包含“从”和“到”列。例如，如果提供了一个转换表，表中有包含 &quot;Grapes&quot; 的“从”列和包含 &quot;Raisins&quot; 的“到”列，则 &quot;Grapes&quot; 与 &quot;Raisins&quot; 分组到一起。请注意，转换将应用于转换表中所有出现该文本的位置。通过上述转换表，&quot;Grapes are sweet&quot; 也将与 &quot;Raisins are sweet&quot; 分组到一起。</li></ul><br />    


## Examples

### Example #1 
对表进行分组，同时添加聚合列 [Count]，其中包含每个位置的员工数(&#34;each Table.RowCount(_))&#34;)。
```powerquery
Table.FuzzyGroup(
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
    {"Count", each Table.RowCount(_)},
    [IgnoreCase = true, IgnoreSpace = true]
)
```

Result: 
```powerquery
Table.FromRecords({
    [Location = "Seattle", Count = 4],
    [Location = "Vancouver", Count = 3]
})
```




## Category
Table.Transformation
