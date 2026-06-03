---
title: Vertica.Database
---

# Vertica.Database


Vertica'dan verileri içeri aktarın


## Syntax

```powerquery
Vertica.Database(
    server as text,
    database as text,
    optional options as record
) as table
```


## Remarks

`veritabanı` parametresi tarafından adlandırılan veritabanındaki `sunucu` parametresi tarafından adlandırılan sunucuda mevcut olan şemaların bir tablosunu döndürür. İsteğe bağlı kayıt parametresi, `seçenekler`, ek özellikler belirtmek için sağlanabilir. Kayıt şu alanları içerebilir:

-   `ConnectionTimeout`: Sunucuya bağlantı kurma girişimini bırakmadan önce ne kadar bekleneceğini denetleyen süre. Varsayılan değer sürücüye bağlıdır.
-   `CommandTimeout` : Sunucu tarafı sorgusunun iptal edilmeden önce ne kadar çalışabileceğini denetleyen süre. Varsayılan değer sürücüye bağlıdır.


## Examples

### Example #1
Vertica'daki tabloları listeleyin
```powerquery

```



