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

Bir metin gösteriminden (<code>text</code>) <code>datetime</code> değeri oluşturur. Ek özellikleri belirtmek için isteğe bağlı bir <code>record</code> parametresi (<code>options</code>) sağlanabilir. <code>Record</code> şu alanları içerebilir:<ul>   <li><code>Format</code>: Kullanılacak biçimi gösteren <code>text</code> değeri. Diğer ayrıntılar için https://go.microsoft.com/fwlink/?linkid=2180104 ve https://go.microsoft.com/fwlink/?linkid=2180105 adreslerine gidin. Bu alanın atlanması veya <code>null</code> sağlanması, tarihin mümkün olan en uygun şekilde ayrıştırılmasıyla sonuçlanır.</li>   <li><code>Culture</code>: <code>Format</code> null olmadığında <code>Culture</code> bazı biçim tanımlayıcılarını denetler. Örneğin, <code>"tr-TR"</code> için <code>"MMM"</code> <code>"Oca", "Şub", "Mar", ...</code> iken <code>"ru-RU"</code> için <code>"MMM"</code> <code>"янв", "фев", "мар", ...</code> olur. <code>Format</code> <code>null</code> olduğunda kullanılacak varsayılan biçimi <code>Culture</code> denetler. <code>Culture</code> <code>null</code> olduğunda veya atlandığında <code>Culture.Current</code> kullanılır.</li></ul>Eski iş akışlarını desteklemek için <code>options</code> metin değeri de olabilir. Bunun davranışı <code>options</code><code> = [Format = null, Culture = <code>options</code>]</code> ile aynıdır.


## Examples

### Example #1 
&lt;code&gt;&#34;2010-12-31T01:30:00&#34;&lt;/code&gt; değerini bir tarih saat değerine dönüştürün.
```powerquery
DateTime.FromText("2010-12-31T01:30:25")
```

Result: 
```powerquery
#datetime(2010, 12, 31, 1, 30, 25)
```


### Example #2 
&lt;code&gt;&#34;2010-12-31T01:30:00.121212&#34;&lt;/code&gt; değerini bir tarih saat değerine dönüştürün.
```powerquery
DateTime.FromText("30 Dez 2010 02:04:50.369730", [Format="dd MMM yyyy HH:mm:ss.ffffff", Culture="de-DE"])
```

Result: 
```powerquery
#datetime(2010, 12, 30, 2, 4, 50.36973)
```


### Example #3 
&lt;code&gt;&#34;2010-12-31T01:30:00&#34;&lt;/code&gt; değerini bir tarih saat değerine dönüştürün.
```powerquery
DateTime.FromText("2000-02-08T03:45:12Z", [Format="yyyy-MM-dd'T'HH:mm:ss'Z'", Culture="en-US"])
```

Result: 
```powerquery
#datetime(2000, 2, 8, 3, 45, 12)
```


### Example #4 
&lt;code&gt;&#34;20101231T013000&#34;&lt;/code&gt; değerini bir tarih saat değerine dönüştürün.
```powerquery
DateTime.FromText("20101231T013000", [Format="yyyyMMdd'T'HHmmss", Culture="en-US"])
```

Result: 
```powerquery
#datetime(2010, 12, 31, 1, 30, 0)
```




## Category
DateTime
