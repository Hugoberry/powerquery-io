---
title: Table.PositionOfAny
---

# Table.PositionOfAny


Restituisce la posizione o le posizioni di una delle righe specificate all'interno della tabella.


## Syntax

```powerquery
Table.PositionOfAny(
    table as table,
    rows as list,
    optional occurrence as number,
    optional equationCriteria as any
) as any
```


## Remarks

Restituisce le posizioni delle righe da `table` della prima occorrenza dell'elenco di `rows`. Restituisce -1 se non viene trovata alcuna occorrenza.

-   `table`: tabella di input.
-   `rows`: elenco di righe nella tabella di cui trovare le posizioni.
-   `occurrence`: *\[facoltativo\]* specifica le occorrenze della riga da restituire.
-   `equationCriteria`: *\[facoltativo\]* controlla il confronto tra le righe di tabella.


## Examples

### Example #1
Trovare la posizione della prima occorrenza di \[a = 2, b = 4\] o \[a = 6, b = 8\] nella tabella `({[a = 2, b = 4], [a = 6, b = 8], [a = 2, b = 4], [a = 1, b = 4]})`.
```powerquery
Table.PositionOfAny(
    Table.FromRecords({
        [a = 2, b = 4],
        [a = 1, b = 4],
        [a = 2, b = 4],
        [a = 1, b = 4]
    }),
    {
        [a = 2, b = 4],
        [a = 6, b = 8]
    }
)
```

Result: 
```powerquery
0
```


### Example #2
Trovare la posizione di tutte le occorrenze di \[a = 2, b = 4\] o \[a = 6, b = 8\] nella tabella `({[a = 2, b = 4], [a = 6, b = 8], [a = 2, b = 4], [a = 1, b = 4]}`.
```powerquery
Table.PositionOfAny(
    Table.FromRecords({
        [a = 2, b = 4],
        [a = 6, b = 8],
        [a = 2, b = 4],
        [a = 1, b = 4]
    }),
    {
        [a = 2, b = 4],
        [a = 6, b = 8]
    },
    Occurrence.All
)
```

Result: 
```powerquery
{0, 1, 2}
```




## Category
Table.Membership
