---
title: Table.ToList
---

# Table.ToList


Konwertuje tabelę na listę, stosując określoną funkcję łączenia do każdego wiersza wartości w tabeli.


## Syntax

```powerquery
Table.ToList(
    table as table,
    optional combiner as function
) as list
```


## Remarks

Konwertuje tabelę na listę, stosując określoną funkcję łączenia do każdego wiersza wartości w tabeli.


## Examples

### Example #1 
Połącz tekst z każdego wiersza za pomocą przecinka.
```powerquery
Table.ToList(
    Table.FromRows({
        {Number.ToText(1), "Bob", "123-4567"},
        {Number.ToText(2), "Jim", "987-6543"},
        {Number.ToText(3), "Paul", "543-7890"}
    }),
    Combiner.CombineTextByDelimiter(",")
)
```

Result: 
```powerquery
{"1,Bob,123-4567", "2,Jim,987-6543", "3,Paul,543-7890"}
```




## Category
Table.Conversions
