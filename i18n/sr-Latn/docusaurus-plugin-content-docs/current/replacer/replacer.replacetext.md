---
title: Replacer.ReplaceText
---

# Replacer.ReplaceText


Zamenjuje tekst u okviru navedenog unosa.


## Syntax

```powerquery
Replacer.ReplaceText(
    text as text,
    old as text,
    new as text
) as text
```


## Remarks

Zamenjuje tekst `old` u prvobitnom `text` tekstom `new`. Ova funkcija zamene se može koristiti u `List.ReplaceValue` i `Table.ReplaceValue`.


## Examples

### Example #1
Zamena teksta „hE“ tekstom „He“ u okviru niske „hEllo world“.
```powerquery
Replacer.ReplaceText("hEllo world", "hE", "He")
```

Result: 
```powerquery
"Hello world"
```




## Category
Replacer
