---
title: Table.TransformColumnNames
---

# Table.TransformColumnNames


Verilen işlevi kullanarak sütun adlarını dönüştürür.


## Syntax

```powerquery
Table.TransformColumnNames(
    table as table,
    nameGenerator as function,
    optional options as record
) as table
```


## Remarks

Verilen <code>nameGenerator</code> işlevini kullanarak sütun adlarını dönüştürür. Geçerli seçenekler:    <div>      <code>MaxLength</code>, yeni sütun adlarının uzunluk üst sınırını belirtir. Verilen işlev daha uzun bir sütun adına neden oluyorsa uzun ad kısaltılır.    </div>    <div>      <code>Karşılaştırıcı</code>, yeni sütun adları oluşturulurken karşılaştırmanın denetlenmesi için kullanılır. Karşılaştırıcılar, büyük/küçük harfe duyarlı olmayan veya kültüre ve yerel ayara duyarlı karşılaştırmaların sağlanması için kullanılabilir.    </div>    <div>      Aşağıdaki yerleşik karşılaştırıcılar, formül dilinde kullanılabilir:    </div>    <ul>      <li><code>Comparer.Ordinal</code>: Tam sıralı karşılaştırma gerçekleştirilmesi için kullanılır</li>      <li><code>Comparer.OrdinalIgnoreCase</code>: Tam sıralı, büyük/küçük harfe duyarlı olmayan karşılaştırma gerçekleştirilmesi için kullanılır</li>      <li> <code>Comparer.FromCulture</code>: Kültüre duyarlı karşılaştırma gerçekleştirilmesi için kullanılır</li>    </ul>    


## Examples

### Example #1 
Sütun adlarından &lt;code&gt;#(tab)&lt;/code&gt; karakteri kaldırın
```powerquery
Table.TransformColumnNames(Table.FromRecords({[#"Col#(tab)umn" = 1]}), Text.Clean)
```

Result: 
```powerquery
Table.FromRecords({[Column = 1]})
```


### Example #2 
Uzunluğu 6 olan büyük/küçük harf duyarsız adlar oluşturmak için sütun adlarını dönüştürün.
```powerquery
Table.TransformColumnNames(
    Table.FromRecords({[ColumnNum = 1, cOlumnnum = 2, coLumnNUM = 3]}),
    Text.Clean,
    [MaxLength = 6, Comparer = Comparer.OrdinalIgnoreCase]
)
```

Result: 
```powerquery
Table.FromRecords({[Column = 1, cOlum1 = 2, coLum2 = 3]})
```




## Category
Table.Column operations
