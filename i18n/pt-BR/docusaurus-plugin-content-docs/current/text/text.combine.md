---
title: Text.Combine
---

# Text.Combine


Concatena uma lista de valores de texto em um único valor de texto.


## Syntax

```powerquery
Text.Combine(
    texts as list,
    optional separator as text
) as text
```


## Remarks

Retorna o resultado da combinação da lista de valores de texto, `texts`, em um único valor de texto. Todos os valores `nulos` presentes em `texts` serão ignorados. Um `separator` opcional usado no texto combinado final pode ser especificado.


## Examples

### Example #1
Combine os valores "Seattle" e "WA".
```powerquery
Text.Combine({"Seattle", "WA"})
```

Result: 
```powerquery
"SeattleWA"
```


### Example #2
Combine os valores de texto "Seattle" e "WA" separados por uma vírgula e um espaço.
```powerquery
Text.Combine({"Seattle", "WA"}, ", ")
```

Result: 
```powerquery
"Seattle, WA"
```


### Example #3
Combine os valores "Seattle", `nulos` e "WA", separados por uma vírgula e um espaço. (Observe que o `nulo` é ignorado.)
```powerquery
Text.Combine({"Seattle", null, "WA"}, ", ")
```

Result: 
```powerquery
"Seattle, WA"
```


### Example #4
Combine o primeiro nome, a inicial do meio (se houver) e o sobrenome no nome completo da pessoa.
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
