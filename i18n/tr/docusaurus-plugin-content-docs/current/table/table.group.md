---
title: Table.Group
---

# Table.Group


Tabloda aynı anahtara sahip olan satırları gruplandırır.


## Syntax

```powerquery
Table.Group(
    table as table,
    key as any,
    aggregatedColumns as list,
    optional groupKind as GroupKind.Type,
    optional comparer as function
) as table
```


## Remarks

`table` satırlarını `key` ile tanımlanan anahtar sütunlara göre gruplandırır. `key` tek bir sütun adı ya da sütun adları listesi olabilir. Her grup için, `aggregatedColumns` ile belirtilen toplu sütunlarla birlikte anahtar sütunları (ve değerlerini) içeren bir kayıt oluşturulur. İsteğe bağlı olarak, `groupKind` ve `comparer` de belirtilebilir.  
  
Veriler anahtar sütunlara göre önceden sıralanmışsa, bir GroupKind.Local `groupKind` değeri sağlanabilir. Bu işlem, belirli durumlarda gruplandırmanın performansını iyileştirebilir; çünkü belirli bir anahtar değerler kümesi içeren tüm satırların bitişik olduğu varsayılır.  
  
Bir `comparer` geçerken, farklı anahtarları eşit olarak değerlendirirse, bir satırın, anahtarları kendininkinden farklı olan bir gruba yerleştirilebileceğini unutmayın.  
  
Bu işlev döndürdüğü satırların sıralamasını garanti etmez.


## Examples

### Example #1
Fiyatlar toplamını ("each List.Sum(\[price\])") içeren bir \[total\] toplama sütunu ekleyerek tabloyu gruplandırır.
```powerquery
Table.Group(
    Table.FromRecords({
        [CustomerID = 1, price = 20],
        [CustomerID = 2, price = 10],
        [CustomerID = 2, price = 20],
        [CustomerID = 1, price = 10],
        [CustomerID = 3, price = 20],
        [CustomerID = 3, price = 5]
    }),
    "CustomerID",
    {"total", each List.Sum([price])}
)
```

Result: 
```powerquery
Table.FromRecords(
    {
        [CustomerID = 1, total = 30],
        [CustomerID = 2, total = 30],
        [CustomerID = 3, total = 25]
    },
    {"CustomerID", "total"}
)
```




## Category
Table.Transformation
