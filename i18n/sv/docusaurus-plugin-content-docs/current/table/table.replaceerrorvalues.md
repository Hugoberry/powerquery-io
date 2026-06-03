---
title: Table.ReplaceErrorValues
---

# Table.ReplaceErrorValues


Ersätter felvärdena i de angivna kolumnerna med motsvarande angivet värde.


## Syntax

```powerquery
Table.ReplaceErrorValues(
    table as table,
    errorReplacement as list
) as table
```


## Remarks

Ersätter felvärdena i de angivna kolumnerna i `table` med de nya värdena i listan `errorReplacement`. Listans format är \{\{column1, value1\}, …\}. Det får bara finnas ett ersättningsvärde per kolumn; att specificera kolumnen mer än en gång genererar ett fel.


## Examples

### Example #1
Ersätt felvärdet med texten "världen" i tabellen.
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
Ersätt felvärdet i kolumn A med texten "hej" och i kolumn B med texten "världen" i tabellen.
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
