---
title: Text.Replace
---

# Text.Replace


## Description

Мәтіндегі осы жолдың барлық даналарын ауыстырады.


## Syntax

```powerquery
Text.Replace(
    text as text,
    old as text,
    new as text
) as text
```


## Details

<code>text</code> мәтіндік мәніндегі <code>old</code> мәтіндік мәнінің барлық даналарын <code>new</code> мәтіндік мәнімен ауыстырудың нәтижесін қайтарады. Бұл функция регистрге байланысты.


## Examples

### Example #1 
Сөйлемдегі &#34;the&#34; әр данасын &#34;a&#34; әрпіне ауыстыру.
```powerquery
Text.Replace("the quick brown fox jumps over the lazy dog", "the", "a")
```

Result: 
```powerquery
"a quick brown fox jumps over a lazy dog"
```




## Category
Text.Modification
