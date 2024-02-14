---
title: Date.ToText
---

# Date.ToText


Tarih değerinin metinsel gösterimini döndürür.


## Syntax

```powerquery
Date.ToText(
    date as date,
    optional options as any,
    optional culture as text
) as text
```


## Remarks

<code>date</code> öğesinin metin gösterimini döndürür. Ek özellikleri belirtmek için isteğe bağlı bir <code>record</code> parametresi (<code>options</code>) sağlanabilir. <code>culture</code> yalnızca eski iş akışları için kullanılır. <code>Record</code> şu alanları içerebilir:<ul>   <li><code>Format</code>: Kullanılacak biçimi gösteren <code>text</code> değeri. Diğer ayrıntılar için https://go.microsoft.com/fwlink/?linkid=2180104 ve https://go.microsoft.com/fwlink/?linkid=2180105 adreslerine gidin. Bu alanın atlanması veya <code>null</code> sağlanması, tarihin <code>Culture</code> tarafından tanımlanan varsayılan kullanılarak biçimlendirilmesiyle sonuçlanır.</li>   <li><code>Culture</code>: <code>Format</code> null olmadığında <code>Culture</code> bazı biçim tanımlayıcılarını denetler. Örneğin, <code>"tr-TR"</code> için <code>"MMM"</code> <code>"Oca", "Şub", "Mar", ...</code> iken <code>"ru-RU"</code> için <code>"MMM"</code> <code>"янв", "фев", "мар", ...</code> olur. <code>Format</code> <code>null</code> olduğunda, kullanılacak varsayılan biçimi <code>Culture</code> denetler. <code>Culture</code> <code>null</code> olduğunda veya atlandığında <code>Culture.Current</code> kullanılır.</li></ul>Eski iş akışlarını desteklemek için <code>options</code> ve <code>culture</code> metin değerleri de olabilir. Bunun davranışı <code>options</code><code> = [Format = <code>options</code>, Culture = <code>culture</code>]</code> ile aynıdır.


## Examples

### Example #1 
&lt;code&gt;#date(2010, 12, 31)&lt;/code&gt; değerini &lt;code&gt;metin&lt;/code&gt; değerine dönüştürün. &lt;i&gt;Sonuç çıkışı geçerli kültüre bağlı olarak değişebilir.&lt;/i&gt;
```powerquery
Date.ToText(#date(2010, 12, 31))
```

Result: 
```powerquery
"12/31/2010"
```


### Example #2 
Özel bir biçim ve Alman kültürü kullanarak dönüştürün.
```powerquery
Date.ToText(#date(2010, 12, 31), [Format="dd MMM yyyy", Culture="de-DE"])
```

Result: 
```powerquery
"31 Dez 2010"
```


### Example #3 
Hicri takvimde, Gregoryen takvimde 1 Ocak 2000’e karşılık gelen yılı bulun.
```powerquery
Date.ToText(#date(2000, 1, 1), [Format="yyyy", Culture="ar-SA"])
```

Result: 
```powerquery
"1420"
```




## Category
Date
