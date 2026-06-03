---
title: Salesforce.Data
---

# Salesforce.Data


Salesforce hesabındaki nesneleri döndürür.


## Syntax

```powerquery
Salesforce.Data(
    optional loginUrl as any,
    optional options as record
) as table
```


## Remarks

Kimlik bilgilerinde belirtilen Salesforce hesabındaki nesneleri döndürür. Hesap bağlantısı, belirtilen `loginUrl` ortamı üzerinden kurulur. Ortam belirtilmemesi durumunda, hesap üretim ortamına (https://login.salesforce.com) bağlanır. Ek özellikler belirtmek için isteğe bağlı `options` kayıt parametresi sağlanabilir. Kayıt aşağıdaki alanları içerebilir:

-   `CreateNavigationProperties` : Döndürülen değerlerde gezinti özellikleri oluşturulup oluşturulmayacağını ayarlayan mantıksal (true/false) bir değer (varsayılan değer: false).
-   `ApiVersion` : Bu sorgu için kullanılacak Salesforce API sürümü. Belirtilmediğinde, API sürümü 29.0 kullanılır.
-   `Timeout` : Sunucuya yönelik istek bırakılmadan önce ne kadar bekleneceğini denetleyen süre. Varsayılan değer kaynağa özgüdür.



## Category
Accessing data
