---
title: Table.ReplaceErrorValues
---

# Table.ReplaceErrorValues


## Description

Kļūdu vērtības norādītajās kolonnās aizstāj ar atbilstošo norādīto vērtību.


## Syntax

```powerquery
Table.ReplaceErrorValues(
    table as table,
    errorReplacement as list
) as table
```


## Details

Kļūdu vērtības <code>table</code> norādītajās kolonnās aizstāj ar jaunām vērtībām sarakstā <code>errorReplacement</code>. Saraksta formāts ir \{\{column1, value1}, …}. Katrā kolonnā var norādīt tikai vienu aizstāšanas vērtību. Norādot kolonnu vairāk nekā vienu reizi, radīsies kļūda.


## Examples

### Example #1 
Aizstājiet tabulā kļūdas vērtību ar tekstu &#34;world&#34;.
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
Aizstājiet kļūdas vērtību tabulas kolonnā A ar tekstu &#34;hello&#34; un kolonnā B ar tekstu &#34;world&#34;.
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
