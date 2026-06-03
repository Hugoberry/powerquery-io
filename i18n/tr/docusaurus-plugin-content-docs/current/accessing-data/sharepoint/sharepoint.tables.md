---
title: SharePoint.Tables
---

# SharePoint.Tables


SharePoint Listesinde bulunan içeriklerin bulunduğu bir tablo döndürür.


## Syntax

```powerquery
SharePoint.Tables(
    url as text,
    optional options as record
) as table
```


## Remarks

Belirtilen `url` SharePoint listesi üzerinde bulunan her bir Liste öğesi için ayrı bir satır içeren bir tablo döndürür. Her bir satır, Liste özelliklerini içerir. Aşağıdaki seçenekleri denetlemek için `options` belirtilebilir:

-   `ApiVersion` : Bu site için kullanılacak SharePoint API sürümünü belirten bir sayı (14 veya 15) ya da "Auto" metni. Belirtilmediği takdirde API 14 sürümü kullanılır. Auto belirtildiğinde mümkünse, sunucu sürümü otomatik olarak bulunur; aksi takdirde sürüm, varsayılan olarak 14'tür. İngilizce olmayan SharePoint siteleri için en az 15 sürümü gereklidir.
-   `Implementation` : İsteğe bağlı. SharePoint bağlayıcısının hangi sürümünün kullanılacağı belirtir. Kabul edilen değerler: "2.0" veya null. Değer "2.0" ise SharePoint bağlayıcısı 2.0 uygulaması kullanılır. Değer null ise SharePoint bağlayıcısı özgün uygulaması kullanılır.
-   `ViewMode` : İsteğe bağlı. Bu seçenek yalnızca 2.0 uygulaması için geçerlidir. Kabul edilen değerler: "All" ve "Default". Değer belirtilmezse değer, "All" olarak ayarlanır. "All" belirtildiğinde görünüm, kullanıcı tarafından oluşturulan ve sistem tarafından tanımlanan tüm sütunları içerir. "Default" seçeneği belirtildiğinde görünüm, kullanıcının ayarlarında Default olarak ayarladığı görünümde listeye çevrimiçi olarak bakarken gördüğüyle eşleşir. Kullanıcı, kendi tarafından oluşturulan veya sistem tarafından tanımlanan sütunlar eklemek veya kaldırmak için ya da yeni bir görünüm oluşturup varsayılan olarak ayarlayarak varsayılan görünümünü düzenlerse bu değişiklikler bağlayıcı üzerinden yayılır.
-   `DisableAppendNoteColumns` : Bağlayıcının not sütunları için ayrı bir uç nokta kullanmasını engeller.



## Category
Accessing data
