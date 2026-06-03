---
title: WebAction.Request
---

# WebAction.Request


Yürütüldüğünde bir HTTP isteğinin gerçekleştirilmesine ilişkin sonuçları ikili bir değer olarak döndürecek olan bir eylem oluşturur.


## Syntax

```powerquery
WebAction.Request(
    method as text,
    url as text,
    optional options as record
) as action
```


## Remarks

Yürütüldüğünde, ikili değer olarak HTTP kullanılarak `method` üzerinde `url` isteğinde bulunmanın sonuçlarını döndürecek bir eylem oluşturur. Ek özellikler belirtmek için isteğe bağlı bir kayıt parametresi (`options`) sağlanabilir. Kayıt, şu alanları barındırabilir:

-   `Query` : Sorgu parametrelerini, kaçış uygulama hakkında endişe etmenize gerek kalmadan programlama yoluyla URL'ye ekleyin.
-   `ApiKeyName` : Hedef sitede bir API anahtarı gösterimi varsa, bu parametre URL'de kullanılması gereken anahtar parametresinin adını (değerini değil) belirtmek için kullanılabilir. Gerçek anahtar değeri kimlik bilgilerinde sağlanır.
-   `Headers` : Bu değerin kayıt olarak belirtilmesi, HTTP isteğine ek üst bilgiler sağlar.
-   `Timeout` : Bu değerin süre olarak belirtilmesi, HTTP isteğinin zaman aşımı süresini değiştirir. Varsayılan değer 100 saniyedir.
-   `ExcludedFromCacheKey` : Bu değerin liste olarak belirtilmesi, bu HTTP üst bilgi anahtarlarını, verileri önbelleğe alma işleminin kapsamı dışında tutar.
-   `IsRetry` : Bu mantıksal değerin true olarak belirtilmesi, veriler getirilirken önbellekteki tüm mevcut yanıtları yoksayar.
-   `ManualStatusHandling` : Bu değerin liste olarak belirtilmesi, bu durum kodlarından birine sahip yanıtı olan HTTP istekleri için tüm yerleşik işlemeyi engeller.
-   `RelativePath` : Bu değerin metin olarak belirtilmesi, isteği yapmadan önce değeri temel URL'ye ekler.
-   `Content` : Bu değerin belirtilmesi, içeriğinin HTTP isteğinin gövdesi olmasına neden olur.

Bu işlevin çoğu bağlamda devre dışı bırakıldığına dikkat edin. Bunun yerine Web.Contents veya Web.Headers kullanmayı düşünün.


## Examples

### Example #1
Bing'de bir GET isteği gerçekleştirin.
```powerquery
WebAction.Request(WebMethod.Get, "https://bing.com")
```

Result: 
```powerquery
Action
```




## Category
Action
