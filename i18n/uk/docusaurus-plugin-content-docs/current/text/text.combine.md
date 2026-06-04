---
title: Text.Combine
---

# Text.Combine


Об'єднує список текстових значень в одне текстове значення.


## Syntax

```powerquery
Text.Combine(
    texts as list,
    optional separator as text
) as text
```


## Remarks

Повертає результат об’єднання списку текстових значень (`texts`) у єдине текстове значення. Усі `Null-значення`, наявні в `texts`, ігноруються. Можна вказати додатковий `separator`, що використовуватиметься в остаточному об’єднаному тексті.


## Examples

### Example #1
Об'єднати текстові значення "Seattle" і "WA".
```powerquery
Text.Combine({"Seattle", "WA"})
```

Result: 
```powerquery
"SeattleWA"
```


### Example #2
Об’єднайте текстові значення "Seattle" і "WA", розділивши їх комою з пробілом.
```powerquery
Text.Combine({"Seattle", "WA"}, ", ")
```

Result: 
```powerquery
"Seattle, WA"
```


### Example #3
Об’єднує значення "Seattle", `Null` і "WA", розділені комою з пробілом. (Зверніть увагу, що `Null-значення` ігнорується.)
```powerquery
Text.Combine({"Seattle", null, "WA"}, ", ")
```

Result: 
```powerquery
"Seattle, WA"
```


### Example #4
Об’єднайте ім’я, по батькові (якщо є) та прізвище в повне ім’я особи.
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
