---
title: Replacer.ReplaceText
---

# Replacer.ReplaceText


Ersetzt Text innerhalb der angegebenen Eingabe.


## Syntax

```powerquery
Replacer.ReplaceText(
    text as text,
    old as text,
    new as text
) as text
```


## Remarks

Ersetzt den Text "`old`" in der ursprünglichen Eingabe (`text`) durch den Text "`new`". Diese Ersetzungsfunktion kann in `List.ReplaceValue` und `Table.ReplaceValue` verwendet werden.


## Examples

### Example #1
Ersetzt den Text "hE" in der Zeichenfolge "hEllo world" durch "He".
```powerquery
Replacer.ReplaceText("hEllo world", "hE", "He")
```

Result: 
```powerquery
"Hello world"
```




## Category
Replacer
