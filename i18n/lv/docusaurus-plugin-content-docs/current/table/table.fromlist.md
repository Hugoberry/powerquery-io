---
title: Table.FromList
---

# Table.FromList


Saraksts tiek pārvērsts tabulā, lietojot norādīto sadalīšanas funkciju katram sarakstā ietvertajam vienumam.


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

Saraksts `list` tiek pārvērsts tabulā, lietojot neobligātu sadalīšanas funkciju `splitter` katram sarakstā ietvertajam vienumam. Pēc noklusējuma saraksts tiek uzskatīts par komatatdalītu teksta vērtību sarakstu. Neobligāts `columns` var būt kolonnu skaits, kolonnu saraksts vai TableType. Var norādīt arī neobligātu `default` un `extraValues`.


## Examples

### Example #1
Izveidot tabulu no saraksta, izmantojot noklusējuma sadalītāju.
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
Izveidot tabulu no saraksta, izmantojot pielāgotu sadalītāju.
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
Izveidot tabulu no saraksta, izmantojot sadalītāju Record.FieldValues.
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
