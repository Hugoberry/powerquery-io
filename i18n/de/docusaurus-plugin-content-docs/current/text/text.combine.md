---
title: Text.Combine
---

# Text.Combine


Verkettet eine Liste mit Textwerten zu einem einzelnen Textwert.


## Syntax

```powerquery
Text.Combine(
    texts as list,
    optional separator as text
) as text
```


## Remarks

Gibt das Ergebnis der Kombination der Liste der Textwerte (<code>texts</code>) zu einem einzelnen Textwert zurück. Alle in <code>texts</code> vorhandenen <code>null-</code>-Werte werden ignoriert.    Eine optionale <code>separator</code>, die im abschließenden kombinierten Text verwendet wird, kann angegeben werden.


## Examples

### Example #1 
Fasst die Textwerte &#34;Seattle&#34; und &#34;WA&#34;zusammen.
```powerquery
Text.Combine({"Seattle", "WA"})
```

Result: 
```powerquery
"SeattleWA"
```


### Example #2 
Fasst die Textwerte &#34;Seattle&#34; und &#34;WA&#34; zu einem durch ein Komma und ein Leerzeichen getrennten Wert zusammen.
```powerquery
Text.Combine({"Seattle", "WA"}, ", ")
```

Result: 
```powerquery
"Seattle, WA"
```


### Example #3 
Kombinieren Sie die Werte &#34;Seattle&#34;, &lt;code&gt;null&lt;/code&gt; und &#34;WA&#34;, getrennt durch ein Komma und ein Leerzeichen. (Beachten Sie, dass &lt;code&gt;null&lt;/code&gt; ignoriert wird.)
```powerquery
Text.Combine({"Seattle", null, "WA"}, ", ")
```

Result: 
```powerquery
"Seattle, WA"
```




## Category
Text.Transformations
