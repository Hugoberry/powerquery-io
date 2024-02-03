---
title: AnalysisServices.Database
---

# AnalysisServices.Database


## Description

Analysis Services дерекқорынан кестелік үлгілерді немесе көп өлшемді текшелер кестесін қайтарады.


## Syntax

```powerquery
AnalysisServices.Database(
    server as text,
    database as text,
    optional options as record
) as table
```


## Details

<code>server</code> серверіндегі <code>database</code> Analysis Services дерекқорынан көп өлшемді текшелер кестесін немесе кестелік үлгілерді қайтарады. Келесі опцияларды басқару үшін қосымша жазба параметрі, <code>options</code>, көрсетілуі мүмкін:    <ul><li><code>Query</code> : Деректерді шығаруға пайдаланылатын жергілікті MDX сұрауы.</li><li><code>TypedMeasureColumns</code> : Көпөлшемді немесе кестелі үлгіде көрсетілген түрлердің қосылған өлшеу бағандарының түрлеріне пайдаланылатынын білдіретін логикалық мән. &quot;Жалған&quot; мәніне қойылғанда, &quot;сан&quot; түрі барлық өлшеу бағанына пайдаланылады. Бұл параметрдің әдепкі мәні жалған.</li><li><code>Culture</code> : Деректердің тіл мен аймақтық параметрін көрсететін параметр. Бұл &quot;Жергілікті идентификатор&quot; байланыс жолының сипатына сәйкес келеді.</li><li><code>CommandTimeout</code> : Бас тартылғанға дейін серверлік сұраудың қанша уақыт орындалатынын басқаратын ұзақтық. Әдепкі мәні драйверге тәуелді.</li><li><code>ConnectionTimeout</code> : Сервермен байланыс орнату әрекетінен бас тартуға дейінгі күту мерзімін басқаратын ұзақтық. Әдепкі мәні драйверге тәуелді.</li><li><code>SubQueries</code> : Байланыс жолындағы &quot;SubQueries&quot; сипатының мәнін орнататын сан (0, 1 немесе 2). Бұл қосалқы таңдаулардағы немесе қосалқы текшелердегі есептелетін элементтердің жұмысын басқарады. (Әдепкі мән 2).</li><li><code>Implementation</code></li></ul>    



## Category
Accessing data
