---
title: Text.Contains
---

# Text.Contains


## Description

Ішкі жолды қамтитын мәтінді қайтарады.


## Syntax

```powerquery
Text.Contains(
    text as text,
    substring as text,
    optional comparer as function
) as logical
```


## Details

<code>text</code> ішінде <code>substring</code> мәні бар-жоғын анықтайды. Мән табылса, true мәнін қайтарады. Бұл функция қойылмалы таңбаға немесе тұрақты өрнектерге қолдау көрсетпейді.      <br />      <br />      <code>comparer</code> міндетті емес аргументін регистрді ескермейтін немесе мәдениет пен жергілікті тіл параметрлерін ескеретін салыстыру үшін пайдалануға болады.      Формула тілінде келесі ендірілген салыстыру функциялары қолжетімді:      <ul>        <li><code>Comparer.Ordinal</code>: пернетақта регистрінің есебімен реттік нөмірі бойынша дәл салыстыру үшін қолданылады</li>        <li><code>Comparer.OrdinalIgnoreCase</code>: пернетақта регистрінің есебімен реттік нөмірі бойынша дәл салыстыру үшін қолданылады</li>        <li> <code>Comparer.FromCulture</code>: мәдениет пен жергілікті тіл параметрлерін салыстыру үшін пайдаланылады</li>      </ul>


## Examples

### Example #1 
&#34;Сәлем Әлем&#34; мәтінінің &#34;Сәлем&#34; сөзін қамтитынын анықтау.
```powerquery
Text.Contains("Hello World", "Hello")
```

Result: 
```powerquery
true
```


### Example #2 
&#34;Сәлем Әлем&#34; мәтінінің &#34;сәлем&#34; сөзін қамтитынын анықтау.
```powerquery
Text.Contains("Hello World", "hello")
```

Result: 
```powerquery
false
```


### Example #3 
Регистрді ескермейтін салыстыру функциясы арқылы &#34;Hello World&#34; мәтінінде &#34;hello&#34; сөзі бар екенін біліңіз.
```powerquery
Text.Contains("Hello World", "hello", Comparer.OrdinalIgnoreCase)
```

Result: 
```powerquery
true
```




## Category
Text.Membership
