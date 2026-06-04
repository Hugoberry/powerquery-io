---
title: Replacer.ReplaceText
---

# Replacer.ReplaceText


Substitueix el text dins de l'entrada proporcionada.


## Syntax

```powerquery
Replacer.ReplaceText(
    text as text,
    old as text,
    new as text
) as text
```


## Remarks

Substitueix el text `old` del `text` original pel text `new`. Aquesta funció de substitució es pot utilitzar a `List.ReplaceValue` i `Table.ReplaceValue`.


## Examples

### Example #1
Substitueix el text "hE" per "He" a la cadena "hEllo world".
```powerquery
Replacer.ReplaceText("hEllo world", "hE", "He")
```

Result: 
```powerquery
"Hello world"
```




## Category
Replacer
