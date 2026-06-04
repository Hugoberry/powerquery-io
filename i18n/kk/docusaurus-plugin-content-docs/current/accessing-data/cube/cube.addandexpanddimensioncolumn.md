---
title: Cube.AddAndExpandDimensionColumn
---

# Cube.AddAndExpandDimensionColumn


Көрсетілген өлшемділік кестесін текшенің сүзгі мәтінмәніне біріктіреді және көрсетілген өлшемділік атрибуттарының жиынын кеңейту арқылы сүзгі мәтінмәнінің өлшемділік түйіршіктілігін өзгертеді.


## Syntax

```powerquery
Cube.AddAndExpandDimensionColumn(
    cube as table,
    dimensionSelector as any,
    attributeNames as list,
    optional newColumnNames as any
) as table
```


## Remarks

Көрсетілген өлшемділік кестесін, `dimensionSelector` текшенің `cube` сүзгі мәтінмәнімен біріктіреді және өлшемделік атрибуттарының `attributeNames` көрсетілген жиынын кеңейту арқылы өлшемділік түйіршіктілігін өзгертеді. Көрсетілмеген болса, өлшемділік атрибуттары `newColumnNames` немесе `attributeNames` атты бағандар бар кестелік көрініске қосылады.



## Category
Cube
