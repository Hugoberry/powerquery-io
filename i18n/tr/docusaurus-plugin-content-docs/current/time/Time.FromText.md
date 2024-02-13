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

Bir metin gösteriminden <code>text</code> <code>time</code> değeri oluşturur. Ek özellikleri belirtmek için isteğe bağlı bir <code>record</code> parametresi <code>options</code> sağlanabilir. <code>Record</code> şu alanları içerebilir:<ul>   <li><code>Format</code>: Kullanılacak biçimi gösteren <code>text</code> değeri. Diğer ayrıntılar için https://go.microsoft.com/fwlink/?linkid=2180104 ve https://go.microsoft.com/fwlink/?linkid=2180105 adreslerine gidin. Bu alanın atlanması veya <code>null</code> sağlanması, zamanın mümkün olan en uygun şekilde ayrıştırılmasıyla sonuçlanır.</li>   <li><code>Culture</code>:<code>Format</code> null olmadığında <code>Culture</code> bazı biçim tanımlayıcılarını denetler. Örneğin, <code>"en-US"</code> için <code>"tt"</code> <code>"AM" veya "PM"</code> iken <code>"ar-EG"</code> için <code>"tt"</code> <code>"ص" veya "م"</code> olur. <code>Format</code> <code>null</code> olduğunda kullanılacak varsayılan biçimi <code>Culture</code> denetler. <code>Culture</code> <code>null</code> olduğunda veya atlandığında <code>Culture.Current</code> kullanılır.</li></ul>Eski iş akışlarını desteklemek için <code>options</code> metin değeri de olabilir. Bunun davranışı <code>options</code><code> = [Format = null, Culture = <code>options</code>]</code> ile aynıdır.


## Examples

### Example #1 
&lt;code&gt;&#34;10:12:31am&#34;&lt;/code&gt; değerini bir Saat değerine dönüştürür.
```powerquery
Time.FromText("10:12:31am")
```

Result: 
```powerquery
#time(10, 12, 31)
```


### Example #2 
&lt;code&gt;&#34;1012&#34;&lt;/code&gt; değerini bir Saat değerine dönüştürür.
```powerquery
Time.FromText("1012")
```

Result: 
```powerquery
#time(10, 12, 00)
```


### Example #3 
&lt;code&gt;&#34;10&#34;&lt;/code&gt; değerini bir Saat değerine dönüştürür.
```powerquery
Time.FromText("10")
```

Result: 
```powerquery
#time(10, 00, 00)
```




## Category
Time
