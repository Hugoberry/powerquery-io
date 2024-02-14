---
title: Text.Combine
---

# Text.Combine


Voegt een lijst met tekstwaarden samen tot één tekstwaarde.


## Syntax

```powerquery
Text.Combine(
    texts as list,
    optional separator as text
) as text
```


## Remarks

Retourneert het resultaat van het combineren van de lijst met tekstwaarden, <code>texts</code>, in één tekstwaarde. Alle <code>null</code> -waarden in <code>texts</code> worden genegeerd.    Er kan een optionele <code>separator</code> worden opgegeven die in de uiteindelijke gecombineerde tekst wordt gebruikt.


## Examples

### Example #1 
Tekstwaarden &#34;Seattle&#34; en &#34;WA&#34; combineren.
```powerquery
Text.Combine({"Seattle", "WA"})
```

Result: 
```powerquery
"SeattleWA"
```


### Example #2 
Combineer de tekstwaarden &#39;Seattle&#39; en &#39;WA&#39;, gescheiden door een komma en een spatie.
```powerquery
Text.Combine({"Seattle", "WA"}, ", ")
```

Result: 
```powerquery
"Seattle, WA"
```


### Example #3 
Combineer de waarden &#39;Seattle&#39;, &lt;code&gt;null&lt;/code&gt; en &#39;WA&#39;, gescheiden door een komma en een spatie. (De &lt;code&gt;null&lt;/code&gt; wordt genegeerd.)
```powerquery
Text.Combine({"Seattle", null, "WA"}, ", ")
```

Result: 
```powerquery
"Seattle, WA"
```




## Category
Text.Transformations
