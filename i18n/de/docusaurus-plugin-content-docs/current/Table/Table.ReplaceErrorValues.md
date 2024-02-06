---
title: Table.ReplaceErrorValues
---

# Table.ReplaceErrorValues


Ersetzt die Fehlerwerte in den angegebenen Spalten durch den entsprechenden angegebenen Wert.


## Syntax

```powerquery
Table.ReplaceErrorValues(
    table as table,
    errorReplacement as list
) as table
```


## Remarks

Ersetzt die Fehlerwerte in den angegebenen Spalten von <code>table</code> durch die neuen Werte in der Liste <code>errorReplacement</code>. Das Format der Liste ist \{\{column1, value1}, …}. Es darf pro Spalte nur einen Ersatzwert geben. Wenn die Spalte mehrmals angegeben wird, führt dies zu einem Fehler.


## Examples

### Example #1 
Ersetzt den Fehlerwert durch das Wort &#34;world&#34; in der Tabelle.
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
Ersetzt den Fehlerwert in der Spalte &#34;A&#34; durch den Text &#34;hello&#34; und in Spalte &#34;B&#34; durch den Text &#34;world&#34; in der Tabelle.
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
