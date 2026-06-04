---
title: Table.SplitColumn
---

# Table.SplitColumn


Rozdělí zadaný sloupec na sadu dalších sloupců pomocí zadané funkce rozdělení.


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

Rozdělí zadaný sloupec na sadu dalších sloupců pomocí zadané funkce rozdělení.

-   `table`: Tabulka obsahující sloupec, který se má rozdělit
-   `sourceColumn`: Název sloupce, který se má rozdělit
-   `splitter`: Funkce rozdělení použitá k rozdělení sloupce (například `Splitter.SplitTextByDelimiter` nebo `Splitter.SplitTextByPosition`)
-   `columnNamesOrNumber`: Seznam nových názvů sloupců, které se mají vytvořit, nebo počet nových sloupců
-   `default`: Přepíše hodnotu použitou v případě, že není k dispozici dostatek rozdělených hodnot k vyplnění všech nových sloupců. Výchozí hodnota tohoto parametru je `null`.
-   `extraColumns`: Určuje, co dělat, pokud může existovat více rozdělených hodnot, než jaký je počet nových sloupců. Tomuto parametru můžete předat hodnotu výčtu `ExtraValues.Type`. Výchozí hodnota je `ExtraValues.Ignore`.


## Examples

### Example #1
Rozdělit sloupec jména na jméno a příjmení
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
Rozdělit sloupec názvu na jméno a příjmení a přejmenovat nové sloupce
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
Rozdělit sloupec jména na jméno a příjmení, přejmenovat nové sloupce a místo prázdných hodnot uvést -No Entry- (Žádná položka).
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
Rozdělit sloupec názvu na jméno a příjmení a přejmenovat nové sloupce Protože může existovat více hodnot, než je počet dostupných sloupců, nastavte sloupec příjmení jako seznam, který obsahuje všechny hodnoty za křestní jméno.
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
