---
title: Table.FromRows
---

# Table.FromRows


## Description

Membuat tabel dari daftar nilai baris dan opsional kolom.


## Syntax

```powerquery
Table.FromRows(
    rows as list,
    optional columns as any
) as table
```


## Details

Membuat tabel dari daftar <code>rows</code> dengan setiap elemen daftar berupa daftar dalam yang berisi nilai kolom untuk satu baris. Daftar opsional nama kolom, tipe tabel, atau bilangan kolom dapat diberikan untuk <code>columns</code>.


## Examples

### Example #1 
Membuat tabel dengan kolom [CustomerID] berisi nilai \{1, 2} dan kolom [Name] berisi nilai \{&#34;Bob&#34;, &#34;Jim&#34;}, dan kolom [Phone] dengan nilai \{&#34;123-4567&#34;, &#34;987-6543&#34;}.
```powerquery
Table.FromRows(
    {
        {1, "Bob", "123-4567"},
        {2, "Jim", "987-6543"}
    },
    {"CustomerID", "Name", "Phone"}
)
```

Result: 
```powerquery
Table.FromRecords({
    [CustomerID = 1, Name = "Bob", Phone = "123-4567"],
    [CustomerID = 2, Name = "Jim", Phone = "987-6543"]
})
```


### Example #2 
Menghasilkan tabel dengan kolom [CustomerID] dengan nilai \{1, 2}, kolom [Name] dengan nilai \{&#34;Bob&#34;, &#34;Jim&#34;}, dan kolom [Phone] dengan nilai \{&#34;123-4567&#34;, &#34;987-6543&#34;}, yang mana [CustomerID] adalah jenis bilangan, dan [Name] serta [Phone] adalah jenis teks.
```powerquery
Table.FromRows(
    {
        {1, "Bob", "123-4567"},
        {2, "Jim", "987-6543"}
    },
    type table [CustomerID = number, Name = text, Phone = text]
)
```

Result: 
```powerquery
Table.FromRecords({
    [CustomerID = 1, Name = "Bob", Phone = "123-4567"],
    [CustomerID = 2, Name = "Jim", Phone = "987-6543"]
})
```




## Category
Table.Table construction
