---
title: Text.Combine
---

# Text.Combine


## Description

Spoji seznam besedilnih vrednosti v eno besedilno vrednost.


## Syntax

```powerquery
Text.Combine(
    texts as list,
    optional separator as text
) as text
```


## Details

Vrne rezultat združevanja seznama besedilnih vrednosti <code>texts</code> v eno besedilno vrednost. Vse vrednosti <code>null</code>, ki so prisotne v <code>texts</code>, so prezrte.    Določite lahko nadomestni <code>separator</code>, ki bo uporabljen v končnem sestavljenem besedilu.


## Examples

### Example #1 
Združite besedilni vrednosti &#34;Seattle&#34; in &#34;WA&#34;.
```powerquery
Text.Combine({"Seattle", "WA"})
```

Result: 
```powerquery
"SeattleWA"
```


### Example #2 
Združite besedilni vrednosti &#34;Seattle&#34; in &#34;WA&#34;, ločeni z vejico in presledkom.
```powerquery
Text.Combine({"Seattle", "WA"}, ", ")
```

Result: 
```powerquery
"Seattle, WA"
```


### Example #3 
Združite vrednosti &#34;Seattle&#34;, &lt;code&gt;null&lt;/code&gt; in &#34;WA&#34;, med seboj ločene z vejico in presledkom. (Upoštevajte, da je vrednost &lt;code&gt;null&lt;/code&gt; prezrta.)
```powerquery
Text.Combine({"Seattle", null, "WA"}, ", ")
```

Result: 
```powerquery
"Seattle, WA"
```




## Category
Text.Transformations
