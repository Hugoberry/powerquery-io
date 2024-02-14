---
title: Int64.From
---

# Int64.From


Verilen değerden 64 bit tam sayı oluşturur.


## Syntax

```powerquery
Int64.From(
    value as any,
    optional culture as text,
    optional roundingMode as RoundingMode.Type
) as number
```


## Remarks

Verilen <code>value</code> değerinden 64 bitlik bir tamsayı <code>number</code> değeri döndürür. Verilen <code>value</code> değeri <code>null</code> olduğunda, <code>Int64.From</code> <code>null</code> döndürür. Verilen <code>value</code> değeri kesirli kısmı olmayan 64 bitlik tamsayı aralığında bir <code>number</code> olduğunda <code>value</code> döndürülür. Kesirli kısmı varsa, sayı belirtilen yuvarlama moduyla yuvarlanır. Varsayılan yuvarlama modu <code>RoundingMode.ToEven</code> modudur. <code>value</code> başka herhangi bir türde olduğunda, önce <code>Number.FromText</code> kullanılarak <code>number</code> türüne dönüştürülür. Kullanılabilir yuvarlama modları için bkz. <code>Number.Round</code>. Ayrıca isteğe bağlı <code>culture</code> sağlanabilir (örneğin, "tr-TR").


## Examples

### Example #1 
&lt;code&gt;&#34;4&#34;&lt;/code&gt; değerinin 64 bit tam sayı &lt;code&gt;number&lt;/code&gt; değerini verir.
```powerquery
Int64.From("4")
```

Result: 
```powerquery
4
```


### Example #2 
&lt;code&gt;RoundingMode.AwayFromZero&lt;/code&gt; kullanarak &lt;code&gt;&#34;4.5&#34;&lt;/code&gt; değerinin 64 bit &lt;code&gt;number&lt;/code&gt; tam sayı değerini alın.
```powerquery
Int64.From("4.5", null, RoundingMode.AwayFromZero)
```

Result: 
```powerquery
5
```




## Category
Number.Conversion and formatting
