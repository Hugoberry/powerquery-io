---
title: Table.MinN
---

# Table.MinN


## Description

En küçük satırları verilen ölçütü kullanarak döndürür.


## Syntax

```powerquery
Table.MinN(
    table as table,
    comparisonCriteria as any,
    countOrCondition as any
) as table
```


## Details

<code>comparisonCriteria</code> durumunda, <code>table</code> öğesindeki en küçük satırları döndürür. Satırlar sıralandıktan sonra, sonuçlarını daha fazla filtrelemek için <code>countOrCondition</code> parametresi belirlenmelidir. Sıralama algoritmasının, sabit sıralanmış bir sonucu garanti vermediğini unutmayın. <code>countOrCondition</code> parametresi birden fazla form alabilir:    <ul>        <li> Bir sayı belirlenirse, artan sıraya göre <code>countOrCondition</code> kadar öğeyi içeren bir liste döndürülür. </li>        <li> Bir koşul belirlenirse, ilk olarak koşulu karşılayan bir öğe listesi döndürülür. Bir öğe koşulu karşılayamazsa, daha fazla öğe değerlendirilmez. </li></ul>


## Examples

### Example #1 
Tabloda [a] &lt; 3 koşulunu sağlayacak şekilde [a] sütununda en küçük değer bulunan satırı bulur. Satırlar, filtre uygulanmadan önce sıralanır.
```powerquery
Table.MinN(
    Table.FromRecords({
        [a = 2, b = 4],
        [a = 0, b = 0],
        [a = 6, b = 4]
    }),
    "a",
    each [a] < 3
)
```

Result: 
```powerquery
Table.FromRecords({
    [a = 0, b = 0],
    [a = 2, b = 4]
})
```


### Example #2 
Tabloda [b] &lt; 0 koşulunu sağlayacak şekilde [a] sütununda en küçük değer bulunan satırı bulur. Satırlar, filtre uygulanmadan önce sıralanır.
```powerquery
Table.MinN(
    Table.FromRecords({
        [a = 2, b = 4],
        [a = 8, b = 0],
        [a = 6, b = 2]
    }),
    "a",
    each [b] < 0
)
```

Result: 
```powerquery
Table.FromRecords({})
```




## Category
Table.Ordering
