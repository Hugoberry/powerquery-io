---
title: Table.ReplaceErrorValues
---

# Table.ReplaceErrorValues


## Description

以相對應的指定值取代指定資料行中的錯誤值。


## Syntax

```powerquery
Table.ReplaceErrorValues(
    table as table,
    errorReplacement as list
) as table
```


## Details

以 <code>errorReplacement</code> 清單中的新值取代 <code>table</code> 指定資料行中的錯誤值。清單格式為 \{\{column1, value1}, …}。每個資料行都只會有一個取代值，多次指定資料行可能會發生錯誤。


## Examples

### Example #1 
以文字 &#34;world&#34; 取代資料表中的錯誤值。
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
以文字 &#34;hello&#34; 取代資料表內 A 資料行中的錯誤值，並以文字 &#34;world&#34; 取代 B 資料行中的錯誤值。
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
