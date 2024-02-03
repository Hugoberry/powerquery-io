---
title: Currency.From
---

# Currency.From


## Description

Verilen değerden bir para birimi değeri döndürür.


## Syntax

```powerquery
Currency.From(
    value as any,
    optional culture as text,
    optional roundingMode as RoundingMode.Type
) as number
```


## Details

Verilen <code>value</code> değerinden bir <code>currency</code> değeri döndürür. Verilen <code>value</code> değeri <code>null</code> olduğunda <code>Currency.From</code> <code>null</code> döndürür. Verilen <code>value</code>, para birimi aralığında <code>number</code> olduğunda <code>value</code> değerinin kesir kısmı, 4 basamaklı bir ondalık sayıya yuvarlanarak döndürülür. <code>value</code> başka bir türde olduğunda önce <code>Number.FromText</code> kullanılarak <code>number</code> türüne dönüştürülür. Para birimi için geçerli aralık <code>-922.337.203.685.477,5808</code> - <code>922.337.203.685.477,5807</code> aralığıdır. Kullanılabilir yuvarlama modları için bkz. <code>Number.Round</code>. Varsayılan mod <code>RoundingMode.ToEven</code> modudur. Ayrıca, isteğe bağlı bir <code>culture</code> sağlanabilir (ör. "tr-TR").


## Examples

### Example #1 
&lt;code&gt;&#34;1.23455&#34;&lt;/code&gt; değerinin &lt;code&gt;currency&lt;/code&gt; değerini alın.
```powerquery
Currency.From("1.23455")
```

Result: 
```powerquery
1.2346
```


### Example #2 
&lt;code&gt;RoundingMode.Down&lt;/code&gt; kullanarak &lt;code&gt;&#34;1.23455&#34;&lt;/code&gt; değerinin &lt;code&gt;currency&lt;/code&gt; değerini alın.
```powerquery
Currency.From("1.23455", "en-US", RoundingMode.Down)
```

Result: 
```powerquery
1.2345
```




## Category
Number.Conversion and formatting
