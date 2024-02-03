---
title: Text.TrimStart
---

# Text.TrimStart


## Description

Fjerner alle foranstillede mellemrum.


## Syntax

```powerquery
Text.TrimStart(
    text as text,
    optional trim as any
) as text
```


## Details

Returnerer resultatet af at fjerne alle foranstillede mellemrum fra tekstværdien <code>text</code>.


## Examples

### Example #1 
Fjern foranstillede mellemrum fra &#34;     a b c d    &#34;.
```powerquery
Text.TrimStart("   a b c d    ")
```

Result: 
```powerquery
"a b c d    "
```




## Category
Text.Transformations
