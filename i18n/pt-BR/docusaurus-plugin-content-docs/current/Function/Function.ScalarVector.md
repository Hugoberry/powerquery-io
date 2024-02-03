---
title: Function.ScalarVector
---

# Function.ScalarVector


## Description

Cria uma função escalar na parte superior de uma função de vetor, com o envio em lote de várias invocações.


## Syntax

```powerquery
Function.ScalarVector(
    scalarFunctionType as type,
    vectorFunction as function
) as function
```


## Details

Retorna uma função escalar do tipo <code>scalarFunctionType</code> que invoca <code>vectorFunction</code> com uma única linha de argumentos e retorna sua única saída. Além disso, quando a função escalar é repetidamente aplicada para cada linha de uma tabela de entradas, como em Table.AddColumn, em vez disso, <code>vectorFunction</code> será aplicado uma vez para todas as entradas.<br /><code>vectorFunction</code> será transmitida uma tabela cujas colunas correspondem em nome e posicionar os parâmetros de <code>scalarFunctionType</code>. Cada linha desta tabela contém os argumentos para uma chamada à função escalar, com as colunas correspondentes aos parâmetros de <code>scalarFunctionType</code>.<br /><code>vectorFunction</code> deve retornar uma lista do mesmo tamanho da tabela de entrada, cujo item em cada posição deve ser o mesmo resultado que avaliar a função escalar na linha de entrada da mesma posição.<br />Espera-se que a tabela de entrada seja transmitida, portanto espera-se que <code>vectorFunction</code> transmita os resultados assim que a entrada for apresentada, trabalhando somente com um bloco de entrada por vez. Em particular, <code>vectorFunction</code> não deve enumerar sua tabela de entrada mais de uma vez.<br />



## Category
Function
