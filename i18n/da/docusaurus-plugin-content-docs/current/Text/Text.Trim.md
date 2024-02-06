---
title: Text.Trim
---

# Text.Trim


Fjerner alle foranstillede og efterstillede mellemrum.


## Syntax

```powerquery
Text.Trim(
    text as text,
    optional trim as any
) as text
```


## Remarks

Returnerer resultatet af at fjerne alle foranstillede og efterstillede mellemrum fra tekstværdien <code>text</code>.


## Examples

### Example #1 
Fjern foranstillede og efterstillede mellemrum fra &#34;     a b c d    &#34;.
```powerquery
Text.Trim("     a b c d    ")
```

Result: 
```powerquery
"a b c d"
```




## Category
Text.Transformations
