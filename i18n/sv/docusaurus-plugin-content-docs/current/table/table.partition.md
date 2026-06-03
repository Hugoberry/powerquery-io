---
title: Table.Partition
---

# Table.Partition


Partitionerar tabellen i en lista med tabeller baserat på angivet antalet grupper och kolumner.


## Syntax

```powerquery
Table.Partition(
    table as table,
    column as text,
    groups as number,
    hash as function
) as list
```


## Remarks

Partitionerar `table` till en lista med `groups` tabeller, baserat på värdet för `column` och en `hash`\-funktion. Funktionen `hash` körs på värdet för raden `column` för att få fram ett hash-värde för raden. Hash-värdets modulo, `groups`, avgör i vilken av de returnerade tabellerna som raden placeras i.

-   `table`: Tabellen som ska partitioneras.
-   `column`: Kolumnen som hash-beräkningen ska köras på för att avgöra vilken returnerad tabell som raden finns i.
-   `groups`: Antalet tabeller som indatatabellen ska partitioneras i.
-   `hash`: Funktionen som körs för att få fram ett hash-värde.


## Examples

### Example #1
Partitionera tabellen `({[a = 2, b = 4], [a = 6, b = 8], [a = 2, b = 4], [a = 1, b = 4]})` i 2 tabeller för kolumnen \[a\] och använd kolumnernas värde som hash-funktionen.
```powerquery
Table.Partition(
    Table.FromRecords({
        [a = 2, b = 4],
        [a = 1, b = 4],
        [a = 2, b = 4],
        [a = 1, b = 4]
    }),
    "a",
    2,
    each _
)
```

Result: 
```powerquery
{
    Table.FromRecords({
        [a = 2, b = 4],
        [a = 2, b = 4]
    }),
    Table.FromRecords({
        [a = 1, b = 4],
        [a = 1, b = 4]
    })
}
```




## Category
Table.Row operations
