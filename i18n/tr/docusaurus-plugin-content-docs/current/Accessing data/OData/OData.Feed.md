---
title: OData.Feed
---

# OData.Feed


## Description

Bir OData hizmeti tarafından sunulan OData akışlarının bir tablosunu döndürür.


## Syntax

```powerquery
OData.Feed(
    serviceUri as text,
    optional headers as record,
    optional options as any
) as any
```


## Details

<code>serviceUri</code> uri'sinden, <code>headers</code> üst bilgilerinden bir OData hizmeti tarafından sunulan OData akışlarının bir tablosunu döndürür. Eşzamanlı bağlantıların mı yoksa isteğe bağlı bir kayıt parametresi olan <code>options</code> parametresinin mi kullanılacağını belirten bir boole değeri, aşağıdaki seçenekleri kontrol etmek için belirtilebilir:    <ul>    <li><code>Sorgu</code>: Kaçma konusunda endişelenmenize gerek kalmadan URL'ye programlı olarak sorgu parametreleri ekleyin. </li>    <li> <code>Üst bilgiler</code> : Bu değerin bir kayıt olarak belirtilmesi, bir HTTP isteğine ek üst bilgiler sağlayacaktır.</li>    <li> <code>ExcludedFromCacheKey</code>: Bu değerin bir liste olarak belirtilmesi, bu HTTP üst bilgi anahtarlarının verileri önbelleğe alma hesaplamasının bir parçası olmasını engeller.</li>    <li> <code>ApiKeyName</code> : Hedef sitenin bir API anahtarı kavramı varsa, bu parametre URL'de kullanılması gereken anahtar parametresinin adını (değerini değil) belirtmek için kullanılabilir. Gerçek anahtar değeri, kimlik bilgisinde sağlanır.</li>    <li> <code>Zaman aşımı</code> : Bu değerin bir süre olarak belirtilmesi, bir HTTP isteğinin zaman aşımını değiştirir. Varsayılan değer 600 saniyedir.</li>    <li> <code>EnableBatch</code> : MaxUriLength aşılırsa (varsayılan false’tur) bir OData $batch isteğinin oluşturulmasına izin verilip verilmeyeceğini ayarlayan bir mantıksal (true/false).</li>    <li> <code>MaxUriLength</code> : Bir OData hizmetine gönderilen izin verilen bir URI'nin maksimum uzunluğunu gösteren bir sayı. Aşılırsa ve EnableBatch true ise, istek bir OData $batch uç noktasına yapılır, aksi takdirde başarısız olur (varsayılan 2048'dir).</li>    <li> <code>Eşzamanlı</code> : True olarak ayarlandığında mantıksal (true/false), hizmete yönelik istekler eşzamanlı olarak yapılır. False olarak ayarlandığında, istekler sırayla yapılacaktır. Belirtilmediğinde değer, hizmetin AsynchronousRequestsSupported ek açıklaması tarafından belirlenir. Hizmet, AsynchronousRequestsSupported'ın desteklenip desteklenmediğini belirtmezse, istekler sırayla yapılır.</li>    <li> <code>ODataVersion</code> : Bu OData hizmeti için kullanılacak OData protokolü sürümünü belirten bir sayı (3 veya 4). Belirtilmediğinde, desteklenen tüm sürümler istenecektir. Hizmet sürümü, hizmet tarafından döndürülen OData-Version üst bilgisi tarafından belirlenir.</li>    <li> <code>FunctionOverloads</code> : True olarak ayarlandığında mantıksal (true/false), işlev içe aktarma aşırı yüklemeleri gezginde ayrı girişler olarak listelenir, false olarak ayarlandığında işlev içe aktarma aşırı yüklemeleri gezginde birleşim işlevi olarak listelenecektir. V3 için varsayılan değer: false. V4 için varsayılan değer: true.</li>    <li> <code>MoreColumns</code> : True olarak ayarlandığında mantıksal (true/false), açık türleri ve polimorfik türleri içeren her varlık akışına bir "Daha Fazla Sütun" sütunu ekler. Bu, temel tipte bildirilmeyen alanları içerecektir. False olduğunda, bu alan mevcut değildir. Varsayılan olarak false olur.</li>        <li> <code>IncludeAnnotations</code> : Joker karakter olarak "\*" ile dahil edilecek ad alanı nitelikli terim adlarının veya kalıplarının virgülle ayrılmış listesi. Varsayılan olarak, ek açıklamaların hiçbiri dahil edilmez.</li>    <li> <code>IncludeMetadataAnnotations</code> : Bir joker karakter olarak "\*" ile meta veri belgesi isteklerine dahil edilecek ad alanı nitelikli terim adlarının veya kalıplarının virgülle ayrılmış listesi. Varsayılan olarak, IncludeAnnotations ile aynı ek açıklamaları içerir.</li>     <li> <code>OmitValues</code> : OData hizmetinin yanıtlarda belirli değerleri yazmaktan kaçınmasına izin verir. Hizmet tarafından onaylanırsa, bu değerleri atlanan alanlardan çıkaracağız. Seçenekler şunları içerir:      <ul>        <li><code>ODataOmitValues.Nulls</code> : OData hizmetinin null değerleri atlamasına izin verir.</li>      </ul>    </li>    <li> <code>Uygulama</code> : Kullanılacak OData bağlayıcısının uygulamasını belirtir. Geçerli değerler "2.0" veya null.</li>    </ul>


## Examples

### Example #1 
TripPin OData hizmetine bağlan.
```powerquery
OData.Feed("https://services.odata.org/V4/TripPinService")
```

Result: 
```powerquery
table
```




## Category
Accessing data
