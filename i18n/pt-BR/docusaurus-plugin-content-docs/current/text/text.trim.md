---
title: Text.Trim
---

# Text.Trim


Remove todos os caracteres especificados à esquerda e à direita.


## Syntax

```powerquery
Text.Trim(
    text as text,
    optional trim as any
) as text
```


## Remarks

Retorna o resultado da remoção de todos os caracteres à esquerda e à direita do `text` especificado. Por padrão, todos os caracteres de espaço em branco à esquerda e à direita são removidos.

-   `text`: O texto do qual os caracteres à esquerda e à direita devem ser removidos.
-   `trim`: Substitui os caracteres de espaço em branco que são cortados por padrão. Esse parâmetro pode ser um caractere simples ou uma lista de caracteres simples. Cada operação de corte à esquerda e à direita é interrompida quando um caractere não cortado é encontrado.


## Examples

### Example #1
Remova o espaço em branco à esquerda e à direita de " a b c d ".
```powerquery
Text.Trim("     a b c d    ")
```

Result: 
```powerquery
"a b c d"
```


### Example #2
Remove zeros à esquerda e à direita da representação de texto de um número.
```powerquery
Text.Trim("0000056.4200", "0")
```

Result: 
```powerquery
"56.42"
```


### Example #3
Remove os colchetes à esquerda e à direita de uma marca HTML.
```powerquery
Text.Trim("<div/>", {"<", ">", "/"})
```

Result: 
```powerquery
"div"
```


### Example #4
Remove os caracteres especiais usados em torno do status de vendas pendentes.
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
