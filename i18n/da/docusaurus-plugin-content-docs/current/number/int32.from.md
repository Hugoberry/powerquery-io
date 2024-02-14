---
title: Int32.From
---

# Int32.From


Opretter et 32-bit heltal ud fra den angivne værdi.


## Syntax

```powerquery
Int32.From(
    value as any,
    optional culture as text,
    optional roundingMode as RoundingMode.Type
) as number
```


## Remarks

Returnerer et 32-bit heltalsværdi <code>number</code> fra den angivne <code>value</code>. Hvis den angivne <code>value</code> er <code>null</code>, returnerer <code>Int32.From</code> <code>null</code>.  Hvis den angivne <code>value</code> er <code>number</code> inden for intervallet 32-bit heltal uden en brøkdel, returneres <code>value</code>. Hvis det har en brøkdel, afrundes tallet med den angivne afrundingstilstand. Standardafrundingstilstanden er <code>RoundingMode.ToEven</code>. Hvis <code>value</code> er af en anden type, konverteres den først til en <code>number</code> ved hjælp af <code>Number.FromText</code>. Se <code>Number.Round</code> for de tilgængelige afrundingstilstande. Der kan også angives en valgfri <code>culture</code> (f.eks. "en-US").


## Examples

### Example #1 
Få 32-bit heltalsværdien af typen &lt;code&gt;number&lt;/code&gt; for &lt;code&gt;&#34;4&#34;&lt;/code&gt;.
```powerquery
Int32.From("4")
```

Result: 
```powerquery
4
```


### Example #2 
Få 32-bit heltalsværdien af typen &lt;code&gt;number&lt;/code&gt; for &lt;code&gt;&#34;4.5&#34;&lt;/code&gt; ved hjælp af &lt;code&gt;RoundingMode.AwayFromZero&lt;/code&gt;.
```powerquery
Int32.From("4.5", null, RoundingMode.AwayFromZero)
```

Result: 
```powerquery
5
```




## Category
Number.Conversion and formatting
