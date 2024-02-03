---
title: Text.Insert
---

# Text.Insert


## Description

Көрсетілген орында бір мәтіндік мәнді екіншісіне кірістіреді.


## Syntax

```powerquery
Text.Insert(
    text as text,
    offset as number,
    newText as text
) as text
```


## Details

<code>offset</code> орнында <code>newText</code> мәтіндік мәнін <code>text</code> мәтіндік мәніне кірістірудің нәтижесін қайтарады. Бастауды 0 санына орналастырады.


## Examples

### Example #1 
&#34;ABD&#34; ішінде &#34;B&#34; және &#34;D&#34; арасында &#34;C&#34; кірістіру.
```powerquery
Text.Insert("ABD", 2, "C")
```

Result: 
```powerquery
"ABCD"
```




## Category
Text.Modification
