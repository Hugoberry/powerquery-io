---
title: Table.ViewFunction
---

# Table.ViewFunction


## Description

Bir görünümde Table.View aracılığıyla tanımlanan bir işleç tarafından kesilebilecek bir işlev oluşturur.


## Syntax

```powerquery
Table.ViewFunction(
    function as function
) as function
```


## Details

<code>Table.View</code> tarafından oluşturulan bir görünümde işlenebilen <code>function</code> temelli bir görünüm işlevi oluşturur.<br /> Bir <code>Table.View</code> işleyicisi olan <code>OnInvoke</code> kullanılarak görünüm işlevi için bir işleyici tanımlanabilir.<br />Yerleşik işlemlere yönelik işleyicilerde olduğu gibi, <code>OnInvoke</code> işleyicisi belirtilmezse veya belirtilen işleyici tarafından görünüm işlevi işlenmezse ya da işleyici tarafından bir hata oluşturulursa görünümün üzerine <code>function</code> uygulanır.<br /><code>Table.View</code> ve özel görünüm işlevlerinin daha kapsamlı bir açıklaması için yayımlanmış Power Query özel bağlayıcı belgelerini gözden geçirin.<br />



## Category
Table.Table construction
