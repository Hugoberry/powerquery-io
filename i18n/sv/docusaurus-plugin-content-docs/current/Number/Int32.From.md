---
title: Int32.From
---

# Int32.From


Skapar ett 32-bitars heltal av det givna värdet.


## Syntax

```powerquery
Int32.From(
    value as any,
    optional culture as text,
    optional roundingMode as RoundingMode.Type
) as number
```


## Remarks

Returnerar ett 32-bitars <code>number</code>-heltalsvärde från det givna <code>value</code>. Om det givna <code>value</code> är <code>null</code> returnerar <code>Int32.From</code> <code>null</code>.  Om det givna <code>value</code> är <code>number</code> inom intervallet för 32-bitars heltal utan decimaldel, returneras <code>value</code>. Om talet har en decimaldel avrundas det med det angivna avrundningsläget. Standardavrundningsläget är <code>RoundingMode.ToEven</code>. Om det givna <code>value</code> är av någon annan typ kontrollerar du under <code>Number.FromText</code> om hur du konverterar det till <code>number</code>-värde. Mer information om tillgängliga avrundningslägen finns i <code>Number.Round</code>. En valfri <code>culture</code> kan även anges (till exempel, "en-US").


## Examples

### Example #1 
Hämta 32-bitars &lt;code&gt;number&lt;/code&gt;-heltalsvärdet för &lt;code&gt;&#34;4&#34;&lt;/code&gt;.
```powerquery
Int32.From("4")
```

Result: 
```powerquery
4
```


### Example #2 
Hämta 32-bitars &lt;code&gt;number&lt;/code&gt;-heltalsvärdet för &lt;code&gt;&#34;4.5&#34;&lt;/code&gt; genom att använda &lt;code&gt;RoundingMode.AwayFromZero&lt;/code&gt;.
```powerquery
Int32.From("4.5", null, RoundingMode.AwayFromZero)
```

Result: 
```powerquery
5
```




## Category
Number.Conversion and formatting
