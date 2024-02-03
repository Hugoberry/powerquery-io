---
title: Odbc.Query
---

# Odbc.Query


## Description

ODBC деректер көзіндегі сұрауды іске қосудың нәтижесін қайтарады.


## Syntax

```powerquery
Odbc.Query(
    connectionString as any,
    query as text,
    optional options as record
) as table
```


## Details

ODBC көмегімен <code>connectionString</code> байланыс жолы арқылы <code>query</code> орындау нәтижесін қайтарады. <code>connectionString</code> мәтін немесе сипат мәні жұптарының жазбасы болуы мүмкін. Сипат мәндері мәтін немесе сан болуы мүмкін. Қосымша сипаттарды көрсету үшін <code>options</code> қосымша жазба параметрі берілуі мүмкін. Жазбада келесі өрістер болуы мүмкін:    <ul><li><code>ConnectionTimeout</code> : Сервермен байланыс орнату әрекетінен бас тартуға дейінгі күту мерзімін басқаратын ұзақтық. Әдепкі мәні 15 секунд болады.</li><li><code>CommandTimeout</code> : Бас тартылғанға дейін серверлік сұраудың қанша уақыт орындалатынын басқаратын ұзақтық. Әдепкі мәні он минут болады.</li><li><code>SqlCompatibleWindowsAuth</code> : Windows аутентификациясына арналған SQL серверімен үйлесімді байланыс жолының параметрін шығаруды анықтайтын (шын/жалған) логикалық мән. Әдепкі мән шын.</li></ul>


## Examples

### Example #1 
Көрсетілген қосылым жолына қатысты қарапайым сұраудың орындау нәтижесін қайтару.
```powerquery
Odbc.Query("dsn=your_dsn", "select * from Customers")
```

Result: 
```powerquery
table
```




## Category
Accessing data
