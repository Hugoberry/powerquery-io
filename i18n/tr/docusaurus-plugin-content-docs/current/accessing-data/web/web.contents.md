---
title: Web.Contents
---

# Web.Contents


Url'den indirilen içeriği ikili olarak döndürür.


## Syntax

```powerquery
Web.Contents(
    url as text,
    optional options as record
) as binary
```


## Remarks

`url` kaynağından indirilen içerikleri ikili olarak döndürür. İsteğe bağlı `options` kayıt parametresi, ek özellikleri belirtmek için sağlanabilir. Kayıt, şu alanları barındırabilir:

-   `Query` : Sorgu parametrelerini, kaçış uygulama hakkında endişe etmenize gerek kalmadan programlama yoluyla URL'ye ekleyin.
-   `ApiKeyName` : Hedef sitede bir API anahtarı gösterimi varsa, bu parametre URL'de kullanılması gereken anahtar parametresinin adını (değerini değil) belirtmek için kullanılabilir. Gerçek anahtar değeri kimlik bilgilerinde sağlanır.
-   `Headers` : Bu değerin kayıt olarak belirtilmesi, HTTP isteğine ek üst bilgiler sağlar.
-   `Timeout` : Bu değerin süre olarak belirtilmesi, HTTP isteğinin zaman aşımı süresini değiştirir. Varsayılan değer 100 saniyedir.
-   `ExcludedFromCacheKey` : Bu değerin liste olarak belirtilmesi, bu HTTP üst bilgi anahtarlarını, verileri önbelleğe alma işleminin kapsamı dışında tutar.
-   `IsRetry` : Bu mantıksal değerin true olarak belirtilmesi, veriler getirilirken önbellekteki tüm mevcut yanıtları yoksayar.
-   `ManualStatusHandling` : Bu değerin liste olarak belirtilmesi, bu durum kodlarından birine sahip yanıtı olan HTTP istekleri için tüm yerleşik işlemeyi engeller.
-   `RelativePath` : Bu değerin metin olarak belirtilmesi, isteği yapmadan önce değeri temel URL'ye ekler.
-   `Content` : Bu değerin belirtilmesi, web isteğini GET'ten POST'a değiştirir ve POST'un içeriği olarak seçeneğin değerini kullanır.

HTTP isteği GET (İçerik belirtilmediğinde) veya POST (İçerik olduğunda) olarak yapılır. POST istekleri yalnızca anonim olarak yapılabilir.  
  
HTTP yanıtının üst bilgileri ikili sonuç üzerinde meta veri olarak kullanılabilir. Özel veri bağlayıcısı bağlamı dışında yalnızca yanıt üst bilgileri alt kümesi kullanılabilir (güvenlik nedeniyle).


## Examples

### Example #1
RelativePath ve Query seçeneklerini kullanarak `"https://bing.com/search?q=Power+Query"` içeriğini alır. Bu seçenekler, statik temel URL'yi dinamik olarak sorgulamak için kullanılabilir.
```powerquery
let
    searchText = "Power Query"
in
    Web.Contents(
        "https://www.bing.com",
        [
            RelativePath = "search",
            Query = [q = searchText]
        ]
    )
```

Result: 
```powerquery
binary
```


### Example #2
İkili bir JSON yükü geçirip yanıtı JSON olarak ayrıştırarak URL'de bir POST eylemi gerçekleştirin.
```powerquery
let
    url = ...,
    headers = [#"Content-Type" = "application/json"],
    postData = Json.FromValue([x = 235.7, y = 41.53]),
    response = Web.Contents(
        url,
        [
            Headers = headers,
            Content = postData
        ]
    ),
    jsonResponse = Json.Document(response)
in
    jsonResponse
```

Result: 
```powerquery
table
```


### Example #3
Sorgu dizesinin parçası olarak bir kimlik doğrulaması anahtarını kabul eden güvenli bir URL'ye bağlanın. M'de gizli anahtarı sabit kodlamak yerine (bu, güvenlik riski oluşturur), anahtar, M'de adını (değerini değil) belirterek, Web API’si kimlik doğrulamasını seçerek ve anahtar değerini Web API’si kimlik bilgisinin bir parçası olarak girerek güvenli bir şekilde sağlanabilir. Bu şekilde kullanıldığında, aşağıdaki örnek şuna yönelik bir istek oluşturur: `"https://contoso.com/api/customers/get?api_key=******"`.
```powerquery
Web.Contents("https://contoso.com/api/customers/get", [ApiKeyName="api_key"])
```

Result: 
```powerquery
binary
```




## Category
Accessing data
