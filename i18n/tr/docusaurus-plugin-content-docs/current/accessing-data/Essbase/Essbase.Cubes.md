---
title: Essbase.Cubes
---

# Essbase.Cubes


Küpleri Essbase sunucusu tarafından gruplandırılan Essbase örneğinde döndürür.


## Syntax

```powerquery
Essbase.Cubes(
    url as text,
    optional options as record
) as table
```


## Remarks

<code>url</code> AP sunucusundaki Essbase örneğinden Essbase sunucusuna göre gruplandırılmış bir küp tablosunu döndürür. Bir isteğe bağlı kayıt parametresi <code>options</code>, aşağıdaki seçenekleri denetlemek için belirtilebilir:    <ul><li><code>CommandTimeout</code> : Sunucu tarafı sorgusunun iptal edilmeden &#246;nce ne kadar &#231;alıştırılmasına izin verildiğini denetleyen s&#252;re. Varsayılan değer on dakikadır.</li></ul>



## Category
Accessing data
