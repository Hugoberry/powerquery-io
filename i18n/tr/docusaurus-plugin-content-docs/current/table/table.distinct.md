---
title: Table.Distinct
---

# Table.Distinct


Yinelenen satırları tablodan kaldırır.


## Syntax

```powerquery
Table.Distinct(
    table as table,
    optional equationCriteria as any
) as table
```


## Remarks

Yinelenen satırları tablodan kaldırır. İsteğe bağlı`equationCriteria` parametresi tablodaki hangi sütunlar için yineleme testi yapılacağını belirtir. `equationCriteria` belirtilmezse tüm sütunlar test edilir.  
  
Power Query bazen belirli işlemleri arka uç veri kaynaklarına boşalttığından (“kaynağa döndürme” olarak bilinir) ve ayrıca bazen kesinlikle gerekli olmayan işlemleri atlayarak sorguları iyileştirdiğinden, genel olarak hangi yinelenen satırların korunacağı garanti edilemez. Örneğin, benzersiz bir sütun değerleri kümesi içeren ilk satırın korunacağını ve tablodaki diğer satırların kaldırılacağını varsayamazsınız. Yinelenenleri kaldırma işleminin beklendiği şekilde davranmasını istiyorsanız önce `Table.Buffer` kullanarak tabloyu arabelleğe alın.


## Examples

### Example #1
Tablodaki yinelenen satırları kaldırır.
```powerquery
Table.Distinct(
    Table.FromRecords({
        [a = "A", b = "a"],
        [a = "B", b = "b"],
        [a = "A", b = "a"]
    })
)
```

Result: 
```powerquery
Table.FromRecords({
    [a = "A", b = "a"],
    [a = "B", b = "b"]
})
```


### Example #2
`({[a = "A", b = "a"], [a = "B", b = "a"], [a = "A", b = "b"]})` tablosunda \[b\] sütunundaki yinelenen satırları kaldırır.
```powerquery
Table.Distinct(
    Table.FromRecords({
        [a = "A", b = "a"],
        [a = "B", b = "a"],
        [a = "A", b = "b"]
    }),
    "b"
)
```

Result: 
```powerquery
Table.FromRecords({
    [a = "A", b = "a"],
    [a = "A", b = "b"]
})
```




## Category
Table.Membership
