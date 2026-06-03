---
title: AnalysisServices.Databases
---

# AnalysisServices.Databases


Retorna os bancos de dados do Analysis Services em um host especificado.


## Syntax

```powerquery
AnalysisServices.Databases(
    server as text,
    optional options as record
) as table
```


## Remarks

Retorna bancos de dados em uma instância do Analysis Services, `server`. Um parâmetro de registro opcional, `options`, pode ser fornecido para especificar propriedades adicionais. O registro pode conter os seguintes campos:

-   `TypedMeasureColumns` : Um valor lógico que indica se os tipos especificados no modelo multidimensional ou tabular serão usados para os tipos das colunas de medição adicionadas. Quando definido como false, o tipo "number" será usado para todas as colunas de medição. O valor padrão para essa opção é false.
-   `Culture` : Um nome de cultura que especifica a cultura para os dados. Isso corresponde à propriedade da cadeia de conexão 'ID de Localidade'.
-   `CommandTimeout` : Uma duração que controla por quanto tempo a consulta do servidor tem permissão para ser executada até que seja cancelada. O valor padrão depende do driver.
-   `ConnectionTimeout` : Uma duração que controla o tempo de espera até que uma tentativa de fazer uma conexão com o servidor seja abandonada. O valor padrão depende do driver.
-   `SubQueries` : Um número (0, 1 ou 2) que define o valor da propriedade "SubQueries" na cadeia de conexão. Essa opção controla o comportamento de membros calculados em subseleções ou subcubos. (O valor padrão é 2).
-   `Implementation`



## Category
Accessing data
