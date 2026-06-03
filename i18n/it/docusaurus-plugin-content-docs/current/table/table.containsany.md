---
title: Table.ContainsAny
---

# Table.ContainsAny


Indica se uno dei record specificati viene visualizzato come riga nella tabella.


## Syntax

```powerquery
Table.ContainsAny(
    table as table,
    rows as list,
    optional equationCriteria as any
) as logical
```


## Remarks

Indica se uno dei record specificati nell'elenco di record `rows` viene visualizzato come riga in `table`. Facoltativamente, è possibile specificare il parametro `equationCriteria` per controllare il confronto tra le righe della tabella.


## Examples

### Example #1
Determinare se la tabella `({[a = 1, b = 2], [a = 3, b = 4]})` contiene le righe `[a = 1, b = 2]` o `[a = 3, b = 5]`.
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
Determinare se la tabella `({[a = 1, b = 2], [a = 3, b = 4]})` contiene le righe `[a = 1, b = 3]` o `[a = 3, b = 5]`.
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
Determinare se la tabella `(Table.FromRecords({[a = 1, b = 2], [a = 3, b = 4]}))` contiene le righe `[a = 1, b = 3]` o `[a = 3, b = 5]` confrontando solo la colonna \[a\].
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
