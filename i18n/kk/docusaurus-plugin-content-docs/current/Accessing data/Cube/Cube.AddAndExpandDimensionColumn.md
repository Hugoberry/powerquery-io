---
title: Cube.AddAndExpandDimensionColumn
---

# Cube.AddAndExpandDimensionColumn


## Description

Көрсетілген өлшемділік кестесін текшенің сүзгі мәтінмәніне біріктіреді және көрсетілген өлшемділік төлсипаттарының жиынын кеңейту арқылы сүзгі мәтінмәнінің өлшемділік түйіршіктілігін өзгертеді.


## Syntax

```powerquery
Cube.AddAndExpandDimensionColumn(
    cube as table,
    dimensionSelector as any,
    attributeNames as list,
    optional newColumnNames as any
) as table
```


## Details

<code>dimensionSelector</code> көрсетілген өлшемділік кестесін текшенің <code>cube</code> сүзгі мәтінмәнімен біріктіреді және өлшемделік төлсипаттарының <code>attributeNames</code> көрсетілген жиынын кеңейту арқылы өлшемділік түйіршіктілігін өзгертеді. Көрсетілмеген болса, өлшемділік төлсипаттары <code>newColumnNames</code> немесе <code>attributeNames</code> атты бағандар бар кестелік көрініске қосылады.



## Category
Cube
