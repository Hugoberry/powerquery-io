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

<code>Binary.View</code> tarafından oluşturulan bir görünümde işlenebilecek <code>function</code> temelli bir görünüm işlevi oluşturur.<br />Bir <code>Binary.View</code> işleyicisi olan <code>OnInvoke</code> kullanılarak görünüm işlevi için bir işleyici tanımlanabilir.<br />Yerleşik işlemlere yönelik işleyicilerde olduğu gibi, <code>OnInvoke</code> işleyicisi belirtilmezse veya belirtilen işleyici tarafından görünüm işlevi işlenmezse ya da işleyici tarafından bir hata oluşturulursa görünümün üzerine <code>function</code> uygulanır.<br /><code>Binary.View</code> ve özel görünüm işlevleri hakkında yapılan tüm açıklamalar için yayınlanmış Power Query özel bağlayıcı belgelerine başvurun.<br />



## Category
Binary
