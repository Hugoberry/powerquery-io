---
title: Int8.From
---

# Int8.From


## Description

Opretter et 8-bit heltal med fortegn ud fra den angivne værdi.


## Syntax

```powerquery
Int8.From(
    value as any,
    optional culture as text,
    optional roundingMode as RoundingMode.Type
) as number
```


## Details

Returnerer et 8-bit heltalsværdi <code>number</code> fra den angivne <code>value</code>. Hvis den angivne <code>value</code> er <code>null</code>, returnerer <code>Int8.From</code> <code>null</code>.  Hvis den angivne <code>value</code> er <code>number</code> inden for intervallet 8-bit heltal med fortegn uden en brøkdel, returneres <code>value</code>. Hvis det har en brøkdel, afrundes tallet med den angivne afrundingstilstand. Standardafrundingstilstanden er <code>RoundingMode.ToEven</code>. Hvis <code>value</code> er af en anden type, konverteres den først til en <code>number</code> ved hjælp af <code>Number.FromText</code>. Se <code>Number.Round</code> for de tilgængelige afrundingstilstande. Der kan også angives en valgfri <code>culture</code> (f.eks. "en-US").


## Examples

### Example #1 
Få 8-bit heltalsværdien med fortegn af typen &lt;code&gt;number&lt;/code&gt; for &lt;code&gt;&#34;4&#34;&lt;/code&gt;.
```powerquery
Int8.From("4")
```

Result: 
```powerquery
4
```


### Example #2 
Få 8-bit heltalsværdien med fortegn af typen &lt;code&gt;number&lt;/code&gt; &lt;code&gt;&#34;4.5&#34;&lt;/code&gt; ved hjælp af &lt;code&gt;RoundingMode.AwayFromZero&lt;/code&gt;.
```powerquery
Int8.From("4.5", null, RoundingMode.AwayFromZero)
```

Result: 
```powerquery
5
```




## Category
Number.Conversion and formatting
