---
title: OleDb.Query
---

# OleDb.Query


## Description

OLE DB деректер көзінде сұрауды іске қосудың нәтижесін қайтарады.


## Syntax

```powerquery
OleDb.Query(
    connectionString as any,
    query as text,
    optional options as record
) as table
```


## Details

OLE DB көмегімен <code>connectionString</code> байланыс жолы арқылы <code>query</code> орындау нәтижесін қайтарады. <code>connectionString</code> мәтін немесе сипат мәні жұптарының жазбасы болуы мүмкін. Сипат мәндері мәтін немесе сан болуы мүмкін. Қосымша сипаттарды көрсету үшін <code>options</code> қосымша жазба параметрі берілуі мүмкін. Жазбада келесі өрістер болуы мүмкін    <ul><li><code>ConnectionTimeout</code> : Сервермен байланыс орнату әрекетінен бас тартуға дейінгі күту мерзімін басқаратын ұзақтық. Әдепкі мәні драйверге тәуелді.</li><li><code>CommandTimeout</code> : Бас тартылғанға дейін серверлік сұраудың қанша уақыт орындалатынын басқаратын ұзақтық. Әдепкі мәні он минут болады.</li><li><code>SqlCompatibleWindowsAuth</code> : Windows аутентификациясына арналған SQL серверімен үйлесімді байланыс жолының параметрін шығаруды анықтайтын (шын/жалған) логикалық мән. Әдепкі мән шын.</li></ul>



## Category
Accessing data
