---
title: AtScale.Cubes
---

# AtScale.Cubes


Dados do cubo de importação/DirectQuery de um AtScale.


## Syntax

```powerquery
AtScale.Cubes(
    server as Uri.Type,
    optional options as record
) as table
```


## Remarks

Retorna dados de cubo do AtScale no servidor `server`. Um parâmetro de registro opcional, `options`, pode ser especificado para controlar as seguintes opções:

-   `TypedMeasureColumns`: um valor lógico que indica se os tipos especificados no modelo de tabela ou multidimensional serão usados para os tipos das colunas de medida adicionadas. Quando definido como falso, o tipo "número" será usado para todas as colunas de medida. O valor padrão dessa opção é falso
-   `CommandTimeout`: uma duração (em segundos) que controla por quanto tempo a consulta do servidor pode ser executada antes de ser cancelada. O valor padrão depende do driver.
-   `ConnectionTimeout`: uma duração (em segundos) que controla quanto tempo aguardar antes de anular uma tentativa de conectar-se com o servidor. O valor padrão depende do driver.

O parâmetro de registro é especificado como \[option1 = value1, option2 = value2...\].


## Examples

### Example #1
Lista os dados do cubo em um cubo do AtScale.
```powerquery
AtScale.Cubes("https://contoso.atscale.com:10502/xmla/...")
```



