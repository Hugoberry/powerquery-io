---
title: Table.FromList
---

# Table.FromList


## Description

Konvertuje zoznam na tabuľku použitím zadanej funkcie rozdelenia na každú položku v zozname.


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

Konvertuje zoznam <code>list</code> na tabuľku použitím voliteľnej funkcie rozdelenia <code>splitter</code> na každú položku v zozname. V predvolenom nastavení sa predpokladá, že ide o zoznam textových hodnôt rozdelený čiarkami. Voliteľným parametrom <code>columns</code> môže byť počet stĺpcov, zoznam stĺpcov alebo typ TableType. Možno stanoviť aj voliteľné parametre <code>default</code> a <code>extraValues</code>.


## Examples

### Example #1 
Vytvoriť tabuľku zo zoznamu pomocou predvoleného rozdeľovača.
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
Vytvoriť tabuľku zo zoznamu pomocou vlastného rozdeľovača.
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
Vytvorenie tabuľky zo zoznamu pomocou rozdeľovača Record.FieldValues.
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
