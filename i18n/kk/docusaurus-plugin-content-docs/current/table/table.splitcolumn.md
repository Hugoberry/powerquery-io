---
title: Table.SplitColumn
---

# Table.SplitColumn


Көрсетілген бөлу функциясын пайдаланып көрсетілген бағанды қосымша бағандар жиынына бөледі.


## Syntax

```powerquery
Table.SplitColumn(
    table as table,
    sourceColumn as text,
    splitter as function,
    optional columnNamesOrNumber as any,
    optional default as any,
    optional extraColumns as any
) as table
```


## Remarks

Көрсетілген бөлу функциясын пайдаланып көрсетілген бағанды қосымша бағандар жиынына бөледі.

-   `table`: Бөлінетін бағанды қамтитын кесте.
-   `sourceColumn`: Бөлінетін бағанның атауы.
-   `splitter`: Бағанды ​​бөлу үшін пайдаланылатын тармақтағыш құрал функциясы (мысалы, `Splitter.SplitTextByDelimiter` немесе `Splitter.SplitTextByPosition`).
-   `columnNamesOrNumber`: Жасалатын жаңа бағандар атауларының тізімі немесе жаңа бағандардың саны.
-   `default`: Барлық жаңа бағандарды толтыру үшін бөлінген мәндер жеткіліксіз болса, пайдаланылатын мәнді қайта анықтайды. Бұл параметр үшін әдепкі мән — `null`.
-   `extraColumns`: Жаңа бағандарға қарағанда көбірек бөлінген мәндер болуы мүмкін болса, не істеу керектігін көрсетеді. Бұл параметрге `ExtraValues.Type` санауының мәнін беруге болады. Әдепкі мән — `ExtraValues.Ignore`.


## Examples

### Example #1
"Аты" бағанын аты мен тегі бойынша бөліңіз.
```powerquery
let
    Source = #table(type table[CustomerID = number, Name = text, Phone = text],
    {
        {1, "Bob White", "123-4567"},
        {2, "Jim Smith", "987-6543"},
        {3, "Paul", "543-7890"},
        {4, "Cristina Best", "232-1550"}
    }),
    SplitColumns = Table.SplitColumn(
        Source,
        "Name",
        Splitter.SplitTextByDelimiter(" "))
in
    SplitColumns
```

Result: 
```powerquery
#table(type table[CustomerID = number, Name.1 = text, Name.2 = text, Phone = text],
{
    {1, "Bob", "White", "123-4567"},
    {2, "Jim", "Smith", "987-6543"},
    {3, "Paul", null, "543-7890"},
    {4, "Cristina", "Best", "232-1550"}
})
```


### Example #2
"Аты" бағанын ат пен тегіне бөліңіз, содан кейін жаңа бағандардың атын өзгертіңіз.
```powerquery
let
    Source = #table(type table[CustomerID = number, Name = text, Phone = text],
    {
        {1, "Bob White", "123-4567"},
        {2, "Jim Smith", "987-6543"},
        {3, "Paul", "543-7890"},
        {4, "Cristina Best", "232-1550"}
    }),
    SplitColumns = Table.SplitColumn(
        Source,
        "Name",
        Splitter.SplitTextByDelimiter(" "),
        {"First Name", "Last Name"})
in
    SplitColumns
```

Result: 
```powerquery
#table(type table[CustomerID = number, First Name = text, Last Name = text, Phone = text],
{
    {1, "Bob", "White", "123-4567"},
    {2, "Jim", "Smith", "987-6543"},
    {3, "Paul", null, "543-7890"},
    {4, "Cristina", "Best", "232-1550"}
})
```


### Example #3
"Аты" бағанын аты мен тегіне бөліп, жаңа бағандардың атын өзгертіңіз және бос орындарды "-Жазба жоқ-" деп толтырыңыз.
```powerquery
let
    Source = #table(type table[CustomerID = number, Name = text, Phone = text],
    {
        {1, "Bob White", "123-4567"},
        {2, "Jim Smith", "987-6543"},
        {3, "Paul", "543-7890"},
        {4, "Cristina Best", "232-1550"}
    }),
    SplitColumns = Table.SplitColumn(
        Source,
        "Name",
        Splitter.SplitTextByDelimiter(" "),
        {"First Name", "Last Name"},
        "-No Entry-")
in
    SplitColumns
```

Result: 
```powerquery
#table(type table[CustomerID = number, First Name = text, Last Name = text, Phone = text],
{
    {1, "Bob", "White", "123-4567"},
    {2, "Jim", "Smith", "987-6543"},
    {3, "Paul", "-No Entry-", "543-7890"},
    {4, "Cristina", "Best", "232-1550"}
})
```


### Example #4
"Аты" бағанын ат пен тегіне бөліңіз, содан кейін жаңа бағандардың атын өзгертіңіз. Қолжетімді бағандар санынан көп мәндер болуы мүмкін болғандықтан, тегі бағанын аттан кейінгі барлық мәндерді қамтитын тізім ретінде жасаңыз.
```powerquery
let
    Source = #table(type table[CustomerID = number, Name = text, Phone = text],
    {
        {1, "Bob White", "123-4567"},
        {2, "Jim Smith", "987-6543"},
        {3, "Paul Green", "543-7890"},
        {4, "Cristina J. Best", "232-1550"}
    }),
    SplitColumns = Table.SplitColumn(
        Source,
        "Name",
        Splitter.SplitTextByDelimiter(" "),
        {"First Name", "Last Name"},
        null,
        ExtraValues.List)
in
    SplitColumns
```

Result: 
```powerquery
#table(type table[CustomerID = number, First Name = text, Last Name = text, Phone = text],
{
    {1, "Bob", {"White"}, "123-4567"},
    {2, "Jim", {"Smith"}, "987-6543"},
    {3, "Paul", {"Green"}, "543-7890"},
    {4, "Cristina", {"J.", "Best"}, "232-1550"}
})
```




## Category
Table.Transformation
