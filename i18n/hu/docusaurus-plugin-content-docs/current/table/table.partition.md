---
title: Table.Partition
---

# Table.Partition


Egy táblalistába particionálja a táblát a csoportok és oszlopok megadott száma alapján.


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

Particionálja a(z) `table` táblát egy `groups` számú táblából álló listába a(z) `column` tábla és a(z) `hash` függvény alapján. A(z) `hash` függvényt alkalmazza a rendszer a(z) `column` sor értékére a sor kivonatértékének meghatározásához. A kivonatérték moduló `groups` módon (maradékos osztással) határozza meg, hogy melyik visszaadott táblában legyen az adott sor.

-   `table`: A particionálandó tábla.
-   `column`: A kivonat készítéséhez szükséges sor annak meghatározására, hogy melyik visszaadott táblában van a sor.
-   `groups`: A táblák száma, melyekre particionálja a rendszer a bemeneti táblát.
-   `hash`: A kivonat értékének megállapítására szolgáló függvény.


## Examples

### Example #1
A(z) `({[a = 2, b = 4], [a = 6, b = 8], [a = 2, b = 4], [a = 1, b = 4]})` tábla particionálása 2 táblába a(z) \[a\] oszlopban, az oszlopok értékének kivonatfüggvényként való használatával.
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
