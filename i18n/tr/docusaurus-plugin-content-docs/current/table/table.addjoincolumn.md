---
title: Table.AddJoinColumn
---

# Table.AddJoinColumn


Tablolar arasında sağlanan sütunlar üzerinde birleştirme gerçekleştirir ve birleştirme sonucunu yeni bir sütunda oluşturur.


## Syntax

```powerquery
Table.AddJoinColumn(
    table1 as table,
    key1 as any,
    table2 as any,
    key2 as any,
    newColumnName as text
) as table
```


## Remarks

`table1` satırlarını `key1` (`table1` için) ve `key2` (`table2` için) tarafından seçilen anahtar sütunların değerlerinin eşitliğine dayalı olarak `table2` satırları ile birleştirir. Sonuçlar `newColumnName` adlı sütuna girilir. Bu işlev, birleştirme sonuçlarının düzleştirilmiş biçim yerine iç içe yerleştirilmiş sunulması dışında LeftOuter türünde JoinKind içeren Table.Join ile aynı şekilde davranır.


## Examples

### Example #1
(\{\[saleID = 1, price = 20\], \[saleID = 2, price = 10\]\}) tablosundan (\{\[saleID = 1, item = "Shirt"\], \[saleID = 2, item = "Hat"\]\}) tablosuna, \[saleID\] üzerinde birleştirilecek "fiyat/stok" adlı birleştirme sütununu ekler.
```powerquery
Table.AddJoinColumn(
    Table.FromRecords({
        [saleID = 1, item = "Shirt"],
        [saleID = 2, item = "Hat"]
    }),
    "saleID",
    () => Table.FromRecords({
        [saleID = 1, price = 20, stock = 1234],
        [saleID = 2, price = 10, stock = 5643]
    }),
    "saleID",
    "price"
)
```

Result: 
```powerquery
Table.FromRecords({
    [
        saleID = 1,
        item = "Shirt",
        price = Table.FromRecords({[saleID = 1, price = 20, stock = 1234]})
    ],
    [
        saleID = 2,
        item = "Hat",
        price = Table.FromRecords({[saleID = 2, price = 10, stock = 5643]})
    ]
})
```




## Category
Table.Transformation
