---
title: Vertica.Database
---

# Vertica.Database


Vertica&#39;dan verileri içeri aktarın


## Syntax

```powerquery
Vertica.Database(
    server as text,
    database as text,
    optional options as record
) as table
```


## Remarks

<code>veritabanı</code> parametresi tarafından adlandırılan veritabanındaki <code>sunucu</code> parametresi tarafından adlandırılan sunucuda mevcut olan şemaların bir tablosunu döndürür.İsteğe bağlı kayıt parametresi, <code>seçenekler</code>, ek özellikler belirtmek için sağlanabilir. Kayıt şu alanları içerebilir:<ul>    <li><code>ConnectionTimeout</code>: Sunucuya bağlantı kurma girişimini bırakmadan önce ne kadar bekleneceğini denetleyen süre. Varsayılan değer sürücüye bağlıdır.</li>    <li><code>CommandTimeout </code>: Sunucu tarafı sorgusunun iptal edilmeden önce ne kadar çalışabileceğini denetleyen süre. Varsayılan değer sürücüye bağlıdır.</li></ul>


## Examples

### Example #1 
Vertica&#39;daki tabloları listeleyin
```powerquery

```



