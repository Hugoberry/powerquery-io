---
title: Essbase.Cubes
---

# Essbase.Cubes


Essbase сервер топтастырған Essbase нұсқасындағы текшелерді қайтарады.


## Syntax

```powerquery
Essbase.Cubes(
    url as text,
    optional options as record
) as table
```


## Remarks

APS серверіндегі Essbase нұсқасынан Essbase сервері топтастырған текшелер кестесін қайтарады `url`. Қосымша жазба параметрі, `options`, келесі параметрлерді басқару үшін көрсетілуі мүмкін:

-   `CommandTimeout` : Бас тартылғанға дейін серверлік сұраудың қанша уақыт орындалатынын басқаратын ұзақтық. Әдепкі мәні он минут болады.



## Category
Accessing data
