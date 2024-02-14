---
title: Table.FromList
---

# Table.FromList


Konverterer en liste til en tabel ved at anvende den angivne opdelingsfunktion på hvert element på listen.


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

Konverterer en liste, <code>list</code>, til en tabel ved at anvende den valgfrie opdelingsfunktion, <code>splitter</code>, på hvert element på listen. Det antages som standard, at listen er en liste over tekstværdier, der opdeles med kommaer. Den valgfrie <code>columns</code> kan være antallet af kolonner, en liste over kolonner eller en tabeltype. De valgfrie <code>default</code> og <code>extraValues</code> kan også angives.


## Examples

### Example #1 
Opret en tabel ud fra en liste ved hjælp af standardopdelingsfunktionen.
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
Opret en tabel ud fra en liste ved hjælp af en brugerdefineret opdelingsfunktion.
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
Opret en tabel ud fra listen ved hjælp af opdelingsfunktionen Record.FieldValues.
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
