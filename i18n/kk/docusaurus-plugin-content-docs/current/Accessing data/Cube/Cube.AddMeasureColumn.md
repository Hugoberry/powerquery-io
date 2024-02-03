---
title: Cube.AddMeasureColumn
---

# Cube.AddMeasureColumn


## Description

Текшеге әр жолдың мәтінмәнінде қолданылған өлшеу нәтижелерін қамтитын бағанды қосады.


## Syntax

```powerquery
Cube.AddMeasureColumn(
    cube as table,
    column as text,
    measureSelector as any
) as table
```


## Details

<code>cube</code> ішіне әр жолдың мәтінмәнінде қолданылған <code>measureSelector</code> өлшеу нәтижелерін қамтитын <code>column</code> атты бағанды қосады. Өлшеуді қолдануға өлшемділік түйіршіктілігіндегі және бөлудегі өзгертулер әсер етеді. Өлшеу мәндері белгілі бір текше әрекеттері орындалғаннан кейін реттеледі.



## Category
Cube
