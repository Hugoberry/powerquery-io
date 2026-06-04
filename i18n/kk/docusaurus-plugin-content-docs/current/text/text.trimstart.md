---
title: Text.TrimStart
---

# Text.TrimStart


Барлық көрсетілген бастапқы таңбаларды жояды.


## Syntax

```powerquery
Text.TrimStart(
    text as text,
    optional trim as any
) as text
```


## Remarks

Көрсетілгеннен `text` ішінен барлық бастапқы таңбаларды жою нәтижесін қайтарады. Әдепкі бойынша, барлық бастапқы бос орын таңбалары жойылады.

-   `text`: бастапқы таңбаларды жойғыңыз келетін мәтін.
-   `trim`: әдепкі бойынша кесілген бос орын таңбаларын қайта анықтайды. Бұл параметр жалғыз таңба немесе жалғыз таңбалар тізімі болуы мүмкін. Әрбір бастапқы таңбаны кесу әрекеті кесілмеген таңба кездескен кезде тоқтайды.


## Examples

### Example #1
" a b c d " мәтінінен алдындағы артық бос орындарды жою.
```powerquery
Text.TrimStart("   a b c d    ")
```

Result: 
```powerquery
"a b c d    "
```


### Example #2
Санның мәтіндік көрінісінен бастапқы нөлдерді жою.
```powerquery
Text.TrimStart("0000056.420", "0")
```

Result: 
```powerquery
"56.420"
```


### Example #3
Бекітілген еннің тіркелгі атауынан бастапқы толтыру таңбаларын жою.
```powerquery
let
    Source = #table(type table [Name = text, Account Name= text, Interest = number],
    {
        {"Bob", "@****847263-US", 2.8410},
        {"Leslie", "@******4648-FR", 3.8392},
        {"Ringo", "@***2046790-DE", 12.6600}
    }),
    #"Trimmed Account" = Table.TransformColumns(Source, {{"Account Name", each Text.TrimStart(_, {"*", "@"})}})
in
    #"Trimmed Account"
```

Result: 
```powerquery
#table(type table [Name = text, Account Name = text, Interest = number],
{
    {"Bob", "847263-US", 2.841},
    {"Leslie", "4648-FR", 3.8392},
    {"Ringo", "2046790-DE", 12.66}
})
```




## Category
Text.Transformations
