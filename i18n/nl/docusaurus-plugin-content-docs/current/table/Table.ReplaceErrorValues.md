---
title: Table.ReplaceErrorValues
---

# Table.ReplaceErrorValues


Vervangt de foutwaarden in de opgegeven kolommen met de corresponderende opgegeven waarde.


## Syntax

```powerquery
Table.ReplaceErrorValues(
    table as table,
    errorReplacement as list
) as table
```


## Remarks

Vervangt de foutwaarden in de opgegeven kolommen van de <code>table</code> met de nieuwe waarden in de lijst <code>errorReplacement</code>. De indeling van de lijst is \{\{column1, value1}, …}. Er is slechts één vervangende waarde per kolom mogelijk: er wordt een fout veroorzaakt als de kolom vaker wordt opgegeven.


## Examples

### Example #1 
De foutwaarde vervangen door de tekst world in de tabel.
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
De foutwaarde in kolom A vervangen door de tekst hello en in kolom B door de tekst world in de tabel.
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
