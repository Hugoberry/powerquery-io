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

<code>parameters</code> içinde belirtilen parametreleri ve <code>options</code> içinde belirtilen seçenekleri kullanarak <code>target</code> öğesine yönelik <code>query</code> öğesini değerlendirir.<br />Sorgunun çıktısı <code>target</code> tarafından tanımlanır.<br /><code>target</code>, <code>query</code> tarafından tanımlandığı şekilde işlemin bağlamını sağlar.<br /><code>query</code>, <code>target</code> öğesine yönelik yürütülecek sorguyu tanımlar. <code>query</code>, <code>target</code> öğesine özgü bir şekilde (örneğin, T-SQL deyimi) ifade edilir.<br />İsteğe bağlı <code>parameters</code> değeri, <code>query</code> tarafından beklenen parametre değerlerinin sağlanması için uygun şekilde bir liste veya kayıt içerebilir.<br />İsteğe bağlı <code>options</code> kaydı, <code>query</code> öğesinin, <code>target</code> öğesine yönelik değerlendirme davranışını etkileyen seçenekler içerebilir. Bu seçenekler <code>target</code> öğesine özgüdür.<br />



## Category
Values
