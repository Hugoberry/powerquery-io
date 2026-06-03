---
title: SharePoint.Files
---

# SharePoint.Files


Bir SharePoint sitesindeki belgeleri içeren bir tablo döndürür.


## Syntax

```powerquery
SharePoint.Files(
    url as text,
    optional options as record
) as table
```


## Remarks

Belirtilen `url` SharePoint sitesinde ve alt klasörlerde bulunan her belge için ayrı bir satır içeren bir tablo döndürür. Her satır, klasörün veya dosyanın özelliklerini ve içeriğine bir bağlantı içerir. Aşağıdaki seçenekleri denetlemek için `options` belirtilebilir:

-   `ApiVersion` : Bu site için kullanılacak SharePoint API sürümünü belirten bir sayı (14 veya 15) ya da "Auto" metni. Belirtilmediği takdirde API 14 sürümü kullanılır. Auto belirtildiğinde mümkünse, sunucu sürümü otomatik olarak bulunur; aksi takdirde sürüm, varsayılan olarak 14'tür. İngilizce olmayan SharePoint siteleri için en az 15 sürümü gereklidir.



## Category
Accessing data
