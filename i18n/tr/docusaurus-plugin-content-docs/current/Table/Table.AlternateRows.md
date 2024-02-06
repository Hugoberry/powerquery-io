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

İlk uzaklığı korur ve sonraki satırları almayı ve atlamayı değiştirir.    <ul>       <li><code>table</code>: Giriş tablosu.</li>       <li><code>offset</code>: Döngüleri başlatmadan önce saklanacak satır sayısı.</li>       <li><code>skip</code>: Her döngüde kaldırılacak satır sayısı.</li>       <li><code>take</code>: Her döngüde saklanacak satır sayısı.</li>    </ul>    


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
