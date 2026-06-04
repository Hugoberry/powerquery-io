---
title: Table.PositionOfAny
---

# Table.PositionOfAny


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


## Remarks

Visszaadja a(z) `table` táblából a(z) `rows` lista első előfordulási sorának pozícióját. -1 értéket ad vissza, ha nincs előfordulás.

-   `table`: A bemeneti tábla.
-   `rows`: A táblában lévő sorok listája, amelyek pozícióját meg kell keresni.
-   `occurrence`:*(Nem kötelező)* Azt adja meg, hogy a sor melyik előfordulásait adja vissza a függvény.
-   `equationCriteria`: *(Nem kötelező)* A tábla sorainak összehasonlítását szabályozza.


## Examples

### Example #1
Az \[a = 2, b = 4\] vagy az \[a = 6, b = 8\] első előfordulási pozíciójának megkeresése a(z) `({[a = 2, b = 4], [a = 6, b = 8], [a = 2, b = 4], [a = 1, b = 4]})` táblában.
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
Az \[a = 2, b = 4\] vagy az \[a = 6, b = 8\] összes előfordulási pozíciójának megkeresése a táblában `({[a = 2, b = 4], [a = 6, b = 8], [a = 2, b = 4], [a = 1, b = 4]}`.
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
