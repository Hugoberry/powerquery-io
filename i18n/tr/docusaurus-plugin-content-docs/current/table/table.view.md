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

İşlem görünüme uygulandığında varsayılan işlem davranışı yerine `table` içinde belirtilen işlevlerin kullanıldığı bir `handlers` görünümü döndürür.

`table` sağlanırsa işleyici işlevleri isteğe bağlıdır. `table` sağlanmazsa `GetType` ve `GetRows` işleyici işlevleri gerekir. İşleme yönelik bir işleyici işlevinin belirtilmemesi durumunda bunun yerine (`GetExpression` durumu dışında) `table` için varsayılan işlem davranışı uygulanır.

İşleyici işlevleri, `table` üzerinde işlem uygulandıktan sonra elde edilen sonuç (veya `GetExpression` durumunda ortaya çıkan görünüm) ile anlamsal olarak eşdeğer bir değer döndürmelidir.

İşleyici işlevinin hata vermesi durumunda, görünüme varsayılan işlem davranışı uygulanır.

Kaynağa özgü sorgulara ilişkin M sorgularının çevirisi gibi bir veri kaynağına katlama işlemi uygulamak üzere (örneğin, M sorgularından T-SQL deyimleri oluşturma) `Table.View` kullanılabilir.

`Table.View` hakkında yapılan tüm açıklamalar için yayımlanmış Power Query özel bağlayıcı belgelerine bakın.


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
