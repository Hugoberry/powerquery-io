---
title: Oracle.Database
---

# Oracle.Database


## Description

Oracle Database дерекқорынан SQL кестелердің кестесін және көріністерді қайтарады.


## Syntax

```powerquery
Oracle.Database(
    server as text,
    optional options as record
) as table
```


## Details

<code>server</code> серверіндегі Oracle Database дерекқорынан SQL кестелері мен көріністерінің кестесін қайтарады. Портты қос нүктемен бөлу арқылы сервермен бірге қосымша көрсетуге болады. <code>options</code> қосымша жазба параметрін келесі параметрлерді басқару үшін көрсетуге болады:    <ul><li><code>CreateNavigationProperties</code> : Логикалық мән (true/false), ол қайтарылатын мәндерде навигация сипаттарын жасау немесе жасамау керектігін көрсетеді (әдепкі мән - true).</li><li><code>NavigationPropertyNameGenerator</code> : Навигация сипаттарының атауларын жасау үшін пайдаланылатын функция.</li><li><code>Query</code> : Деректерді шығаруға пайдаланылатын жергілікті SQL сұрауы. Сұрау бірнеше нәтиже жиынтығын шығарса, біріншісі ғана қайтарылады.</li><li><code>CommandTimeout</code> : Бас тартылғанға дейін серверлік сұраудың қанша уақыт орындалатынын басқаратын ұзақтық. Әдепкі мәні он минут болады.</li><li><code>ConnectionTimeout</code> : Сервермен байланыс орнату әрекетінен бас тартуға дейінгі күту мерзімін басқаратын ұзақтық. Әдепкі мәні драйверге тәуелді.</li><li><code>HierarchicalNavigation</code> : Логикалық мән (true/false), ол кестелерді олардың схема атаулары бойынша топтап көру немесе көрмеу керектігін анықтайды (әдепкі мән - false).</li></ul>    Мысалы, жазба параметрі [option1 = value1, option2 = value2...] немесе [Query = "select ..."] ретінде көрсетіледі.    



## Category
Accessing data
