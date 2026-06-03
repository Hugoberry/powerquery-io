---
title: Text.Trim
---

# Text.Trim


Remove todos os caracteres à esquerda e à direita especificados.


## Syntax

```powerquery
Text.Trim(
    text as text,
    optional trim as any
) as text
```


## Remarks

Devolve o resultado da remoção de todos os carateres à esquerda e à direita do `text`especificado. Por predefinição, todos os carateres de espaço em branco à esquerda e à direita são removidos.

-   `text`: o texto a partir do qual os caracteres à esquerda e à direita devem ser removidos.
-   `trim`: substitui os caracteres de espaço em branco que são cortados por predefinição. Este parâmetro pode ser um caráter único ou uma lista de carateres únicos. Cada operação de corte à esquerda e à direita para quando é encontrado um caráter não cortado.


## Examples

### Example #1
Remover os espaços em branco à direita e à esquerda de " a b c d ".
```powerquery
Text.Trim("     a b c d    ")
```

Result: 
```powerquery
"a b c d"
```


### Example #2
Remover os zeros à esquerda e à direita da representação de texto de um número.
```powerquery
Text.Trim("0000056.4200", "0")
```

Result: 
```powerquery
"56.42"
```


### Example #3
Remova os parênteses à esquerda e à direita de uma tag HTML.
```powerquery
Text.Trim("<div/>", {"<", ">", "/"})
```

Result: 
```powerquery
"div"
```


### Example #4
Remover os caracteres especiais utilizados em torno do estado de vendas pendentes.
```powerquery
let
    Source = #table(type table [Home Sale = text, Sales Date = date, Sales Status = text],
    {
        {"1620 Ferris Way", #date(2024, 8, 22), "##@@Pending@@##"},
        {"757 1st Ave. S.", #date(2024, 3, 15), "Sold"},
        {"22303 Fillmore", #date(2024, 10, 2), "##@@Pending@@##"}
    }),
    #"Trimmed Status" = Table.TransformColumns(Source, {"Sales Status", each Text.Trim(_, {"#", "@"})})
in
    #"Trimmed Status"
```

Result: 
```powerquery
#table(type table [Home Sale = text, Sales Date = date, Sales Status = text],
{
    {"1620 Ferris Way", #date(2024, 8, 22), "Pending"},
    {"757 1st Ave. S.", #date(2024, 3, 15), "Sold"},
    {"22303 Fillmore", #date(2024, 10, 2), "Pending"}
})
```




## Category
Text.Transformations
