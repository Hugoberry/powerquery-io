---
title: Record.ReorderFields
---

# Record.ReorderFields


Menyusun semula medan rekod agar sepadan dengan urutan senarai nama medan.


## Syntax

```powerquery
Record.ReorderFields(
    record as record,
    fieldOrder as list,
    optional missingField as MissingField.Type
) as record
```


## Remarks

Menyusun semula medan rekod agar sepadan dengan tertib senarai nama medan.

-   `record`: Rekod yang mengandungi medan untuk disusun semula.
-   `fieldOrder`: Senarai yang mengandungi tertib baru bagi medan untuk digunakan pada rekod. Nilai medan dikekalkan dan medan yang tidak disenaraikan dalam parameter ini ditinggalkan dalam kedudukan asalnya.
-   `missingField`: Menentukan tindakan yang dijangka untuk nilai yang hilang dalam baris yang mengandungi kurang medan daripada yang dijangkakan. Nilai berikut adalah sah:
    -   `MissingField.Error`: (Lalai) Menunjukkan bahawa medan yang hilang harus menyebabkan ralat. Jika tiada nilai dimasukkan untuk `missingField` parameter ini, nilai ini digunakan.
    -   `MissingField.Ignore`: Menunjukkan bahawa medan yang hilang harus diabaikan.
    -   `MissingField.UseNull`: Menunjukkan bahawa medan yang hilang harus disertakan sebagai nilai `null`.


## Examples

### Example #1
Susun semula beberapa medan dalam rekod.
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
Susun semula beberapa medan dalam rekod dan sertakan `null` untuk sebarang medan yang hilang.
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
