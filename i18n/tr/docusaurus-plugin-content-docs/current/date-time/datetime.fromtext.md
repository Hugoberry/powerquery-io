---
title: DateTime.FromText
---

# DateTime.FromText


Yerel ve evrensel datetime biçimlerinden bir datetimezone oluşturur.


## Syntax

```powerquery
DateTime.FromText(
    text as text,
    optional options as any
) as datetime
```


## Remarks

Bir metin gösteriminden (`text`) `datetime` değeri oluşturur. Ek özellikleri belirtmek için isteğe bağlı bir `record` parametresi `options` sağlanabilir. `record` şu alanları içerebilir:

-   `Format`: Kullanılacak biçimi gösteren bir `text` değeri. Diğer ayrıntılar için https://go.microsoft.com/fwlink/?linkid=2180104 ve https://go.microsoft.com/fwlink/?linkid=2180105 adreslerine gidin. Bu alanın atlanması veya `null` sağlanması, tarihin mümkün olan en uygun şekilde ayrıştırılmasıyla sonuçlanır.
-   `Culture`: `Format` null olmadığında `Culture` bazı biçim tanımlayıcılarını denetler. Örneğin `"en-US"` içinde `"MMM"` `"Jan", "Feb", "Mar", ...` değerlerini verirken `"ru-RU"` içinde `"MMM"`, `"янв", "фев", "мар", ...` değerlerini verir. `Format` `null` olduğunda kullanılacak varsayılan biçimi `Culture` kontrol eder. `Culture` `null` olduğunda veya atlandığında `Culture.Current` kullanılır.

Eski iş akışlarını desteklemek için `options` metin değeri de olabilir. Bunun davranışı `options = [Format = null, Culture = options]` ile aynıdır.


## Examples

### Example #1
`"2010-12-31T01:30:00"` değerini bir tarih saat değerine dönüştürün.
```powerquery
DateTime.FromText("2010-12-31T01:30:25")
```

Result: 
```powerquery
#datetime(2010, 12, 31, 1, 30, 25)
```


### Example #2
`"2010-12-31T01:30:00.121212"` değerini bir tarih saat değerine dönüştürün.
```powerquery
DateTime.FromText("30 Dez 2010 02:04:50.369730", [Format="dd MMM yyyy HH:mm:ss.ffffff", Culture="de-DE"])
```

Result: 
```powerquery
#datetime(2010, 12, 30, 2, 4, 50.36973)
```


### Example #3
`"2010-12-31T01:30:00"` değerini bir tarih saat değerine dönüştürün.
```powerquery
DateTime.FromText("2000-02-08T03:45:12Z", [Format="yyyy-MM-dd'T'HH:mm:ss'Z'", Culture="en-US"])
```

Result: 
```powerquery
#datetime(2000, 2, 8, 3, 45, 12)
```


### Example #4
`"20101231T013000"` değerini bir tarih saat değerine dönüştürün.
```powerquery
DateTime.FromText("20101231T013000", [Format="yyyyMMdd'T'HHmmss", Culture="en-US"])
```

Result: 
```powerquery
#datetime(2010, 12, 31, 1, 30, 0)
```




## Category
DateTime
