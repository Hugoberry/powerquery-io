---
title: Snowflake.Databases
---

# Snowflake.Databases


## Description

Snowflake есептеу қоймасынан деректерді импорттау.


## Syntax

```powerquery
Snowflake.Databases(
    server as text,
    warehouse as text,
    optional options as record
) as table
```


## Details

<code>Серверде</code> орналасқан Snowflake есептеу <code>қоймасында</code> кестелердің тізімін жасайтын кестені қайтарады. Қосымша жазба параметрі, <code>параметрлер</code> келесі параметрлерді басқару үшін көрсетілуі мүмкін:<ul><li><code>Role</code>: қосылым үшін рөл атауы ретінде пайдаланылатын мәтіндік мән.</li><li><code>CreateNavigationProperties</code>: қайтарылған мәндер бойынша навигация сипаттарын жасау немесе жасамау керектігін орнататын логикалық (true/false) мән (әдепкі мәні: true)</li><li><code>ConnectionTimeout</code>: Snowflake бағдарламасынан алынатын желі жауаптарын күтетін секунд саны.</li><li><code>CommandTimeout</code>: сұраудың орындалуын күтетін секунд саны.</li></ul>    


## Examples

### Example #1 
Snowflake қоймасында кестелердің тізімін жасау.
```powerquery
Snowflake.Databases("contoso.snowflakecomputing.com", "CONTOSO_WH")
```



