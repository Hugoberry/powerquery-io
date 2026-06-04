---
title: Text.Combine
---

# Text.Combine


텍스트 값 목록을 하나의 텍스트 값으로 연결합니다.


## Syntax

```powerquery
Text.Combine(
    texts as list,
    optional separator as text
) as text
```


## Remarks

텍스트 값 목록(`texts`)을 단일 텍스트 값으로 결합한 결과를 반환합니다. `texts`에 있는 모든 `null` 값은 무시됩니다. 최종 결합된 텍스트에 사용되는 선택적 `separator`은(는) 지정할 수 있습니다.


## Examples

### Example #1
텍스트 값 "Seattle"과 "WA"를 결합합니다.
```powerquery
Text.Combine({"Seattle", "WA"})
```

Result: 
```powerquery
"SeattleWA"
```


### Example #2
"Seattle"과 "WA" 텍스트 값을 쉼표와 공백으로 구분하여 결합합니다.
```powerquery
Text.Combine({"Seattle", "WA"}, ", ")
```

Result: 
```powerquery
"Seattle, WA"
```


### Example #3
"Seattle", `null`, "WA" 값을 쉼표와 공백으로 구분하여 결합합니다(`null`은 무시됩니다).
```powerquery
Text.Combine({"Seattle", null, "WA"}, ", ")
```

Result: 
```powerquery
"Seattle, WA"
```


### Example #4
이름, 중간 이니셜(있는 경우) 및 성을 개인의 전체 이름으로 묶습니다.
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
