---
title: Text.Contains
---

# Text.Contains


Ішкі жолды қамтитын мәтінді қайтарады.


## Syntax

```powerquery
Text.Contains(
    text as text,
    substring as text,
    optional comparer as function
) as logical
```


## Remarks

`text` ішінде `substring` мәні бар-жоғын анықтайды. Мән табылса, true жауабын береді. Бұл функция қойылмалы таңбаларды немесе тұрақты өрнектерді қолдамайды.  
  
Қосымша аргумент `comparer` регистрге сезімтал емес немесе мәдениет және тілді есепке алатын салыстыруларды көрсету үшін пайдаланылуы мүмкін. Формула тілінде келесі кіріктірілген салыстырғыштар бар:

-   `Comparer.Ordinal`: Регистрге сезімтал ординалдық салыстыруды орындау үшін қолданылады
-   `Comparer.OrdinalIgnoreCase`: Регистрге сезімтал ординалдық салыстыруды орындау үшін қолданылады
-   `Comparer.FromCulture`: Мәдениетті есепке алатын салыстыруды орындау үшін қолданылады

Егер бірінші аргумент null болса, бұл функция нөлді қайтарады.  
  
Барлық таңбалар дәлме-дәл қаралады. Мысалы, "DR", " DR", "DR " және " DR " бір-біріне тең деп саналмайды.


## Examples

### Example #1
"Сәлем Әлем" мәтінінің "Сәлем" сөзін қамтитынын анықтау.
```powerquery
Text.Contains("Hello World", "Hello")
```

Result: 
```powerquery
true
```


### Example #2
"Сәлем Әлем" мәтінінің "сәлем" сөзін қамтитынын анықтау.
```powerquery
Text.Contains("Hello World", "hello")
```

Result: 
```powerquery
false
```


### Example #3
Регистрді ескермейтін салыстыру функциясы арқылы "Hello World" мәтінінде "hello" сөзі бар екенін біліңіз.
```powerquery
Text.Contains("Hello World", "hello", Comparer.OrdinalIgnoreCase)
```

Result: 
```powerquery
true
```


### Example #4
Тіркелгі кодындағы "А-" немесе "7" бар кестедегі жолдарды табыңыз.
```powerquery
let
    Source = #table(type table [Account Code = text, Posted Date = date, Sales = number],
    {
        {"US-2004", #date(2023,1,20), 580},
        {"CA-8843", #date(2023,7,18), 280},
        {"PA-1274", #date(2022,1,12), 90},
        {"PA-4323", #date(2023,4,14), 187},
        {"US-1200", #date(2022,12,14), 350},
        {"PTY-507", #date(2023,6,4), 110}
    }),
    #"Filtered rows" = Table.SelectRows(
        Source,
        each Text.Contains([Account Code], "A-") or
            Text.Contains([Account Code], "7"))
in
    #"Filtered rows"
    
```

Result: 
```powerquery
#table(type table [Account Code = text, Posted Date = date, Sales = number],
{
    {"CA-8843", #date(2023,7,18), 280},
    {"PA-1274", #date(2022,1,12), 90},
    {"PA-4323", #date(2023,4,14), 187},
    {"PTY-507", #date(2023,6,4), 110}
})
    
```




## Category
Text.Membership
