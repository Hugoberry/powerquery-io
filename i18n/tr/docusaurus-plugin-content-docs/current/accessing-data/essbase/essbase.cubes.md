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

`url` AP sunucusundaki Essbase örneğinden Essbase sunucusuna göre gruplandırılmış bir küp tablosunu döndürür. Bir isteğe bağlı kayıt parametresi `options`, aşağıdaki seçenekleri denetlemek için belirtilebilir:

-   `CommandTimeout` : Sunucu tarafı sorgusunun iptal edilmeden önce ne kadar çalıştırılmasına izin verildiğini denetleyen süre. Varsayılan değer on dakikadır.



## Category
Accessing data
