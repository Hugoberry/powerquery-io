---
title: Replacer.ReplaceText
---

# Replacer.ReplaceText


Sostituisce il testo nell'input specificato.


## Syntax

```powerquery
Replacer.ReplaceText(
    text as text,
    old as text,
    new as text
) as text
```


## Remarks

Sostituisce il testo `old` nell'originale `text` con il testo `new`. Questa funzione di sostituzione può essere utilizzata in `List.ReplaceValue` e `Table.ReplaceValue`.


## Examples

### Example #1
Sostituire il testo "hE" con "He" nella stringa "hEllo world".
```powerquery
Replacer.ReplaceText("hEllo world", "hE", "He")
```

Result: 
```powerquery
"Hello world"
```




## Category
Replacer
