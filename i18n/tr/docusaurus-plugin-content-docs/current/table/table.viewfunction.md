---
title: Table.ViewFunction
---

# Table.ViewFunction


Bir görünümde Table.View aracılığıyla tanımlanan bir işleç tarafından kesilebilecek bir işlev oluşturur.


## Syntax

```powerquery
Table.ViewFunction(
    function as function
) as function
```


## Remarks

`Table.View` tarafından oluşturulan bir görünümde işlenebilen `function` temelli bir görünüm işlevi oluşturur.

Bir

`Table.View` işleyicisi olan `OnInvoke` kullanılarak görünüm işlevi için bir işleyici tanımlanabilir.

Yerleşik işlemlere yönelik işleyicilerde olduğu gibi, `OnInvoke` işleyicisi belirtilmezse veya belirtilen işleyici tarafından görünüm işlevi işlenmezse ya da işleyici tarafından bir hata oluşturulursa görünümün üzerine `function` uygulanır.

`Table.View` ve özel görünüm işlevlerinin daha kapsamlı bir açıklaması için yayımlanmış Power Query özel bağlayıcı belgelerini gözden geçirin.



## Category
Table.Table construction
