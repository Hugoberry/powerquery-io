---
title: Table.FromList
---

# Table.FromList


Konverterar en lista till en tabell genom att tillämpa angiven delningsfunktion på varje objekt i listan.


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

Konverterar en lista, <code>list</code>, till en tabell genom att tillämpa den valfria delningsfunktionen, <code>splitter</code>, på varje objekt i listan. Som standard antas listan vara en lista med textvärden som avgränsas med komma. <code>columns</code> (valfritt) kan vara antalet kolumner, en lista med kolumner eller en TableType. <code>default</code> och <code>extraValues</code> (valfria) kan också anges.


## Examples

### Example #1 
Skapa en tabell från en lista med standarddelaren.
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
Skapa en tabell från en lista med en anpassad delning.
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
Skapa en tabell från listan med splittern Record.FieldValues.
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
