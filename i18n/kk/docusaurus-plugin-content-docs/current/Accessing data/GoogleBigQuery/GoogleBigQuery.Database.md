---
title: GoogleBigQuery.Database
---

# GoogleBigQuery.Database


## Description

Google BigQuery дерекқорынан деректерді импорттау.


## Syntax

```powerquery
GoogleBigQuery.Database(
    optional options as record
) as table
```


## Details

      Google BigQuery қызметінде қолжетімді жобалар тізімі бар кестені қайтарады. Келесі параметрлерді басқару үшін <code>параметрлер</code> қосымша жазба параметрін көрсетуге болады:      <ul>        <li><code>ConnectionTimeout</code>: Серверге қосылу әрекетінен бас тартуға дейінгі күту қажет уақытты басқаратын ұзақтық. Әдепкі мәні - ODBC байланысты күту уақыты мәні.</li>        <li><code>CommandTimeout</code>: Сервер жақтағы сұрау бас тартқанға дейін қанша уақыт орындалатынын басқаратын ұзақтық.</li>        <li><code>BillingProject</code>: Шот ұсыну жобасының идентификаторы. Әдепкі мәні - бірінші қолжетімді жоба.</li>      <li><code>UseStorageApi</code>: Үлкен нәтиже жиынтықтары үшін BigQuery Storage API бағдарламасын пайдалану керектігін анықтайды. Әдепкі мәні - Storage API бағдарламасын пайдалану үшін шын. Storage API бағдарламасын пайдаланбау үшін жалған мәнге орнатыңыз.</li>      </ul>    Жазба параметрі былай көрсетіледі: [option1 = value1, option2 = value2...].    


## Examples

### Example #1 
Google BigQuery қызметінде қолжетімді жобалар тізімін көрсету
```powerquery
GoogleBigQuery.Database()
```



