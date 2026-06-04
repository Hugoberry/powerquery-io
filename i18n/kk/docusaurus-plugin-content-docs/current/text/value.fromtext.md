---
title: Value.FromText
---

# Value.FromText


Мәтіндік көріністер түрі қатаң көрсетілген мәнді жасайды.


## Syntax

```powerquery
Value.FromText(
    text as any,
    optional culture as text
) as any
```


## Remarks

Мәтіндік көрсетілімдегі мән кодын ашады және оны сәйкес түрі бар мән ретінде түсіндіреді.

-   `text`: түсіндіруге арналған мәтін.
-   `culture`: (Міндетті емес) Мәтінді түсіндіру үшін қолданылатын тіл және аймақтық параметрлер (мысалы, "en-US").

Бұл функция мәтіндік мәнді алады және мәннің `number`, `logical`, `null`, `datetime`, `duration` немесе `text` түрін қайтарады. Бос мәтін мәні `null` мәні ретінде түсіндіріледі.


## Examples

### Example #1
Санды білдіретін мәтінді оның тиісті сан мәніне түрлендіріңіз.
```powerquery
Value.FromText("12345.6789")
```

Result: 
```powerquery
12345.6789
```


### Example #2
Пайызды білдіретін мәтінді оның тиісті сан мәніне түрлендіріңіз.
```powerquery
Value.FromText("25.4%")
```

Result: 
```powerquery
0.254
```


### Example #3
Француз форматында еуро мәнін білдіретін мәтінді оның тиісті сан мәніне түрлендіріңіз.
```powerquery
Value.FromText("€1,190", "fr-FR")
```

Result: 
```powerquery
1.19
```


### Example #4
Неміс форматындағы күн мен уақытты білдіретін мәтінді оның тиісті күні мен уақыт мәніне түрлендіріңіз.
```powerquery
Value.FromText("24 Dez 2024 14:33:20", "de-DE")
```

Result: 
```powerquery
#datetime(2024, 12, 24, 14, 33, 20)
```




## Category
Text.Conversions from and to text
