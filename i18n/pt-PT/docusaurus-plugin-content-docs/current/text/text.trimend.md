---
title: Text.TrimEnd
---

# Text.TrimEnd


Remove todos os caracteres à direita especificados.


## Syntax

```powerquery
Text.TrimEnd(
    text as text,
    optional trim as any
) as text
```


## Remarks

Devolve o resultado da remoção de todos os carateres à direita do `text`especificado. Por predefinição, todos os carateres de espaço em branco à direita são removidos.

-   `text`: o texto a partir do qual os caracteres à direita devem ser removidos.
-   `trim`: substitui os caracteres de espaço em branco que são cortados por predefinição. Este parâmetro pode ser um caráter único ou uma lista de carateres únicos. Cada operação de corte à direita para quando é encontrado um caráter não cortado.


## Examples

### Example #1
Remover os espaços em branco à direita de " a b c d ".
```powerquery
Text.TrimEnd("     a b c d    ")
```

Result: 
```powerquery
"     a b c d"
```


### Example #2
Remover os zeros à direita de uma representação de texto de um número de ponto flutuante preenchido.
```powerquery
Text.TrimEnd("03.487700000", "0")
```

Result: 
```powerquery
"03.4877"
```


### Example #3
Remova os carateres de preenchimento à direita de um nome de conta de largura fixa.
```powerquery
let
    Source = #table(type table [Name = text, Account Name= text, Interest = number],
    {
        {"Bob", "US-847263****@", 2.8410},
        {"Leslie", "FR-4648****@**", 3.8392},
        {"Ringo", "DE-2046790@***", 12.6600}
    }),
    #"Trimmed Account" = Table.TransformColumns(Source, {{"Account Name", each Text.TrimEnd(_, {"*", "@"})}})
in
    #"Trimmed Account"
```

Result: 
```powerquery
#table(type table [Name = text, Account Name = text, Interest = number],
{
    {"Bob", "US-847263", 2.841},
    {"Leslie", "FR-4648", 3.8392},
    {"Ringo", "DE-2046790", 12.66}
})
```




## Category
Text.Transformations
