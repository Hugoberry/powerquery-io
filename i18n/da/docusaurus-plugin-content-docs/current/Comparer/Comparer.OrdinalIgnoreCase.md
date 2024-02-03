---
title: Comparer.OrdinalIgnoreCase
---

# Comparer.OrdinalIgnoreCase


## Description

Returnerer en sammenligningsfunktion, hvor der ikke skelnes mellem store og små bogstaver, og hvor der bruges regler for ordenstal til at sammenligne værdier.


## Syntax

```powerquery
Comparer.OrdinalIgnoreCase(
    x as any,
    y as any
) as number
```


## Details

Returnerer en sammenligningsfunktion, hvor der ikke skelnes mellem store og små bogstaver, og som bruger ordenstalsregler til at sammenligne de angivne værdier <code>x</code> og <code>y</code>.<br />        <br />        En sammenligningsfunktion accepterer to argumenter og returnerer -1, 0 eller 1 baseret på, om den første værdi er mindre end, lig med eller større end sekundet.    


## Examples

### Example #1 
Når der bruges regler for ordenstal, hvor der ikke skelnes mellem store og små bogstaver, kan &#34;Abc&#34; sammenlignes med &#34;abc&#34;. Bemærk, at &#34;Abc&#34; er mindre end &#34;abc&#34;, når koden &lt;code&gt;Comparer.Ordinal&lt;/code&gt;. bruges 
```powerquery
Comparer.OrdinalIgnoreCase("Abc", "abc")
```

Result: 
```powerquery
0
```




## Category
Comparer
