---
title: Table.ReplaceErrorValues
---

# Table.ReplaceErrorValues


## Description

Ersätter felvärdena i de angivna kolumnerna med motsvarande angivet värde.


## Syntax

```powerquery
Table.ReplaceErrorValues(
    table as table,
    errorReplacement as list
) as table
```


## Details

Ersätter felvärdena i de angivna kolumnerna i <code>table</code> med de nya värdena i listan <code>errorReplacement</code>. Listans format är \{\{column1, value1}, …}. Det får bara finnas ett ersättningsvärde per kolumn. Om kolumnen specificeras mer än en gång genereras ett fel.


## Examples

### Example #1 
Ersätt felvärdet med texten &#34;världen&#34; i tabellen.
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
Ersätt felvärdet i kolumn A med texten &#34;hej&#34; och i kolumn B med texten &#34;världen&#34; i tabellen.
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
