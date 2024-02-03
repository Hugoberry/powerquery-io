---
title: Table.ReplaceErrorValues
---

# Table.ReplaceErrorValues


## Description

Korvaa määritettyjen sarakkeiden virhearvot vastaavalla määritetyllä arvolla.


## Syntax

```powerquery
Table.ReplaceErrorValues(
    table as table,
    errorReplacement as list
) as table
```


## Details

Korvaa kohteen <code>table</code> määritettyjen sarakkeiden virhearvot luettelon <code>errorReplacement</code> uusilla arvoilla. Luettelon muoto on \{\{column1, value1}, …}. Saraketta kohti voi olla vain yksi korvaava arvo, ja sarakkeen määrittäminen useammin kuin kerran antaa tulokseksi virheen.


## Examples

### Example #1 
Korvaa virhearvo tekstillä &#34;world&#34; taulukossa.
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
Korvaa virhearvo sarakkeessa A tekstillä &#34;hello&#34; ja sarakkeessa B tekstillä &#34;world&#34; taulukossa.
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
