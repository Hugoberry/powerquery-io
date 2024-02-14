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

Sunucudaki (<code>server</code>) Netezza Sunucusu veritabanından (<code>database</code>) Netezza tablolarının, görünümlerinin ve depolanan işlevlerinin oluşturduğu bir tablo döndürür.İsteğe bağlı olarak bağlantı noktası, iki nokta üst üste işareti ile ayrılmış şekilde sunucuyla birlikte belirtilebilir. İsteğe bağlı bir kayıt parametresi (<code>options</code>), şu seçenekleri denetlemek için belirtilebilir:<ul>        <li><code>CreateNavigationProperties</code>: Döndürülen değerlerde gezinme özelliklerinin oluşturulup oluşturulmayacağını ayarlayan mantıksal değer (true/false) (varsayılan değer: true)</li>        <li><code>HierarchicalNavigation</code>: Tabloların şema adlarına göre gruplandırılmış olarak görüntülenip görüntülenmeyeceğini belirleyen mantıksal değer (true/false) (varsayılan değer: false)</li>        <li><code>ConnectionTimeout</code>: Sunucuyla bağlantı kurma girişimini sonlandırmadan önce ne kadar bekleneceğini denetleyen süre. Varsayılan değer, sürücüye bağlıdır.</li>        <li><code>CommandTimeout</code>: Sunucu tarafı sorgusunun iptal edilmeden önce çalışabileceği zamanı denetleyen süre. Varsayılan değer, sürücüye bağlıdır.</li><li><code>NormalizeDatabaseName</code>: Veritabanı adının büyük harfe dönüştürülerek yazılması veya yazıldığı özgün şekliyle kullanılması ayarını yapan mantıksal değer (true/false) (varsayılan değer: true).</li></ul>Kayıt parametresi şu şekilde belirtilir: [seçenek1 = değer1, seçenek2 = değer2...].


## Examples

### Example #1 
Bir IBM Netezza projesindeki tabloları listeleyin.
```powerquery
Netezza.Database("netezza:5480", "netezza_database")
```



