---
title: Text.Trim
---

# Text.Trim


## Description

Poistaa kaikki alussa ja lopussa olevat välilyönnit.


## Syntax

```powerquery
Text.Trim(
    text as text,
    optional trim as any
) as text
```


## Details

Palauttaa kaikkien alussa ja lopussa olevien välilyöntien tekstiarvosta <code>text</code> poistamisen tuloksen.


## Examples

### Example #1 
Poistaa alussa ja lopussa olevat välilyönnit kohteesta &#34;     a b c d    &#34;.
```powerquery
Text.Trim("     a b c d    ")
```

Result: 
```powerquery
"a b c d"
```




## Category
Text.Transformations
