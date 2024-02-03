---
title: Currency.From
---

# Currency.From


## Description

Returnerar ett valutavärde från det givna värdet.


## Syntax

```powerquery
Currency.From(
    value as any,
    optional culture as text,
    optional roundingMode as RoundingMode.Type
) as number
```


## Details

Returnerar ett <code>currency</code>-värde från det givna <code>value</code>.Om det givna <code>value</code> är <code>null</code> returnerar <code>Currency.From</code> <code>null</code>.  Om det givna <code>value</code> är <code>number</code> inom valutaintervallet, så avrundas decimaldelen av <code>value</code> till fyra decimaler och returneras. Om <code>value</code> är av en annan typ, konverteras den först till en <code>number</code> med <code>Number.FromText</code>. Giltigt intervall för valuta är <code>-922,337,203,685,477.5808</code> till <code>922,337,203,685,477.5807</code>. Mer information om tillgängliga avrundningslägen finns i <code>Number.Round</code>. Standardläget är <code>RoundingMode.ToEven</code>. En valfri <code>culture</code> kan även anges (till exempel, "en-US").


## Examples

### Example #1 
Hämta &lt;code&gt;currency&lt;/code&gt;-värdet för &lt;code&gt;&#34;1.23455&#34;&lt;/code&gt;.
```powerquery
Currency.From("1.23455")
```

Result: 
```powerquery
1.2346
```


### Example #2 
Hämta &lt;code&gt;currency&lt;/code&gt;-värdet för &lt;code&gt;&#34;1.23455&#34;&lt;/code&gt; genom att använda &lt;code&gt;RoundingMode.Down&lt;/code&gt;.
```powerquery
Currency.From("1.23455", "en-US", RoundingMode.Down)
```

Result: 
```powerquery
1.2345
```




## Category
Number.Conversion and formatting
