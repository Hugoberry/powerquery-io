---
title: Table.ContainsAny
---

# Table.ContainsAny


Wskazuje, czy dowolny z określonych rekordów występuje jako wiersz w tabeli.


## Syntax

```powerquery
Table.ContainsAny(
    table as table,
    rows as list,
    optional equationCriteria as any
) as logical
```


## Remarks

Wskazuje, czy dowolny z rekordów określonych na liście rekordów `rows` występuje jako wiersz w tabeli `table`. Opcjonalny parametr `equationCriteria` można określić, aby sterować porównywaniem wierszy tabeli.


## Examples

### Example #1
Ustal, czy tabela `({[a = 1, b = 2], [a = 3, b = 4]})` zawiera wiersz `[a = 1, b = 2]` lub `[a = 3, b = 5]`.
```powerquery
Table.ContainsAny(
    Table.FromRecords({
        [a = 1, b = 2],
        [a = 3, b = 4]
    }),
    {
        [a = 1, b = 2],
        [a = 3, b = 5]
    }
)
```

Result: 
```powerquery
true
```


### Example #2
Ustal, czy tabela `({[a = 1, b = 2], [a = 3, b = 4]})` zawiera wiersz `[a = 1, b = 3]` lub `[a = 3, b = 5]`.
```powerquery
Table.ContainsAny(
    Table.FromRecords({
        [a = 1, b = 2],
        [a = 3, b = 4]
    }),
    {
        [a = 1, b = 3],
        [a = 3, b = 5]
    }
)
```

Result: 
```powerquery
false
```


### Example #3
Ustal, czy tabela `(Table.FromRecords({[a = 1, b = 2], [a = 3, b = 4]}))` zawiera wiersz `[a = 1, b = 3]` lub `[a = 3, b = 5]`, porównując tylko wartości w kolumnie \[a\].
```powerquery
Table.ContainsAny(
    Table.FromRecords({
        [a = 1, b = 2],
        [a = 3, b = 4]
    }),
    {
        [a = 1, b = 3],
        [a = 3, b = 5]
    },
    "a"
)
```

Result: 
```powerquery
true
```




## Category
Table.Membership
