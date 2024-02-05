---
title: Text.Combine
---

# Text.Combine


## Description

Sammenkæder en liste over tekstværdier til en enkelt tekstværdi.


## Syntax

```powerquery
Text.Combine(
    texts as list,
    optional separator as text
) as text
```


## Details

Returnerer resultatet af at kombinere listen over tekstværdier <code>texts</code>til en enkelt tekstværdi. Alle værdier af typen <code>null</code>, der findes i <code>texts</code>, ignoreres. Der kan angives en valgfri <code>separator</code> , der bruges i den endelige kombinerede tekst.


## Examples

### Example #1 
Kombiner tekstværdierne &#34;Seattle&#34; og &#34;WA&#34;.
```powerquery
Text.Combine({"Seattle", "WA"})
```

Result: 
```powerquery
"SeattleWA"
```


### Example #2 
Kombiner tekstværdierne &#34;Seattle&#34; og &#34;WA&#34;, adskilt af et komma og et mellemrum.
```powerquery
Text.Combine({"Seattle", "WA"}, ", ")
```

Result: 
```powerquery
"Seattle, WA"
```


### Example #3 
Kombiner værdierne &#34;Seattle&#34;, &lt;code&gt;null&lt;/code&gt; og &#34;WA&#34;, adskilt af et komma og et mellemrum. Bemærk, at &lt;code&gt;null&lt;/code&gt; ignoreres.
```powerquery
Text.Combine({"Seattle", null, "WA"}, ", ")
```

Result: 
```powerquery
"Seattle, WA"
```




## Category
Text.Transformations
