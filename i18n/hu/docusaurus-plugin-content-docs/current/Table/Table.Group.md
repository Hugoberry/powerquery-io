---
title: Table.Group
---

# Table.Group


## Description

Csoportosítja a tábla azon sorait, melyek azonos kulccsal rendelkeznek.


## Syntax

```powerquery
Table.Group(
    table as table,
    key as any,
    aggregatedColumns as list,
    optional groupKind as GroupKind.Type,
    optional comparer as function
) as table
```


## Details

Csoportosítja a(z) <code>table</code> sorait a(z) <code>key</code> által meghatározott kulcsoszlopok szerint. A(z) <code>key</code> lehet egyetlen oszlopnév vagy oszlopnevek listája.    A függvény mindegyik csoport esetében összeállít egy rekordot, amely tartalmazza a kulcsoszlopokat (és azok értékeit), valamint a(z) <code>aggregatedColumns</code> által megadott összesített oszlopokat.    Szükség esetén <code>groupKind</code> és <code>comparer</code> is megadható.<br />    <br />    Ha az adatok már a kulcsoszlopok szerint vannak rendezve, megadható egy GroupKind.Local függvényből származó <code>groupKind</code>. Ez bizonyos esetekben javíthatja a csoportosítás teljesítményét,    mert a függvény összefüggőnek tekinti az összes olyan sort, amely a kulcsértékek adott halmazának elemeit tartalmazza.<br />    <br />    Egy <code>comparer</code> átadásakor vegye figyelembe, hogy ha az egyenlőnek tekinti az eltérő kulcsokat, elhelyezhet egy sort egy olyan csoportban, amelynek a kulcsai eltérnek a sajátjától.<br />    <br />    Ez a függvény nem garantálja a visszaadott sorok sorrendjét.  


## Examples

### Example #1 
Egy összesített [total] oszlop hozzáadásával csoportosítja a táblát, amely az árak összesítését („each List.Sum([price])”) tartalmazza.
```powerquery
Table.Group(
    Table.FromRecords({
        [CustomerID = 1, price = 20],
        [CustomerID = 2, price = 10],
        [CustomerID = 2, price = 20],
        [CustomerID = 1, price = 10],
        [CustomerID = 3, price = 20],
        [CustomerID = 3, price = 5]
    }),
    "CustomerID",
    {"total", each List.Sum([price])}
)
```

Result: 
```powerquery
Table.FromRecords(
    {
        [CustomerID = 1, total = 30],
        [CustomerID = 2, total = 30],
        [CustomerID = 3, total = 25]
    },
    {"CustomerID", "total"}
)
```




## Category
Table.Transformation
