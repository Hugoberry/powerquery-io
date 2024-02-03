---
title: Table.FromList
---

# Table.FromList


## Description

Táblára alakít át egy listát úgy, hogy alkalmazza a megadott felosztási függvényt a lista összes elemére.


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


## Details

Táblára alakít át egy listát (<code>list</code>) a nem kötelező felosztó függvény (<code>splitter</code>) a lista összes elemére való alkalmazásával. Alapértelmezésben a listát szöveges értékek listájának tekinti, melyek vesszővel vannak elválasztva. A nem kötelező <code>columns</code> paraméter lehet az oszlopok száma, az oszlopok listája vagy egy táblatípus. Megadható nem kötelező <code>default</code> és <code>extraValues</code> paraméter is.


## Examples

### Example #1 
Az alapértelmezett elválasztóval hozhat létre táblázatot listából.
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
Egyéni elválasztóval hozhat létre táblázatot listából.
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
A Record.FieldValues elválasztóval hozhat létre táblázatot listából.
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
