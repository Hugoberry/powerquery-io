---
title: Table.Partition
---

# Table.Partition


## Description

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


## Details

Particionálja a(z) <code>table</code> táblát egy <code>groups</code> számú táblából álló listába a(z) <code>column</code> tábla és a(z) <code>hash</code> függvény alapján.    A(z) <code>hash</code> függvényt alkalmazza a rendszer a(z) <code>column</code> sor értékére a sor kivonatértékének meghatározásához. A kivonatérték moduló <code>groups</code> módon (maradékos osztással) határozza meg, hogy melyik visszaadott táblában legyen az adott sor.    <ul>       <li><code>table</code>: A particionálandó tábla.</li>       <li><code>column</code>: A kivonat készítéséhez szükséges sor annak meghatározására, hogy melyik visszaadott táblában van a sor.</li>       <li><code>groups</code>: A táblák száma, melyekre particionálja a rendszer a bemeneti táblát.</li>       <li><code>hash</code>: A kivonat értékének megállapítására szolgáló függvény.</li>    </ul>  


## Examples

### Example #1 
A(z) &lt;code&gt;(\{[a = 2, b = 4], [a = 6, b = 8], [a = 2, b = 4], [a = 1, b = 4]})&lt;/code&gt; tábla particionálása 2 táblába a(z) [a] oszlopban, az oszlopok értékének kivonatfüggvényként való használatával.
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
