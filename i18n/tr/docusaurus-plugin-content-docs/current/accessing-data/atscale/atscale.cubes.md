---
title: AtScale.Cubes
---

# AtScale.Cubes


Bir AtScale'den küp verilerini içeri aktarın/DirectQuery ile sorgulayın.


## Syntax

```powerquery
AtScale.Cubes(
    server as Uri.Type,
    optional options as record
) as table
```


## Remarks

`server` sunucusunda AtScale’den küp verilerini döndürür. Şu seçenekleri denetlemek için isteğe bağlı bir kayıt parametresi olan `options` belirtilebilir:

-   `TypedMeasureColumns`: Çok boyutlu veya tablosal modelde belirtilen türlerin eklenen ölçü sütunu türleri için kullanılıp kullanılmayacağını belirten mantıksal bir değer. False olarak ayarlandığında, tüm ölçü sütunları için "sayı" türü kullanılır. Bu seçenek için varsayılan değer false’tur.
-   `CommandTimeout`: Sunucu tarafı sorgunun iptal edilmeden önce ne kadar süre (saniye cinsinden) çalışacağını denetler. Varsayılan değer, sürücüye bağlıdır.
-   `ConnectionTimeout`: Sunucuyla bağlantı kurma denemesi bırakılmadan önce ne kadar süre (saniye cinsinden) bekleneceğini denetler. Varsayılan değer, sürücüye bağlıdır.

Kayıt parametresi \[option1 = value1, option2 = value2...\] olarak belirtilir.


## Examples

### Example #1
Bir AtScale küpündeki küp verilerini listele.
```powerquery
AtScale.Cubes("https://contoso.atscale.com:10502/xmla/...")
```



