---
title: Table.PositionOf
---

# Table.PositionOf


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


## Remarks

Visszaadja a(z) `row` első előfordulásának sorpozícióját a megadott `table` táblában. -1 értéket ad vissza, ha nincs előfordulás.

-   `table`: A bemeneti tábla.
-   `row`: A táblában lévő sor, amelynek pozícióját meg kell keresni.
-   `occurrence`:*(Nem kötelező)* Azt adja meg, hogy a sor melyik előfordulásait adja vissza a függvény.
-   `equationCriteria`: *(Nem kötelező)* A tábla sorainak összehasonlítását szabályozza.


## Examples

### Example #1
Megkeresi az \[a = 2, b = 4\] első előfordulásának pozícióját az `({[a = 2, b = 4], [a = 6, b = 8], [a = 2, b = 4], [a = 1, b = 4]})` táblában.
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
Megkeresi az \[a = 2, b = 4\] második előfordulásának pozícióját az `({[a = 2, b = 4], [a = 6, b = 8], [a = 2, b = 4], [a = 1, b = 4]})` táblában.
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
Megkeresi az \[a = 2, b = 4\] összes előfordulásának pozícióját az `({[a = 2, b = 4], [a = 6, b = 8], [a = 2, b = 4], [a = 1, b = 4]})` táblában.
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
