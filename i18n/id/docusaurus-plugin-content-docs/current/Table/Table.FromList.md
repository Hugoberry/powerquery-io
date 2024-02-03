---
title: Table.FromList
---

# Table.FromList


## Description

Mengkonversi daftar menjadi tabel dengan menerapkan fungsi pemisah yang ditetapkan pada setiap item dalam daftar.


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

Mengkonversi daftar <code>list</code> menjadi tabel dengan menerapkan fungsi pemisah opsional, <code>splitter</code>, pada setiap item dalam daftar. Secara default, daftar tersebut diperkirakan sebagai daftar nilai teks yang dibagi dengan koma. <code>columns</code> opsional dapat berupa jumlah kolom, daftar kolom, atau TableType. <code>default</code> dan <code>extraValues</code> opsional juga dapat ditetapkan.


## Examples

### Example #1 
Buat tabel dari daftar menggunakan pemisah default.
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
Buat tabel dari daftar menggunakan pemisah kustom.
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
Buat tabel dari daftar menggunakan pemisah Record.FieldValues.
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
