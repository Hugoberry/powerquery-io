---
title: Table.FromRecords
---

# Table.FromRecords


Ierakstu saraksts tiek pārvērsts tabulā.


## Syntax

```powerquery
Table.FromRecords(
    records as list,
    optional columns as any,
    optional missingField as MissingField.Type
) as table
```


## Remarks

Norādīto ierakstu sarakstu konvertē tabulā.

-   `records`: ierakstu saraksts, kas jākonvertē tabulā.
-   `columns`: (neobligāti) tabulas kolonnu nosaukumu saraksts vai tabulas tips.
-   `missingField`: (neobligāti) norāda, kā rindā apstrādāt trūkstošos laukus. Izmantojiet kādu no šīm vērtībām:
    -   `MissingField.Error`: visi trūkstošie lauki rada kļūdu (noklusējums).
    -   `MissingField.UseNull`: trūkstošie lauki tiek iekļauti kā `null` vērtības.
      
    Izmantojot `MissingField.Ignore` šajā parametrā, rodas kļūda.


## Examples

### Example #1
Izveidot tabulu no ierakstiem, kā kolonnu nosaukumus izmantojot ierakstu lauku nosaukumus.
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
Izveidot tabulu no ierakstiem ar tipizētām kolonnām un atlasīt skaitlisko vērtību kolonnas.
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
Izveidojiet tabulu, kurā ir iekļauts klientu vārds, vidējā vārda iniciālis un uzvārds no norādītajiem ierakstiem. Ja trūkst kādas vērtības, aizstājiet vērtību ar `null`.
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
