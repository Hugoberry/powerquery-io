---
title: DateTime.ToText
---

# DateTime.ToText


datetime değerinin metinsel gösterimini döndürür.


## Syntax

```powerquery
DateTime.ToText(
    dateTime as datetime,
    optional options as any,
    optional culture as text
) as text
```


## Remarks

`dateTime` öğesinin metin gösterimini döndürür. Ek özellikleri belirtmek için isteğe bağlı bir `record` parametresi olan `options` sağlanabilir. `culture` yalnızca eski iş akışlarında kullanılır. `record` şu alanları içerebilir:

-   `Format`: Kullanılacak biçimi gösteren bir `text` değeri. Diğer ayrıntılar için https://go.microsoft.com/fwlink/?linkid=2180104 ve https://go.microsoft.com/fwlink/?linkid=2180105 adreslerine gidin. Bu alanın atlanması veya `null` sağlanması, tarihin `Culture` tarafından tanımlanan varsayılan kullanılarak biçimlendirilmesiyle sonuçlanır.
-   `Culture`: `Format` null olmadığında `Culture` bazı biçim tanımlayıcılarını denetler. Örneğin `"en-US"` içinde `"MMM"` `"Jan", "Feb", "Mar", ...` değerlerini verirken `"ru-RU"` içinde `"MMM"`, `"янв", "фев", "мар", ...` değerlerini verir. `Format` `null` olduğunda kullanılacak varsayılan biçimi `Culture` kontrol eder. `Culture` `null` olduğunda veya atlandığında `Culture.Current` kullanılır.

Eski iş akışlarını desteklemek için `options` ve `culture` metin değerleri de olabilir. Bu, `options = [Format = options, Culture = culture]` komutuyla aynı sonucu verir.


## Examples

### Example #1
`#datetime(2010, 12, 31, 01, 30, 25)` değerini `metin` değerine dönüştürün. *Sonuç çıkışı geçerli kültüre bağlı olarak değişebilir.*
```powerquery
DateTime.ToText(#datetime(2010, 12, 31, 01, 30, 25))
```

Result: 
```powerquery
"12/31/2010 1:30:25 AM"
```


### Example #2
Özel bir biçim ve Alman kültürü kullanarak dönüştürün.
```powerquery
DateTime.ToText(#datetime(2010, 12, 30, 2, 4, 50.36973), [Format="dd MMM yyyy HH:mm:ss.ffffff", Culture="de-DE"])
```

Result: 
```powerquery
"30 Dez 2010 02:04:50.369730"
```


### Example #3
ISO 8601 desenini kullanarak dönüştürün.
```powerquery
DateTime.ToText(#datetime(2000, 2, 8, 3, 45, 12),[Format="yyyy-MM-dd'T'HH:mm:ss'Z'", Culture="en-US"])
```

Result: 
```powerquery
"2000-02-08T03:45:12Z"
```




## Category
DateTime
