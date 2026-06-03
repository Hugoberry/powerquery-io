---
title: Text.Combine
---

# Text.Combine


Bir metin değeri listesini tek bir metin değerine birleştirir.


## Syntax

```powerquery
Text.Combine(
    texts as list,
    optional separator as text
) as text
```


## Remarks

`texts` metin değerleri listesini tek bir metin değeri olarak birleştirmenin sonucunu döndürür. `texts` içindeki tüm `null` değerleri yoksayılır. Birleştirilmiş son metinde kullanılan isteğe bağlı bir `separator` belirtilebilir.


## Examples

### Example #1
"Seattle" ve "WA" metin değerlerini birleştirir.
```powerquery
Text.Combine({"Seattle", "WA"})
```

Result: 
```powerquery
"SeattleWA"
```


### Example #2
"Seattle" ve "WA" metin değerlerini virgül ve boşluk ile ayrılmış şekilde birleştirir.
```powerquery
Text.Combine({"Seattle", "WA"}, ", ")
```

Result: 
```powerquery
"Seattle, WA"
```


### Example #3
"Seattle", `null` ve "WA" değerlerini virgül ve boşluk ile ayrılmış şekilde birleştirin. (`null` değerinin yoksayıldığına dikkat edin.)
```powerquery
Text.Combine({"Seattle", null, "WA"}, ", ")
```

Result: 
```powerquery
"Seattle, WA"
```


### Example #4
Adı, ikinci adın baş harfini (varsa) ve soyadını kişinin tam adıyla birleştirin.
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
