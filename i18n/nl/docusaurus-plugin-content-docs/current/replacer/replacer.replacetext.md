---
title: Replacer.ReplaceText
---

# Replacer.ReplaceText


Vervangt tekst binnen de aangeleverde invoer.


## Syntax

```powerquery
Replacer.ReplaceText(
    text as text,
    old as text,
    new as text
) as text
```


## Remarks

Vervangt de tekst `old` in de oorspronkelijke `text` door de tekst `new`. Deze vervangingsfunctie kan worden gebruikt in `List.ReplaceValue` en `Table.ReplaceValue`.


## Examples

### Example #1
De tekst "hA" vervangen door "Ha" in de tekenreeks "hAllo wereld".
```powerquery
Replacer.ReplaceText("hEllo world", "hE", "He")
```

Result: 
```powerquery
"Hello world"
```




## Category
Replacer
