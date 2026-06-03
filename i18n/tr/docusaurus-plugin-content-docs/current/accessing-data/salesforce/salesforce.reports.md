---
title: Salesforce.Reports
---

# Salesforce.Reports


Salesforce hesabındaki raporları döndürür.


## Syntax

```powerquery
Salesforce.Reports(
    optional loginUrl as text,
    optional options as record
) as table
```


## Remarks

Kimlik bilgilerinde belirtilen Salesforce hesabındaki raporları döndürür. Hesap bağlantısı, belirtilen `loginUrl` ortamı üzerinden kurulur. Ortam belirtilmemesi durumunda, hesap üretim ortamına (https://login.salesforce.com) bağlanır. Ek özellikler belirtmek için isteğe bağlı `options` kayıt parametresi sağlanabilir. Kayıt aşağıdaki alanları içerebilir:

-   `ApiVersion` : Bu sorgu için kullanılacak Salesforce API sürümü. Belirtilmediğinde, API sürümü 29.0 kullanılır.
-   `Timeout` : Sunucuya yönelik istek bırakılmadan önce ne kadar bekleneceğini denetleyen süre. Varsayılan değer kaynağa özgüdür.



## Category
Accessing data
