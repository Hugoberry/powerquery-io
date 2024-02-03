---
title: Table.ReplaceErrorValues
---

# Table.ReplaceErrorValues


## Description

Zamienia wartości błędów w określonych kolumnach na odpowiadającą im określoną wartość.


## Syntax

```powerquery
Table.ReplaceErrorValues(
    table as table,
    errorReplacement as list
) as table
```


## Details

Zamienia wartości błędów w określonych kolumnach tabeli <code>table</code> na nowe wartości na liście <code>errorReplacement</code>. Format listy: \{\{column1, value1}, …}. W jednej kolumnie może istnieć tylko jedna wartość zastępcza. Określenie kolumny więcej niż raz spowoduje zwrócenie błędu.


## Examples

### Example #1 
Zamień wartość błędu na tekst „world” w tabeli.
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
Zamień wartość błędu na tekst „hello” w kolumnie A i na tekst „world” w kolumnie B w tabeli.
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
