---
title: AtScale.Cubes
---

# AtScale.Cubes


## Description

Bir AtScale&#39;den küp verilerini içeri aktarın/DirectQuery ile sorgulayın.


## Syntax

```powerquery
AtScale.Cubes(
    server as Uri.Type,
    optional options as record
) as table
```


## Details

<code>server</code> sunucusunda AtScale’den küp verilerini döndürür. Şu seçenekleri denetlemek için isteğe bağlı bir kayıt parametresi olan <code>options</code> belirtilebilir:<ul>        <li><code>TypedMeasureColumns</code>: Çok boyutlu veya tablosal modelde belirtilen türlerin eklenen ölçü sütunu türleri için kullanılıp kullanılmayacağını belirten mantıksal bir değer. False olarak ayarlandığında, tüm ölçü sütunları için "sayı" türü kullanılır. Bu seçenek için varsayılan değer false’tur.</li>        <li><code>CommandTimeout</code>: Sunucu tarafı sorgunun iptal edilmeden önce ne kadar süre (saniye cinsinden) çalışacağını denetler. Varsayılan değer, sürücüye bağlıdır. </li>        <li><code>ConnectionTimeout</code>: Sunucuyla bağlantı kurma denemesi bırakılmadan önce ne kadar süre (saniye cinsinden) bekleneceğini denetler. Varsayılan değer, sürücüye bağlıdır. </li></ul>Kayıt parametresi [option1 = value1, option2 = value2...] olarak belirtilir.


