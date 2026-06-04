---
title: Record.ReorderFields
---

# Record.ReorderFields


Mengurutkan ulang bidang rekaman agar sesuai dengan urutan daftar nama bidang.


## Syntax

```powerquery
Record.ReorderFields(
    record as record,
    fieldOrder as list,
    optional missingField as MissingField.Type
) as record
```


## Remarks

Mengurutkan ulang bidang rekaman agar sesuai dengan urutan daftar nama bidang.

-   `record`: Rekaman yang berisi bidang yang akan diurutkan ulang.
-   `fieldOrder`: Daftar yang berisi urutan baru dari bidang yang akan diterapkan ke rekaman. Nilai bidang dipertahankan dan bidang yang tidak tercantum dalam parameter ini dibiarkan pada posisi aslinya.
-   `missingField`: Menetapkan tindakan yang diharapkan untuk nilai yang tidak ada dalam baris yang berisi lebih sedikit bidang dari yang diharapkan. Nilai berikut valid:
    -   `MissingField.Error`: (Default) Menunjukkan bahwa bidang yang tidak ada akan mengakibatkan kesalahan. Jika tidak ada nilai yang dimasukkan untuk parameter `missingField`, nilai ini akan digunakan.
    -   `MissingField.Ignore`: Menunjukkan bahwa bidang yang tidak ada harus diabaikan.
    -   `MissingField.UseNull`: Menunjukkan bahwa bidang yang tidak ada harus disertakan sebagai nilai `null`.


## Examples

### Example #1
Menyusun ulang beberapa bidang dalam data.
```powerquery
Record.ReorderFields(
    [CustomerID = 1, OrderID = 1, Item = "Fishing rod", Price = 100.0],
    {"OrderID", "CustomerID"}
)
```

Result: 
```powerquery
[OrderID = 1, CustomerID = 1, Item = "Fishing rod", Price = 100.0]
```


### Example #2
Mengurutkan ulang beberapa bidang dalam rekaman dan menyertakan `null` untuk bidang yang tidak ada.
```powerquery
let
    Source = [CustomerID = 3, First Name = "Paul", Phone = "543-7890", Purchase = "Fishing Rod"],
    reorderedRecord = Record.ReorderFields(
        Source,
        {"Purchase", "Last Name", "First Name"},
        MissingField.UseNull
    )
in
    reorderedRecord
```

Result: 
```powerquery
[CustomerID = 3, Purchase = "Fishing Rod", Phone = "543-7890", Last Name = null, First Name = "Paul"]
```




## Category
Record.Transformations
