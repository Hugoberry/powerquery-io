---
title: SapHana.Database
---

# SapHana.Database


## Description

SAP HANA дерекқорындағы жиынтықтарды қайтарады.


## Syntax

```powerquery
SapHana.Database(
    server as text,
    optional options as record
) as table
```


## Details

<code>server</code> SAP HANA дерекқорынан көп өлшемді жиынтықтар кестесін қайтарады. Келесі параметрлерді басқару үшін <code>options</code> қосымша жазба параметрі көрсетілуі мүмкін:    <ul><li><code>Query</code> : Деректерді шығаруға пайдаланылатын жергілікті SQL сұрауы. Сұрау бірнеше нәтиже жиынтығын шығарса, біріншісі ғана қайтарылады.</li><li><code>Distribution</code> : Байланыс жолындағы &quot;Тарату&quot; сипатының мәнін орнататын SapHanaDistribution. Нұсқауды бағыттау - нұсқауды орындаудан бұрын таратылған жүйенің дұрыс сервер түйінін анықтау әдісі. Әдепкі мәні - SapHanaDistribution.All.</li><li><code>Implementation</code> : Пайдалану үшін SAP HANA қосқышының орындалуын көрсетеді.</li><li><code>EnableColumnBinding</code> : Деректерді шығарып алу кезінде айнымалыларды SAP HANA нәтижелер жиынтығының бағандарына байланыстырады. Жадты азғантай көбірек пайдаланып, өнімділікті жақсартуы мүмкін. Әдепкі мәні: false.</li><li><code>ConnectionTimeout</code> : Сервермен байланыс орнату әрекетінен бас тартуға дейінгі күту мерзімін басқаратын ұзақтық. Әдепкі мәні 15 секунд болады.</li><li><code>CommandTimeout</code> : Бас тартылғанға дейін серверлік сұраудың қанша уақыт орындалатынын басқаратын ұзақтық. Әдепкі мәні он минут болады.</li></ul>    



## Category
Accessing data
