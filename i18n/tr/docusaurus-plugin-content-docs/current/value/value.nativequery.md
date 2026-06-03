---
title: Value.NativeQuery
---

# Value.NativeQuery


Bir sorguyu hedefe yönelik değerlendirir.


## Syntax

```powerquery
Value.NativeQuery(
    target as any,
    query as text,
    optional parameters as any,
    optional options as record
) as any
```


## Remarks

`parameters` içinde belirtilen parametreleri ve `options` içinde belirtilen seçenekleri kullanarak `target` öğesine yönelik `query` öğesini değerlendirir.

Sorgunun çıktısı `target` tarafından tanımlanır.

`target`, `query` tarafından tanımlandığı şekilde işlemin bağlamını sağlar.

`query`, `target` öğesine yönelik yürütülecek sorguyu tanımlar. `query`, `target` öğesine özgü bir şekilde (örneğin, T-SQL deyimi) ifade edilir.

İsteğe bağlı `parameters` değeri, `query` tarafından beklenen parametre değerlerinin sağlanması için uygun şekilde bir liste veya kayıt içerebilir.

İsteğe bağlı `options` kaydı, `query` öğesinin, `target` öğesine yönelik değerlendirme davranışını etkileyen seçenekler içerebilir. Bu seçenekler `target` öğesine özgüdür.



## Category
Values
