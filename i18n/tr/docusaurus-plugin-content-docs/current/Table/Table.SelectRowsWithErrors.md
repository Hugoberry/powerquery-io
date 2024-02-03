---
title: Table.SelectRowsWithErrors
---

# Table.SelectRowsWithErrors


## Description

Girdi tablosunun yalnızca hücrelerinin en az birinde hata içeren satırları içeren tablosunu döndürür. Bir sütun listesi belirtilirse, yalnızca belirtilen sütunlardaki hücrelerde hata olup olmadığı denetlenir.


## Syntax

```powerquery
Table.SelectRowsWithErrors(
    table as table,
    optional columns as list
) as table
```


## Details

Girdi tablosunun yalnızca hücrelerinin en az birinde hata içeren satırları içeren tablosunu döndürür. Bir sütun listesi belirtilirse, yalnızca belirtilen sütunlardaki hücrelerde hata olup olmadığı denetlenir.


## Examples

### Example #1 
Satırlarında hata bulunan müşterilerin adlarını seçin.
```powerquery
Table.SelectRowsWithErrors(
    Table.FromRecords({
        [CustomerID = ..., Name = "Bob", Phone = "123-4567"],
        [CustomerID = 2, Name = "Jim", Phone = "987-6543"],
        [CustomerID = 3, Name = "Paul", Phone = "543-7890"],
        [CustomerID = 4, Name = "Ringo", Phone = "232-1550"]
    })
)[Name]
```

Result: 
```powerquery
{"Bob"}
```




## Category
Table.Row operations
