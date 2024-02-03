---
title: Table.View
---

# Table.View


## Description

Opretter eller udvider en tabel med brugerdefinerede handlere for forespørgsler og handlinger.


## Syntax

```powerquery
Table.View(
    table as table,
    handlers as record
) as table
```


## Details

Returnerer en visning af <code>table</code>, hvor de funktioner, der er angivet i <code>handlers</code>, anvendes i stedet for standardadfærden for en handling, når handlingen anvendes til visningen<br />Hvis <code>table</code> er angivet, er alle handlerfunktioner valgfrie. Hvis <code>table</code> ikke er angivet, er handlerfunktionerne <code>GetType</code> og <code>GetRows</code> påkrævet. Hvis en handlerfunktion ikke er angivet for en handling, anvendes standardadfærden for handlingen i stedet til <code>table</code> (undtagen i tilfælde af <code>GetExpression</code>).<br />Handlerfunktioner skal returnere en værdi, der semantisk svarer til resultatet af at anvende handlingen på <code>table</code> (eller den resulterende visning i tilfælde af <code>GetExpression</code>).<br />Hvis en handlerfunktion opløfter en fejl anvendes standardadfærden for handlingen til visningen.<br /><code>Table.View</code> kan bruges til at implementere foldning for en datakilde – oversættelsen af M-forespørgsler til kildespecifikke forespørgsler (f.eks. til at oprette T-SQL-sætninger fra M-forespørgsler).<br />Se den publicerede dokumentation til Power Query brugerdefinerede connector for at få en mere komplet beskrivelse af <code>Table.View</code>.<br />


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
