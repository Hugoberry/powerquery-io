---
title: Odbc.Query
---

# Odbc.Query


ODBC деректер көзіндегі сұрауды іске қосудың нәтижесін қайтарады.


## Syntax

```powerquery
Odbc.Query(
    connectionString as any,
    query as text,
    optional options as record
) as table
```


## Remarks

ODBC көмегімен `connectionString` байланыс жолы арқылы `query` орындау нәтижесін қайтарады. `connectionString` мәтін немесе сипат мәні жұптарының жазбасы болуы мүмкін. Сипат мәндері мәтін немесе сан болуы мүмкін. Қосымша сипаттарды көрсету үшін `options` қосымша жазба параметрі берілуі мүмкін. Жазбада келесі өрістер болуы мүмкін:

-   `ConnectionTimeout` : Сервермен байланыс орнату әрекетінен бас тартуға дейінгі күту мерзімін басқаратын ұзақтық. Әдепкі мәні 15 секунд болады.
-   `CommandTimeout` : Бас тартылғанға дейін серверлік сұраудың қанша уақыт орындалатынын басқаратын ұзақтық. Әдепкі мәні он минут болады.
-   `SqlCompatibleWindowsAuth` : Windows аутентификациясына арналған SQL серверімен үйлесімді байланыс жолының параметрін шығаруды анықтайтын (шын/жалған) логикалық мән. Әдепкі мән шын.


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
