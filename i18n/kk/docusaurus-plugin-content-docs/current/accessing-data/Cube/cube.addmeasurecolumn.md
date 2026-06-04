---
title: Cube.AddMeasureColumn
---

# Cube.AddMeasureColumn


Текшеге әр жолдың мәтінмәнінде қолданылған өлшеу нәтижелерін қамтитын бағанды қосады.


## Syntax

```powerquery
Cube.AddMeasureColumn(
    cube as table,
    column as text,
    measureSelector as any
) as table
```


## Remarks

`cube` ішіне әр жолдың мәтінмәнінде қолданылған `measureSelector` өлшеу нәтижелерін қамтитын `column` атты бағанды қосады. Өлшеуді қолдануға өлшемділік түйіршіктілігіндегі және бөлудегі өзгертулер әсер етеді. Өлшеу мәндері белгілі бір текше әрекеттері орындалғаннан кейін реттеледі.



## Category
Cube
