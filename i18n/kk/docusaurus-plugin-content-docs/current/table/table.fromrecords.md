---
title: Table.FromRecords
---

# Table.FromRecords


Жазбалар тізімін кестеге түрлендіреді.


## Syntax

```powerquery
Table.FromRecords(
    records as list,
    optional columns as any,
    optional missingField as MissingField.Type
) as table
```


## Remarks

Жазбалардың арнайы тізімін кестеге түрлендіреді.

-   `records`: Кестеге түрлендіру үшін жазбалар тізімі.
-   `columns`: (Қосымша) Кестенің баған атауларының немесе кесте түрінің тізімі.
-   `missingField`: (Қосымша) Жолдағы жетіспейтін өрістерді өңдеу тәсілін көрсетеді. Төмендегі мәндердің бірін пайдаланыңыз:
    -   `MissingField.Error`: Кез келген жетіспейтін өрістер қате тудырады (әдепкі).
    -   `MissingField.UseNull`: Кез келген жетіспейтін өрістер `null` мәндері ретінде енгізіледі.
      
    Осы параметрде `MissingField.Ignore` пайдалану қате тудырады.


## Examples

### Example #1
Жазба өрісі атауларын баған атаулары ретінде пайдаланып, жазбалардан кесте жасаңыз.
```powerquery
Table.FromRecords({
    [CustomerID = 1, Name = "Bob", Phone = "123-4567"],
    [CustomerID = 2, Name = "Jim", Phone = "987-6543"],
    [CustomerID = 3, Name = "Paul", Phone = "543-7890"]
})
```

Result: 
```powerquery
#table(type table[CustomerID = any, Name = any, Phone = any],
{
    {1, "Bob", "123-4567"},
    {2, "Jim", "987-6543"},
    {3, "Paul", "543-7890"}
})
```


### Example #2
Енгізілген бағандармен жазбалардан кесте жасаңыз және бағандар санын таңдаңыз.
```powerquery
Table.ColumnsOfType(
    Table.FromRecords(
        {[CustomerID = 1, Name = "Bob"]},
        type table[CustomerID = Number.Type, Name = Text.Type]
    ),
    {type number}
)
```

Result: 
```powerquery
{"CustomerID"}
```


### Example #3
Көрсетілген жазбалардан тұтынушылардың аты, әкесінің аты және тегі бар кесте жасаңыз. Егер мәндердің бірі жетіспесе, оны `null` мәнімен ауыстырыңыз.
```powerquery
Table.FromRecords({
        [CustomerID = 1, FirstName = "Bob", MiddleInitial = "C", LastName = "Smith"],
        [CustomerID = 2, FirstName = "Sarah", LastName = "Jones"],
        [CustomerID = 3, FirstName = "Harry", MiddleInitial = "H"]
    },
    type table [FirstName = nullable text, MiddleInitial = nullable text, LastName = nullable text],
    MissingField.UseNull)
```

Result: 
```powerquery
#table(type table[FirstName = text, MiddleInitial = text, LastName = text],
{
    {"Bob", "C", "Smith"},
    {"Sarah", null, "Jones"},
    {"Harry", "H", null}
})
```




## Category
Table.Table construction
