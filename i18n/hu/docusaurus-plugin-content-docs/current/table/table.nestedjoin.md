---
title: Table.NestedJoin
---

# Table.NestedJoin


Illesztést végez a táblákon a megadott oszlopok használatával, és egy új oszlopban helyezi el az illesztés eredményeit.


## Syntax

```powerquery
Table.NestedJoin(
    table1 as table,
    key1 as any,
    table2 as any,
    key2 as any,
    newColumnName as text,
    optional joinKind as JoinKind.Type,
    optional keyEqualityComparers as list
) as table
```


## Remarks

A(z) `table1` sorait kapcsolja össze a(z) `table2` soraival a(z) `key1` által (`table1` esetében) és `key2` által (`table2` esetében) kiválasztott kulcsoszlopok értékeinek egyenlősége alapján. Az eredményeket a rendszer egy `newColumnName` nevű oszlopban tünteti fel.

Az opcionális `joinKind` a végrehajtandó illesztés típusát határozza meg. Alapértelmezés szerint a rendszer bal oldali külső illesztést hajt végre, ha a(z) `joinKind` nincs megadva.

Megadható egy opcionális `keyEqualityComparers` készlet is a kulcsoszlopok összehasonlítási módjának meghatározásához. Ez a funkció jelenleg csak belső használatra érhető el.


## Examples

### Example #1
Két tábla összekapcsolása egyetlen kulcsoszlop használatával.
```powerquery
Table.NestedJoin(
    Table.FromRecords({
        [CustomerToCall = 1],
        [CustomerToCall = 3]
    }),
    {"CustomerToCall"},
    Table.FromRecords({
        [CustomerID = 1, Name = "Bob", Phone = "123-4567"],
        [CustomerID = 2, Name = "Jim", Phone = "987-6543"],
        [CustomerID = 3, Name = "Paul", Phone = "543-7890"],
        [CustomerID = 4, Name = "Ringo", Phone = "232-1550"]
    }),
    {"CustomerID"},
    "CustomerDetails"
)
```

Result: 
```powerquery
Table.FromRecords({
    [CustomerToCall = 1, CustomerDetails = Table.FromRecords({[CustomerID = 1, Name = "Bob", Phone = "123-4567"]})],
    [CustomerToCall = 3, CustomerDetails = Table.FromRecords({[CustomerID = 3, Name = "Paul", Phone = "543-7890"]})]
})
```




## Category
Table.Transformation
