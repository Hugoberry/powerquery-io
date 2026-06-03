---
title: Text.Contains
---

# Text.Contains


Indica se o texto contém a subcadeia.


## Syntax

```powerquery
Text.Contains(
    text as text,
    substring as text,
    optional comparer as function
) as logical
```


## Remarks

Deteta se `text` contém o valor `substring`. Devolve true se o valor for encontrado. Esta função não suporta carateres universais nem expressões regulares.  
  
O argumento opcional `comparer` poderá ser utilizado para especificar comparações não sensíveis às maiúsculas e minúsculas ou sensíveis à cultura e à região. Os comparadores incorporados seguintes estão disponíveis na linguagem de fórmulas:

-   `Comparer.Ordinal`: utilizado para efetuar uma comparação ordinal sensível às maiúsculas e minúsculas
-   `Comparer.OrdinalIgnoreCase`: utilizado para efetuar uma comparação ordinal não sensível às maiúsculas e minúsculas
-   `Comparer.FromCulture`: utilizado para efetuar uma comparação sensível à cultura

Se o primeiro argumento for null, esta função devolve null.  
  
Todos os carateres são tratados literalmente. Por exemplo, "DR", " DR", "DR " e " DR " não são considerados iguais entre si.


## Examples

### Example #1
Determinar se o texto "Olá Mundo" contém "Olá".
```powerquery
Text.Contains("Hello World", "Hello")
```

Result: 
```powerquery
true
```


### Example #2
Determinar se o texto "Olá Mundo" contém "olá".
```powerquery
Text.Contains("Hello World", "hello")
```

Result: 
```powerquery
false
```


### Example #3
Saiba se o texto "Hello World" contém a palavra "hello", utilizando um comparador não sensível a maiúsculas/minúsculas.
```powerquery
Text.Contains("Hello World", "hello", Comparer.OrdinalIgnoreCase)
```

Result: 
```powerquery
true
```


### Example #4
Localizar as linhas numa tabela que contenha "A-" ou "7" no código da conta.
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
