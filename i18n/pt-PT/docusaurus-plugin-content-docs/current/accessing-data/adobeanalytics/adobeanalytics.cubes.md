---
title: AdobeAnalytics.Cubes
---

# AdobeAnalytics.Cubes


Devolve os conjuntos de relatório no Adobe Analytics.


## Syntax

```powerquery
AdobeAnalytics.Cubes(
    optional options as record
) as table
```


## Remarks

Devolve uma tabela de pacotes multidimensionais da base de dados do Adobe Analytics. É possível especificar um parâmetro de registo opcional, `options`, para controlar as seguintes opções:

-   `HierarchicalNavigation` : Uma lógica (true/false) que define se são visualizadas as tabelas agrupadas pelos respetivos nomes de esquema (a predefinição é falso).
-   `MaxRetryCount` : O número de tentativas a realizar numa consulta pelo resultado da consulta. O valor predefinido é 120.
-   `RetryInterval` : A duração de tempo entre tentativas de repetição. O valor predefinido é 1 segundo.
-   `Implementation` : Especifica a versão da API do Adobe Analytics. Os valores válidos são: "2.0". A predefinição utiliza a versão 1.4 da API



## Category
Accessing data
