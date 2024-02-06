---
title: Text.TrimEnd
---

# Text.TrimEnd


Fjerner alle efterstillede mellemrum.


## Syntax

```powerquery
Text.TrimEnd(
    text as text,
    optional trim as any
) as text
```


## Remarks

Returnerer resultatet af at fjerne alle efterstillede mellemrum fra tekstværdien <code>text</code>.


## Examples

### Example #1 
Fjern efterstillede mellemrum fra &#34;     a b c d    &#34;.
```powerquery
Text.TrimEnd("     a b c d    ")
```

Result: 
```powerquery
"     a b c d"
```




## Category
Text.Transformations
