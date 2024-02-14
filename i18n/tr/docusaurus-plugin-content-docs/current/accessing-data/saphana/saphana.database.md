---
title: SapHana.Database
---

# SapHana.Database


SAP HANA veritabanındaki paketleri döndürür.


## Syntax

```powerquery
SapHana.Database(
    server as text,
    optional options as record
) as table
```


## Remarks

<code>server</code> SAP HANA veritabanındaki çok boyutlu paketlere ilişkin bir tablo döndürür. <code>options</code>, isteğe bağlı bir kayıt parametresi olarak aşağıdaki seçenekleri denetlemek üzere belirtilebilir:    <ul><li><code>Query</code> : Verileri almak i&#231;in kullanılan yerel bir SQL sorgusu. Sorgu birden &#231;ok sonu&#231; k&#252;mesi &#252;retirse, yalnızca ilki d&#246;nd&#252;r&#252;l&#252;r.</li><li><code>Distribution</code> : Bağlantı dizesindeki &quot;Distribution&quot; &#246;zelliğinin değerini ayarlayan SapHanaDistribution. Deyim y&#246;nlendirme, deyim y&#252;r&#252;tme &#246;ncesinde dağıtılmış bir sistemin doğru sunucu d&#252;ğ&#252;m&#252;n&#252; değerlendirme y&#246;ntemidir. Varsayılan değer SapHanaDistribution.All.</li><li><code>Implementation</code> : Kullanılacak SAP HANA bağlayıcı uygulamasını belirtir.</li><li><code>EnableColumnBinding</code> : Veri getirilirken değişkenleri bir SAP HANA sonu&#231; k&#252;mesinin s&#252;tunlarına bağlar. Biraz daha y&#252;ksek bellek kullanımı pahasına performansı artırma olasılığı olabilir. Varsayılan değer yanlış’tır.</li><li><code>ConnectionTimeout</code> : Sunucuyla bağlantı kurma denemesinden vazge&#231;ilmeden &#246;nce ne kadar bekleneceğini denetleyen s&#252;re. Varsayılan değer 15 saniyedir.</li><li><code>CommandTimeout</code> : Sunucu tarafı sorgusunun iptal edilmeden &#246;nce ne kadar &#231;alıştırılmasına izin verildiğini denetleyen s&#252;re. Varsayılan değer on dakikadır.</li></ul>    



## Category
Accessing data
