---
title: Table.FromList
---

# Table.FromList


Muuntaa luettelon taulukoksi käyttämällä määritettyä osiin jakamisen funktiota kullekin luettelon kohteelle.


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

Muuntaa luettelon `list` taulukoksi käyttämällä valinnaista osiin jakamisen funktiota `splitter` kullekin luettelon kohteelle. Oletusarvon mukaan luettelon oletetaan olevan pilkuin eroteltujen tekstiarvojen luettelo. Valinnainen `columns` voi olla sarakkeiden määrä, sarakkeiden luettelo tai TableType. Myös valinnaiset `default` ja `extraValues` voidaan määrittää.


## Examples

### Example #1
Luo taulukko luettelosta käyttämällä oletusjakajaa.
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
Luo taulukko luettelosta käyttämällä mukautettua jakajaa.
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
Luo taulukko luettelosta käyttämällä Record.FieldValues-jakajaa.
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
