---
title: Text.Remove
---

# Text.Remove


## Description

Pašalinami visi nurodyto simbolio ar simbolių sąrašo iš įvesties tekstinės reikšmės atvejai.


## Syntax

```powerquery
Text.Remove(
    text as text,
    removeChars as any
) as text
```


## Details

Pateikiama tekstinės reikšmės <code>text</code> kopija su pašalintais visais simboliais nuo <code>removeChars</code>.  


## Examples

### Example #1 
Pašalinkite simbolius „,“ ir „;“ iš tekstinės reikšmės.
```powerquery
Text.Remove("a,b;c", {",",";"})
```

Result: 
```powerquery
"abc"
```




## Category
Text.Modification
