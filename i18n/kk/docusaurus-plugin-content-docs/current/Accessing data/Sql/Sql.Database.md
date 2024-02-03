---
title: Sql.Database
---

# Sql.Database


## Description

SQL Server дерекқорынан SQL кестелерінің кестесін, көріністерді және сақталған функцияларды қайтарады.


## Syntax

```powerquery
Sql.Database(
    server as text,
    database as text,
    optional options as record
) as table
```


## Details

<code>server</code> серверіндегі <code>database</code> SQL Server дерекқорынан SQL кестелері, көріністері және сақталған функциялар кестесін қайтарады. Портты қос нүктемен бөлу арқылы сервермен бірге қосымша көрсетуге болады. <code>options</code> қосымша жазба параметрін келесі параметрлерді басқару үшін көрсетуге болады:    <ul><li><code>Query</code> : Деректерді шығаруға пайдаланылатын жергілікті SQL сұрауы. Сұрау бірнеше нәтиже жиынтығын шығарса, біріншісі ғана қайтарылады.</li><li><code>CreateNavigationProperties</code> : Логикалық мән (true/false), ол қайтарылатын мәндерде навигация сипаттарын жасау немесе жасамау керектігін көрсетеді (әдепкі мән - true).</li><li><code>NavigationPropertyNameGenerator</code> : Навигация сипаттарының атауларын жасау үшін пайдаланылатын функция.</li><li><code>MaxDegreeOfParallelism</code> : Жасалған SQL сұрауындағы &quot;maxdop&quot; сұрауы сөйлемінің мәнін орнататын сан.</li><li><code>CommandTimeout</code> : Бас тартылғанға дейін серверлік сұраудың қанша уақыт орындалатынын басқаратын ұзақтық. Әдепкі мәні он минут болады.</li><li><code>ConnectionTimeout</code> : Сервермен байланыс орнату әрекетінен бас тартуға дейінгі күту мерзімін басқаратын ұзақтық. Әдепкі мәні драйверге тәуелді.</li><li><code>HierarchicalNavigation</code> : Логикалық мән (true/false), ол кестелерді олардың схема атаулары бойынша топтап көру немесе көрмеу керектігін анықтайды (әдепкі мән - false).</li><li><code>MultiSubnetFailover</code> : Логикалық мән (true/false), ол байланыс жолындағы &quot;MultiSubnetFailover&quot; сипатының мәнін орнатады (әдепкі мән - false).</li><li><code>UnsafeTypeConversions</code> : Егер &quot;шын&quot; болса, сәтсіз болуы мүмкін және бүкіл сұраудың сәтсіз болуына әкелуі мүмкін түр түрлендірулерін қысқартуға әрекет жасайтын логикалық мән (шын/жалған). Жалпы пайдалану үшін ұсынылмайды.</li><li><code>ContextInfo</code> : Әр пәрменді орындаудан бұрын CONTEXT_INFO орнату үшін пайдаланылатын екілік мән.</li><li><code>OmitSRID</code> : Егер &quot;шын&quot; болса, геометриялық және географиялық түрлерден Well-Known Text пішіміндегі деректерді жасағанда SRID өткізіп жіберетін логикалық мән (шын/жалған).</li><li><code>EnableCrossDatabaseFolding</code> : Логикалық мән (true немесе false) &quot;true&quot; болса, бір сервердегі дерекқорлар бойынша сұрауды қысқарту мүмкіндігіне қолдау көрсетіледі. Әдепкі мән — &quot;false&quot;.</li></ul>    Мысалы, жазба параметрі [option1 = value1, option2 = value2...] немесе [Query = "select ..."] ретінде көрсетіледі.    



## Category
Accessing data
