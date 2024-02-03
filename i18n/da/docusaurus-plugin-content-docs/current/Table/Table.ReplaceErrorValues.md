---
title: Table.ReplaceErrorValues
---

# Table.ReplaceErrorValues


## Description

Erstatter fejlværdierne i de angivne kolonner med den tilsvarende angivne værdi.


## Syntax

```powerquery
Table.ReplaceErrorValues(
    table as table,
    errorReplacement as list
) as table
```


## Details

Erstatter fejlværdierne i de angivne kolonner i <code>table</code> med de nye værdier på listen <code>errorReplacement</code>. Formatet for listen er \{\{column1, value1}, …}. Der må kun være én erstatningsværdi pr. kolonne. Hvis kolonnen angives flere gange, medfører det en fejl.


## Examples

### Example #1 
Erstat fejlværdien med teksten &#34;world&#34; i tabellen.
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
Erstat fejlværdien i kolonne A med teksten &#34;hello&#34; og i kolonne B med teksten &#34;world&#34; i tabellen.
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
