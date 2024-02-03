---
title: Text.EndsWith
---

# Text.EndsWith


## Description

Мәтіннің көрсетілген мәнде аяқталатынын көрсетеді.


## Syntax

```powerquery
Text.EndsWith(
    text as text,
    substring as text,
    optional comparer as function
) as logical
```


## Details

Берілген <code>text</code> мәтінінің <code>substring</code> көрсетілген мәнімен аяқталатынын білдіреді. Көрсеткіш регистрге тәуелді.      <div>        <code>comparer</code> — салыстыруды басқару үшін қолданылатын <code>Comparer</code>. Пернетақта регистрінің есебімен немесе аймақтық және тілдік параметрлер бойынша салыстыру үшін салыстыру функцияларын пайдалануға болады.      </div>      <div>        Формула тілінде келесі ендірілген салыстыру функциялары бар:      </div>      <ul>        <li><code>Comparer.Ordinal</code>: реттік нөмірі бойынша дәл салыстыру үшін қолданылады</li>        <li><code>Comparer.OrdinalIgnoreCase</code>: пернетақта регистрінің есебімен реттік нөмірі бойынша дәл салыстыру үшін қолданылады</li>        <li> <code>Comparer.FromCulture</code>: аймақтық параметрлер бойынша салыстыру үшін пайдаланылады</li>      </ul>


## Examples

### Example #1 
&#34;Сәлем, Әлем&#34; мәтінінің &#34;әлем&#34; сөзімен аяқталатынын тексеру.
```powerquery
Text.EndsWith("Hello, World", "world")
```

Result: 
```powerquery
false
```


### Example #2 
&#34;Сәлем, Әлем&#34; мәтінінің &#34;Әлем&#34; сөзімен аяқталатынын тексеру.
```powerquery
Text.EndsWith("Hello, World", "World")
```

Result: 
```powerquery
true
```




## Category
Text.Membership
