---
title: DateTimeZone.ToText
---

# DateTimeZone.ToText


datetimezone değerinin metinsel gösterimini döndürür.


## Syntax

```powerquery
DateTimeZone.ToText(
    dateTimeZone as datetimezone,
    optional options as any,
    optional culture as text
) as text
```


## Remarks

<code>dateTimeZone</code> öğesinin metin gösterimini döndürür. Ek özellikleri belirtmek için isteğe bağlı bir <code>record</code> parametresi (<code>options</code>) sağlanabilir. <code>culture</code> yalnızca eski iş akışları için kullanılır. <code>Record</code> şu alanları içerebilir:<ul>   <li><code>Format</code>: Kullanılacak biçimi gösteren <code>text</code> değeri. Diğer ayrıntılar için https://go.microsoft.com/fwlink/?linkid=2180104 ve https://go.microsoft.com/fwlink/?linkid=2180105 adreslerine gidin. Bu alanın atlanması veya <code>null</code> sağlanması, tarihin <code>Culture</code> tarafından tanımlanan varsayılan kullanılarak biçimlendirilmesiyle sonuçlanır.</li>   <li><code>Culture</code>: <code>Format</code> null olmadığında <code>Culture</code> bazı biçim tanımlayıcılarını denetler. Örneğin, <code>"tr-TR"</code> için <code>"MMM"</code> <code>"Oca", "Şub", "Mar", ...</code> iken <code>"ru-RU"</code> için <code>"MMM"</code> <code>"янв", "фев", "мар", ...</code> olur. <code>Format</code> <code>null</code> olduğunda, kullanılacak varsayılan biçimi <code>Culture</code> denetler. <code>Culture</code> <code>null</code> olduğunda veya atlandığında <code>Culture.Current</code> kullanılır.</li></ul>Eski iş akışlarını desteklemek için <code>options</code> ve <code>culture</code> metin değerleri de olabilir. Bunun davranışı <code>options</code><code> = [Format = <code>options</code>, Culture = <code>culture</code>]</code> ile aynıdır.


## Examples

### Example #1 
&lt;code&gt;#datetimezone(2010, 12, 31, 01, 30, 25, 2, 0)&lt;/code&gt; değerini &lt;code&gt;metin&lt;/code&gt; değerine dönüştürün. &lt;i&gt;Sonuç çıkışı geçerli kültüre bağlı olarak değişebilir.&lt;/i&gt;
```powerquery
DateTimeZone.ToText(#datetimezone(2010, 12, 31, 01, 30, 25, 2, 0))
```

Result: 
```powerquery
"12/31/2010 1:30:25 AM +02:00"
```


### Example #2 
Özel bir biçim ve Alman kültürü kullanarak dönüştürün.
```powerquery
DateTimeZone.ToText(#datetimezone(2010, 12, 30, 2, 4, 50.36973, -8,0), [Format="dd MMM yyyy HH:mm:ss.ffffff zzz", Culture="de-DE"])
```

Result: 
```powerquery
"30 Dez 2010 02:04:50.369730 -08:00"
```


### Example #3 
ISO 8601 desenini kullanarak dönüştürün.
```powerquery
DateTimeZone.ToText(#datetimezone(2000, 2, 8, 3, 45, 12, 2, 0),[Format="O", Culture="en-US"])
```

Result: 
```powerquery
"2000-02-08T03:45:12.0000000+02:00"
```




## Category
DateTimeZone
