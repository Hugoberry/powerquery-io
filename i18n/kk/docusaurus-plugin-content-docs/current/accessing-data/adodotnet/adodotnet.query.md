---
title: AdoDotNet.Query
---

# AdoDotNet.Query


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


## Remarks

`providerName` ADO.NET провайдері арқылы `connectionString` байланыс жолы көмегімен `query` орындау нәтижесін қайтарады. `connectionString` мәтін немесе сипат мәні жұптарының жазбасы болуы мүмкін. Сипат мәндері мәтін немесе сан болуы мүмкін. Қосымша сипаттарды көрсету үшін `options` қосымша жазба параметрі берілуі мүмкін. Жазбада келесі өрістер болуы мүмкін:

-   `CommandTimeout` : Бас тартылғанға дейін серверлік сұраудың қанша уақыт орындалатынын басқаратын ұзақтық. Әдепкі мәні он минут болады.
-   `SqlCompatibleWindowsAuth` : Windows аутентификациясына арналған SQL серверімен үйлесімді байланыс жолының параметрін шығаруды анықтайтын (шын/жалған) логикалық мән. Әдепкі мән шын.



## Category
Accessing data
