---
title: Currency.From
---

# Currency.From


## Description

Returnerer en valutaværdi for den angivne værdi.


## Syntax

```powerquery
Currency.From(
    value as any,
    optional culture as text,
    optional roundingMode as RoundingMode.Type
) as number
```


## Details

Returnerer en værdi af typen <code>currency</code> fra den angivne <code>value</code>. Hvis den angivne <code>value</code> er <code>null</code>, returnerer <code>Currency.From</code> <code>null</code>.  Hvis den angivne <code>value</code> er <code>number</code> inden for valutaområdet, afrundes en brøkdel af <code>value</code> til 4 decimaler og returneres. Hvis <code>value</code> er af en anden type, konverteres den først til en <code>number</code> ved hjælp af <code>Number.FromText</code>. Det gyldige interval for valuta er <code>-922.337.203.685.477,5808</code> til <code>922.337.203.685.477,5807</code>. Se <code>Number.Round</code> for de tilgængelige afrundingstilstande. Standarden er <code>RoundingMode.ToEven</code>. Der kan også angives en valgfri <code>culture</code> (f.eks. "en-US").


## Examples

### Example #1 
Hent &lt;code&gt;currency&lt;/code&gt;-værdien af &lt;code&gt;&#34;1.23455&#34;&lt;/code&gt;.
```powerquery
Currency.From("1.23455")
```

Result: 
```powerquery
1.2346
```


### Example #2 
Hent værdien &lt;code&gt;currency&lt;/code&gt; på &lt;code&gt;&#34;1.23455&#34;&lt;/code&gt; ved hjælp af &lt;code&gt;RoundingMode.Down&lt;/code&gt;.
```powerquery
Currency.From("1.23455", "en-US", RoundingMode.Down)
```

Result: 
```powerquery
1.2345
```




## Category
Number.Conversion and formatting
