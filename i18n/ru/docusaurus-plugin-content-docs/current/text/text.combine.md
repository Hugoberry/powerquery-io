---
title: Text.Combine
---

# Text.Combine


Объединяет список текстовых значений в одно текстовое значение.


## Syntax

```powerquery
Text.Combine(
    texts as list,
    optional separator as text
) as text
```


## Remarks

Возвращает результат объединения списка текстовых значений `texts` в одно текстовое значение. Все значения `NULL`, существующие в `texts`, игнорируются. Можно указать необязательный `separator`, используемый в итоговом объединенном тексте.


## Examples

### Example #1
Объединить текстовые значения "Seattle" и "WA".
```powerquery
Text.Combine({"Seattle", "WA"})
```

Result: 
```powerquery
"SeattleWA"
```


### Example #2
Объединить текстовые значения "Seattle" и "WA", разделенные запятыми и пробелом.
```powerquery
Text.Combine({"Seattle", "WA"}, ", ")
```

Result: 
```powerquery
"Seattle, WA"
```


### Example #3
Объединить значения "Seattle", `NULL` и "WA", разделенные запятой и пробелом. (Обратите внимание, что значение `NULL` игнорируется.)
```powerquery
Text.Combine({"Seattle", null, "WA"}, ", ")
```

Result: 
```powerquery
"Seattle, WA"
```


### Example #4
Объединение имени, инициала второго имени (если есть) и фамилии в полное имя пользователя.
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
