---
title: Text.Insert
---

# Text.Insert


Inserisce un valore di testo in un altro nella posizione specificata.


## Syntax

```powerquery
Text.Insert(
    text as text,
    offset as number,
    newText as text
) as text
```


## Remarks

Restituisce il risultato dell'inserimento del valore di testo <code>newText</code> nel valore di testo <code>text</code> nella posizione <code>offset</code>. Le posizioni iniziano dal numero 0.


## Examples

### Example #1 
Inserire &#34;C&#34; tra &#34;B&#34; e &#34;D&#34; in ABD&#34;.
```powerquery
Text.Insert("ABD", 2, "C")
```

Result: 
```powerquery
"ABCD"
```




## Category
Text.Modification
