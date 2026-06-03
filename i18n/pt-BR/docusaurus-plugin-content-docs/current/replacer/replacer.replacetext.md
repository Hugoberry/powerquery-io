---
title: Replacer.ReplaceText
---

# Replacer.ReplaceText


Substitui o texto na entrada fornecida.


## Syntax

```powerquery
Replacer.ReplaceText(
    text as text,
    old as text,
    new as text
) as text
```


## Remarks

Substitui o texto `old` no `text` original pelo texto `new`. Essa função substituta pode ser usada em `List.ReplaceValue` e em `Table.ReplaceValue`.


## Examples

### Example #1
Substitua o texto "oL" por "Ol" na cadeia de caracteres "oLá, mundo".
```powerquery
Replacer.ReplaceText("hEllo world", "hE", "He")
```

Result: 
```powerquery
"Hello world"
```




## Category
Replacer
