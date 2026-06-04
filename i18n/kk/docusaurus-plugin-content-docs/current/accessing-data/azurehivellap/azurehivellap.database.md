---
title: AzureHiveLLAP.Database
---

# AzureHiveLLAP.Database


HDInsight Interactive Query жүйесінен деректерді импорттау


## Syntax

```powerquery
AzureHiveLLAP.Database(
    server as text,
    database as text,
    optional options as record
) as table
```


## Remarks

HDInsight Interactive Query жүйесіндегі `дерекқор` арқылы көрсетілген HDInsight интерактивті сұрауы `серверіндегі` HDInsight Interactive Query жүйесінен кестелердің тізімін қайтарады. Порт нөмірі қос нүкте арқылы көрсетіледі. Қосымша `опциялар` параметрі келесі опцияларды басқару үшін көрсетіледі:

-   `ConnectionTimeout`: Серверге қосулы әрекетінен кейін бас тартпас бұрын күту уақытын басқаратын ұзақтық. Әдепкі мән драйверге байланысты.
-   `CommandTimeout`: Сервер тарапындағы сұраудан бас тартылмас бұрын оның жұмыс істеуіне қанша уақыт рұқсат берілетінін басқаратын ұзақтық. Әдепкі мән драйверге байланысты.

`Опциялар` параметрі \[option1 = value1, option2 = value2...\] ретінде көрсетіледі.


