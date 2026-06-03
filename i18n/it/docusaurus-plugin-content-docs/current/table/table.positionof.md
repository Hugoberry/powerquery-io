---
title: Table.PositionOf
---

# Table.PositionOf


Restituisce la posizione o le posizioni della riga all'interno della tabella.


## Syntax

```powerquery
Table.PositionOf(
    table as table,
    row as record,
    optional occurrence as any,
    optional equationCriteria as any
) as any
```


## Remarks

Restituisce la posizione della riga della prima occorrenza di `row` in `table`. Restituisce -1 se non viene trovata alcuna occorrenza.

-   `table`: tabella di input.
-   `row`: riga nella tabella di cui trovare la posizione.
-   `occurrence`: *\[facoltativo\]* specifica le occorrenze della riga da restituire.
-   `equationCriteria`: *\[facoltativo\]* controlla il confronto tra le righe di tabella.


## Examples

### Example #1
Trovare la posizione della prima occorrenza di \[a = 2, b = 4\] nella tabella `({[a = 2, b = 4], [a = 6, b = 8], [a = 2, b = 4], [a = 1, b = 4]})`.
```powerquery
Table.PositionOf(
    Table.FromRecords({
        [a = 2, b = 4],
        [a = 1, b = 4],
        [a = 2, b = 4],
        [a = 1, b = 4]
    }),
    [a = 2, b = 4]
)
```

Result: 
```powerquery
0
```


### Example #2
Trovare la posizione della seconda occorrenza di \[a = 2, b = 4\] nella tabella `({[a = 2, b = 4], [a = 6, b = 8], [a = 2, b = 4], [a = 1, b = 4]})`.
```powerquery
Table.PositionOf(
    Table.FromRecords({
        [a = 2, b = 4],
        [a = 1, b = 4],
        [a = 2, b = 4],
        [a = 1, b = 4]
    }),
    [a = 2, b = 4],
    1
)
```

Result: 
```powerquery
2
```


### Example #3
Trovare la posizione di tutte le occorrenze di \[a = 2, b = 4\] nella tabella `({[a = 2, b = 4], [a = 6, b = 8], [a = 2, b = 4], [a = 1, b = 4]})`.
```powerquery
Table.PositionOf(
    Table.FromRecords({
        [a = 2, b = 4],
        [a = 1, b = 4],
        [a = 2, b = 4],
        [a = 1, b = 4]
    }),
    [a = 2, b = 4],
    Occurrence.All
)
```

Result: 
```powerquery
{0, 2}
```




## Category
Table.Membership
