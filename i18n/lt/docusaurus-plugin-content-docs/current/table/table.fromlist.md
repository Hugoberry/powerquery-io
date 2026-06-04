---
title: Table.FromList
---

# Table.FromList


Sąrašas konvertuojamas į lentelę kiekvienam sąrašo elementui pritaikant nurodytą skaidymo funkciją.


## Syntax

```powerquery
Table.FromList(
    list as list,
    optional splitter as function,
    optional columns as any,
    optional default as any,
    optional extraValues as ExtraValues.Type
) as table
```


## Remarks

Sąrašas `list` konvertuojamas į lentelę kiekvienam sąrašo elementui pritaikant pasirenkamą skaidymo funkciją `splitter`. Pagal numatytuosius nustatymus laikoma, kad sąrašas yra tekstinių reikšmių, atskirtų kableliais, sąrašas. Pasirenkamas `columns` gali būti stulpelių skaičius, stulpelių sąrašas arba TableType. Taip pat galima nurodyti pasirenkamą `default` ir `extraValues`.


## Examples

### Example #1
Sukurkite lentelę iš sąrašo naudodami numatytąjį skaidiklį.
```powerquery
Table.FromList(
    {"a,apple", "b,ball", "c,cookie", "d,door"},
    null,
    {"Letter", "Example Word"}
)
```

Result: 
```powerquery
Table.FromRecords({
    [Letter = "a", #"Example Word" = "apple"],
    [Letter = "b", #"Example Word" = "ball"],
    [Letter = "c", #"Example Word" = "cookie"],
    [Letter = "d", #"Example Word" = "door"]
})
```


### Example #2
Sukurkite lentelę iš sąrašo naudodami pasirinktinį skaidiklį.
```powerquery
Table.FromList(
    {"a,apple", "b,ball", "c,cookie", "d,door"},
    Splitter.SplitByNothing(),
    {"Letter and Example Word"}
)
```

Result: 
```powerquery
Table.FromRecords({
    [#"Letter and Example Word" = "a,apple"],
    [#"Letter and Example Word" = "b,ball"],
    [#"Letter and Example Word" = "c,cookie"],
    [#"Letter and Example Word" = "d,door"]
})
```


### Example #3
Sukurkite lentelę iš sąrašo naudodami skaidiklį Record.FieldValues.
```powerquery
Table.FromList(
    {
        [CustomerID = 1, Name = "Bob"],
        [CustomerID = 2, Name = "Jim"]
    },
    Record.FieldValues,
    {"CustomerID", "Name"}
)
```

Result: 
```powerquery
Table.FromRecords({
    [CustomerID = 1, Name = "Bob"],
    [CustomerID = 2, Name = "Jim"]
})
```




## Category
Table.Table construction
