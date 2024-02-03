---
title: Text.TrimStart
---

# Text.TrimStart


## Description

Poistaa kaikki alussa olevat välilyönnit.


## Syntax

```powerquery
Text.TrimStart(
    text as text,
    optional trim as any
) as text
```


## Details

Palauttaa kaikkien alussa olevien välilyöntien tekstiarvosta <code>text</code> poistamisen tuloksen.


## Examples

### Example #1 
Poistaa alussa olevat välilyönnit kohteesta &#34;     a b c d    &#34;.
```powerquery
Text.TrimStart("   a b c d    ")
```

Result: 
```powerquery
"a b c d    "
```




## Category
Text.Transformations
