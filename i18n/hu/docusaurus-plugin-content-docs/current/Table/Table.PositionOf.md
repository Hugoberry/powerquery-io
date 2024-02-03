---
title: Table.PositionOf
---

# Table.PositionOf


## Description

A táblában levő sor pozícióját vagy pozícióit adja vissza.


## Syntax

```powerquery
Table.PositionOf(
    table as table,
    row as record,
    optional occurrence as any,
    optional equationCriteria as any
) as any
```


## Details

Visszaadja a(z) <code>row</code> első előfordulásának sorpozícióját a megadott <code>table</code> táblában. –1 értéket ad vissza, ha nem található előfordulás.    <ul>       <li><code>table</code>: A bemeneti tábla.</li>       <li><code>row</code>: A táblában lévő sor, amelynek pozícióját meg kell keresni.</li>       <li><code>occurrence</code>: <i>[Nem kötelező]</i> Azt adja meg, hogy a sor melyik előfordulásait adja vissza a függvény.</li>       <li><code>equationCriteria</code>: <i>[Nem kötelező]</i> A tábla sorainak összehasonlítását szabályozza.</li>    </ul>    


## Examples

### Example #1 
Megkeresi az [a = 2, b = 4] első előfordulásának pozícióját az &lt;code&gt;(\{[a = 2, b = 4], [a = 6, b = 8], [a = 2, b = 4], [a = 1, b = 4]})&lt;/code&gt; táblában.
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
Megkeresi az [a = 2, b = 4] második előfordulásának pozícióját az &lt;code&gt;(\{[a = 2, b = 4], [a = 6, b = 8], [a = 2, b = 4], [a = 1, b = 4]})&lt;/code&gt; táblában.
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
Megkeresi az [a = 2, b = 4] összes előfordulásának pozícióját az &lt;code&gt;(\{[a = 2, b = 4], [a = 6, b = 8], [a = 2, b = 4], [a = 1, b = 4]})&lt;/code&gt; táblában.
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
