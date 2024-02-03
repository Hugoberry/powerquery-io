---
title: Text.Combine
---

# Text.Combine


## Description

Concatenează o listă de valori text într-o singură valoare text.


## Syntax

```powerquery
Text.Combine(
    texts as list,
    optional separator as text
) as text
```


## Details

Returnează rezultatul combinării listei de valori text, <code>texts</code>, într-o singură valoare text. Toate valorile <code></code> nule prezente în <code>texts</code> sunt ignorate.    Se poate specifica un <code>separator</code> opțional utilizat în textul combinat final.


## Examples

### Example #1 
Combinaţi valorile text „Seattle” şi „WA”.
```powerquery
Text.Combine({"Seattle", "WA"})
```

Result: 
```powerquery
"SeattleWA"
```


### Example #2 
Combinaţi valorile text „Seattle” și „WA” separate printr-o virgulă și un spaţiu.
```powerquery
Text.Combine({"Seattle", "WA"}, ", ")
```

Result: 
```powerquery
"Seattle, WA"
```


### Example #3 
Combinați valorile &#34;Seattle&#34;, &lt;code&gt;&lt;/code&gt; null și &#34;WA&#34;, separate prin virgulă și spațiu. (Rețineți că &lt;code&gt;nul&lt;/code&gt; este ignorat.)
```powerquery
Text.Combine({"Seattle", null, "WA"}, ", ")
```

Result: 
```powerquery
"Seattle, WA"
```




## Category
Text.Transformations
