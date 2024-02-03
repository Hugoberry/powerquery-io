---
title: Table.FromList
---

# Table.FromList


## Description

Converteert een lijst naar een tabel door de opgegeven splitsfunctie op elk item in de lijst toe te passen.


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

Converteert een lijst <code>list</code> naar een tabel door de optionele splitsfunctie, <code>splitter</code>, op elk item in de lijst toe te passen. Standaard wordt er vanuit gegaan dat de lijst een lijst met tekstwaarden is, van elkaar gescheiden door een komma. Optionele <code>columns</code> kan het aantal kolommen, een lijst met kolommen of een tabeltype zijn. Optionele <code>default</code> en <code>extraValues</code> kunnen ook worden opgegeven.


## Examples

### Example #1 
Een tabel maken op basis van een lijst met behulp van de standaardsplitser.
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
Een tabel maken op basis van een lijst met behulp van een aangepaste splitser.
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
Maak een tabel uit de lijst met behulp van de splitser Record.FieldValues.
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
