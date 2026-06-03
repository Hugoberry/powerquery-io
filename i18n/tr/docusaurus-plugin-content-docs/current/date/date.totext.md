---
title: Date.ToText
---

# Date.ToText


Tarih değerinin metinsel gösterimini döndürür.


## Syntax

```powerquery
Date.ToText(
    date as date,
    optional options as any,
    optional culture as text
) as text
```


## Remarks

`date` öğesinin metin gösterimini döndürür. Ek özellikleri belirtmek için isteğe bağlı bir `record` parametresi olan `options` sağlanabilir. `culture` yalnızca eski iş akışlarında kullanılır. `record` şu alanları içerebilir:

-   `Format`: Kullanılacak biçimi gösteren bir `text` değeri. Diğer ayrıntılar için https://go.microsoft.com/fwlink/?linkid=2180104 ve https://go.microsoft.com/fwlink/?linkid=2180105 adreslerine gidin. Bu alanın atlanması veya `null` sağlanması, tarihin `Culture` tarafından tanımlanan varsayılan kullanılarak biçimlendirilmesiyle sonuçlanır.
-   `Culture`: `Format` null olmadığında `Culture` bazı biçim tanımlayıcılarını denetler. Örneğin `"en-US"` içinde `"MMM"` `"Jan", "Feb", "Mar", ...` değerlerini verirken `"ru-RU"` içinde `"MMM"`, `"янв", "фев", "мар", ...` değerlerini verir. `Format` `null` olduğunda kullanılacak varsayılan biçimi `Culture` kontrol eder. `Culture` `null` olduğunda veya atlandığında `Culture.Current` kullanılır.

Eski iş akışlarını desteklemek için `options` ve `culture` metin değerleri de olabilir. Bu, `options = [Format = options, Culture = culture]` komutuyla aynı sonucu verir.


## Examples

### Example #1
`#date(2010, 12, 31)` değerini `metin` değerine dönüştürün. *Sonuç çıkışı geçerli kültüre bağlı olarak değişebilir.*
```powerquery
Date.ToText(#date(2010, 12, 31))
```

Result: 
```powerquery
"12/31/2010"
```


### Example #2
Özel bir biçim ve Alman kültürü kullanarak dönüştürün.
```powerquery
Date.ToText(#date(2010, 12, 31), [Format="dd MMM yyyy", Culture="de-DE"])
```

Result: 
```powerquery
"31 Dez 2010"
```


### Example #3
Hicri takvimde, Gregoryen takvimde 1 Ocak 2000’e karşılık gelen yılı bulun.
```powerquery
Date.ToText(#date(2000, 1, 1), [Format="yyyy", Culture="ar-SA"])
```

Result: 
```powerquery
"1420"
```




## Category
Date
