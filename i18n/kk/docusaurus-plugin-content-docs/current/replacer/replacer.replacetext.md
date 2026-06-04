---
title: Replacer.ReplaceText
---

# Replacer.ReplaceText


Көрсетілген енгізбедегі мәтінді ауыстырады.


## Syntax

```powerquery
Replacer.ReplaceText(
    text as text,
    old as text,
    new as text
) as text
```


## Remarks

Бастапқы `text` ішіндегі `old` мәтінін `new` мәтінімен ауыстырады. Бұл алмастыру құралын `List.ReplaceValue` және `Table.ReplaceValue` ішінде пайдалануға болады.


## Examples

### Example #1
"hEllo world" жолында "hE" мәтінін "He" мәтінімен ауыстыру.
```powerquery
Replacer.ReplaceText("hEllo world", "hE", "He")
```

Result: 
```powerquery
"Hello world"
```




## Category
Replacer
