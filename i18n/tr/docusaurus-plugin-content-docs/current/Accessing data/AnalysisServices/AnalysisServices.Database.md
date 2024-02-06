---
title: AnalysisServices.Database
---

# AnalysisServices.Database


Analysis Services veritabanından çok boyutlu küp tablosu veya tablolu modeller döndürür.


## Syntax

```powerquery
AnalysisServices.Database(
    server as text,
    database as text,
    optional options as record
) as table
```


## Remarks

<code>server</code> sunucusu üzerindeki <code>database</code> Analysis Services veritabanından çok boyutlu küpler veya sekmeli modellerin tablosunu döndürür. Şu seçenekleri denetlemek için isteğe bağlı bir kayıt parametresi (<code>options</code>) belirtilebilir:    <ul><li><code>Query</code> : Verileri almak i&#231;in kullanılan yerel bir MDX sorgusu.</li><li><code>TypedMeasureColumns</code> : &#199;ok boyutlu veya sekmeli modelde belirtilen t&#252;rlerin, eklenen &#246;l&#231;&#252;m s&#252;tunlarının t&#252;rleri i&#231;in kullanılıp kullanılmayacağını belirten bir mantıksal değer. False olarak ayarlandığında, t&#252;m &#246;l&#231;&#252;m s&#252;tunları i&#231;in &quot;number&quot; t&#252;r&#252; kullanılacaktır. Bu se&#231;enek i&#231;in varsayılan değer false şeklindedir.</li><li><code>Culture</code> : Veriler i&#231;in k&#252;lt&#252;r&#252; belirten bir k&#252;lt&#252;r adı. Bu, &#39;Yerel Ayar Tanımlayıcısı&#39; bağlantı dizesi &#246;zelliğine karşılık gelir.</li><li><code>CommandTimeout</code> : Sunucu tarafı sorgusunun iptal edilmeden &#246;nce ne kadar &#231;alıştırılmasına izin verildiğini denetleyen s&#252;re. Varsayılan değer s&#252;r&#252;c&#252;ye bağlıdır.</li><li><code>ConnectionTimeout</code> : Sunucuyla bağlantı kurma denemesinden vazge&#231;ilmeden &#246;nce ne kadar bekleneceğini denetleyen s&#252;re. Varsayılan değer s&#252;r&#252;c&#252;ye bağlıdır.</li><li><code>SubQueries</code> : Bağlantı dizesinde &quot;SubQueries&quot; &#246;zelliğinin değerini ayarlayan bir sayı (0, 1 veya 2). Bu, alt se&#231;imlerde veya alt k&#252;plerde hesaplanan &#252;yelerin davranışını denetler. (Varsayılan değer 2&#39;dir).</li><li><code>Implementation</code></li></ul>    



## Category
Accessing data
