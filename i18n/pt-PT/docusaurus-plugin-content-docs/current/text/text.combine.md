---
title: Text.Combine
---

# Text.Combine


Concatena uma lista de valores de texto num valor de texto.


## Syntax

```powerquery
Text.Combine(
    texts as list,
    optional separator as text
) as text
```


## Remarks

Devolve o resultado da combinação da lista de valores de texto, `texts`, num único valor de texto. Quaisquer valores `nulos` presentes no `texts` são ignorados. É possível especificar uma `separator` opcional utilizada no texto combinado final.


## Examples

### Example #1
Combinar os valores de texto "Seattle" e "WA".
```powerquery
Text.Combine({"Seattle", "WA"})
```

Result: 
```powerquery
"SeattleWA"
```


### Example #2
Combinar os valores de texto "Seattle" e "WA" separados por uma vírgula e um espaço.
```powerquery
Text.Combine({"Seattle", "WA"}, ", ")
```

Result: 
```powerquery
"Seattle, WA"
```


### Example #3
Combine os valores "Seattle", `nulos` e "WA", separados por uma vírgula e um espaço. (Tenha em atenção que o `nulo` é ignorado.)
```powerquery
Text.Combine({"Seattle", null, "WA"}, ", ")
```

Result: 
```powerquery
"Seattle, WA"
```


### Example #4
Combine o nome próprio, a inicial do meio (se houver) e o apelido no nome completo do indivíduo.
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
