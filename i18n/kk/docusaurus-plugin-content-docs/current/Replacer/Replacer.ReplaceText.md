---
title: Replacer.ReplaceText
---

# Replacer.ReplaceText


## Description

Көрсетілген енгізбедегі мәтінді ауыстырады.


## Syntax

```powerquery
Replacer.ReplaceText(
    text as text,
    old as text,
    new as text
) as text
```


## Details

Бастапқы <code>text</code> ішіндегі <code>old</code> мәтінін <code>new</code> мәтінімен ауыстырады. Бұл алмастыру құралын <code>List.ReplaceValue</code> және <code>Table.ReplaceValue</code> ішінде пайдалануға болады.


## Examples

### Example #1 
&#34;hEllo world&#34; жолында &#34;hE&#34; мәтінін &#34;He&#34; мәтінімен ауыстыру.
```powerquery
Replacer.ReplaceText("hEllo world", "hE", "He")
```

Result: 
```powerquery
"Hello world"
```




## Category
Replacer
