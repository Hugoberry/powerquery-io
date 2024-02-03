---
title: Table.FromList
---

# Table.FromList


## Description

Pretvori seznam v tabelo, tako da uporabi navedeno razdelilno funkcijo za vsak element na seznamu.


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

Pretvori seznam <code>list</code> v tabelo, tako da uporabi izbirno razdelilno funkcijo, <code>splitter</code>, za vsak element na seznamu. Seznam naj bi bil privzeto seznam besedilnih vrednosti, razdeljen z vejicami. Izbirni parameter <code>columns</code> je lahko število stolpcev, seznam stolpcev ali vrsta tabele. Določite lahko tudi izbirna parametra <code>default</code> in <code>extraValues</code>.


## Examples

### Example #1 
Ustvarite tabelo s seznama z uporabo privzetega razdeljevalca.
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
Ustvarite tabelo s seznama z uporabo razdeljevalca po meri.
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
Ustvarite tabelo s seznama z uporabo razdeljevalca Record.FieldValues.
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
