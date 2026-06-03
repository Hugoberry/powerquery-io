---
title: Time.FromText
---

# Time.FromText


Yerel ve evrenselden Saat ve özel Saat biçimleri oluşturur.


## Syntax

```powerquery
Time.FromText(
    text as text,
    optional options as any
) as time
```


## Remarks

Bir metin gösteriminden `time` değeri oluşturur, `text`. Ek özellikleri belirtmek için isteğe bağlı bir `record` parametresi `options` sağlanabilir. `record` şu alanları içerebilir:

-   `Format`: Kullanılacak biçimi gösteren bir `text` değeri. Diğer ayrıntılar için https://go.microsoft.com/fwlink/?linkid=2180104 ve https://go.microsoft.com/fwlink/?linkid=2180105 adreslerine gidin. Bu alanın atlanması veya `null` sağlanması, zamanın mümkün olan en uygun şekilde ayrıştırılmasıyla sonuçlanır.
-   `Culture`: `Format` null olmadığında `Culture` bazı biçim tanımlayıcılarını denetler. Örneğin, `"en-US"` `"tt"` `"AM" veya "PM"` iken `"ar-EG"` için `"tt"` `"ص" veya "م"` olur. `Format` `null` olduğunda kullanılacak varsayılan biçimi `Culture` kontrol eder. `Culture` `null` olduğunda veya atlandığında `Culture.Current` kullanılır.

Eski iş akışlarını desteklemek için `options` metin değeri de olabilir. Bunun davranışı `options = [Format = null, Culture = options]` ile aynıdır.


## Examples

### Example #1
`"10:12:31am"` değerini bir Saat değerine dönüştürür.
```powerquery
Time.FromText("10:12:31am")
```

Result: 
```powerquery
#time(10, 12, 31)
```


### Example #2
`"1012"` değerini bir Saat değerine dönüştürür.
```powerquery
Time.FromText("1012")
```

Result: 
```powerquery
#time(10, 12, 00)
```


### Example #3
`"10"` değerini bir Saat değerine dönüştürür.
```powerquery
Time.FromText("10")
```

Result: 
```powerquery
#time(10, 00, 00)
```




## Category
Time
