---
title: Table.AlternateRows
---

# Table.AlternateRows


İlk uzaklığı korur ve sonraki satırları almayı ve atlamayı değiştirir.


## Syntax

```powerquery
Table.AlternateRows(
    table as table,
    offset as number,
    skip as number,
    take as number
) as table
```


## Remarks

İlk uzaklığı korur ve sonraki satırları almayı ve atlamayı değiştirir.

-   `table`: Giriş tablosu.
-   `offset`: Döngüleri başlatmadan önce saklanacak satır sayısı.
-   `skip`: Her döngüde kaldırılacak satır sayısı.
-   `take`: Her döngüde saklanacak satır sayısı.


## Examples

### Example #1
Tablodan, ilk satırdan başlayarak 1 değerini atlayan ve ardından 1 değerini tutan bir tablo döndürür.
```powerquery
Table.AlternateRows(
    Table.FromRecords({
        [CustomerID = 1, Name = "Bob", Phone = "123-4567"],
        [CustomerID = 2, Name = "Jim", Phone = "987-6543"],
        [CustomerID = 3, Name = "Paul", Phone = "543-7890"]
    }),
    1,
    1,
    1
)
```

Result: 
```powerquery
Table.FromRecords({
    [CustomerID = 1, Name = "Bob", Phone = "123-4567"],
    [CustomerID = 3, Name = "Paul", Phone = "543-7890"]
})
```




## Category
Table.Row operations
