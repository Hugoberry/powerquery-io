---
title: Text.Contains
---

# Text.Contains


Especifica se o texto contém a subcadeia de caracteres.


## Syntax

```powerquery
Text.Contains(
    text as text,
    substring as text,
    optional comparer as function
) as logical
```


## Remarks

Detecta se `text` contém o valor `substring`. Retornará true se o valor for encontrado. Essa função não oferece suporte a caracteres curinga ou expressões regulares.  
  
O argumento opcional `comparer` pode ser usado para especificar comparações que não diferenciam maiúsculas de minúsculas ou cultura e reconhecimento de localidade. Os seguintes comparadores internos estão disponíveis na linguagem da fórmula:

-   `Comparer.Ordinal`: usado para executar uma comparação ordinal que diferencia maiúsculas de minúsculas
-   `Comparer.OrdinalIgnoreCase`: usado para executar uma comparação ordinal que não diferencia maiúsculas de minúsculas
-   `Comparer.FromCulture`: usado para executar uma comparação com reconhecimento de cultura

Se o primeiro argumento for nulo, essa função retornará nulo.  
  
Todos os caracteres são tratados literalmente. Por exemplo, "DR", " DR", "DR " e " DR " não são considerados iguais uns aos outros.


## Examples

### Example #1
Descubra se o texto "Olá, Mundo" contém "Olá".
```powerquery
Text.Contains("Hello World", "Hello")
```

Result: 
```powerquery
true
```


### Example #2
Descubra se o texto "Olá, Mundo" contém "olá".
```powerquery
Text.Contains("Hello World", "hello")
```

Result: 
```powerquery
false
```


### Example #3
Descubra se o texto “Olá, Mundo” contém “Olá”, usando um comparador que não diferencia maiúsculas de minúsculas.
```powerquery
Text.Contains("Hello World", "hello", Comparer.OrdinalIgnoreCase)
```

Result: 
```powerquery
true
```


### Example #4
Localize as linhas em uma tabela que contenha "A-" ou "7" no código da conta.
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
