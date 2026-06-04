---
title: Text.Combine
---

# Text.Combine


Мәтіндік мәндер тізімін бір мәтіндік мәнге біріктіреді.


## Syntax

```powerquery
Text.Combine(
    texts as list,
    optional separator as text
) as text
```


## Remarks

Мәтін мәндерінің тізімін (`texts`) бір мәтіндік мәнге біріктіру нәтижесін қайтарады. `texts` ішінде бар барлық `NULL` мәндері еленбейді. Нәтижеде біріктірілген мәтінде пайдаланылатын қосымша `separator` көрсетуге болады.


## Examples

### Example #1
"Seattle" және "WA" мәтіндік мәндерін біріктіру.
```powerquery
Text.Combine({"Seattle", "WA"})
```

Result: 
```powerquery
"SeattleWA"
```


### Example #2
Үтірмен және бос орынмен бөлінген "Seattle" және "WA" мәтіндік мәндерін біріктіру.
```powerquery
Text.Combine({"Seattle", "WA"}, ", ")
```

Result: 
```powerquery
"Seattle, WA"
```


### Example #3
Үтір және бос орынмен бөлінген "Seattle", `NULL` және "WA" мәндерін біріктіріңіз. (`NULL` еленбейтінін ескеріңіз.)
```powerquery
Text.Combine({"Seattle", null, "WA"}, ", ")
```

Result: 
```powerquery
"Seattle, WA"
```


### Example #4
Атты, әкесінің атының бірінші әрпін (бар болса) және текті тұлғаның толық аты-жөніне біріктіру.
```powerquery
let
    Source = Table.FromRecords({
        [First Name = "Doug", Middle Initial = "J", Last Name = "Elis"],
        [First Name = "Anna", Middle Initial = "M", Last Name = "Jorayew"],
        [First Name = "Rada", Middle Initial = null, Last Name = "Mihaylova"]
    }),
    FullName = Table.AddColumn(Source, "Full Name", each Text.Combine({[First Name], [Middle Initial], [Last Name]}, " "))
in
    FullName
```

Result: 
```powerquery
Table.FromRecords({
    [First Name = "Doug", Middle Initial = "J", Last Name = "Elis", Full Name = "Doug J Elis"],
    [First Name = "Anna", Middle Initial = "M", Last Name = "Jorayew", Full Name = "Anna M Jorayew"],
    [First Name = "Rada", Middle Initial = null, Last Name = "Mihaylova", Full Name = "Rada Mihaylova"]
})
```




## Category
Text.Transformations
