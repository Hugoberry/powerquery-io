---
title: Text.Replace
---

# Text.Replace


Мәтіндегі осы жолдың барлық даналарын ауыстырады.


## Syntax

```powerquery
Text.Replace(
    text as text,
    old as text,
    new as text
) as text
```


## Remarks

`text` мәтіндік мәніндегі `old` мәтіндік мәнінің барлық даналарын `new` мәтіндік мәнімен ауыстырудың нәтижесін қайтарады. Бұл функция регистрге байланысты.


## Examples

### Example #1
Сөйлемдегі "the" әр данасын "a" әрпіне ауыстыру.
```powerquery
Text.Replace("the quick brown fox jumps over the lazy dog", "the", "a")
```

Result: 
```powerquery
"a quick brown fox jumps over a lazy dog"
```




## Category
Text.Modification
