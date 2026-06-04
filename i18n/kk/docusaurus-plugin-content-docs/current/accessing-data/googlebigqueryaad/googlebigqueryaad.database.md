---
title: GoogleBigQueryAad.Database
---

# GoogleBigQueryAad.Database


Microsoft Entra ID арқылы Google BigQuery дерекқорынан деректерді импорттау


## Syntax

```powerquery
GoogleBigQueryAad.Database(
    billingProject as text,
    optional options as record
) as table
```


## Remarks

Google BigQuery ішіндегі `Есеп-шот ұсыну жобасының идентификаторы` үшін Microsoft Entra ID пайдаланатын қолжетімді жобаларды тізетін кестені қайтарады. `options` деген міндетті емес жазба параметрін келесі параметрлерді басқару үшін көрсетуге болады:

-   `ConnectionTimeout`: сервермен қосылым орнату әрекетін тоқтатпай тұрып қанша күту керектігін басқаратын ұзақтық. Әдепкі мән — ODBC қосылымын күту уақытының мәні.
-   `CommandTimeout`: бас тартпай тұрып сервер жағындағы сұраудың қанша уақыт бойы орындалуына рұқсат етілгенін басқаратын ұзақтық.
-   `UseStorageApi`: үлкен нәтижелер жиынтықтары үшін BigQuery Storage API пайдалану керек пе екенін көрсетеді. Әдепкі мәні - Storage API бағдарламасын пайдалану үшін шын. Storage API пайдаланбау үшін "false" мәніне орнатыңыз
-   `AudienceUri`: бұл — ODBC драйвері өзінің токен айырбастауды сұраулары үшін пайдалана алатын аудиторияның URI мекенжайы. Бұл өріс толық URI (яғни, //iam.googleapis.com/locations/global/workforcePools/$\{pool\_id\}/providers/azuread) болуы керек. Мұндағы pool\_id — жұмыс күші пулын анықтайтын бір мәнді идентификатор.

Жазба параметрі \[option1 = value1, option2 = value2...\] түрінде көрсетіледі.


## Examples

### Example #1
Microsoft Entra ID арқылы Google BigQuery ішіндегі қолжетімді жобаларды тізу
```powerquery
GoogleBigQueryAad.Database()
```



