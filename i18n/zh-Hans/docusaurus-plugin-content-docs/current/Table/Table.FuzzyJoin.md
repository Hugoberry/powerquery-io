---
title: Table.FuzzyJoin
---

# Table.FuzzyJoin


联接两个表中基于给定键模糊匹配的行。


## Syntax

```powerquery
Table.FuzzyJoin(
    table1 as table,
    key1 as any,
    table2 as table,
    key2 as any,
    optional joinKind as JoinKind.Type,
    optional joinOptions as record
) as table
```


## Remarks

根据由 `key1` (针对 `table1`)和 `key2` (针对 `table2`)选择的键列值的模糊匹配，将 `table1` 的行与 `table2` 的行联接在一起。

模糊匹配是基于文本相似度(而不是文本等同性)的一种比较方法。

默认执行的是内联，但也可视需要添加 `joinKind` 来指定联接类型。选项包括:

-   `JoinKind.Inner`
-   `JoinKind.LeftOuter`
-   `JoinKind.RightOuter`
-   `JoinKind.FullOuter`
-   `JoinKind.LeftAnti`
-   `JoinKind.RightAnti`
-   `JoinKind.LeftSemi`
-   `JoinKind.RightSemi`

可包含一组可选的 `joinOptions` 来指定如何比较键列。选项包括:

-   `ConcurrentRequests` : 一个介于 1 至 8 之间的数字，用于指定模糊匹配要使用的并行线程数。默认值为 1。
-   `Culture` : 允许根据区域性特定的规则匹配记录。它可以是任何有效的区域性名称。例如，"ja-JP" 的区域性选项基于日语区域性来匹配记录。默认值为 ""，它基于固定英语区域性进行匹配。
-   `IgnoreCase` : 一个逻辑(true/false)值，它允许不区分大小写的键匹配。例如，如果为 true，则 "Grapes" 与 "grapes" 匹配。默认值为 true。
-   `IgnoreSpace` : 一个逻辑(true/false)值，它允许组合文本部分来查找匹配项。例如，如果为 true，则 "Gra pes" 与 "Grapes" 匹配。默认值为 true。
-   `NumberOfMatches` : 一个整数，用于指定可为每个输入行返回的匹配行的最大数目。例如，如果值为 1，则每个输入行最多返回 1 个匹配行。如果未提供此选项，则返回所有匹配的行。
-   `SimilarityColumnName` : 列的名称，该名称显示输入值与该输入的代表值之间的相似之处。默认值为 null，在这种情况下，将不会添加用于相似性的新列。
-   `Threshold` : 一个介于 0.00 和 1.00 之间的数字，指定匹配两个值的相似性分数。 例如，仅当此选项设置为小于 0.90 时，“Grapes”和“Graes”(缺少“p”)才匹配。 阈值 1.00 仅允许完全匹配。 (请注意，模糊的“精确匹配”可能会忽略大小写、字词顺序和标点符号等差异。) 默认值为 0.80。
-   `TransformationTable` : 允许根据自定义值映射来匹配记录的表。它应包含“从”和“到”列。例如，如果提供了一个转换表，表中有包含 "Grapes" 的“从”列和包含 "Raisins" 的“到”列，则 "Grapes" 与 "Raisins" 匹配。请注意，转换将应用于转换表中所有出现该文本的位置。通过上述转换表，"Grapes are sweet" 也将与 "Raisins are sweet" 匹配。


## Examples

### Example #1
基于 \[FirstName\] 的两个表的左侧内部模糊联接
```powerquery
Table.FuzzyJoin(
    Table.FromRecords(
        {
            [CustomerID = 1, FirstName1 = "Bob", Phone = "555-1234"],
            [CustomerID = 2, FirstName1 = "Robert", Phone = "555-4567"]
        },
        type table [CustomerID = nullable number, FirstName1 = nullable text, Phone = nullable text]
    ),
    {"FirstName1"},
    Table.FromRecords(
        {
            [CustomerStateID = 1, FirstName2 = "Bob", State = "TX"],
            [CustomerStateID = 2, FirstName2 = "bOB", State = "CA"]
        },
        type table [CustomerStateID = nullable number, FirstName2 = nullable text, State = nullable text]
    ),
    {"FirstName2"},
    JoinKind.LeftOuter,
    [IgnoreCase = true, IgnoreSpace = false]
)
```

Result: 
```powerquery
Table.FromRecords({
    [
        CustomerID = 1,
        FirstName1 = "Bob",
        Phone = "555-1234",
        CustomerStateID = 1,
        FirstName2 = "Bob",
        State = "TX"
    ],
    [
        CustomerID = 1,
        FirstName1 = "Bob",
        Phone = "555-1234",
        CustomerStateID = 2,
        FirstName2 = "bOB",
        State = "CA"
    ],
    [
        CustomerID = 2,
        FirstName1 = "Robert",
        Phone = "555-4567",
        CustomerStateID = null,
        FirstName2 = null,
        State = null
    ]
})
```




## Category
Table.Transformation
