---
title: AnalysisServices.Database
---

# AnalysisServices.Database


Retorna uma tabela de cubos multidimensionais ou modelos de tabela do banco de dados do Analysis Services.


## Syntax

```powerquery
AnalysisServices.Database(
    server as text,
    database as text,
    optional options as record
) as table
```


## Remarks

Retorna uma tabela de cubos multidimensionais ou modelos tabulares do banco de dados `database` do Analysis Services no servidor `server`. Um parâmetro de registro opcional, `options`, pode ser especificado para controlar as seguintes opções:

-   `Query` : Uma consulta MDX nativa usada para recuperar dados.
-   `TypedMeasureColumns` : Um valor lógico que indica se os tipos especificados no modelo multidimensional ou tabular serão usados para os tipos das colunas de medição adicionadas. Quando definido como false, o tipo "number" será usado para todas as colunas de medição. O valor padrão para essa opção é false.
-   `Culture` : Um nome de cultura que especifica a cultura para os dados. Isso corresponde à propriedade da cadeia de conexão 'ID de Localidade'.
-   `CommandTimeout` : Uma duração que controla por quanto tempo a consulta do servidor tem permissão para ser executada até que seja cancelada. O valor padrão depende do driver.
-   `ConnectionTimeout` : Uma duração que controla o tempo de espera até que uma tentativa de fazer uma conexão com o servidor seja abandonada. O valor padrão depende do driver.
-   `SubQueries` : Um número (0, 1 ou 2) que define o valor da propriedade "SubQueries" na cadeia de conexão. Essa opção controla o comportamento de membros calculados em subseleções ou subcubos. (O valor padrão é 2).
-   `Implementation`



## Category
Accessing data
