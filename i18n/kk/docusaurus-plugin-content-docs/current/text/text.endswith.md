---
title: Text.EndsWith
---

# Text.EndsWith


Мәтіннің көрсетілген мәнде аяқталатынын көрсетеді.


## Syntax

```powerquery
Text.EndsWith(
    text as text,
    substring as text,
    optional comparer as function
) as logical
```


## Remarks

Берілген `text` мәтінінің `substring` көрсетілген мәнімен аяқталатынын білдіреді. Көрсеткіш регистрге тәуелді.

`comparer` — салыстыруды басқару үшін қолданылатын `Comparer`. Пернетақта регистрінің есебімен немесе аймақтық және тілдік параметрлер бойынша салыстыру үшін салыстыру функцияларын пайдалануға болады.

Формула тілінде келесі ендірілген салыстыру функциялары бар:

-   `Comparer.Ordinal`: реттік нөмірі бойынша дәл салыстыру үшін қолданылады
-   `Comparer.OrdinalIgnoreCase`: пернетақта регистрінің есебімен реттік нөмірі бойынша дәл салыстыру үшін қолданылады
-   `Comparer.FromCulture`: аймақтық параметрлер бойынша салыстыру үшін пайдаланылады


## Examples

### Example #1
"Сәлем, Әлем" мәтінінің "әлем" сөзімен аяқталатынын тексеру.
```powerquery
Text.EndsWith("Hello, World", "world")
```

Result: 
```powerquery
false
```


### Example #2
"Сәлем, Әлем" мәтінінің "Әлем" сөзімен аяқталатынын тексеру.
```powerquery
Text.EndsWith("Hello, World", "World")
```

Result: 
```powerquery
true
```




## Category
Text.Membership
