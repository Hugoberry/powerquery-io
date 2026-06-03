---
title: Text.Insert
---

# Text.Insert


Inserisce un valore di testo in un altro nella posizione specificata.


## Syntax

```powerquery
Text.Insert(
    text as text,
    offset as number,
    newText as text
) as text
```


## Remarks

Restituisce il risultato dell'inserimento del valore di testo `newText` nel valore di testo `text` nella posizione `offset`. Le posizioni iniziano dal numero 0.


## Examples

### Example #1
Inserire "C" tra "B" e "D" in ABD".
```powerquery
Text.Insert("ABD", 2, "C")
```

Result: 
```powerquery
"ABCD"
```




## Category
Text.Modification
