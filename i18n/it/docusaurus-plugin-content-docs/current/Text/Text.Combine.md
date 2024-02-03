---
title: Text.Combine
---

# Text.Combine


## Description

Concatena un elenco di valori di testo in un unico valore di testo.


## Syntax

```powerquery
Text.Combine(
    texts as list,
    optional separator as text
) as text
```


## Details

Restituisce il risultato della combinazione dell'elenco di valori di testo, <code>texts</code>, in un singolo valore di testo. Tutti i valori <code>null</code> presenti in <code>texts</code> vengono ignorati.    È possibile specificare un <code>separator</code> facoltativo utilizzato nel testo combinato finale.


## Examples

### Example #1 
Combinare i valori di testo &#34;Seattle&#34; e &#34;WA&#34;.
```powerquery
Text.Combine({"Seattle", "WA"})
```

Result: 
```powerquery
"SeattleWA"
```


### Example #2 
Combinare i valori di testo &#34;Seattle&#34; e &#34;WA&#34; separati da una virgola e uno spazio.
```powerquery
Text.Combine({"Seattle", "WA"}, ", ")
```

Result: 
```powerquery
"Seattle, WA"
```


### Example #3 
Combinare i valori &#34;Seattle&#34;, &lt;code&gt;null&lt;/code&gt; e &#34;WA&#34;, separati da una virgola e uno spazio. Si noti che &lt;code&gt;null&lt;/code&gt; viene ignorato.
```powerquery
Text.Combine({"Seattle", null, "WA"}, ", ")
```

Result: 
```powerquery
"Seattle, WA"
```




## Category
Text.Transformations
