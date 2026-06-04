---
title: GoogleBigQuery.Database
---

# GoogleBigQuery.Database


Google BigQuery дерекқорынан деректерді импорттау.


## Syntax

```powerquery
GoogleBigQuery.Database(
    optional options as record
) as table
```


## Remarks

Google BigQuery ішінде қолжетімді жобалар тізілген кестені қайтарады. `options` деген міндетті емес жазба параметрін келесі параметрлерді басқару үшін көрсетуге болады:

-   `ConnectionTimeout`: сервермен қосылым орнату әрекетін тоқтатпай тұрып қанша күту керектігін басқаратын ұзақтық. Әдепкі мән — ODBC қосылымын күту уақытының мәні.
-   `CommandTimeout`: бас тартпай тұрып сервер жағындағы сұраудың қанша уақыт бойы орындалуына рұқсат етілгенін басқаратын ұзақтық.
-   `BillingProject`: есеп-шот ұсыну жобасының идентификаторы. Әдепкі мән — бірінші қолжетімді жоба.
-   `UseStorageApi`: үлкен нәтижелер жиынтықтары үшін BigQuery Storage API пайдалану керек пе екенін көрсетеді. Әдепкі мәні - Storage API бағдарламасын пайдалану үшін шын. Storage API пайдаланбау үшін "false" мәніне орнатыңыз

Жазба параметрі \[option1 = value1, option2 = value2...\] түрінде көрсетіледі.


## Examples

### Example #1
Google BigQuery қызметінде қолжетімді жобалар тізімін көрсету
```powerquery
GoogleBigQuery.Database()
```



