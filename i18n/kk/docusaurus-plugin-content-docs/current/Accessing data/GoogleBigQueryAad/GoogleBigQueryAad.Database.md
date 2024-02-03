---
title: GoogleBigQueryAad.Database
---

# GoogleBigQueryAad.Database


## Description

Деректерді Google BigQuery дерекқорынан Azure AD арқылы импорттау


## Syntax

```powerquery
GoogleBigQueryAad.Database(
    billingProject as text,
    optional options as record
) as table
```


## Details

      <code>Шот ұсыну жобасының идентификаторы</code> үшін Azure AD арқылы Google BigQuery қызметінде қолжетімді жобалар тізімі бар кестені қайтарады. Келесі параметрлерді басқару үшін <code>опциялар</code> қосымша жазба параметрін көрсетуге болады:      <ul>        <li><code>ConnectionTimeout</code>: серверге қосылу әрекетінен бас тартуға дейінгі күту қажет уақытты басқаратын ұзақтық. Әдепкі мәні - ODBC байланысты күту уақыты мәні.</li>        <li><code>CommandTimeout</code>: сервер жақтағы сұрау бас тартылғанға дейін қанша уақыт орындалатынын басқаратын ұзақтық.</li>        <li><code>UseStorageApi</code>: Үлкен нәтиже жиынтықтары үшін BigQuery Storage API бағдарламасын пайдалану керектігін анықтайды. Әдепкі мәні - Storage API бағдарламасын пайдалану үшін “true”. Storage API бағдарламасын пайдаланбау үшін “false” мәніне орнатыңыз.</li>        <li><code>AudienceUri</code>: Бұл ODBC драйвері өзінің таңбалауышты ауыстыру сұраулары үшін пайдалана алатын аудиторияның URI идентификаторы болып табылады. Бұл өріс толық URI болуы тиіс (мысалы, //iam.googleapis.com/locations/global/workforcePools/$\{pool_id}/providers/aad-provider), бұл жердегі pool_id — жұмыс ресурстарының пулын анықтауға арналған глобалдық бірегей атау.</li>      </ul>   Жазба параметрі [option1 = value1, option2 = value2...] түрінде көрсетіледі.    


## Examples

### Example #1 
Azure AD арқылы Google BigQuery қызметінде қолжетімді жобалар тізімін көрсету
```powerquery
GoogleBigQueryAad.Database()
```



