---
title: AdoDotNet.DataSource
---

# AdoDotNet.DataSource


Bir ADO.NET veri kaynağı için şema koleksiyonunu döndürür.


## Syntax

```powerquery
AdoDotNet.DataSource(
    providerName as text,
    connectionString as any,
    optional options as record
) as table
```


## Remarks

`providerName` sağlayıcı adı ve `connectionString` bağlantı dizesiyle ADO.NET veri kaynağı için şema koleksiyonunu döndürür. `connectionString`, metin veya özellik değer çiftlerinin bir kaydı olabilir. Özellik değerleri metin veya sayı olabilir. Ek özellikler belirtmek için isteğe bağlı `options` parametresi sağlanabilir. Kayıt aşağıdaki alanları içerebilir:

-   `CommandTimeout` : Sunucu tarafı sorgusunun iptal edilmeden önce ne kadar çalıştırılmasına izin verildiğini denetleyen süre. Varsayılan değer on dakikadır.
-   `SqlCompatibleWindowsAuth` : Windows kimlik doğrulaması için SQL Server uyumlu bağlantı dizesi seçeneklerinin oluşturulup oluşturulmayacağını belirleyen mantıksal değer (true/false). Varsayılan değer true'dur.
-   `TypeMap`



## Category
Accessing data
