---
title: Table.FromList
---

# Table.FromList


## Description

Konvertiert eine Liste in eine Tabelle, indem die angegebene Aufteilungsfunktion auf alle Elemente in der Liste angewendet wird.


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

Konvertiert eine Liste (<code>list</code>) in eine Tabelle, indem die optionale Aufteilungsfunktion (<code>splitter</code>) auf alle Elemente in der Liste angewendet wird. Standardmäßig wird von einer Liste mit kommagetrennten Textwerten ausgegangen. Optional kann <code>columns</code> die Anzahl von Spalten, eine Liste von Spalten oder ein TableType sein. Optional können auch <code>default</code> und <code>extraValues</code> angegeben werden.


## Examples

### Example #1 
Tabelle aus einer Liste mithilfe des Standardteilers erstellen.
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
Tabelle aus einer Liste mithilfe eines benutzerdefinierten Splitters erstellen.
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
Tabelle aus der Liste mithilfe eines Record.FieldValues-Splitters erstellen.
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
