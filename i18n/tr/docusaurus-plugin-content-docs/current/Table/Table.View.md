---
title: Table.View
---

# Table.View


Sorgu ve eylem işlemlerine ilişkin kullanıcı tanımlı işleyicileri bulunan bir tablo oluşturur veya genişletir.


## Syntax

```powerquery
Table.View(
    table as table,
    handlers as record
) as table
```


## Remarks

İşlem görünüme uygulandığında varsayılan işlem davranışı yerine <code>table</code> içinde belirtilen işlevlerin kullanıldığı bir <code>handlers</code> görünümü döndürür.<br /><code>table</code> sağlanırsa işleyici işlevleri isteğe bağlıdır. <code>table</code> sağlanmazsa <code>GetType</code> ve <code>GetRows</code> işleyici işlevleri gerekir. İşleme yönelik bir işleyici işlevinin belirtilmemesi durumunda bunun yerine (<code>GetExpression</code> durumu dışında) <code>table</code> için varsayılan işlem davranışı uygulanır.<br />İşleyici işlevleri, <code>table</code> üzerinde işlem uygulandıktan sonra elde edilen sonuç (veya <code>GetExpression</code> durumunda ortaya çıkan görünüm) ile anlamsal olarak eşdeğer bir değer döndürmelidir.<br />İşleyici işlevinin hata vermesi durumunda, görünüme varsayılan işlem davranışı uygulanır.<br />Kaynağa özgü sorgulara ilişkin M sorgularının çevirisi gibi bir veri kaynağına katlama işlemi uygulamak üzere (örneğin, M sorgularından T-SQL deyimleri oluşturma) <code>Table.View</code> kullanılabilir.<br /><code>Table.View</code> hakkında yapılan tüm açıklamalar için yayımlanmış Power Query özel bağlayıcı belgelerine bakın.<br />


## Examples

### Example #1 
Türü veya satır sayısını belirlemek için satırlara erişmeyi gerektirmeyen temel bir görünüm oluşturun.
```powerquery
Table.View(
    null,
    [
        GetType = () => type table [CustomerID = number, Name = text, Phone = nullable text],
        GetRows = () => Table.FromRecords({[CustomerID = 1, Name = "Bob", Phone = "123-4567"]}),
        GetRowCount = () => 1
    ]
)
```

Result: 
```powerquery
Table.FromRecords({[CustomerID = 1, Name = "Bob", Phone = "123-4567"]})
```




## Category
Table.Table construction
