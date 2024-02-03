---
title: WebAction.Request
---

# WebAction.Request


## Description

Yürütüldüğünde bir HTTP isteğinin gerçekleştirilmesine ilişkin sonuçları ikili bir değer olarak döndürecek olan bir eylem oluşturur.


## Syntax

```powerquery
WebAction.Request(
    method as text,
    url as text,
    optional options as record
) as action
```


## Details

Yürütüldüğünde, ikili değer olarak HTTP kullanılarak <code>url</code> üzerinde <code>method</code> isteğinde bulunmanın sonuçlarını döndürecek bir eylem oluşturur.    Ek özellikleri belirtmek için isteğe bağlı kayıt parametresi (<code>options</code>) sağlanabilir. Kayıt şu alanları içerebilir:    <ul><li><code>Query</code> : Sorgu parametrelerini, ka&#231;ış uygulama hakkında endişe etmenize gerek kalmadan programlama yoluyla URL&#39;ye ekleyin.</li><li><code>ApiKeyName</code> : Hedef sitede bir API anahtarı g&#246;sterimi varsa, bu parametre URL&#39;de kullanılması gereken anahtar parametresinin adını (değerini değil) belirtmek i&#231;in kullanılabilir. Ger&#231;ek anahtar değeri kimlik bilgilerinde sağlanır.</li><li><code>Headers</code> : Bu değerin kayıt olarak belirtilmesi, HTTP isteğine ek &#252;st bilgiler sağlar.</li><li><code>Timeout</code> : Bu değerin s&#252;re olarak belirtilmesi, HTTP isteğinin zaman aşımı s&#252;resini değiştirir. Varsayılan değer 100 saniyedir.</li><li><code>ExcludedFromCacheKey</code> : Bu değerin liste olarak belirtilmesi, bu HTTP &#252;st bilgi anahtarlarını, verileri &#246;nbelleğe alma işleminin kapsamı dışında tutar.</li><li><code>IsRetry</code> : Bu mantıksal değerin true olarak belirtilmesi, veriler getirilirken &#246;nbellekteki t&#252;m mevcut yanıtları yoksayar.</li><li><code>ManualStatusHandling</code> : Bu değerin liste olarak belirtilmesi, bu durum kodlarından birine sahip yanıtı olan HTTP istekleri i&#231;in t&#252;m yerleşik işlemeyi engeller.</li><li><code>RelativePath</code> : Bu değerin metin olarak belirtilmesi, isteği yapmadan &#246;nce değeri temel URL&#39;ye ekler.</li><li><code>Content</code> : Bu değerin belirtilmesi, i&#231;eriğinin HTTP isteğinin g&#246;vdesi olmasına neden olur.</li></ul>    <br />    Bu işlevin çoğu bağlamda devre dışı bırakıldığına dikkat edin. Bunun yerine Web.Contents veya Web.Headers kullanmayı deneyin.    


## Examples

### Example #1 
Bing&#39;de bir GET isteği gerçekleştirin.
```powerquery
WebAction.Request(WebMethod.Get, "https://bing.com")
```

Result: 
```powerquery
Action
```




## Category
Action
