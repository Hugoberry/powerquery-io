---
title: Text.Combine
---

# Text.Combine


## Description

Sammanfogar en lista med textvärden till ett textvärde.


## Syntax

```powerquery
Text.Combine(
    texts as list,
    optional separator as text
) as text
```


## Details

Returnerar resultatet av att kombinera listan med textvärden, <code>texts</code>, till ett enda textvärde. Alla <code>null</code> värden som finns i <code>texts</code> ignoreras. 
Du kan ange en valfri <code>separator</code> som används i den slutliga kombinerade texten.


## Examples

### Example #1 
Kombinera textvärdena &#34;Seattle&#34; och &#34;WA&#34;.
```powerquery
Text.Combine({"Seattle", "WA"})
```

Result: 
```powerquery
"SeattleWA"
```


### Example #2 
Kombinera textvärdena &#34;Seattle&#34; och &#34;WA&#34; avgränsade med ett komma eller ett blanksteg.
```powerquery
Text.Combine({"Seattle", "WA"}, ", ")
```

Result: 
```powerquery
"Seattle, WA"
```


### Example #3 
Kombinera värdena &#34;Seattle&#34;, &lt;code&gt;null&lt;/code&gt; och &#34;WA&#34;, avgränsade med kommatecken och blanksteg. (Observera att &lt;code&gt;null&lt;/code&gt; ignoreras.)
```powerquery
Text.Combine({"Seattle", null, "WA"}, ", ")
```

Result: 
```powerquery
"Seattle, WA"
```




## Category
Text.Transformations
