---
title: Table.SplitColumn
---

# Table.SplitColumn


Rozdelí zadaný stĺpec na sadu ďalších stĺpcov pomocou zadanej rozdeľovacej funkcie.


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

Rozdelí zadaný stĺpec na sadu ďalších stĺpcov pomocou zadanej rozdeľovacej funkcie.

-   `table`: Tabuľka obsahujúca stĺpec, ktorý sa má rozdeliť.
-   `sourceColumn`: Názov stĺpca, ktorý sa má rozdeliť.
-   `splitter`: Funkcia rozdeľovača použitá na rozdelenie stĺpca (napríklad, `Splitter.SplitTextByDelimiter` alebo `Splitter.SplitTextByPosition`).
-   `columnNamesOrNumber`: Buď zoznam názvov nových stĺpcov, ktoré sa majú vytvoriť, alebo počet nových stĺpcov.
-   `default`: Prepíše hodnotu použitú v prípade, že nie je dostatok rozdelených hodnôt na vyplnenie všetkých nových stĺpcov. Predvolené nastavenie tohto parametra je `null`.
-   `extraColumns`: Určuje, čo sa má urobiť, ak môže byť viac rozdelených hodnôt, ako je počet nových stĺpcov. Tomuto parametru môžete odovzdať hodnotu enumerácie `ExtraValues.Type`. Predvolená hodnota je `ExtraValues.Ignore`.


## Examples

### Example #1
Rozdeliť stĺpec s menom na meno a priezvisko.
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
Rozdeľte stĺpec s menom na meno a priezvisko a potom premenovať nové stĺpce.
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
Rozdeliť stĺpec s menom na meno a priezvisko, premenovať nové stĺpce a všetky prázdne miesta vyplniť symbolom „-No Entry-“.
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
Rozdeľte stĺpec s menom na meno a priezvisko a potom premenovať nové stĺpce. Pretože môže obsahovať viac hodnôt, ako je počet dostupných stĺpcov, vytvorte stĺpec s posledným menom ako zoznam, ktorý obsahuje všetky hodnoty po prvom mene.
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
