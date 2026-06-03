---
title: Replacer.ReplaceText
---

# Replacer.ReplaceText


Substitui texto pela entrada fornecida.


## Syntax

```powerquery
Replacer.ReplaceText(
    text as text,
    old as text,
    new as text
) as text
```


## Remarks

Substitui o texto `old` no `text` original pelo texto `new`. Esta função de substituição pode ser utilizada em `List.ReplaceValue` e `Table.ReplaceValue`.


## Examples

### Example #1
Substituir o texto "oL" por "Ol" na cadeia "oLá mundo".
```powerquery
Replacer.ReplaceText("hEllo world", "hE", "He")
```

Result: 
```powerquery
"Hello world"
```




## Category
Replacer
