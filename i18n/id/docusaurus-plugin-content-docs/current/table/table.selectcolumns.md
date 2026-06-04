---
title: Table.SelectColumns
---

# Table.SelectColumns


Menghasilkan tabel hanya dengan kolom tertentu.


## Syntax

```powerquery
Table.SelectColumns(
    table as table,
    columns as any,
    optional missingField as MissingField.Type
) as table
```


## Remarks

Menghasilkan `table` hanya dengan `columns` tertentu.

-   `table`: Tabel yang disediakan.
-   `columns`: Daftar kolom dari tabel `table` yang akan dihasilkan. Kolom dalam tabel yang dihasilkan berada dalam susunan yang tercantum di `columns`.
-   `missingField`: *(Opsional)* Tindakan yang harus dilakukan jika kolom tidak ada. Contoh: `MissingField.UseNull` atau `MissingField.Ignore`.


## Examples

### Example #1
Hanya menyertakan kolom \[Name\].
```powerquery
Table.SelectColumns(
    Table.FromRecords({
        [CustomerID = 1, Name = "Bob", Phone = "123-4567"],
        [CustomerID = 2, Name = "Jim", Phone = "987-6543"],
        [CustomerID = 3, Name = "Paul", Phone = "543-7890"],
        [CustomerID = 4, Name = "Ringo", Phone = "232-1550"]
    }),
    "Name"
)
```

Result: 
```powerquery
Table.FromRecords({
    [Name = "Bob"],
    [Name = "Jim"],
    [Name = "Paul"],
    [Name = "Ringo"]
})
```


### Example #2
Hanya menyertakan kolom \[CustomerID\] dan \[Name\].
```powerquery
Table.SelectColumns(
    Table.FromRecords({[CustomerID = 1, Name = "Bob", Phone = "123-4567"]}),
    {"CustomerID", "Name"}
)
```

Result: 
```powerquery
Table.FromRecords({[CustomerID = 1, Name = "Bob"]})
```


### Example #3
Jika kolom yang disertakan tidak ada, hasil defaultnya adalah kesalahan.
```powerquery
Table.SelectColumns(
    Table.FromRecords({[CustomerID = 1, Name = "Bob", Phone = "123-4567"]}),
    "NewColumn"
)
```

Result: 
```powerquery
[Expression.Error] The field 'NewColumn' of the record wasn't found.
```


### Example #4
Jika kolom yang dimasukkan tidak ada, opsi `MissingField.UseNull` membuat kolom dengan nilai null.
```powerquery
Table.SelectColumns(
    Table.FromRecords({[CustomerID = 1, Name = "Bob", Phone = "123-4567"]}),
    {"CustomerID", "NewColumn"},
    MissingField.UseNull
)
```

Result: 
```powerquery
Table.FromRecords({[CustomerID = 1, NewColumn = null]})
```




## Category
Table.Column operations
