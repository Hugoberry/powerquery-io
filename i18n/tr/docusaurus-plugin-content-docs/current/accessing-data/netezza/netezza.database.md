---
title: Netezza.Database
---

# Netezza.Database


IBM Netezza veritabanından verileri içeri aktarın.


## Syntax

```powerquery
Netezza.Database(
    server as text,
    database as text,
    optional options as record
) as table
```


## Remarks

Sunucudaki (`server`) Netezza Sunucusu veritabanından (`database`) Netezza tablolarının, görünümlerinin ve depolanan işlevlerinin oluşturduğu bir tablo döndürür.İsteğe bağlı olarak bağlantı noktası, iki nokta üst üste işareti ile ayrılmış şekilde sunucuyla birlikte belirtilebilir. İsteğe bağlı bir kayıt parametresi (`options`), şu seçenekleri denetlemek için belirtilebilir:

-   `CreateNavigationProperties`: Döndürülen değerlerde gezinme özelliklerinin oluşturulup oluşturulmayacağını ayarlayan mantıksal değer (true/false) (varsayılan değer: true)
-   `HierarchicalNavigation`: Tabloların şema adlarına göre gruplandırılmış olarak görüntülenip görüntülenmeyeceğini belirleyen mantıksal değer (true/false) (varsayılan değer: false)
-   `ConnectionTimeout`: Sunucuyla bağlantı kurma girişimini sonlandırmadan önce ne kadar bekleneceğini denetleyen süre. Varsayılan değer, sürücüye bağlıdır.
-   `CommandTimeout`: Sunucu tarafı sorgusunun iptal edilmeden önce çalışabileceği zamanı denetleyen süre. Varsayılan değer, sürücüye bağlıdır.
-   `NormalizeDatabaseName`: Veritabanı adının büyük harfe dönüştürülerek yazılması veya yazıldığı özgün şekliyle kullanılması ayarını yapan mantıksal değer (true/false) (varsayılan değer: true).

Kayıt parametresi şu şekilde belirtilir: \[seçenek1 = değer1, seçenek2 = değer2...\].


## Examples

### Example #1
Bir IBM Netezza projesindeki tabloları listeleyin.
```powerquery
Netezza.Database("netezza:5480", "netezza_database")
```



