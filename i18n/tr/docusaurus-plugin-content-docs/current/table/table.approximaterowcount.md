---
title: Table.ApproximateRowCount
---

# Table.ApproximateRowCount


Tablodaki yaklaşık satır sayısını geri gönderir.


## Syntax

```powerquery
Table.ApproximateRowCount(
    table as table
) as number
```


## Remarks

<code>table</code> içindeki yaklaşık satır sayısını veya veri kaynağı yaklaşıklığı desteklemiyorsa bir hata döndürür.


## Examples

### Example #1 
Sütunlar için kardinalite tahmini olarak kullanılabilecek büyük bir tabloda farklı şehir ve eyalet kombinasyonlarının sayısını tahmin edin. Kardinalite tahminleri, çeşitli veri kaynaklarının (SQL Server gibi) genellikle HyperLogLog adlı bir algoritma kullanarak bu belirli yaklaşımı desteklemesi için yeterince önemlidir.
```powerquery
Table.ApproximateRowCount(Table.Distinct(Table.SelectColumns(sqlTable, {"city", "state"})))
```

Result: 
```powerquery
number
```




## Category
Table.Information
