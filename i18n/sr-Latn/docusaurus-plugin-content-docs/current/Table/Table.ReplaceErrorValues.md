---
title: Table.ReplaceErrorValues
---

# Table.ReplaceErrorValues


## Description

Zamenjuje vrednosti greške u navedenim kolonama odgovarajućom navedenom vrednošću.


## Syntax

```powerquery
Table.ReplaceErrorValues(
    table as table,
    errorReplacement as list
) as table
```


## Details

Zamenjuje vrednosti greške u navedenim kolonama za <code>table</code> novim vrednostima na listi <code>errorReplacement</code>. Format liste je \{\{column1, value1}, …}. Može da postoji samo jedna vrednost za zamenu po koloni. Navođenje kolone više puta daje grešku.


## Examples

### Example #1 
Zamena vrednosti greške tekstom „world“ u tabeli.
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
Zamena vrednosti greške u koloni A tekstom „hello“ i u koloni B tekstom „world“ u tabeli.
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
