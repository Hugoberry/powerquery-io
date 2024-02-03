---
title: SharePoint.Files
---

# SharePoint.Files


## Description

Bir SharePoint sitesindeki belgeleri içeren bir tablo döndürür.


## Syntax

```powerquery
SharePoint.Files(
    url as text,
    optional options as record
) as table
```


## Details

Belirtilen <code>url</code> SharePoint sitesinde ve alt klasörlerde bulunan her belge için ayrı bir satır içeren bir tablo döndürür. Her satır, klasörün veya dosyanın özelliklerini ve içeriğine bir bağlantı içerir. Aşağıdaki seçenekleri denetlemek için <code>options</code> belirtilebilir:    <ul><li><code>ApiVersion</code> : Bu site i&#231;in kullanılacak SharePoint API s&#252;r&#252;m&#252;n&#252; belirten bir sayı (14 veya 15) ya da &quot;Auto&quot; metni. Belirtilmediği takdirde API 14 s&#252;r&#252;m&#252; kullanılır. Auto belirtildiğinde m&#252;mk&#252;nse, sunucu s&#252;r&#252;m&#252; otomatik olarak bulunur; aksi takdirde s&#252;r&#252;m, varsayılan olarak 14&#39;t&#252;r. İngilizce olmayan SharePoint siteleri i&#231;in en az 15 s&#252;r&#252;m&#252; gereklidir.</li></ul>    



## Category
Accessing data
