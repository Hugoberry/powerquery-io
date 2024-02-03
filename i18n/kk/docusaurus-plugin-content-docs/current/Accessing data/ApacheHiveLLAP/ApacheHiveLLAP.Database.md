---
title: ApacheHiveLLAP.Database
---

# ApacheHiveLLAP.Database


## Description

Hive LLAP ішінен деректерді импорттау


## Syntax

```powerquery
ApacheHiveLLAP.Database(
    server as text,
    database as text,
    thriftTransport as number,
    optional options as record
) as table
```


## Details

Таңдалған <code>протоколды</code> пайдаланып, Hive LLAP <code>серверінде</code> <code>дерекқор</code> арқылы көрсетілген Hive LLAP ішінен кестелер тізімін қайтарады. Порт нөмірі сервермен бірге қос нүкте арқылы көрсетілуі мүмкін. Thrift транспорт протоколы "Standard", "HTTP" мәндері бар тізімделген түр болып табылады. Қосымша <code>опциялар</code> параметрі келесі опцияларды басқару үшін көрсетілуі мүмкін:<ul>        <li><code>ConnectionTimeout</code>: Серверге қосуылу әрекетінен бас тартуға дейінгі күту уақытын басқаратын ұзақтық. Әдепкі мән драйверге байланысты.</li>        <li><code>CommandTimeout</code>: Сервер тарапындағы сұраудан бас тартылмас бұрын оның жұмыс істеуіне қанша уақыт рұқсат берілетінін басқаратын ұзақтық. Әдепкі мән драйверге байланысты.</li></ul> <code>Опциялар</code> параметрі [option1 = value1, option2 = value2...] ретінде көрсетіледі.


