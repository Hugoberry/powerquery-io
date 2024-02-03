---
title: Time.ToText
---

# Time.ToText


## Description

Saat değerinin metinsel gösterimini döndürür.


## Syntax

```powerquery
Time.ToText(
    time as time,
    optional options as any,
    optional culture as text
) as text
```


## Details

<code>time</code> öğesinin metin gösterimini döndürür. Ek özellikleri belirtmek için isteğe bağlı bir <code>record</code> parametresi <code>options</code> sağlanabilir. <code>culture</code> yalnızca eski iş akışları için kullanılır. <code>Record</code> şu alanları içerebilir:<ul>   <li><code>Format</code>: Kullanılacak biçimi gösteren <code>text</code> değeri. Diğer ayrıntılar için https://go.microsoft.com/fwlink/?linkid=2180104 ve https://go.microsoft.com/fwlink/?linkid=2180105 adreslerine gidin. Bu alanın atlanması veya <code>null</code> sağlanması, tarihin <code>Culture</code> tarafından tanımlanan varsayılan kullanılarak biçimlendirilmesiyle sonuçlanır.</li>   <li><code>Culture</code>: <code>Format</code> null olmadığında <code>Culture</code> bazı biçim tanımlayıcılarını denetler. Örneğin, <code>"en-US"</code> için <code>"tt"</code> <code>"AM" veya "PM"</code> iken <code>"ar-EG"</code> için <code>"tt"</code> <code>"ص" veya "م"</code> olur. <code>Format</code> <code>null</code> olduğunda, kullanılacak varsayılan biçimi <code>Culture</code> denetler. <code>Culture</code> <code>null</code> olduğunda veya atlandığında <code>Culture.Current</code> kullanılır.</li></ul>Eski iş akışlarını desteklemek için <code>options</code> ve <code>culture</code> metin değerleri de olabilir. Bunun davranışı <code>options</code><code> = [Format = <code>options</code>, Culture = <code>culture</code>]</code> ile aynıdır.


## Examples

### Example #1 
&lt;code&gt;#time(01, 30, 25)&lt;/code&gt; değerini &lt;code&gt;metin&lt;/code&gt; değerine dönüştürün. &lt;i&gt;Sonuç çıkışı geçerli kültüre bağlı olarak değişebilir.&lt;/i&gt;
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
