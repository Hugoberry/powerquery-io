---
title: Text.TrimEnd
---

# Text.TrimEnd


## Description

Poistaa kaikki lopussa olevat välilyönnit.


## Syntax

```powerquery
Text.TrimEnd(
    text as text,
    optional trim as any
) as text
```


## Details

Palauttaa kaikkien lopussa olevien välilyöntien tekstiarvosta <code>text</code> poistamisen tuloksen.


## Examples

### Example #1 
Poistaa lopussa olevat välilyönnit kohteesta &#34;     a b c d    &#34;.
```powerquery
Text.TrimEnd("     a b c d    ")
```

Result: 
```powerquery
"     a b c d"
```




## Category
Text.Transformations
