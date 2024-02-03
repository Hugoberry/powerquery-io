---
title: Access.Database
---

# Access.Database


## Description

Bir Access veritabanının yapısal gösterimini döndürür.


## Syntax

```powerquery
Access.Database(
    database as binary,
    optional options as record
) as table
```


## Details

Bir Access veritabanının (<code>database</code>) yapısal gösterimini döndürür. Şu seçenekleri denetlemek için isteğe bağlı bir kayıt parametresi (<code>options</code>) belirtilebilir:    <ul><li><code>CreateNavigationProperties</code> : D&#246;nd&#252;r&#252;len değerlerde gezinti &#246;zellikleri oluşturulup oluşturulmayacağını ayarlayan mantıksal (true/false) bir değer (varsayılan değer: false).</li><li><code>NavigationPropertyNameGenerator</code> : Gezinti &#246;zelliği adlarını oluşturmak &#252;zere kullanılan bir işlev.</li></ul>    Örneğin, kayıt parametresi [seçenek1 = değer1, seçenek2 = değer2...] olarak belirtilir.



## Category
Accessing data
