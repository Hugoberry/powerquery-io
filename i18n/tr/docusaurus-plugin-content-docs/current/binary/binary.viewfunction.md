---
title: Binary.ViewFunction
---

# Binary.ViewFunction


Görünümde (Binary.View aracılığıyla) tanımlanan bir işleyici tarafından kesilebilecek bir işlev oluşturur.


## Syntax

```powerquery
Binary.ViewFunction(
    function as function
) as function
```


## Remarks

`Binary.View` tarafından oluşturulan bir görünümde işlenebilecek `function` temelli bir görünüm işlevi oluşturur.

Bir

`Binary.View` işleyicisi olan `OnInvoke` kullanılarak görünüm işlevi için bir işleyici tanımlanabilir.

Yerleşik işlemlere yönelik işleyicilerde olduğu gibi, `OnInvoke` işleyicisi belirtilmezse veya belirtilen işleyici tarafından görünüm işlevi işlenmezse ya da işleyici tarafından bir hata oluşturulursa görünümün üzerine `function` uygulanır.

`Binary.View` ve özel görünüm işlevleri hakkında yapılan tüm açıklamalar için yayınlanmış Power Query özel bağlayıcı belgelerine başvurun.



## Category
Binary
