---
title: DateTimeZone.FromText
---

# DateTimeZone.FromText


Yerel, evrensel ve özel datetimezone biçimlerinden bir datetimezone oluşturur.


## Syntax

```powerquery
DateTimeZone.FromText(
    text as text,
    optional options as any
) as datetimezone
```


## Remarks

Bir metin gösteriminden `text` `datetimezone` değeri oluşturur. Ek özellikleri belirtmek için isteğe bağlı bir `record` parametresi `options` sağlanabilir. `record` şu alanları içerebilir:

-   `Format`: Kullanılacak biçimi gösteren bir `text` değeri. Diğer ayrıntılar için https://go.microsoft.com/fwlink/?linkid=2180104 ve https://go.microsoft.com/fwlink/?linkid=2180105 adreslerine gidin. Bu alanın atlanması veya `null` sağlanması, tarihin mümkün olan en uygun şekilde ayrıştırılmasıyla sonuçlanır.
-   `Culture`: `Format` null olmadığında `Culture` bazı biçim tanımlayıcılarını denetler. Örneğin `"en-US"` içinde `"MMM"` `"Jan", "Feb", "Mar", ...` değerlerini verirken `"ru-RU"` içinde `"MMM"`, `"янв", "фев", "мар", ...` değerlerini verir. `Format` `null` olduğunda kullanılacak varsayılan biçimi `Culture` kontrol eder. `Culture` `null` olduğunda veya atlandığında `Culture.Current` kullanılır.

Eski iş akışlarını desteklemek için `options` metin değeri de olabilir. Bunun davranışı `options = [Format = null, Culture = options]` ile aynıdır.


## Examples

### Example #1
`"2010-12-31T01:30:00-08:00"` değerini bir `datetimezone` değerine dönüştürün.
```powerquery
DateTimeZone.FromText("2010-12-31T01:30:00-08:00")
```

Result: 
```powerquery
#datetimezone(2010, 12, 31, 1, 30, 0, -8, 0)
```


### Example #2
Özel bir biçim ve Alman kültürü kullanarak dönüştürün.
```powerquery
DateTimeZone.FromText("30 Dez 2010 02:04:50.369730 +02:00", [Format="dd MMM yyyy HH:mm:ss.ffffff zzz", Culture="de-DE"])
```

Result: 
```powerquery
#datetimezone(2010, 12, 30, 2, 4, 50.36973, 2, 0)
```


### Example #3
ISO 8601 kullanarak dönüştürün.
```powerquery
DateTimeZone.FromText("2009-06-15T13:45:30.0000000-07:00", [Format="O", Culture="en-US"])
```

Result: 
```powerquery
#datetimezone(2009, 6, 15, 13, 45, 30, -7, 0)
```




## Category
DateTimeZone
