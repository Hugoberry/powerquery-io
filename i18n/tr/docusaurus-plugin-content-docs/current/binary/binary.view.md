---
title: Binary.View
---

# Binary.View


Sorgu ve eylem işlemlerine ilişkin kullanıcı tanımlı işleyicileri bulunan bir ikili oluşturur veya ikiliyi genişletir.


## Syntax

```powerquery
Binary.View(
    binary as binary,
    handlers as record
) as binary
```


## Remarks

İşlem görünüme uygulandığında varsayılan işlem davranışı yerine `handlers` içinde belirtilen işlevlerin kullanıldığı bir `binary` görünümü döndürür.

`binary` sağlanırsa işleyici işlevleri isteğe bağlıdır. `binary` sağlanmazsa `GetStream` işleyici işlevi gerekir. İşleme yönelik bir işleyici işlevinin belirtilmemesi durumunda bunun yerine (`GetExpression` durumu dışında) `binary` için varsayılan işlem davranışı uygulanır.

İşleyici işlevleri, `binary` üzerinde işlem uygulandıktan sonra elde edilen sonuç (veya `GetExpression` durumunda ortaya çıkan görünüm) ile anlamsal olarak eşdeğer bir değer döndürmelidir.

İşleyici işlevinin hata vermesi durumunda, görünüme varsayılan işlem davranışı uygulanır.

Kaynağa özgü işlemlere ilişkin M sorgularının çevirisi gibi bir veri kaynağına katlama işlemi uygulamak üzere (örneğin, bir dosyanın bir bölümünü indirmek için) `Binary.View` kullanılabilir.

`Binary.View` hakkında yapılan tüm açıklamalar için yayınlanmış Power Query özel bağlayıcı belgelerine bakın.


## Examples

### Example #1
Uzunluğu belirlemek için verilere erişmeyi gerektirmeyen temel bir görünüm oluşturun.
```powerquery
Binary.View(
    null,
    [
        GetLength = () => 12,
        GetStream = () => Text.ToBinary("hello world!")
    ]
)
```

Result: 
```powerquery
Text.ToBinary("hello world!")
```




## Category
Binary
