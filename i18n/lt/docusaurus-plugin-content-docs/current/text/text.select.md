---
title: Text.Select
---

# Text.Select


Pažymimi visi nurodyto simbolio ar simbolių sąrašo iš įvesties tekstinės reikšmės atvejai.


## Syntax

```powerquery
Text.Select(
    text as text,
    selectChars as any
) as text
```


## Remarks

Pateikiama tekstinės reikšmės `text` kopija su pašalintais visais simboliais, kurių nėra `selectChars`.


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
