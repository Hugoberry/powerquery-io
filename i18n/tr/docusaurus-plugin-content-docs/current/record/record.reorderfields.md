---
title: Record.ReorderFields
---

# Record.ReorderFields


Kayıt alanlarını, alan adları listesinin sırasıyla eşleşecek şekilde yeniden sıralar.


## Syntax

```powerquery
Record.ReorderFields(
    record as record,
    fieldOrder as list,
    optional missingField as MissingField.Type
) as record
```


## Remarks

Bir kaydın alanlarını, alan adları listesinin sırasıyla eşleşecek şekilde yeniden sıralar.

-   `record`: Yeniden sıralanacak alanları içeren kayıt.
-   `fieldOrder`: Kayda uygulanacak yeni alan sırasını içeren liste. Alan değerleri korunur ve bu parametrede listelenmeyen alanlar özgün konumlarında bırakılır.
-   `missingField`: Beklenenden daha az alan içeren bir satırda eksik değerler için beklenen eylemi belirtir. Şu değerler geçerlidir:
    -   `MissingField.Error`: (Varsayılan) Eksik alanların hatayla sonuçlanacağını gösterir. `missingField` parametresine hiç değer girilmezse, bu değer kullanılır.
    -   `MissingField.Ignore`: Eksik alanların yoksayılacağını gösterir.
    -   `MissingField.UseNull`: Eksik alanların `null` değerler olarak ekleneceğini gösterir.


## Examples

### Example #1
Kayıttaki bazı alanları yeniden sıralar.
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
Kayıttaki bazı alanları yeniden sıralayın ve eksik alanlar için `null` ekleyin.
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
