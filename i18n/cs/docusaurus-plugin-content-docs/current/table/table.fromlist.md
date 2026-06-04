---
title: Table.FromList
---

# Table.FromList


Převede seznam na tabulku použitím zadané funkce rozdělení na jednotlivé položky seznamu.


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

Převede seznam `list` na tabulku použitím volitelné funkce rozdělení `splitter` na jednotlivé položky seznamu. Ve výchozím nastavení se předpokládá, že seznam je tvořen textovými hodnotami oddělenými čárkami. Parametr `columns` může volitelně představovat počet sloupců, seznam sloupců nebo vlastnost TableType. Volitelně mohou být zadány také parametry `default` a `extraValues`.


## Examples

### Example #1
Vytvoření tabulky ze seznamu pomocí výchozího rozdělovače
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
Vytvoření tabulky ze seznamu pomocí vlastního rozdělovače
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
Vytvoření tabulky ze seznamu pomocí rozdělovače Record.FieldValues
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
