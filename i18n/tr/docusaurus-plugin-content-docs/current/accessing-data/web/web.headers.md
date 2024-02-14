---
title: Web.Headers
---

# Web.Headers


URL&#39;den indirilen HTTP üst bilgilerini kayıt değeri olarak döndürür.


## Syntax

```powerquery
Web.Headers(
    url as text,
    optional options as record
) as record
```


## Remarks

<code>url</code> kaynağından indirilen üst bilgileri kayıt olarak döndürür. Ek özellikler belirtmek için isteğe bağlı bir kayıt parametresi (<code>options</code>) sağlanabilir. Kayıt şu alanları içerebilir:    <ul><li><code>Query</code> : Sorgu parametrelerini, ka&#231;ış uygulama hakkında endişe etmenize gerek kalmadan programlama yoluyla URL&#39;ye ekleyin.</li><li><code>ApiKeyName</code> : Hedef sitede bir API anahtarı g&#246;sterimi varsa, bu parametre URL&#39;de kullanılması gereken anahtar parametresinin adını (değerini değil) belirtmek i&#231;in kullanılabilir. Ger&#231;ek anahtar değeri kimlik bilgilerinde sağlanır.</li><li><code>Headers</code> : Bu değerin kayıt olarak belirtilmesi, HTTP isteğine ek &#252;st bilgiler sağlar.</li><li><code>Timeout</code> : Bu değerin s&#252;re olarak belirtilmesi, HTTP isteğinin zaman aşımı s&#252;resini değiştirir. Varsayılan değer 100 saniyedir.</li><li><code>ExcludedFromCacheKey</code> : Bu değerin liste olarak belirtilmesi, bu HTTP &#252;st bilgi anahtarlarını, verileri &#246;nbelleğe alma işleminin kapsamı dışında tutar.</li><li><code>IsRetry</code> : Bu mantıksal değerin true olarak belirtilmesi, veriler getirilirken &#246;nbellekteki t&#252;m mevcut yanıtları yoksayar.</li><li><code>ManualStatusHandling</code> : Bu değerin liste olarak belirtilmesi, bu durum kodlarından birine sahip yanıtı olan HTTP istekleri i&#231;in t&#252;m yerleşik işlemeyi engeller.</li><li><code>RelativePath</code> : Bu değerin metin olarak belirtilmesi, isteği yapmadan &#246;nce değeri temel URL&#39;ye ekler.</li></ul>    HTTP isteği HEAD yöntemiyle yapılır. Özel veri bağlayıcısı bağlamı dışında yalnızca yanıt üst bilgileri alt kümesi kullanılabilir (güvenlik nedeniyle).    


## Examples

### Example #1 
RelativePath ve Query seçeneklerini kullanarak &lt;code&gt;&#34;https://bing.com/search?q=Power+Query&#34;&lt;/code&gt; için HTTP üst bilgilerini alın.
```powerquery
let
    searchText = "Power Query"
in
    Web.Headers(
        "https://www.bing.com",
        [
            RelativePath = "search",
            Query = [q = searchText]
        ]
    )
```

Result: 
```powerquery
([
    #"Cache-Control" = "private, max-age=0",
    #"Content-Encoding" = "gzip",
    #"Content-Length" = "0",
    #"Content-Type" = "text/html; charset=utf-8",
    Date = "Tue, 14 Dec 2021 16:57:25 GMT",
    Expires = "Tue, 14 Dec 2021 16:56:25 GMT",
    Vary = "Accept-Encoding"
]
meta [
    Response.Status = 200
])
```




## Category
Accessing data
