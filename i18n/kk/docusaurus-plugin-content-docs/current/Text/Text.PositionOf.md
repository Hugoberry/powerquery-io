---
title: Text.PositionOf
---

# Text.PositionOf


## Description

Мәннің бірінші орнын (табылмаса, -1 мәнін) қайтарады.


## Syntax

```powerquery
Text.PositionOf(
    text as text,
    substring as text,
    optional occurrence as Occurrence.Type,
    optional comparer as function
) as any
```


## Details

<code>text</code> ішінде табылған <code>substring</code> мәтіндік мәнінің көрсетілген данасының орнын қайтарады.    Қай дананың орнын қайтару керектігін көрсету үшін <code>occurrence</code> міндетті емес параметрін пайдалануға болады (әдепкіде бірінші данасы).    <code>substring</code> табылмаса, -1 қайтарылады.      <div>        <code>comparer</code> — салыстыруды басқару үшін қолданылатын <code>Comparer</code>. Салыстыру функцияларын пернетақта есебімен немесе тіл және аймақ параметрлерін есепке алатын салыстыру үшін қолдануға болады.      </div>      <div>        Формула тілінде келесі ендірілген салыстыру функциялары бар:      </div>      <ul>        <li><code>Comparer.Ordinal</code>: реттік нөмірі бойынша дәл салыстыру үшін қолданылады</li>        <li><code>Comparer.OrdinalIgnoreCase</code>: пернетақта регистрінің есебімен реттік нөмірі бойынша дәл салыстыру үшін қолданылады</li>        <li> <code>Comparer.FromCulture</code>: аймақтық параметрлер бойынша салыстыру үшін пайдаланылады</li>      </ul>


## Examples

### Example #1 
&#34;Сәлем, Әлем! Сәлем, Әлем!&#34; мәтініндегі &#34;Әлем&#34; бірінші данасының орнын алу.
```powerquery
Text.PositionOf("Hello, World! Hello, World!", "World")
```

Result: 
```powerquery
7
```


### Example #2 
&#34;Сәлем, Әлем! Сәлем, Әлем!&#34; мәтініндегі &#34;Әлем&#34; соңғы данасының орнын алу.
```powerquery
Text.PositionOf("Hello, World! Hello, World!", "World", Occurrence.Last)
```

Result: 
```powerquery
21
```




## Category
Text.Membership
