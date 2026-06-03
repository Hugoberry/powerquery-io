---
title: Time.ToText
---

# Time.ToText


Saat değerinin metinsel gösterimini döndürür.


## Syntax

```powerquery
Time.ToText(
    time as time,
    optional options as any,
    optional culture as text
) as text
```


## Remarks

`time` öğesinin metin gösterimini döndürür. Ek özellikleri belirtmek için isteğe bağlı bir `record` parametresi olan `options` sağlanabilir. `culture` yalnızca eski iş akışlarında kullanılır. `record` şu alanları içerebilir:

-   `Format`: Kullanılacak biçimi gösteren bir `text` değeri. Diğer ayrıntılar için https://go.microsoft.com/fwlink/?linkid=2180104 ve https://go.microsoft.com/fwlink/?linkid=2180105 adreslerine gidin. Bu alanın atlanması veya `null` sağlanması, tarihin `Culture` tarafından tanımlanan varsayılan kullanılarak biçimlendirilmesiyle sonuçlanır.
-   `Culture`: `Format` null olmadığında `Culture` bazı biçim tanımlayıcılarını denetler. Örneğin, `"en-US"` `"tt"` `"AM" veya "PM"` iken `"ar-EG"` için `"tt"` `"ص" veya "م"` olur. `Format` `null` olduğunda kullanılacak varsayılan biçimi `Culture` kontrol eder. `Culture` `null` olduğunda veya atlandığında `Culture.Current` kullanılır.

Eski iş akışlarını desteklemek için `options` ve `culture` metin değerleri de olabilir. Bu, `options = [Format = options, Culture = culture]` komutuyla aynı sonucu verir.


## Examples

### Example #1
`#time(01, 30, 25)` değerini `metin` değerine dönüştürün. *Sonuç çıkışı geçerli kültüre bağlı olarak değişebilir.*
```powerquery
Time.ToText(#time(11, 56, 2))
```

Result: 
```powerquery
"11:56 AM"
```


### Example #2
Özel bir biçim ve Alman kültürü kullanarak dönüştürün.
```powerquery
Time.ToText(#time(11, 56, 2), [Format="hh:mm", Culture="de-DE"])
```

Result: 
```powerquery
"11:56"
```


### Example #3
Standart saat biçimini kullanarak dönüştürün.
```powerquery
Time.ToText(#time(11, 56, 2), [Format="T", Culture="de-DE"])
```

Result: 
```powerquery
"11:56:02"
```




## Category
Time
