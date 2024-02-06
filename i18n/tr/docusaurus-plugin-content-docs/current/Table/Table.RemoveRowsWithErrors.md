---
title: Table.RemoveRowsWithErrors
---

# Table.RemoveRowsWithErrors


Hücrelerinin en az birinde hata içeren, girdi tablosundan kaldırılan satırları içeren bir tablo döndürür. Bir sütun listesi belirtilirse, yalnızca belirtilen sütunlardaki hücrelerde hata olup olmadığı denetlenir.


## Syntax

```powerquery
Table.RemoveRowsWithErrors(
    table as table,
    optional columns as list
) as table
```


## Remarks

Hücrelerinin en az birinde hata içeren, girdi tablosundan kaldırılan satırları içeren bir tablo döndürür. Bir sütun listesi belirtilirse, yalnızca belirtilen sütunlardaki hücrelerde hata olup olmadığı denetlenir.


## Examples

### Example #1 
İlk satırdaki hata değerini kaldırın.
```powerquery
Table.RemoveRowsWithErrors(
    Table.FromRecords({
        [Column1 = ...],
        [Column1 = 2],
        [Column1 = 3]
    })
)
```

Result: 
```powerquery
Table.FromRecords({
    [Column1 = 2],
    [Column1 = 3]
})
```




## Category
Table.Row operations
