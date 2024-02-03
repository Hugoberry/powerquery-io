---
title: Table.FromList
---

# Table.FromList


## Description

Konvertuje listu u tabelu primenom navedene funkcije razdvajanja na svaku stavku sa liste.


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

Konvertuje listu <code>list</code> u tabelu primenom opcionalne funkcije razdvajanja, <code>splitter</code>, na svaku stavku sa liste. Podrazumevano se smatra da je u pitanju lista tekstualnih vrednosti razdvojena zarezima. Opcionalna vrednost <code>columns</code> može biti broj kolona, lista kolona ili TableType. Mogu se navesti i opcionalne vrednosti <code>default</code> i <code>extraValues</code>.


## Examples

### Example #1 
Kreirajte tabelu sa liste koristeći podrazumevani razdelnik.
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
Kreirajte tabelu sa liste korišćenjem prilagođenog razdelnika.
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
Kreirajte tabelu sa liste korišćenjem razdelnika Record.FieldValues.
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
