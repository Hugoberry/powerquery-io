---
title: Table.SplitColumn
---

# Table.SplitColumn


Felosztja a megadott oszlopot további oszlopok készletére a megadott felosztó függvény használatával.


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

Felosztja a megadott oszlopot további oszlopok készletére a megadott felosztó függvény használatával.

-   `table`: A felosztandó oszlopot tartalmazó tábla.
-   `sourceColumn`: A felosztandó oszlop neve.
-   `splitter`: Az oszlop felosztásához használt elválasztó függvény (például: `Splitter.SplitTextByDelimiter` vagy `Splitter.SplitTextByPosition`).
-   `columnNamesOrNumber`: A létrehozandó új oszlopnevek listája vagy az új oszlopok száma.
-   `default`: Felülbírálja a használt értéket, ha nincs elegendő felosztási érték az összes új oszlop kitöltéséhez. A paraméter alapértelmezett értéke `null`.
-   `extraColumns`: Meghatározza, hogy mi a teendő, ha több felosztott érték lehet, mint az új oszlopok száma. Ehhez a paraméterhez `ExtraValues.Type` számbavételi értéket adhat. Az alapértelmezett érték `ExtraValues.Ignore`.


## Examples

### Example #1
A név oszlop felosztása utónévre és vezetéknévre.
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
Ossza fel a név oszlopot utónévre és vezetéknévre, majd nevezze át az új oszlopokat.
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
Ossza fel a név oszlopot utónévre és vezetéknévre, nevezze át az új oszlopokat, és töltse ki az üres mezőket a „-No Entry-” kifejezéssel.
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
Ossza fel a név oszlopot utónévre és vezetéknévre, majd nevezze át az új oszlopokat. Mivel a rendelkezésre álló oszlopok számánál több érték is lehet, állítsa a vezetéknév oszlopot olyan listára, amely tartalmazza az utónév utáni összes értéket.
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
