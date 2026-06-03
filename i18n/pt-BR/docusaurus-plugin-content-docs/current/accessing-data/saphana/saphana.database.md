---
title: SapHana.Database
---

# SapHana.Database


Retorna os pacotes em um banco de dados SAP HANA.


## Syntax

```powerquery
SapHana.Database(
    server as text,
    optional options as record
) as table
```


## Remarks

Retorna uma tabela de pacotes multidimensionais do banco de dados SAP HANA `server`. Um parâmetro de registro opcional, `options`, pode ser especificado para controlar as opções a seguir:

-   `Query` : Uma consulta SQL nativa usada para recuperar dados. Se a consulta produzir vários conjuntos de resultados, somente o primeiro será retornado.
-   `Distribution` : Uma SapHanaDistribution que define o valor da propriedade "Distribution" na cadeia de conexão. O roteamento de instrução é o método para avaliar o nó de servidor correto de um sistema distribuído antes da execução da instrução. O valor padrão é SapHanaDistribution.All.
-   `Implementation` : Especifica a implementação do conector SAP HANA a ser usada.
-   `EnableColumnBinding` : Vincula variáveis ​​às colunas de um conjunto de resultados do SAP HANA ao buscar dados. Pode melhorar potencialmente o desempenho ao custo de uma utilização de memória um pouco maior. O valor padrão é falso.
-   `ConnectionTimeout` : Uma duração que controla o tempo de espera até que uma tentativa de fazer uma conexão com o servidor seja abandonada. O valor padrão é 15 segundos.
-   `CommandTimeout` : Uma duração que controla por quanto tempo a consulta do servidor tem permissão para ser executada até que seja cancelada. O valor padrão é dez minutos.



## Category
Accessing data
