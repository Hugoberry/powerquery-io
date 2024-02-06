---
title: Table.ReplaceErrorValues
---

# Table.ReplaceErrorValues


使用相应指定值替换指定列中的错误值。


## Syntax

```powerquery
Table.ReplaceErrorValues(
    table as table,
    errorReplacement as list
) as table
```


## Remarks

使用 <code>errorReplacement</code> 列表中的新值替换 <code>table</code> 指定列中的错误值。列表的格式为 \{\{column1, value1}, …}。每列可能只有一个替换值，为列进行多于一次的指定将导致错误。


## Examples

### Example #1 
在表中将错误值替换为文本 &#34;world&#34;。
```powerquery
Table.ReplaceErrorValues(
    Table.FromRows({{1, "hello"}, {3, ...}}, {"A", "B"}),
    {"B", "world"}
)
```

Result: 
```powerquery
Table.FromRecords({
    [A = 1, B = "hello"],
    [A = 3, B = "world"]
})
```


### Example #2 
在表中将 A 列中的错误值替换为文本 &#34;hello&#34;，将 B 列中的错误值替换为文本 &#34;world&#34;。
```powerquery
Table.ReplaceErrorValues(
    Table.FromRows({{..., ...}, {1, 2}}, {"A", "B"}),
    {{"A", "hello"}, {"B", "world"}}
)
```

Result: 
```powerquery
Table.FromRecords({
    [A = "hello", B = "world"],
    [A = 1, B = 2]
})
```




## Category
Table.Transformation
