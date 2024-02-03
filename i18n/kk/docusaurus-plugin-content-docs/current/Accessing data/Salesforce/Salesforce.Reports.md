---
title: Salesforce.Reports
---

# Salesforce.Reports


## Description

Salesforce тіркелгісінен есептерді қайтарады.


## Syntax

```powerquery
Salesforce.Reports(
    optional loginUrl as text,
    optional options as record
) as table
```


## Details

Salesforce тіркелгісінен тіркелгі деректерінде көрсетілген нысандарды қайтарады. Тіркелгі көрсетілген <code>loginUrl</code> ортасы арқылы байланысады. Егер орта көрсетілмесе, онда тіркелгі өндіріске қосылады (https://login.salesforce.com). Қосымша жазба параметрі, <code>options</code>, қосымша сипаттарды көрсету үшін ұсынылуы мүмкін. Жазбада келесі өрістер қамтылуы мүмкін:    <ul><li><code>ApiVersion</code> : Salesforce API нұсқасы осы нұсқаға пайдалануға арналған. Көрсетілмеген жағдайда API нұсқасы 29.0 пайдаланылады.</li><li><code>Timeout</code> : Серверге сұраудан бас тартуға дейінгі күту уақытын басқаратын ұзақтық. Әдепкі мәні деректер көзіне тәуелді.</li></ul>    



## Category
Accessing data
