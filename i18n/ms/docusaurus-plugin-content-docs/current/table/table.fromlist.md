---
title: Table.FromList
---

# Table.FromList


Menukarkan senarai kepada jadual dengan menggunakan fungsi pemisahan yang ditentukan pada setiap item dalam senarai.


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

Menukarkan senarai, `list` kepada jadual dengan menggunakan fungsi pemisahan pilihan, `splitter`, pada setiap item dalam senarai. Secara lalai, senarai dianggap sebagai senarai nilai teks yang dipisahkan oleh koma. Pilihan `columns` mungkin beberapa lajur, senarai lajur atau TableType. Pilihan `default` dan `extraValues` juga mungkin ditentukan.


## Examples

### Example #1
Cipta jadual daripada senarai menggunakan pemisah lalai.
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
Cipta jadual daripada senarai menggunakan pemisah tersuai.
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
Cipta jadual daripada senarai menggunakan pemisah Record.FieldValues.
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
