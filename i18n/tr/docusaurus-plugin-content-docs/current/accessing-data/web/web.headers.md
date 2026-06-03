---
title: Web.Headers
---

# Web.Headers


URL'den indirilen HTTP üst bilgilerini kayıt değeri olarak döndürür.


## Syntax

```powerquery
Web.Headers(
    url as text,
    optional options as record
) as record
```


## Remarks

`url` kaynağından indirilen üst bilgileri kayıt olarak döndürür. Ek özellikler belirtmek için isteğe bağlı bir kayıt parametresi (`options`) sağlanabilir. Kayıt şu alanları içerebilir:

-   `Query` : Sorgu parametrelerini, kaçış uygulama hakkında endişe etmenize gerek kalmadan programlama yoluyla URL'ye ekleyin.
-   `ApiKeyName` : Hedef sitede bir API anahtarı gösterimi varsa, bu parametre URL'de kullanılması gereken anahtar parametresinin adını (değerini değil) belirtmek için kullanılabilir. Gerçek anahtar değeri kimlik bilgilerinde sağlanır.
-   `Headers` : Bu değerin kayıt olarak belirtilmesi, HTTP isteğine ek üst bilgiler sağlar.
-   `Timeout` : Bu değerin süre olarak belirtilmesi, HTTP isteğinin zaman aşımı süresini değiştirir. Varsayılan değer 100 saniyedir.
-   `ExcludedFromCacheKey` : Bu değerin liste olarak belirtilmesi, bu HTTP üst bilgi anahtarlarını, verileri önbelleğe alma işleminin kapsamı dışında tutar.
-   `IsRetry` : Bu mantıksal değerin true olarak belirtilmesi, veriler getirilirken önbellekteki tüm mevcut yanıtları yoksayar.
-   `ManualStatusHandling` : Bu değerin liste olarak belirtilmesi, bu durum kodlarından birine sahip yanıtı olan HTTP istekleri için tüm yerleşik işlemeyi engeller.
-   `RelativePath` : Bu değerin metin olarak belirtilmesi, isteği yapmadan önce değeri temel URL'ye ekler.

HTTP isteği HEAD yöntemiyle yapılır. Özel veri bağlayıcısı bağlamı dışında yalnızca yanıt üst bilgileri alt kümesi kullanılabilir (güvenlik nedeniyle).


## Examples

### Example #1
RelativePath ve Query seçeneklerini kullanarak `"https://bing.com/search?q=Power+Query"` için HTTP üst bilgilerini alın.
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
