---
title: Replacer.ReplaceText
---

# Replacer.ReplaceText


Substitúe o texto dentro da entrada fornecida.


## Syntax

```powerquery
Replacer.ReplaceText(
    text as text,
    old as text,
    new as text
) as text
```


## Remarks

Substitúe o texto `old` dentro do `text` orixinal co texto `new`. Esta función de substitución pódese utilizar en `List.ReplaceValue` e `Table.ReplaceValue`.


## Examples

### Example #1
Substitúa o texto "oL" con "Ol" na cadea "oLa, mundo".
```powerquery
Replacer.ReplaceText("hEllo world", "hE", "He")
```

Result: 
```powerquery
"Hello world"
```




## Category
Replacer
