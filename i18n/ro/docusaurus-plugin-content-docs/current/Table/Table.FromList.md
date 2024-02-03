---
title: Table.FromList
---

# Table.FromList


## Description

Converteşte o listă într-un tabel aplicând funcţia de divizare specificată fiecărui element din listă.


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

Converteşte o listă, <code>list</code> într-un tabel aplicând funcţia opţională de divizare, <code>splitter</code>, fiecărui element din listă. În mod implicit, lista se presupune a fi o listă de valori text, care este divizată de virgule. <code>columns</code> opţional poate fi numărul de coloane, o listă de coloane sau TableType. <code>default</code> şi <code>extraValues</code> opţionale pot fi, de asemenea, specificate.


## Examples

### Example #1 
Creați un tabel dintr-o listă utilizând divizorul implicit.
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
Creați un tabel dintr-o listă utilizând un divizor personalizat.
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
Creați un tabel din listă utilizând divizorul Record.FieldValues.
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
