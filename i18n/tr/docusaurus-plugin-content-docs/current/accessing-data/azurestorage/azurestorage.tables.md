---
title: AzureStorage.Tables
---

# AzureStorage.Tables


Bir Azure depolama kasasından, belirtilen hesapta bulunan tabloları içeren bir gezinme tablosu döndürür.


## Syntax

```powerquery
AzureStorage.Tables(
    account as text,
    optional options as record
) as table
```


## Remarks

Azure depolama kasasındaki hesap URL'sinde (`account`) bulunan her tablo için bir satır içeren gezinti tablosu döndürür. Her satır, Azure tablosuna bir bağlantı içerir. İsteğe bağlı `options` kayıt parametresi, ek özellikleri belirtmek için sağlanabilir. Kayıt, şu alanları barındırabilir:

-   `Timeout` : Sunucuya yönelik istek bırakılmadan önce ne kadar bekleneceğini denetleyen süre. Varsayılan değer kaynağa özgüdür.



## Category
Accessing data
