---
title: Comparer.FromCulture
---

# Comparer.FromCulture


## Description

Returnerer en sammenligningsfunktion baseret på den angivne kultur og forskel på store og små bogstaver.


## Syntax

```powerquery
Comparer.FromCulture(
    culture as text,
    optional ignoreCase as logical
) as function
```


## Details

Returnerer en sammenligningsfunktion, der bruger <code>culture</code> og den forskel på store og små bogstaver, der er angivet af <code>ignoreCase</code> til at udføre sammenligninger.<br />      <br />      En sammenligningsfunktion accepterer to argumenter og returnerer -1, 0 eller 1 baseret på, om den første værdi er mindre end, lig med  eller større end den anden<br />      <br />      Standardværdien for <code>ignoreCase</code> er false. <code>culture</code> skal være en af de landestandarder, der understøttes af .NET Framework (f.eks. "en-US").     


## Examples

### Example #1 
Sammenlign &#34;a&#34; og &#34;A&#34; ved hjælp af landestandarden &#34;en-US&#34; for at se, om værdierne er de samme.
```powerquery
Comparer.FromCulture("en-US")("a", "A")
```

Result: 
```powerquery
-1
```


### Example #2 
Sammenlign &#34;a&#34; og &#34;A&#34; ved hjælp af landestandarden &#34;en-US&#34;, hvor der ikke skelnes mellem store og små bogstaver, for at se, om værdierne er de samme.
```powerquery
Comparer.FromCulture("en-US", true)("a", "A")
```

Result: 
```powerquery
0
```




## Category
Comparer
