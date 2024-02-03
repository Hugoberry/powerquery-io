---
title: Binary.View
---

# Binary.View


## Description

Sorgu ve eylem işlemlerine ilişkin kullanıcı tanımlı işleyicileri bulunan bir ikili oluşturur veya ikiliyi genişletir.


## Syntax

```powerquery
Binary.View(
    binary as binary,
    handlers as record
) as binary
```


## Details

İşlem görünüme uygulandığında varsayılan işlem davranışı yerine <code>handlers</code> içinde belirtilen işlevlerin kullanıldığı bir <code>binary</code> görünümü döndürür.<br /><code>binary</code> sağlanırsa işleyici işlevleri isteğe bağlıdır. <code>binary</code> sağlanmazsa <code>GetStream</code> işleyici işlevi gerekir. İşleme yönelik bir işleyici işlevinin belirtilmemesi durumunda bunun yerine (<code>GetExpression</code> durumu dışında) <code>binary</code> için varsayılan işlem davranışı uygulanır.<br />İşleyici işlevleri, <code>binary</code> üzerinde işlem uygulandıktan sonra elde edilen sonuç (veya <code>GetExpression</code> durumunda ortaya çıkan görünüm) ile anlamsal olarak eşdeğer bir değer döndürmelidir.<br />İşleyici işlevinin hata vermesi durumunda, görünüme varsayılan işlem davranışı uygulanır.<br />Kaynağa özgü işlemlere ilişkin M sorgularının çevirisi gibi bir veri kaynağına katlama işlemi uygulamak üzere (örneğin, bir dosyanın bir bölümünü indirmek için) <code>Binary.View</code> kullanılabilir.<br /><code>Binary.View</code> hakkında yapılan tüm açıklamalar için yayınlanmış Power Query özel bağlayıcı belgelerine bakın.<br />


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
