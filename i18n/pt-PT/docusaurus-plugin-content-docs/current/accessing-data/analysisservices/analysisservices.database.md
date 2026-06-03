---
title: AnalysisServices.Database
---

# AnalysisServices.Database


Devolve uma tabela de cubos multidimensionais ou modelos em tabela a partir da base de dados do Analysis Services.


## Syntax

```powerquery
AnalysisServices.Database(
    server as text,
    database as text,
    optional options as record
) as table
```


## Remarks

Devolve uma tabela de modelos de cubos multidimensionais ou em tabela a partir da base de dados do Analysis Services `database` no servidor `server`. É possível especificar um parâmetro de registo opcional, `options`, para controlar as seguintes opções:

-   `Query` : Uma consulta de MDX nativa utilizada para obter dados.
-   `TypedMeasureColumns` : Um valor lógico que indica se os tipos especificados no modelo multidimensional ou em tabela serão utilizados para os tipos de colunas de medida adicionados. Quando definido como false, será utilizado o tipo de "número" para todas as colunas de medida. O valor predefinido para esta opção é false.
-   `Culture` : Um nome de cultura a especificar a cultura para os dados. Isto corresponde à propriedade de cadeia de ligação "Identificador de Localização".
-   `CommandTimeout` : Uma duração que controla o tempo em que a consulta do lado do servidor está autorizada a ser executada antes de ser cancelada. O valor predefinido é dependente do controlador.
-   `ConnectionTimeout` : Uma duração que controla o tempo que se deve aguardar antes de abandonar uma tentativa de ligar ao servidor. O valor predefinido é dependente do controlador.
-   `SubQueries` : Um número (0, 1 ou 2) que define o valor da propriedade "SubQueries" na cadeia de ligação. Isto controla o comportamento de membros calculados em subseleções ou subcubos. (O valor predefinido é 2).
-   `Implementation`



## Category
Accessing data
