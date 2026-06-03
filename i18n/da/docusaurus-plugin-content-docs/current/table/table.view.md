---
title: Table.View
---

# Table.View


Opretter eller udvider en tabel med brugerdefinerede handlere for forespørgsler og handlinger.


## Syntax

```powerquery
Table.View(
    table as table,
    handlers as record
) as table
```


## Remarks

Returnerer en visning af `table`, hvor de funktioner, der er angivet i `handlers`, anvendes i stedet for standardadfærden for en handling, når handlingen anvendes til visningen

Hvis `table` er angivet, er alle handlerfunktioner valgfrie. Hvis `table` ikke er angivet, er handlerfunktionerne `GetType` og `GetRows` påkrævet. Hvis en handlerfunktion ikke er angivet for en handling, anvendes standardadfærden for handlingen i stedet til `table` (undtagen i tilfælde af `GetExpression`).

Handlerfunktioner skal returnere en værdi, der semantisk svarer til resultatet af at anvende handlingen på `table` (eller den resulterende visning i tilfælde af `GetExpression`).

Hvis en handlerfunktion opløfter en fejl anvendes standardadfærden for handlingen til visningen.

`Table.View` kan bruges til at implementere foldning for en datakilde – oversættelsen af M-forespørgsler til kildespecifikke forespørgsler (f.eks. til at oprette T-SQL-sætninger fra M-forespørgsler).

Se den publicerede dokumentation til Power Query brugerdefinerede connector for at få en mere komplet beskrivelse af `Table.View`.


## Examples

### Example #1
Opret en grundlæggende visning, der ikke kræver adgang til rækkerne for at bestemme typen eller rækkeantallet.
```powerquery
Table.View(
    null,
    [
        GetType = () => type table [CustomerID = number, Name = text, Phone = nullable text],
        GetRows = () => Table.FromRecords({[CustomerID = 1, Name = "Bob", Phone = "123-4567"]}),
        GetRowCount = () => 1
    ]
)
```

Result: 
```powerquery
Table.FromRecords({[CustomerID = 1, Name = "Bob", Phone = "123-4567"]})
```




## Category
Table.Table construction
