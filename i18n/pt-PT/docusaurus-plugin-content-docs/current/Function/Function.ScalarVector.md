---
title: Function.ScalarVector
---

# Function.ScalarVector


## Description

Cria uma função escalar sobre uma função de vetor, colocando várias invocações em lote.


## Syntax

```powerquery
Function.ScalarVector(
    scalarFunctionType as type,
    vectorFunction as function
) as function
```


## Details

Devolve uma função escalar do tipo <code>scalarFunctionType</code> que invoca <code>vectorFunction</code> com uma única linha de argumentos e devolve o resultado último. Além disso, quando a função escalar for repetidamente aplicada a cada linha de uma tabela de entradas, tal como em Table.AddColumn, <code>vectorFunction</code> será aplicado uma vez para todas as entradas.<br /><code>vectorFunction</code> receberá uma tabela cujas colunas correspondem em nome e posição aos parâmetros de <code>scalarFunctionType</code>. Cada linha desta tabela contém os argumentos para uma chamada para a função escalar, com as colunas correspondentes aos parâmetros de <code>scalarFunctionType</code>.<br /><code>vectorFunction</code> tem de devolver uma lista do mesmo tamanho que a tabela de entrada, cujo item em cada posição tem de ser o mesmo resultado de avaliar a função escalar na linha de entrada na mesma posição.<br />Espera-se que a tabela de entrada seja transmitida, pelo que é esperado que <code>vectorFunction</code> transmita o resultado quando a entrada chegar, trabalhando apenas com um bloco de entradas de cada vez. Especificamente, <code>vectorFunction</code> não pode enumerar a respetiva tabela de entrada mais do que uma vez.<br />



## Category
Function
