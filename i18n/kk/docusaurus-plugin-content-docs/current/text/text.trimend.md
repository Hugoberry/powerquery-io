---
title: Text.TrimEnd
---

# Text.TrimEnd


Барлық көрсетілген соңындағы таңбаларды жояды.


## Syntax

```powerquery
Text.TrimEnd(
    text as text,
    optional trim as any
) as text
```


## Remarks

Көрсетілгеннен `text` ішінен барлық соңындағы таңбаларды жою нәтижесін қайтарады. Әдепкі бойынша, барлық соңындағы бос орын таңбалары жойылады.

-   `text`: соңындағы таңбаларды жойғыңыз келетін мәтін.
-   `trim`: әдепкі бойынша кесілген бос орын таңбаларын қайта анықтайды. Бұл параметр жалғыз таңба немесе жалғыз таңбалар тізімі болуы мүмкін. Әрбір соңғы таңбаны кесу әрекеті кесілмеген таңба кездескен кезде тоқтайды.


## Examples

### Example #1
" a b c d " мәтінінен соңындағы артық бос орындарды жою.
```powerquery
Text.TrimEnd("     a b c d    ")
```

Result: 
```powerquery
"     a b c d"
```


### Example #2
Толтырылған қалқымалы нүктесі бар санның мәтіндік көрінісінен соңындағы нөлдерді жою.
```powerquery
Text.TrimEnd("03.487700000", "0")
```

Result: 
```powerquery
"03.4877"
```


### Example #3
Бекітілген еннің тіркелгі атауынан соңындағы толтыру таңбаларын жою.
```powerquery
let
    Source = #table(type table [Name = text, Account Name= text, Interest = number],
    {
        {"Bob", "US-847263****@", 2.8410},
        {"Leslie", "FR-4648****@**", 3.8392},
        {"Ringo", "DE-2046790@***", 12.6600}
    }),
    #"Trimmed Account" = Table.TransformColumns(Source, {{"Account Name", each Text.TrimEnd(_, {"*", "@"})}})
in
    #"Trimmed Account"
```

Result: 
```powerquery
#table(type table [Name = text, Account Name = text, Interest = number],
{
    {"Bob", "US-847263", 2.841},
    {"Leslie", "FR-4648", 3.8392},
    {"Ringo", "DE-2046790", 12.66}
})
```




## Category
Text.Transformations
