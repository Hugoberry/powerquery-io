---
title: Salesforce.Data
---

# Salesforce.Data


Salesforce тіркелгісінен нысандарды қайтарады.


## Syntax

```powerquery
Salesforce.Data(
    optional loginUrl as any,
    optional options as record
) as table
```


## Remarks

Salesforce тіркелгісінен тіркелгі деректерінде көрсетілген нысандарды қайтарады. Тіркелгі көрсетілген `loginUrl` ортасы арқылы байланысады. Егер орта көрсетілмесе, онда тіркелгі өндіріске қосылады (https://login.salesforce.com). Қосымша жазба параметрі, `options`, қосымша сипаттарды көрсету үшін ұсынылуы мүмкін. Жазбада келесі өрістер қамтылуы мүмкін:

-   `CreateNavigationProperties` : Қайтарылатын мәндерде навигация сипаттарын жасау немесе жасамау керектігін көрсететін логикалық мән (true/false). Әдепкі мән - false.
-   `ApiVersion` : Salesforce API нұсқасы осы нұсқаға пайдалануға арналған. Көрсетілмеген жағдайда API нұсқасы 29.0 пайдаланылады.
-   `Timeout` : Серверге сұраудан бас тартуға дейінгі күту уақытын басқаратын ұзақтық. Әдепкі мәні деректер көзіне тәуелді.



## Category
Accessing data
