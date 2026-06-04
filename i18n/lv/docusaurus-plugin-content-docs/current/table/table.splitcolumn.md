---
title: Table.SplitColumn
---

# Table.SplitColumn


Norādītā kolonna tiek sadalīta papildu kolonnu kopā, izmantojot norādīto sadalīšanas funkciju.


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

Norādītā kolonna tiek sadalīta papildu kolonnu kopā, izmantojot norādīto sadalīšanas funkciju.

-   `table`: tabula, kurā ir sadalāmā kolonna.
-   `sourceColumn`: sadalāmās kolonnas nosaukums.
-   `splitter`: sadalīšanas funkcija, ko izmanto kolonnas sadalīšanai (piemēram, `Splitter.SplitTextByDelimiter` vai `Splitter.SplitTextByPosition`).
-   `columnNamesOrNumber`: vai nu izveidojamo jauno kolonnu nosaukumu saraksts, vai jauno kolonnu skaits.
-   `default`: pārraksta vērtību, kas tiek izmantota, ja nav pietiekami daudz sadalīto vērtību, lai aizpildītu visas jaunās kolonnas. Šī parametra noklusējuma vērtība ir `null`.
-   `extraColumns`: norāda, ko darīt, ja var būt vairāk dalāmo vērtību nekā jauno kolonnu skaits. Šim parametram varat nodot `ExtraValues.Type` uzskaitīšanas vērtību. Noklusējums ir `ExtraValues.Ignore`.


## Examples

### Example #1
Sadalīt nosaukuma kolonnu pirmajā vārdā un uzvārdā.
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
Sadaliet nosaukuma kolonnu pirmajā vārdā un uzvārdā, pēc tam pārdēvējiet jaunās kolonnas.
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
Sadaliet nosaukuma kolonnu pirmajā vārdā un uzvārdā, pārdēvējiet jaunās kolonnas un aizpildiet visas tukšās vērtības ar "-No Entry-".
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
Sadaliet nosaukuma kolonnu pirmajā vārdā un uzvārdā, pēc tam pārdēvējiet jaunās kolonnas. Tā kā var būt vairāk vērtību nekā pieejamo kolonnu skaits, uzvārda kolonnu padariet par sarakstu, kurā iekļautas visas vērtības pēc pirmā vārda.
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
