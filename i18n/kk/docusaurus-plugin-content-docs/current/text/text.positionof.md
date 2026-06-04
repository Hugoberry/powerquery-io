---
title: Text.PositionOf
---

# Text.PositionOf


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


## Remarks

`text` ішінде табылған `substring` мәтіндік мәнінің көрсетілген данасының орнын қайтарады. Қай дананың орнын қайтару керектігін көрсету үшін `occurrence` міндетті емес параметрін пайдалануға болады (әдепкіде бірінші данасы). `substring` табылмаса, -1 қайтарылады.

`comparer` — салыстыруды басқару үшін қолданылатын `Comparer`. Салыстыру функцияларын пернетақта есебімен немесе тіл және аймақ параметрлерін есепке алатын салыстыру үшін қолдануға болады.

Формула тілінде келесі ендірілген салыстыру функциялары бар:

-   `Comparer.Ordinal`: реттік нөмірі бойынша дәл салыстыру үшін қолданылады
-   `Comparer.OrdinalIgnoreCase`: пернетақта регистрінің есебімен реттік нөмірі бойынша дәл салыстыру үшін қолданылады
-   `Comparer.FromCulture`: аймақтық параметрлер бойынша салыстыру үшін пайдаланылады


## Examples

### Example #1
"Сәлем, Әлем! Сәлем, Әлем!" мәтініндегі "Әлем" бірінші данасының орнын алу.
```powerquery
Text.PositionOf("Hello, World! Hello, World!", "World")
```

Result: 
```powerquery
7
```


### Example #2
"Сәлем, Әлем! Сәлем, Әлем!" мәтініндегі "Әлем" соңғы данасының орнын алу.
```powerquery
Text.PositionOf("Hello, World! Hello, World!", "World", Occurrence.Last)
```

Result: 
```powerquery
21
```




## Category
Text.Membership
