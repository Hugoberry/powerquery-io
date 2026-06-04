---
title: Text.Contains
---

# Text.Contains


Devolve se o texto contén a subcadea.


## Syntax

```powerquery
Text.Contains(
    text as text,
    substring as text,
    optional comparer as function
) as logical
```


## Remarks

Detecta se `text` contén o valor `substring`. Devolve verdadeiro se se atopa o valor. Esta función non admite comodíns nin expresións regulares.  
​  
O argumento opcional `comparer` pódese usar para especificar comparacións que non distingan entre maiúsculas e minúsculas ou que teñan en conta a cultura e a configuración rexional. Os seguintes comparadores integrados están dispoñibles na linguaxe de fórmulas:

-   `Comparer.Ordinal`: Úsase para realizar unha comparación ordinal que distingue entre maiúsculas e minúsculas
-   `Comparer.OrdinalIgnoreCase`: Úsase para realizar unha comparación ordinal sen distinción entre maiúsculas e minúsculas
-   `Comparer.FromCulture`: Úsase para realizar unha comparación cultural

Se o primeiro argumento é null, esta función devolve null.  
  
Todos os personaxes son tratados literalmente. Por exemplo, "DR", "DR", "DR" e "DR" non se consideran iguais entre si.


## Examples

### Example #1
Buscar se o texto "Ola, mundo" contén "Ola".
```powerquery
Text.Contains("Hello World", "Hello")
```

Result: 
```powerquery
true
```


### Example #2
Buscar se o texto "Ola, mundo" contén "ola".
```powerquery
Text.Contains("Hello World", "hello")
```

Result: 
```powerquery
false
```


### Example #3
Busque se o texto “Ola mundo” contén “ola” usando un comparador que non distingue entre maiúsculas e minúsculas.
```powerquery
Text.Contains("Hello World", "hello", Comparer.OrdinalIgnoreCase)
```

Result: 
```powerquery
true
```


### Example #4
Busca as filas dunha táboa que conteñan "A-" ou "7" no código da conta.
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
