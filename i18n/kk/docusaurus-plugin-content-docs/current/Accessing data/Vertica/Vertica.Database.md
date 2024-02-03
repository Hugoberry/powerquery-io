---
title: Vertica.Database
---

# Vertica.Database


## Description

Деректерді Vertica жүйесінен импорттау


## Syntax

```powerquery
Vertica.Database(
    server as text,
    database as text,
    optional options as record
) as table
```


## Details

<code>Database</code> параметрі арқылы көрсетілген дерекқордағы <code>server</code> параметрі арқылы көрсетілген серверде қолжетімді схемалар кестесін қайтарады.Қосымша сипаттарды көрсету үшін <code>options</code> қосымша жазба параметрі берілуі мүмкін. Жазбада келесі өрістер болуы мүмкін:<ul>    <li><code>ConnectionTimeout</code>: Серверге қосылу әрекетін тоқтатуға дейінгі күту уақытын басқаратын ұзақтық. Әдепкі мәні драйверге тәуелді болады.</li>    <li><code>CommandTimeout </code>: Сервер жақтағы сұраудың бас тартқанша қанша уақыт орындалатынын басқаратын ұзақтық. Әдепкі мәні драйверге тәуелді болады.</li></ul>


## Examples

### Example #1 
Vertica жүйесінде кестелер тізімін көрсету
```powerquery

```



