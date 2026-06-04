---
title: Table.Distinct
---

# Table.Distinct


Eltávolítja az ismétlődő sorokat a táblából.


## Syntax

```powerquery
Table.Distinct(
    table as table,
    optional equationCriteria as any
) as table
```


## Remarks

Eltávolítja az ismétlődő sorokat a táblázatból. A nem kötelező `equationCriteria` paraméter határozza meg, hogy a tábla mely oszlopai legyenek tesztelve a duplikációk szempontjából. Ha a(z) `equationCriteria` nincs megadva, a rendszer az összes oszlopot teszteli.  
  
Mivel a Power Query bizonyos műveleteket időnként kiszervez háttérbeli adatforrásokhoz (más szóval „átadja“ őket), és néha optimalizálja a lekérdezéseket a(z) használatával, és így kihagyja a nem feltétlenül szükséges műveleteket, általában nincs garancia arra, hogy a rendszer mely konkrét duplikátumokat őrzi meg. Nem feltételezhetjük például, hogy az egyedi oszlopértékeket tartalmazó első sor megmarad, és a táblázatban az alatta lévő sorok el lesznek távolítva. Ha azt szeretné, hogy a duplikátumok eltávolítása kiszámítható módon viselkedjen, először pufferelje a táblát a `Table.Buffer` használatával.


## Examples

### Example #1
Eltávolítja a tábla duplikált sorait.
```powerquery
Table.Distinct(
    Table.FromRecords({
        [a = "A", b = "a"],
        [a = "B", b = "b"],
        [a = "A", b = "a"]
    })
)
```

Result: 
```powerquery
Table.FromRecords({
    [a = "A", b = "a"],
    [a = "B", b = "b"]
})
```


### Example #2
A(z) \[b\] oszlopban ismétlődő sorok eltávolítása a(z) `({[a = "A", b = "a"], [a = "B", b = "a"], [a = "A", b = "b"]})` táblából.
```powerquery
Table.Distinct(
    Table.FromRecords({
        [a = "A", b = "a"],
        [a = "B", b = "a"],
        [a = "A", b = "b"]
    }),
    "b"
)
```

Result: 
```powerquery
Table.FromRecords({
    [a = "A", b = "a"],
    [a = "A", b = "b"]
})
```




## Category
Table.Membership
