---
title: Text.StartsWith
---

# Text.StartsWith


## Description

Мәтіннің көрсетілген мәннен басталатынын көрсетеді.


## Syntax

```powerquery
Text.StartsWith(
    text as text,
    substring as text,
    optional comparer as function
) as logical
```


## Details

<code>text</code> мәтіндік мәні <code>substring</code> мәтіндік мәнімен басталса, true мәнін қайтарады.      <ul>        <li><code>text</code>: <i></i> Ізделетін <code>text</code> мәні</li>        <li><code>substring</code>: <i></i> <code>substring</code></li>        <li><code>comparer</code> ішінде ізделетін ішкі жол болып табылатын <code>text</code> мәні: <i>[Міндетті емес]</i> Салыстыруды басқару үшін қолданылатын <code>Comparer</code>. Мысалы, <code>Comparer.OrdinalIgnoreCase</code> пернетақта регистрінің есебімен іздеу үшін қолданылуы мүмкін</li>      </ul>      <div>        <code>comparer</code> — салыстыруды басқару үшін қолданылатын <code>Comparer</code>. Салыстыру функцияларын пернетақта есебімен немесе тіл және аймақ параметрлерін есепке алатын салыстыру үшін қолдануға болады.      </div>      <div>        Формула тілінде келесі ендірілген салыстыру функциялары бар:      </div>      <ul>        <li><code>Comparer.Ordinal</code>: реттік нөмірі бойынша дәл салыстыру үшін қолданылады</li>        <li><code>Comparer.OrdinalIgnoreCase</code>: пернетақта регистрінің есебімен реттік нөмірі бойынша дәл салыстыру үшін қолданылады</li>        <li> <code>Comparer.FromCulture</code>: аймақтық параметрлер бойынша салыстыру үшін пайдаланылады</li>      </ul>


## Examples

### Example #1 
&#34;Сәлем, Әлем&#34; мәтінінің &#34;сәлем&#34; мәтінімен басталатынын тексеру.
```powerquery
Text.StartsWith("Hello, World", "hello")
```

Result: 
```powerquery
false
```


### Example #2 
&#34;Сәлем, Әлем&#34; мәтінінің &#34;Сәлем&#34; мәтінімен басталатынын тексеру.
```powerquery
Text.StartsWith("Hello, World", "Hello")
```

Result: 
```powerquery
true
```




## Category
Text.Membership
