---
title: Text.TrimStart
---

# Text.TrimStart


Remove todos os caracteres à esquerda especificados.


## Syntax

```powerquery
Text.TrimStart(
    text as text,
    optional trim as any
) as text
```


## Remarks

Devolve o resultado da remoção de todos os carateres à esquerda do `text`especificado. Por predefinição, todos os carateres de espaço em branco à esquerda são removidos.

-   `text`: o texto a partir do qual os caracteres à esquerda devem ser removidos.
-   `trim`: substitui os caracteres de espaço em branco que são cortados por predefinição. Este parâmetro pode ser um caráter único ou uma lista de carateres únicos. Cada operação de corte à frente para quando é encontrado um caráter não cortado.


## Examples

### Example #1
Remover os espaços em branco à esquerda de " a b c d ".
```powerquery
Text.TrimStart("   a b c d    ")
```

Result: 
```powerquery
"a b c d    "
```


### Example #2
Remover zeros à esquerda da representação de texto de um número.
```powerquery
Text.TrimStart("0000056.420", "0")
```

Result: 
```powerquery
"56.420"
```


### Example #3
Remover os caracteres de preenchimento iniciais de um nome de conta de largura fixa.
```powerquery
let
    Source = #table(type table [Name = text, Account Name= text, Interest = number],
    {
        {"Bob", "@****847263-US", 2.8410},
        {"Leslie", "@******4648-FR", 3.8392},
        {"Ringo", "@***2046790-DE", 12.6600}
    }),
    #"Trimmed Account" = Table.TransformColumns(Source, {{"Account Name", each Text.TrimStart(_, {"*", "@"})}})
in
    #"Trimmed Account"
```

Result: 
```powerquery
#table(type table [Name = text, Account Name = text, Interest = number],
{
    {"Bob", "847263-US", 2.841},
    {"Leslie", "4648-FR", 3.8392},
    {"Ringo", "2046790-DE", 12.66}
})
```




## Category
Text.Transformations
