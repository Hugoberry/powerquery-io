---
title: Table.FromList
---

# Table.FromList


Converteix una llista en una taula amb l'aplicació de la funció de divisió especificada a cada element de la llista.


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

Converteix una llista, `list`, en una taula amb l'aplicació de la funció de divisió opcional, `splitter`, a cada element de la llista. Per defecte, s'assumeix que la llista és una llista de valors de text dividida per comes. El `columns` opcional pot ser el nombre de columnes, una llista de columnes o un TableType. També es poden especificar els `default` i `extraValues` opcionals.


## Examples

### Example #1
Creeu una taula a partir d'una llista mitjançant el separador per defecte.
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
Creeu una taula a partir d'una llista mitjançant un separador personalitzat.
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
Creeu una taula a partir de la llista mitjançant el separador Record.FieldValues.
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
