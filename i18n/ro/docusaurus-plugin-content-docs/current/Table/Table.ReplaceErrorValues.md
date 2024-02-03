---
title: Table.ReplaceErrorValues
---

# Table.ReplaceErrorValues


## Description

Înlocuiește valorile erorilor din coloanele specificate cu valoarea specificată corespunzătoare.


## Syntax

```powerquery
Table.ReplaceErrorValues(
    table as table,
    errorReplacement as list
) as table
```


## Details

Înlocuiește valorile erorilor din coloanele specificate ale <code>table</code> cu noile valori din lista <code>errorReplacement</code>. Formatul listei este \{\{column1, value1}, …}. Poate exista o singură valoare înlocuitoare per coloană, iar specificarea coloanei de mai multe ori va produce o eroare.


## Examples

### Example #1 
Înlocuiți valoarea erorii cu textul „lume” în tabel.
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
Înlocuiți valoarea erorii din coloana A cu textul „salut” și în coloana B cu textul „lume” în tabel.
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
