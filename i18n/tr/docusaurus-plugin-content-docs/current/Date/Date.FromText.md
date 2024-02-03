---
title: Date.FromText
---

# Date.FromText


## Description

Yerel, evrensel ve özel Tarih biçimlerinden bir Tarih oluşturur.


## Syntax

```powerquery
Date.FromText(
    text as text,
    optional options as any
) as date
```


## Details

Bir metin gösteriminden <code>text</code> <code>date</code> değeri oluşturur. Ek özellikleri belirtmek için isteğe bağlı bir <code>record</code> parametresi <code>options</code> sağlanabilir. <code>Record</code> şu alanları içerebilir:<ul>   <li><code>Format</code>: Kullanılacak biçimi gösteren <code>text</code> değeri. Diğer ayrıntılar için https://go.microsoft.com/fwlink/?linkid=2180104 ve https://go.microsoft.com/fwlink/?linkid=2180105 adreslerine gidin. Bu alanın atlanması veya <code>null</code> sağlanması, tarihin mümkün olan en uygun şekilde ayrıştırılmasıyla sonuçlanır.</li>   <li><code>Culture</code>:<code>Format</code> null olmadığında <code>Culture</code> bazı biçim tanımlayıcılarını denetler. Örneğin, <code>"en-US"</code> için <code>"MMM"</code> <code>"Jan", "Feb", "Mar", ...</code> iken <code>"ru-RU"</code> için <code>"MMM"</code> <code>"янв", "фев", "мар", ...</code> olur. <code>Format</code> <code>null</code> olduğunda kullanılacak varsayılan biçimi <code>Culture</code> denetler. <code>Culture</code> <code>null</code> olduğunda veya atlandığında <code>Culture.Current</code> kullanılır.</li></ul>Eski iş akışlarını desteklemek için <code>options</code> metin değeri de olabilir. Bunun davranışı <code>options</code><code> = [Format = null, Culture = <code>options</code>]</code> ile aynıdır.


## Examples

### Example #1 
&lt;code&gt;&#34;2010-12-31&#34;&lt;/code&gt; değerini bir &lt;code&gt;date&lt;/code&gt; değerine dönüştürün.
```powerquery
Date.FromText("2010-12-31")
```

Result: 
```powerquery
#date(2010, 12, 31)
```


### Example #2 
Özel bir biçim ve Alman kültürü kullanarak dönüştürün.
```powerquery
Date.FromText("30 Dez 2010", [Format="dd MMM yyyy", Culture="de-DE"])
```

Result: 
```powerquery
#date(2010, 12, 30)
```


### Example #3 
Gregoryen takvimde, Hicri takvimde 1400 başlangıcına karşılık gelen tarihi bulun.
```powerquery
Date.FromText("1400", [Format="yyyy", Culture="ar-SA"])
```

Result: 
```powerquery
#date(1979, 11, 20)
```




## Category
Date
