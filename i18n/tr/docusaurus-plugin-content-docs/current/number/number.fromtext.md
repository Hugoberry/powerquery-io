---
title: Number.FromText
---

# Number.FromText


Genel metin biçimlerinden sayılar oluşturur (&#34;15&#34;, &#34;3,423.10&#34;, &#34;5.0E-10&#34;).


## Syntax

```powerquery
Number.FromText(
    text as text,
    optional culture as text
) as number
```


## Remarks

Verilen <code>text</code> metin değerinden bir <code>number</code> değeri döndürür. <ul>  <li><code>text</code>: Sayı değerinin metinsel gösterimi. Gösterim bir genel sayı biçiminde olmalıdır: Örneğin "15", "3.423,10" veya "5,0E-10".</li>  <li><code>culture</code>: <code>text</code> değerinin nasıl yorumlanacağını denetleyen isteğe bağlı kültür (ör. "tr-TR").</li> </ul>


## Examples

### Example #1 
&lt;code&gt;&#34;4&#34;&lt;/code&gt; sayısının number değerini alır.
```powerquery
Number.FromText("4")
```

Result: 
```powerquery
4
```


### Example #2 
&lt;code&gt;&#34;5.0e-10&#34;&lt;/code&gt; değerinin sayı değerini alır.
```powerquery
Number.FromText("5.0e-10")
```

Result: 
```powerquery
5E-10
```




## Category
Number.Conversion and formatting
