---
title: Snowflake.Databases
---

# Snowflake.Databases


Snowflake есептеу қоймасынан деректерді импорттау.


## Syntax

```powerquery
Snowflake.Databases(
    server as text,
    warehouse as text,
    optional options as record
) as table
```


## Remarks

`Серверде` орналасқан Snowflake есептеу `қоймасында` кестелердің тізімін жасайтын кестені қайтарады. Қосымша жазба параметрі, `параметрлер` келесі параметрлерді басқару үшін көрсетілуі мүмкін:

-   `Role`: қосылым үшін рөл атауы ретінде пайдаланылатын мәтіндік мән.
-   `CreateNavigationProperties`: қайтарылған мәндер бойынша навигация сипаттарын жасау немесе жасамау керектігін орнататын логикалық (true/false) мән (әдепкі мәні: true)
-   `ConnectionTimeout`: Snowflake бағдарламасынан алынатын желі жауаптарын күтетін секунд саны.
-   `CommandTimeout`: сұраудың орындалуын күтетін секунд саны.


## Examples

### Example #1
Snowflake қоймасында кестелердің тізімін жасау.
```powerquery
Snowflake.Databases("contoso.snowflakecomputing.com", "CONTOSO_WH")
```



