---
title: Web.Contents
---

# Web.Contents


## Description

Url&#39;den indirilen içeriği ikili olarak döndürür.


## Syntax

```powerquery
Web.Contents(
    url as text,
    optional options as record
) as binary
```


## Details

<code>url</code> kaynağından indirilen içerikleri ikili olarak döndürür. Ek özellikler belirtmek için isteğe bağlı bir kayıt parametresi (<code>options</code>) sağlanabilir. Kayıt şu alanları içerebilir:    <ul><li><code>Query</code> : Sorgu parametrelerini, ka&#231;ış uygulama hakkında endişe etmenize gerek kalmadan programlama yoluyla URL&#39;ye ekleyin.</li><li><code>ApiKeyName</code> : Hedef sitede bir API anahtarı g&#246;sterimi varsa, bu parametre URL&#39;de kullanılması gereken anahtar parametresinin adını (değerini değil) belirtmek i&#231;in kullanılabilir. Ger&#231;ek anahtar değeri kimlik bilgilerinde sağlanır.</li><li><code>Headers</code> : Bu değerin kayıt olarak belirtilmesi, HTTP isteğine ek &#252;st bilgiler sağlar.</li><li><code>Timeout</code> : Bu değerin s&#252;re olarak belirtilmesi, HTTP isteğinin zaman aşımı s&#252;resini değiştirir. Varsayılan değer 100 saniyedir.</li><li><code>ExcludedFromCacheKey</code> : Bu değerin liste olarak belirtilmesi, bu HTTP &#252;st bilgi anahtarlarını, verileri &#246;nbelleğe alma işleminin kapsamı dışında tutar.</li><li><code>IsRetry</code> : Bu mantıksal değerin true olarak belirtilmesi, veriler getirilirken &#246;nbellekteki t&#252;m mevcut yanıtları yoksayar.</li><li><code>ManualStatusHandling</code> : Bu değerin liste olarak belirtilmesi, bu durum kodlarından birine sahip yanıtı olan HTTP istekleri i&#231;in t&#252;m yerleşik işlemeyi engeller.</li><li><code>RelativePath</code> : Bu değerin metin olarak belirtilmesi, isteği yapmadan &#246;nce değeri temel URL&#39;ye ekler.</li><li><code>Content</code> : Bu değerin belirtilmesi, web isteğini GET&#39;ten POST&#39;a değiştirir ve POST&#39;un i&#231;eriği olarak se&#231;eneğin değerini kullanır.</li></ul>    HTTP isteği GET (İçerik belirtilmediğinde) veya POST (İçerik olduğunda) olarak yapılır. POST istekleri yalnızca anonim olarak yapılabilir.    <br />    HTTP yanıtının üst bilgileri ikili sonuç üzerinde meta veri olarak kullanılabilir. Özel veri bağlayıcısı bağlamı dışında yalnızca yanıt üst bilgileri alt kümesi kullanılabilir (güvenlik nedeniyle).    


## Examples

### Example #1 
RelativePath ve Query seçeneklerini kullanarak &lt;code&gt;&#34;https://bing.com/search?q=Power+Query&#34;&lt;/code&gt; içeriğini alır. Bu seçenekler, statik temel URL&#39;yi dinamik olarak sorgulamak için kullanılabilir.
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
İkili bir JSON yükü geçirip yanıtı JSON olarak ayrıştırarak URL&#39;de bir POST eylemi gerçekleştirin.
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
Sorgu dizesinin parçası olarak bir kimlik doğrulama anahtarını kabul eden güvenli bir URL&#39;ye bağlanın. M&#39;de gizli anahtarı sabit kodlamak yerine (bu, güvenlik riski oluşturur),     anahtar, M&#39;de adını (değerini değil) belirterek, Web API’si kimlik doğrulamasını seçerek ve anahtar değerini Web API’si kimlik bilgisinin bir parçası olarak girerek güvenli bir şekilde sağlanabilir.    Bu şekilde kullanıldığında, aşağıdaki örnek şuna yönelik bir istek oluşturur: &lt;code&gt;&#34;https://contoso.com/api/customers/get?api_key=\*\*\*\*\*\*&#34;&lt;/code&gt;.
```powerquery
Web.Contents("https://contoso.com/api/customers/get", [ApiKeyName="api_key"])
```

Result: 
```powerquery
binary
```




## Category
Accessing data
