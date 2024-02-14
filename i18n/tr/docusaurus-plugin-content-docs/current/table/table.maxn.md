---
title: Table.MaxN
---

# Table.MaxN


En büyük satırları verilen ölçütü kullanarak döndürür.


## Syntax

```powerquery
Table.MaxN(
    table as table,
    comparisonCriteria as any,
    countOrCondition as any
) as table
```


## Remarks

<code>comparisonCriteria</code> durumunda, <code>table</code> öğesindeki en büyük satırları döndürür.    Satırlar sıralandıktan sonra, sonuçları daha fazla filtrelemek için <code>countOrCondition</code> parametresi belirtilmelidir. Sıralama algoritmasının, sabit sıralanmış bir sonucu garanti etmediğini unutmayın. <code>countOrCondition</code> parametresi birden fazla biçimde olabilir:    <ul>        <li> Bir sayı belirlenirse, en fazla <code>countOrCondition</code> öğe içeren, artan sıraya göre bir liste döndürülür. </li>        <li> Bir koşul belirlenirse, koşulu karşılayan bir öğe listesi döndürülür. Bir öğe koşulu karşılamazsa, diğer öğeler değerlendirilmez. </li> </ul>


## Examples

### Example #1 
Tabloda [a] &gt; 0 koşulunu sağlayacak şekilde [a] sütununda en büyük değer bulunan satırı bulur. Satırlar, filtre uygulanmadan önce sıralanır.
```powerquery
Table.MaxN(
    Table.FromRecords({
        [a = 2, b = 4],
        [a = 0, b = 0],
        [a = 6, b = 2]
    }),
    "a",
    each [a] > 0
)
```

Result: 
```powerquery
Table.FromRecords({
    [a = 6, b = 2],
    [a = 2, b = 4]
})
```


### Example #2 
Tabloda [b] &gt; 0 koşulunu sağlayacak şekilde [a] sütununda en büyük değer bulunan satırı bulur. Satırlar, filtre uygulanmadan önce sıralanır.
```powerquery
Table.MaxN(
    Table.FromRecords({
        [a = 2, b = 4],
        [a = 8, b = 0],
        [a = 6, b = 2]
    }),
    "a",
    each [b] > 0
)
```

Result: 
```powerquery
Table.FromRecords({})
```




## Category
Table.Ordering
