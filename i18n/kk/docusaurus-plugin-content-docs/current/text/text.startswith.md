---
title: Text.StartsWith
---

# Text.StartsWith


Мәтіннің көрсетілген мәннен басталатынын көрсетеді.


## Syntax

```powerquery
Text.StartsWith(
    text as text,
    substring as text,
    optional comparer as function
) as logical
```


## Remarks

Егер `text` мәтіндік мәні `substring` мәтіндік мәнімен басталса, true мәнін қайтарады.

-   `text`: `text` мәні ізделеді.
-   `substring`: `text` мәні `text` ішінде ізделетін қосалқы жол болып табылады.
-   `comparer`: *\[Міндетті емес\]* A `Comparer` салыстыруды басқару үшін пайдаланылады. Мысалы, `Comparer.OrdinalIgnoreCase` регистрді ескермейтін іздеулерді орындау үшін пайдаланылуы мүмкін.

`comparer` — салыстыруды басқару үшін қолданылатын `Comparer`. Салыстыру құралдарын регистрді ескермейтін немесе мәдениет пен тілді есепке алатын салыстыруларды орындау үшін пайдалануға болады.

Формула тілінде келесі ендірілген салыстыру құралдары бар:

-   `Comparer.Ordinal`: дәл реттік салыстыруды орындау үшін пайдаланылады.
-   `Comparer.OrdinalIgnoreCase`: регистрді ескермейтін дәл реттік салыстыруды орындау үшін пайдаланылады.
-   `Comparer.FromCulture`: мәдениетті есепке алатын салыстыруды орындау үшін пайдаланылады.


## Examples

### Example #1
"Сәлем, Әлем" мәтінінің "сәлем" мәтінімен басталатынын тексеру.
```powerquery
Text.StartsWith("Hello, World", "hello")
```

Result: 
```powerquery
false
```


### Example #2
"Сәлем, Әлем" мәтінінің "Сәлем" мәтінімен басталатынын тексеру.
```powerquery
Text.StartsWith("Hello, World", "Hello")
```

Result: 
```powerquery
true
```


### Example #3
Регистрді елемей, "Сәлем, Әлем" мәтіні "Сәлем" мәтінімен басталатынын тексеру.
```powerquery
Text.StartsWith("Hello, World", "hello", Comparer.OrdinalIgnoreCase)
```

Result: 
```powerquery
true
```




## Category
Text.Membership
