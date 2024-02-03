---
title: Table.PositionOfAny
---

# Table.PositionOfAny


## Description

A táblában levő adott sorok bármelyikének pozícióját vagy pozícióit adja vissza.


## Syntax

```powerquery
Table.PositionOfAny(
    table as table,
    rows as list,
    optional occurrence as number,
    optional equationCriteria as any
) as any
```


## Details

Visszaadja a(z) <code>table</code> táblából a(z) <code>rows</code> lista első előfordulási sorának pozícióját. –1 értéket ad vissza, ha nem található előfordulás.    <ul>    <li><code>table</code>: A bemeneti tábla.</li>       <li><code>rows</code>: A táblában lévő sorok listája, amelyek pozícióját meg kell keresni.</li>       <li><code>occurrence</code>: <i>[Nem kötelező]</i> Azt adja meg, hogy a sor melyik előfordulásait adja vissza a függvény.</li>       <li><code>equationCriteria</code>: <i>[Nem kötelező]</i> A tábla sorainak összehasonlítását szabályozza.</li>    </ul>    


## Examples

### Example #1 
Az [a = 2, b = 4] vagy az [a = 6, b = 8] első előfordulási pozíciójának megkeresése a(z) &lt;code&gt;(\{[a = 2, b = 4], [a = 6, b = 8], [a = 2, b = 4], [a = 1, b = 4]})&lt;/code&gt; táblában.
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
Az [a = 2, b = 4] vagy az [a = 6, b = 8] összes előfordulási pozíciójának megkeresése a táblában &lt;code&gt;(\{[a = 2, b = 4], [a = 6, b = 8], [a = 2, b = 4], [a = 1, b = 4]}&lt;/code&gt;.
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
