---
title: AdoDotNet.DataSource
---

# AdoDotNet.DataSource


ADO.NET деректер көзі үшін схема жинағын қайтарады.


## Syntax

```powerquery
AdoDotNet.DataSource(
    providerName as text,
    connectionString as any,
    optional options as record
) as table
```


## Remarks

`providerName` провайдер атауы және `connectionString` байланыс жолы болатын ADO.NET деректер көзі үшін схемалар жинағын қайтарады. `connectionString` мәтін немесе сипат мәні жұптарының жазбасы болуы мүмкін. Сипат мәндері мәтін немесе нөмір болуы мүмкін. Қосымша сипаттарды көрсету үшін `options` қосымша жазба параметрі берілуі мүмкін. Жазбада келесі өрістер болуы мүмкін:

-   `CommandTimeout` : Бас тартылғанға дейін серверлік сұраудың қанша уақыт орындалатынын басқаратын ұзақтық. Әдепкі мәні он минут болады.
-   `SqlCompatibleWindowsAuth` : Windows аутентификациясына арналған SQL серверімен үйлесімді байланыс жолының параметрін шығаруды анықтайтын (шын/жалған) логикалық мән. Әдепкі мән шын.
-   `TypeMap`



## Category
Accessing data
