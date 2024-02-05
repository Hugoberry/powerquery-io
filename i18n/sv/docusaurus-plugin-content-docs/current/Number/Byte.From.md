---
title: Byte.From
---

# Byte.From


## Description

Skapar ett 8-bitars heltal av det givna värdet.


## Syntax

```powerquery
Byte.From(
    value as any,
    optional culture as text,
    optional roundingMode as RoundingMode.Type
) as number
```


## Details

Returnerar ett 8-bitars <code>number</code>-heltalsvärde från det givna <code>value</code>. Om det givna <code>value</code> är <code>null</code>. <code>Byte. Från </code> returnerar <code>null</code>.Om det givna <code>value</code> är ett <code>number</code> inom intervallet för en 8-bitars heltal utan decimaldel, returneras <code>value</code>. Om talet har en decimaldel avrundas det med det angivna avrundningsläget. Standardavrundningsläget är <code>RoundingMode.ToEven</code>. Om <code>value</code> är av någon annan typ konverteras den först till en <code>number</code> med <code>Number.FromText</code>. Mer information om tillgängliga avrundningslägen finns i <code>Number.Round</code>. En valfri <code>culture</code> kan även anges (till exempel, "en-US").


## Examples

### Example #1 
Hämta 8-bitars &lt;code&gt;number&lt;/code&gt;-heltalsvärdet för &lt;code&gt;&#34;4&#34;&lt;/code&gt;.
```powerquery
Byte.From("4")
```

Result: 
```powerquery
4
```


### Example #2 
Hämta 8-bitars &lt;code&gt;number&lt;/code&gt;-heltalsvärdet för &lt;code&gt;&#34;4.5&#34;&lt;/code&gt; genom att använda &lt;code&gt;RoundingMode.AwayFromZero&lt;/code&gt;.
```powerquery
Byte.From("4.5", null, RoundingMode.AwayFromZero)
```

Result: 
```powerquery
5
```




## Category
Number.Conversion and formatting
