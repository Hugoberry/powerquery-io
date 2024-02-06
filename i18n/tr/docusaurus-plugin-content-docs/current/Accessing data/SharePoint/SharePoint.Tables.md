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

Belirtilen <code>url</code> SharePoint listesi üzerinde bulunan her bir Liste öğesi için ayrı bir satır içeren bir tablo döndürür. Her bir satır, Liste özelliklerini içerir. Aşağıdaki seçenekleri denetlemek için <code>options</code> belirtilebilir:    <ul><li><code>ApiVersion</code> : Bu site i&#231;in kullanılacak SharePoint API s&#252;r&#252;m&#252;n&#252; belirten bir sayı (14 veya 15) ya da &quot;Auto&quot; metni. Belirtilmediği takdirde API 14 s&#252;r&#252;m&#252; kullanılır. Auto belirtildiğinde m&#252;mk&#252;nse, sunucu s&#252;r&#252;m&#252; otomatik olarak bulunur; aksi takdirde s&#252;r&#252;m, varsayılan olarak 14&#39;t&#252;r. İngilizce olmayan SharePoint siteleri i&#231;in en az 15 s&#252;r&#252;m&#252; gereklidir.</li><li><code>Implementation</code> : İsteğe bağlı. SharePoint bağlayıcısının hangi s&#252;r&#252;m&#252;n&#252;n kullanılacağı belirtir. Kabul edilen değerler: &quot;2.0&quot; veya null. Değer &quot;2.0&quot; ise SharePoint bağlayıcısı 2.0 uygulaması kullanılır. Değer null ise SharePoint bağlayıcısı &#246;zg&#252;n uygulaması kullanılır.</li><li><code>ViewMode</code> : İsteğe bağlı. Bu se&#231;enek yalnızca 2.0 uygulaması i&#231;in ge&#231;erlidir. Kabul edilen değerler: &quot;All&quot; ve &quot;Default&quot;. Değer belirtilmezse değer, &quot;All&quot; olarak ayarlanır. &quot;All&quot; belirtildiğinde g&#246;r&#252;n&#252;m, kullanıcı tarafından oluşturulan ve sistem tarafından tanımlanan t&#252;m s&#252;tunları i&#231;erir. &quot;Default&quot; se&#231;eneği belirtildiğinde g&#246;r&#252;n&#252;m, kullanıcının ayarlarında Default olarak ayarladığı g&#246;r&#252;n&#252;mde listeye &#231;evrimi&#231;i olarak bakarken g&#246;rd&#252;ğ&#252;yle eşleşir. Kullanıcı, kendi tarafından oluşturulan veya sistem tarafından tanımlanan s&#252;tunlar eklemek veya kaldırmak i&#231;in ya da yeni bir g&#246;r&#252;n&#252;m oluşturup varsayılan olarak ayarlayarak varsayılan g&#246;r&#252;n&#252;m&#252;n&#252; d&#252;zenlerse bu değişiklikler bağlayıcı &#252;zerinden yayılır.</li><li><code>DisableAppendNoteColumns</code> : Bağlayıcının not s&#252;tunları i&#231;in ayrı bir u&#231; nokta kullanmasını engeller.</li></ul>    



## Category
Accessing data
