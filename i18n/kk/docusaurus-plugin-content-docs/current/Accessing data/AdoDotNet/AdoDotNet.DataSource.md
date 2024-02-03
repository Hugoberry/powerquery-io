---
title: AdoDotNet.DataSource
---

# AdoDotNet.DataSource


## Description

ADO.NET деректер көзі үшін схема жинағын қайтарады.


## Syntax

```powerquery
AdoDotNet.DataSource(
    providerName as text,
    connectionString as any,
    optional options as record
) as table
```


## Details

<code>providerName</code> провайдер атауы және <code>connectionString</code> байланыс жолы болатын ADO.NET деректер көзі үшін схемалар жинағын қайтарады. <code>connectionString</code> мәтін немесе сипат мәні жұптарының жазбасы болуы мүмкін. Сипат мәндері мәтін немесе нөмір болуы мүмкін. Қосымша сипаттарды көрсету үшін <code>options</code> қосымша жазба параметрі берілуі мүмкін. Жазбада келесі өрістер болуы мүмкін:    <ul><li><code>CommandTimeout</code> : Бас тартылғанға дейін серверлік сұраудың қанша уақыт орындалатынын басқаратын ұзақтық. Әдепкі мәні он минут болады.</li><li><code>SqlCompatibleWindowsAuth</code> : Windows аутентификациясына арналған SQL серверімен үйлесімді байланыс жолының параметрін шығаруды анықтайтын (шын/жалған) логикалық мән. Әдепкі мән шын.</li><li><code>TypeMap</code></li></ul>



## Category
Accessing data
