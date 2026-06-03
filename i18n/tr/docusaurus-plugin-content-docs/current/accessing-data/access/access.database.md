---
title: Access.Database
---

# Access.Database


Bir Access veritabanının yapısal gösterimini döndürür.


## Syntax

```powerquery
Access.Database(
    database as binary,
    optional options as record
) as table
```


## Remarks

Bir Access veritabanının (`database`) yapısal gösterimini döndürür. Aşağıdaki seçenekleri kontrol etmek için isteğe bağlı bir kayıt parametresi olan `options` belirtilebilir:

-   `CreateNavigationProperties` : Döndürülen değerlerde gezinti özellikleri oluşturulup oluşturulmayacağını ayarlayan mantıksal (true/false) bir değer (varsayılan değer: false).
-   `NavigationPropertyNameGenerator` : Gezinti özelliği adlarını oluşturmak üzere kullanılan bir işlev.

Örneğin, kayıt parametresi \[seçenek1 = değer1, seçenek2 = değer2...\], olarak belirtilir.



## Category
Accessing data
