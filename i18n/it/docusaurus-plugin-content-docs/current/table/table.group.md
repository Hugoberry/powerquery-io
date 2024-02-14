---
title: Table.Group
---

# Table.Group


Raggruppa le righe nella tabella con la stessa chiave.


## Syntax

```powerquery
Table.Group(
    table as table,
    key as any,
    aggregatedColumns as list,
    optional groupKind as GroupKind.Type,
    optional comparer as function
) as table
```


## Remarks

Raggruppa le righe di <code>table</code> in base alle colonne chiave definite da <code>key</code>. <code>key</code> può essere un singolo nome di colonna o un elenco di nomi di colonna.    Per ogni gruppo viene costruito un record contenente le colonne chiave e i rispettivi valori, insieme alle colonne aggregate specificate da <code>aggregatedColumns</code>.    Facoltativamente, è possibile specificare anche <code>groupKind</code> e <code>comparer</code>.<br />    <br />    Se i dati sono già ordinati in base alle colonne chiave, è possibile fornire un oggetto <code>groupKind</code> di GroupKind.Local. In alcuni casi questo oggetto può migliorare le prestazioni del raggruppamento    dal momento che tutte le righe con un set specificato di valori chiave vengono considerate contigue.<br />    <br />    Quando si passa un oggetto <code>comparer</code>, tenere presente che se chiavi diverse vengono considerate come uguali, una riga può essere inserita in un gruppo le cui chiavi sono diverse dalle proprie.<br />    <br />    Questa funzione non garantisce l'ordinamento delle righe restituite.  


## Examples

### Example #1 
Raggruppare la tabella aggiungendo una colonna aggregata [total] contenente la somma dei prezzi (&#34;each List.Sum([price])&#34;).
```powerquery
Table.Group(
    Table.FromRecords({
        [CustomerID = 1, price = 20],
        [CustomerID = 2, price = 10],
        [CustomerID = 2, price = 20],
        [CustomerID = 1, price = 10],
        [CustomerID = 3, price = 20],
        [CustomerID = 3, price = 5]
    }),
    "CustomerID",
    {"total", each List.Sum([price])}
)
```

Result: 
```powerquery
Table.FromRecords(
    {
        [CustomerID = 1, total = 30],
        [CustomerID = 2, total = 30],
        [CustomerID = 3, total = 25]
    },
    {"CustomerID", "total"}
)
```




## Category
Table.Transformation
