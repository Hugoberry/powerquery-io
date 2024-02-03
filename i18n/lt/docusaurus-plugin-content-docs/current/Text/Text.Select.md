---
title: Text.Select
---

# Text.Select


## Description

Pažymimi visi nurodyto simbolio ar simbolių sąrašo iš įvesties tekstinės reikšmės atvejai.


## Syntax

```powerquery
Text.Select(
    text as text,
    selectChars as any
) as text
```


## Details

Pateikiama tekstinės reikšmės <code>text</code> kopija su pašalintais visais simboliais, kurių nėra <code>selectChars</code>.  


## Examples

### Example #1 
Pažymėkite visus tekstinės reikšmės simbolius nuo a iki z.
```powerquery
Text.Select("a,b;c", {"a".."z"})
```

Result: 
```powerquery
"abc"
```




## Category
Text.Modification
