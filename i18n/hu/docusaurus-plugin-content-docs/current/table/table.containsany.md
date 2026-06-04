---
title: Table.ContainsAny
---

# Table.ContainsAny


Azt jelzi, hogy valamely megadott rekord sorként szerepel-e a táblában.


## Syntax

```powerquery
Table.ContainsAny(
    table as table,
    rows as list,
    optional equationCriteria as any
) as logical
```


## Remarks

Azt jelzi, hogy a(z) `rows` rekordlistában valamely megadott rekord sorként szerepel-e a(z) `table` táblában. A választható `equationCriteria` paraméterrel határozható meg a tábla sorainak összehasonlítása.


## Examples

### Example #1
Annak megállapítása, hogy az `({[a = 1, b = 2], [a = 3, b = 4]})` tábla tartalmazza-e a következő sorokat: `[a = 1, b = 2]` vagy `[a = 3, b = 5]`
```powerquery
Table.ContainsAny(
    Table.FromRecords({
        [a = 1, b = 2],
        [a = 3, b = 4]
    }),
    {
        [a = 1, b = 2],
        [a = 3, b = 5]
    }
)
```

Result: 
```powerquery
true
```


### Example #2
Annak megállapítása, hogy az `({[a = 1, b = 2], [a = 3, b = 4]})` tábla tartalmazza-e a következő sorokat: `[a = 1, b = 3]` vagy `[a = 3, b = 5]`.
```powerquery
Table.ContainsAny(
    Table.FromRecords({
        [a = 1, b = 2],
        [a = 3, b = 4]
    }),
    {
        [a = 1, b = 3],
        [a = 3, b = 5]
    }
)
```

Result: 
```powerquery
false
```


### Example #3
Annak megállapítása, hogy a `(Table.FromRecords({[a = 1, b = 2], [a = 3, b = 4]}))` tábla tartalmazza-e a következő sorokat: `[a = 1, b = 3]` vagy `[a = 3, b = 5]` csak az \[a\] oszlop összehasonlításával.
```powerquery
Table.ContainsAny(
    Table.FromRecords({
        [a = 1, b = 2],
        [a = 3, b = 4]
    }),
    {
        [a = 1, b = 3],
        [a = 3, b = 5]
    },
    "a"
)
```

Result: 
```powerquery
true
```




## Category
Table.Membership
