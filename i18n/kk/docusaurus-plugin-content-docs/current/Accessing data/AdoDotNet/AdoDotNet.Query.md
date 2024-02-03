---
title: AdoDotNet.Query
---

# AdoDotNet.Query


## Description

ADO.NET деректер көзінде жергілікті сұрауды іске қосу нәтижелерін қайтарады.


## Syntax

```powerquery
AdoDotNet.Query(
    providerName as text,
    connectionString as any,
    query as text,
    optional options as record
) as table
```


## Details

<code>providerName</code> ADO.NET провайдері арқылы <code>connectionString</code> байланыс жолы көмегімен <code>query</code> орындау нәтижесін қайтарады. <code>connectionString</code> мәтін немесе сипат мәні жұптарының жазбасы болуы мүмкін. Сипат мәндері мәтін немесе сан болуы мүмкін. Қосымша сипаттарды көрсету үшін <code>options</code> қосымша жазба параметрі берілуі мүмкін. Жазбада келесі өрістер болуы мүмкін:    <ul><li><code>CommandTimeout</code> : Бас тартылғанға дейін серверлік сұраудың қанша уақыт орындалатынын басқаратын ұзақтық. Әдепкі мәні он минут болады.</li><li><code>SqlCompatibleWindowsAuth</code> : Windows аутентификациясына арналған SQL серверімен үйлесімді байланыс жолының параметрін шығаруды анықтайтын (шын/жалған) логикалық мән. Әдепкі мән шын.</li></ul>



## Category
Accessing data
