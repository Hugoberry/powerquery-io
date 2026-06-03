---
title: SharePoint.Contents
---

# SharePoint.Contents


Bir SharePoint sitesi içeriğine sahip bir tablo döndürür.


## Syntax

```powerquery
SharePoint.Contents(
    url as text,
    optional options as record
) as table
```


## Remarks

Belirtilen `url` SharePoint sitesi üzerinde bulunan her bir klasör ve belge için ayrı bir satır içeren bir tablo döndürür. Her satır, klasörün veya dosyanın özelliklerini ve içeriğine bir bağlantı içerir. Aşağıdaki seçenekleri denetlemek için `options` belirtilebilir:

-   `ApiVersion` : Bu site için kullanılacak SharePoint API sürümünü belirten bir sayı (14 veya 15) ya da "Auto" metni. Belirtilmediği takdirde API 14 sürümü kullanılır. Auto belirtildiğinde mümkünse, sunucu sürümü otomatik olarak bulunur; aksi takdirde sürüm, varsayılan olarak 14'tür. İngilizce olmayan SharePoint siteleri için en az 15 sürümü gereklidir.
-   `Implementation` : İsteğe bağlı. SharePoint bağlayıcısının hangi sürümünün kullanılacağı belirtir. Kabul edilen değerler: "2.0" veya null. Değer "2.0" ise SharePoint bağlayıcısı 2.0 uygulaması kullanılır. Değer null ise SharePoint bağlayıcısı özgün uygulaması kullanılır.



## Category
Accessing data
