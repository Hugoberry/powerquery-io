---
title: AzureHiveLLAP.Database
---

# AzureHiveLLAP.Database


## Description

HDInsight Interactive Query жүйесінен деректерді импорттау


## Syntax

```powerquery
AzureHiveLLAP.Database(
    server as text,
    database as text,
    optional options as record
) as table
```


## Details

HDInsight Interactive Query жүйесіндегі <code>дерекқор</code> арқылы көрсетілген HDInsight интерактивті сұрауы <code>серверіндегі</code> HDInsight Interactive Query жүйесінен кестелердің тізімін қайтарады. Порт нөмірі қос нүкте арқылы көрсетіледі. Қосымша <code>опциялар</code> параметрі келесі опцияларды басқару үшін көрсетіледі:<ul>        <li><code>ConnectionTimeout</code>: Серверге қосулы әрекетінен кейін бас тартпас бұрын күту уақытын басқаратын ұзақтық. Әдепкі мән драйверге байланысты.</li>        <li><code>CommandTimeout</code>: Сервер тарапындағы сұраудан бас тартылмас бұрын оның жұмыс істеуіне қанша уақыт рұқсат берілетінін басқаратын ұзақтық. Әдепкі мән драйверге байланысты.</li></ul> <code>Опциялар</code> параметрі [option1 = value1, option2 = value2...] ретінде көрсетіледі.


