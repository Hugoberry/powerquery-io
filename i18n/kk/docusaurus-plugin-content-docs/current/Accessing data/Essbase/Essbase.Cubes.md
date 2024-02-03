---
title: Essbase.Cubes
---

# Essbase.Cubes


## Description

Essbase сервер топтастырған Essbase нұсқасындағы текшелерді қайтарады.


## Syntax

```powerquery
Essbase.Cubes(
    url as text,
    optional options as record
) as table
```


## Details

APS серверіндегі Essbase нұсқасынан Essbase сервері топтастырған текшелер кестесін қайтарады <code>url</code>. Қосымша жазба параметрі, <code>options</code>, келесі параметрлерді басқару үшін көрсетілуі мүмкін:    <ul><li><code>CommandTimeout</code> : Бас тартылғанға дейін серверлік сұраудың қанша уақыт орындалатынын басқаратын ұзақтық. Әдепкі мәні он минут болады.</li></ul>



## Category
Accessing data
