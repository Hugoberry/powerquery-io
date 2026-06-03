---
title: Text.TrimStart
---

# Text.TrimStart


Remove todos os caracteres especificados à esquerda.


## Syntax

```powerquery
Text.TrimStart(
    text as text,
    optional trim as any
) as text
```


## Remarks

Retorna o resultado da remoção de todos os caracteres à esquerda do `text` especificado. Por padrão, todos os caracteres de espaço em branco à esquerda são removidos.

-   `text`: O texto do qual os caracteres à esquerda devem ser removidos.
-   `trim`: Substitui os caracteres de espaço em branco que são cortados por padrão. Esse parâmetro pode ser um caractere simples ou uma lista de caracteres simples. Cada operação de corte à esquerda é interrompida quando um caractere não cortado é encontrado.


## Examples

### Example #1
Remova o espaço em branco à esquerda de " a b c d ".
```powerquery
Text.TrimStart("   a b c d    ")
```

Result: 
```powerquery
"a b c d    "
```


### Example #2
Remove zeros à esquerda da representação de texto de um número.
```powerquery
Text.TrimStart("0000056.420", "0")
```

Result: 
```powerquery
"56.420"
```


### Example #3
Remove os caracteres de preenchimento à esquerda de um nome de conta de largura fixa.
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
