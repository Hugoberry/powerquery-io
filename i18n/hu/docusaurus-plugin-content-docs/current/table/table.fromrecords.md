---
title: Table.FromRecords
---

# Table.FromRecords


Táblára alakítja át a rekordok listáját.


## Syntax

```powerquery
Table.FromRecords(
    records as list,
    optional columns as any,
    optional missingField as MissingField.Type
) as table
```


## Remarks

Egy adott rekordlistát táblává konvertál.

-   `records`: A táblává konvertálandó rekordok listája.
-   `columns`: (Nem kötelező) A tábla oszlopneveinek listája vagy a tábla típusa.
-   `missingField`: (Nem kötelező) Megadja, hogyan kell kezelni a sorok hiányzó mezőit. Használja a következő értékek egyikét:
    -   `MissingField.Error`: A hiányzó mezők hibát eredményeznek (alapértelmezés).
    -   `MissingField.UseNull`: A hiányzó mezők `null` értékekként szerepelnek.
      
    A `MissingField.Ignore` használata ebben a paraméterben hibát eredményez.


## Examples

### Example #1
Hozzon létre egy táblát rekordokból, rekordmezőneveket használva oszlopnevekként.
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
Hozzon létre egy táblát rekordokból begépelt oszlopokkal, és válassza ki az oszlopok számát.
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
Hozzon létre egy táblát, amely a megadott rekordokban szereplő ügyfelek utónevét, középső nevének kezdőbetűjét és vezetéknevét tartalmazza. Ha bármelyik érték hiányzik, helyettesítse `null` értékkel.
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
