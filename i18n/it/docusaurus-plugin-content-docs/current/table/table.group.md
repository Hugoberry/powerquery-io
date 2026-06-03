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

Raggruppa le righe di `table` in base alle colonne chiave definite da `key`. `key` può essere un singolo nome di colonna o un elenco di nomi di colonna. Per ogni gruppo viene costruito un record contenente le colonne chiave e i rispettivi valori, insieme alle colonne aggregate specificate da `aggregatedColumns`. Facoltativamente, è possibile specificare anche `groupKind` e `comparer`.  
  
Se i dati sono già ordinati in base alle colonne chiave, è possibile fornire un oggetto `groupKind` di GroupKind.Local. In alcuni casi questo oggetto può migliorare le prestazioni del raggruppamento dal momento che tutte le righe con un set specificato di valori chiave vengono considerate contigue.  
  
Quando si passa un oggetto `comparer`, tenere presente che se chiavi diverse vengono considerate come uguali, una riga può essere inserita in un gruppo le cui chiavi sono diverse dalle proprie.  
  
Questa funzione non garantisce l'ordinamento delle righe restituite.


## Examples

### Example #1
Raggruppare la tabella aggiungendo una colonna aggregata \[total\] contenente la somma dei prezzi ("each List.Sum(\[price\])").
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
