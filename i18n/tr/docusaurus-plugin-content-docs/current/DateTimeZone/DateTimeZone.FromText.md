---
title: DateTimeZone.FromText
---

# DateTimeZone.FromText


## Description

Yerel, evrensel ve özel datetimezone biçimlerinden bir datetimezone oluşturur.


## Syntax

```powerquery
DateTimeZone.FromText(
    text as text,
    optional options as any
) as datetimezone
```


## Details

Bir metin gösteriminden (<code>text</code>) <code>datetimezone</code> değeri oluşturur. Ek özellikleri belirtmek için isteğe bağlı bir <code>record</code> parametresi (<code>options</code>) sağlanabilir. <code>Record</code> şu alanları içerebilir:<ul>   <li><code>Format</code>: Kullanılacak biçimi gösteren <code>text</code> değeri. Diğer ayrıntılar için https://go.microsoft.com/fwlink/?linkid=2180104 ve https://go.microsoft.com/fwlink/?linkid=2180105 adreslerine gidin. Bu alanın atlanması veya <code>null</code> sağlanması, tarihin mümkün olan en uygun şekilde ayrıştırılmasıyla sonuçlanır.</li>   <li><code>Culture</code>: <code>Format</code> null olmadığında <code>Culture</code> bazı biçim tanımlayıcılarını denetler. Örneğin, <code>"tr-TR"</code> için <code>"MMM"</code> <code>"Oca", "Şub", "Mar", ...</code> iken <code>"ru-RU"</code> için <code>"MMM"</code> <code>"янв", "фев", "мар", ...</code> olur. <code>Format</code> <code>null</code> olduğunda kullanılacak varsayılan biçimi <code>Culture</code> denetler. <code>Culture</code> <code>null</code> olduğunda veya atlandığında <code>Culture.Current</code> kullanılır.</li></ul>Eski iş akışlarını desteklemek için <code>options</code> metin değeri de olabilir. Bunun davranışı <code>options</code><code> = [Format = null, Culture = <code>options</code>]</code> ile aynıdır.


## Examples

### Example #1 
&lt;code&gt;&#34;2010-12-31T01:30:00-08:00&#34;&lt;/code&gt; değerini bir &lt;code&gt;datetimezone&lt;/code&gt; değerine dönüştürün.
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
