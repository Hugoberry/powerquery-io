---
title: SapHana.Database
---

# SapHana.Database


Devolve os pacotes numa base de dados SAP HANA.


## Syntax

```powerquery
SapHana.Database(
    server as text,
    optional options as record
) as table
```


## Remarks

Devolve uma tabela de pacotes multidimensionais da base de dados SAP HANA `server`. É possível especificar um parâmetro de registo opcional, `options`, para controlar as seguintes opções:

-   `Query` : Uma consulta SQL nativa utilizada para obter dados. Se a consulta produz vários conjuntos de resultados, apenas o primeiro vai ser devolvido.
-   `Distribution` : Uma SapHanaDistribution que define o valor da propriedade "Distribution" na cadeia de ligação. O encaminhamento de instrução é um método de avaliar o nó de servidor correto de um sistema distribuído antes da execução de instrução. O valor predefinido é SapHanaDistribution.All.
-   `Implementation` : Especifica a implementação do conector de SAP HANA a utilizar.
-   `EnableColumnBinding` : Vincula variáveis às colunas de um conjunto de resultados do SAP HANA ao obter dados. Pode potencialmente melhorar o desempenho à custa de uma utilização de memória ligeiramente superior. O valor predefinido é falso.
-   `ConnectionTimeout` : Uma duração que controla o tempo que se deve aguardar antes de abandonar uma tentativa de ligar ao servidor. O valor predefinido é 15 segundos.
-   `CommandTimeout` : Uma duração que controla o tempo em que a consulta do lado do servidor está autorizada a ser executada antes de ser cancelada. O valor predefinido é dez minutos.



## Category
Accessing data
