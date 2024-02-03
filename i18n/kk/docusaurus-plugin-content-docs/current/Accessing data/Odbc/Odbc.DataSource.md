---
title: Odbc.DataSource
---

# Odbc.DataSource


## Description

ODBC деректер көзінен алынатын SQL кестелерінің кестелерін және көріністерін қайтарады. 


## Syntax

```powerquery
Odbc.DataSource(
    connectionString as any,
    optional options as record
) as table
```


## Details

<code>connectionString</code> байланыс жолы арқылы көрсетілген ODBC деректер көзінен алынатын SQL кестелері мен көріністер кестесін қайтарады. <code>connectionString</code> мәтін немесе сипат мәні жұптарының жазбасы болуы мүмкін. Сипат мәндері мәтін немесе сан болуы мүмкін. <code>options</code> қосымша жазба параметрі қосымша сипаттарды көрсету үшін берілуі мүмкін. Жазбада келесі өрістер болуы мүмкін:    <ul><li><code>CreateNavigationProperties</code> : Логикалық мән (true/false), ол қайтарылатын мәндерде навигация сипаттарын жасау немесе жасамау керектігін көрсетеді (әдепкі мән - true).</li><li><code>HierarchicalNavigation</code> : Логикалық мән (true/false), ол кестелерді олардың схема атаулары бойынша топтап көру немесе көрмеу керектігін анықтайды (әдепкі мән - false).</li><li><code>ConnectionTimeout</code> : Сервермен байланыс орнату әрекетінен бас тартуға дейінгі күту мерзімін басқаратын ұзақтық. Әдепкі мәні 15 секунд болады.</li><li><code>CommandTimeout</code> : Бас тартылғанға дейін серверлік сұраудың қанша уақыт орындалатынын басқаратын ұзақтық. Әдепкі мәні он минут болады.</li><li><code>SqlCompatibleWindowsAuth</code> : Windows аутентификациясына арналған SQL серверімен үйлесімді байланыс жолының параметрін шығаруды анықтайтын (шын/жалған) логикалық мән. Әдепкі мән шын.</li></ul>


## Examples

### Example #1 
Берілген байланыс жолынан SQL кестелері мен көріністерін қайтару.
```powerquery
Odbc.DataSource("dsn=your_dsn")
```

Result: 
```powerquery
table
```




## Category
Accessing data
