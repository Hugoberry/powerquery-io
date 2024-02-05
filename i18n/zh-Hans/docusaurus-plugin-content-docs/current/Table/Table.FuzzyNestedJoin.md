---
title: Table.FuzzyNestedJoin
---

# Table.FuzzyNestedJoin


## Description

在两个表之间对提供的列执行模糊联接，并在新列中生成联接结果。


## Syntax

```powerquery
Table.FuzzyNestedJoin(
    table1 as table,
    key1 as any,
    table2 as table,
    key2 as any,
    newColumnName as text,
    optional joinKind as JoinKind.Type,
    optional joinOptions as record
) as table
```


## Details

根据由 <code>key1</code> (针对 <code>table1</code>)和 <code>key2</code> (针对 <code>table2</code>)选择的键列值的模糊匹配，联接 <code>table1</code> 的行与 <code>table2</code> 的行。结果在名为 <code>newColumnName</code> 的新列中返回。<br />模糊匹配是基于文本相似度(而不是文本等同性)的一种比较方法。<br />可选的 <code>joinKind</code> 指定要执行的联接种类。默认情况下，如果未指定 <code>joinKind</code>，执行的是左外部联接。选项包括:    <ul><li><code>JoinKind.Inner</code></li><li><code>JoinKind.LeftOuter</code></li><li><code>JoinKind.RightOuter</code></li><li><code>JoinKind.FullOuter</code></li><li><code>JoinKind.LeftAnti</code></li><li><code>JoinKind.RightAnti</code></li></ul><br />可视需要添加一组 <code>joinOptions</code> 来指定如何比较键列。选项包括:    <ul><li><code>ConcurrentRequests</code> : 一个介于 1 至 8 之间的数字，用于指定模糊匹配要使用的并行线程数。默认值为 1。</li><li><code>Culture</code> : 允许根据区域性特定的规则匹配记录。它可以是任何有效的区域性名称。例如，&quot;ja-JP&quot; 的区域性选项基于日语区域性来匹配记录。默认值为 &quot;&quot;，它基于固定英语区域性进行匹配。</li><li><code>IgnoreCase</code> : 一个逻辑(true/false)值，它允许不区分大小写的键匹配。例如，如果为 true，则 &quot;Grapes&quot; 与 &quot;grapes&quot; 匹配。默认值为 true。</li><li><code>IgnoreSpace</code> : 一个逻辑(true/false)值，它允许组合文本部分来查找匹配项。例如，如果为 true，则 &quot;Gra pes&quot; 与 &quot;Grapes&quot; 匹配。默认值为 true。</li><li><code>NumberOfMatches</code> : 一个整数，用于指定可为每个输入行返回的匹配行的最大数目。例如，如果值为 1，则每个输入行最多返回 1 个匹配行。如果未提供此选项，则返回所有匹配的行。</li><li><code>SimilarityColumnName</code> : 列的名称，该名称显示输入值与该输入的代表值之间的相似之处。默认值为 null，在这种情况下，将不会添加用于相似性的新列。</li><li><code>Threshold</code> : 一个介于 0.00 和 1.00 之间的数字，指定匹配两个值的相似性分数。    例如，仅当此选项设置为小于 0.90 时，“Grapes”和“Graes”(缺少“p”)才匹配。    阈值 1.00 仅允许完全匹配。    (请注意，模糊的“精确匹配”可能会忽略大小写、字词顺序和标点符号等差异。)    默认值为 0.80。</li><li><code>TransformationTable</code> : 允许根据自定义值映射来匹配记录的表。它应包含“从”和“到”列。例如，如果提供了一个转换表，表中有包含 &quot;Grapes&quot; 的“从”列和包含 &quot;Raisins&quot; 的“到”列，则 &quot;Grapes&quot; 与 &quot;Raisins&quot; 匹配。请注意，转换将应用于转换表中所有出现该文本的位置。通过上述转换表，&quot;Grapes are sweet&quot; 也将与 &quot;Raisins are sweet&quot; 匹配。</li></ul><br />


## Examples

### Example #1 
基于 [FirstName] 的两个表的左侧内部模糊联接
```powerquery
Table.FuzzyNestedJoin(
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
	  "NestedTable",
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
		    NestedTable = Table.FromRecords({
            [
				      CustomerStateID = 1,
				      FirstName2 = "Bob",
				      State = "TX"
			      ],
            [
				      CustomerStateID = 2,
				      FirstName2 = "bOB",
				      State = "CA"
			      ]
		    })
	  ],
    [
		  CustomerID = 2,
		  FirstName1 = "Robert",
		  Phone = "555-4567",
		  NestedTable = Table.FromRecords({})
	  ]
})
```




## Category
Table.Transformation
