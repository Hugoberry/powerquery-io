---
title: Table.FromList
---

# Table.FromList


Konwertuje listę na tabelę, stosując określoną funkcję podziału do każdego elementu listy.


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

Konwertuje listę <code>list</code> na tabelę, stosując opcjonalną funkcję podziału <code>splitter</code> do każdego elementu listy. Domyślnie lista jest traktowana jako lista wartości tekstowych rozdzielonych przecinkami. Wartość opcjonalnego parametru <code>columns</code> może być liczbą kolumn, listą kolumn lub typem tabeli. Można także określić opcjonalne parametry <code>default</code> i <code>extraValues</code>.


## Examples

### Example #1 
Utwórz tabelę na podstawie listy przy użyciu domyślnego rozdzielacza.
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
Utwórz tabelę na podstawie listy przy użyciu rozdzielacza niestandardowego.
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
Utwórz tabelę na podstawie listy przy użyciu rozdzielacza Record.FieldValues.
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
