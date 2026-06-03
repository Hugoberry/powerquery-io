---
title: AdobeAnalytics.Cubes
---

# AdobeAnalytics.Cubes


Retorna os conjuntos de relatórios ao Adobe Analytics.


## Syntax

```powerquery
AdobeAnalytics.Cubes(
    optional options as record
) as table
```


## Remarks

Retorna uma tabela de pacotes multidimensionais do Adobe Analytics. Um parâmetro de registro opcional, `options`, pode ser especificado para controlar as opções a seguir:

-   `HierarchicalNavigation` : Um lógica (true/false) que define se as tabelas agrupadas por seus nomes de esquema serão exibidas (o padrão é false).
-   `MaxRetryCount` : O número de tentativas a serem executadas ao sondar o resultado da consulta. O valor padrão é 120.
-   `RetryInterval` : A duração do tempo entre as tentativas de nova tentativa. O valor padrão é 1 segundo.
-   `Implementation` : Especifica a versão da API do Adobe Analytics. Os valores válidos são: "2.0". O padrão usa a versão 1.4 da API.



## Category
Accessing data
