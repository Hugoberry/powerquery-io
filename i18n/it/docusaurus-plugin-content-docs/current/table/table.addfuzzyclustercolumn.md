---
title: Table.AddFuzzyClusterColumn
---

# Table.AddFuzzyClusterColumn


Aggiunge una nuova colonna con valori rappresentativi ottenuti dai valori di raggruppamento fuzzy della colonna specificata nella tabella.


## Syntax

```powerquery
Table.AddFuzzyClusterColumn(
    table as table,
    columnName as text,
    newColumnName as text,
    optional options as record
) as table
```


## Remarks

Aggiunge una nuova colonna `newColumnName` a `table` con valori rappresentativi di `columnName`. I valori rappresentativi vengono ottenuti mediante la corrispondenza fuzzy dei valori in `columnName`, per ogni riga..

È anche possibile includere un set facoltativo di `options` per specificare la modalità di confronto delle colonne chiave. Le opzioni includono:

-   `Culture` : Consente di raggruppare i record in base a regole specifiche delle impostazioni cultura. Può essere qualsiasi nome di impostazioni cultura valido. Ad esempio, l'opzione delle impostazioni cultura "ja-JP" raggruppa i record in base alle impostazioni cultura per il giapponese. Il valore predefinito è "", che raggruppa in base alle impostazioni cultura inglese non dipendenti da paese/area geografica.
-   `IgnoreCase` : Valore logico (true/false) che consente di raggruppare le chiavi senza distinzione tra maiuscole e minuscole. Ad esempio, quando è true, il termine "Uva" è raggruppato con "uva". Il valore predefinito è true.
-   `IgnoreSpace` : Valore logico (true/false) che consente la combinazione di parti di testo per trovare i gruppi. Ad esempio, quando è true, il termine "Uva" è raggruppato con "Uva". Il valore predefinito è true.
-   `SimilarityColumnName` : Nome per la colonna che mostra la similarità tra un valore di input e il valore rappresentativo per tale input. Il valore predefinito è Null, nel qual caso non verrà aggiunta una nuova colonna per le similarità.
-   `Threshold` : Numero compreso tra 0,00 e 1,00 che specifica il punteggio di somiglianza in base a cui verranno raggruppati due valori. Ad esempio, i termini "Uva" e "Ua" ("v" mancante) sono raggruppati solo se questa opzione è impostata su un valore inferiore a 0,90. Una soglia di 1,00 consente corrispondenze esatte. (Si noti che una "corrispondenza esatta" fuzzy potrebbe ignorare differenze quali la combinazione di maiuscole e minuscole, l'ordine delle parole e la punteggiatura.) Il valore predefinito è 0,80.
-   `TransformationTable` : Tabella che consente di raggruppare i record in base a mapping di valori personalizzati. Deve contenere le colonne "Da" e "A". Ad esempio, il termine "Uva" viene raggruppato con "Uvetta" se viene specificata una tabella di trasformazione con la colonna "Da" contenente "Uva" e la colonna "A" contenente "Uvetta". Si noti che la trasformazione verrà applicata a tutte le occorrenze del testo nella tabella di trasformazione. Con la tabella di trasformazione precedente, la frase "L'uva è dolce" sarà raggruppata anche con la frase "L'uvetta è dolce".


## Examples

### Example #1
Trovare i valori rappresentativi per la sede dei dipendenti.
```powerquery
Table.AddFuzzyClusterColumn(
    Table.FromRecords(
        {
            [EmployeeID = 1, Location = "Seattle"],
            [EmployeeID = 2, Location = "seattl"],
            [EmployeeID = 3, Location = "Vancouver"],
            [EmployeeID = 4, Location = "Seatle"],
            [EmployeeID = 5, Location = "vancover"],
            [EmployeeID = 6, Location = "Seattle"],
            [EmployeeID = 7, Location = "Vancouver"]
        },
        type table [EmployeeID = nullable number, Location = nullable text]
    ),
    "Location",
    "Location_Cleaned",
    [IgnoreCase = true, IgnoreSpace = true]
)
```

Result: 
```powerquery
Table.FromRecords(
    {
        [EmployeeID = 1, Location = "Seattle", Location_Cleaned = "Seattle"],
        [EmployeeID = 2, Location = "seattl", Location_Cleaned = "Seattle"],
        [EmployeeID = 3, Location = "Vancouver", Location_Cleaned = "Vancouver"],
        [EmployeeID = 4, Location = "Seatle", Location_Cleaned = "Seattle"],
        [EmployeeID = 5, Location = "vancover", Location_Cleaned = "Vancouver"],
        [EmployeeID = 6, Location = "Seattle", Location_Cleaned = "Seattle"],
        [EmployeeID = 7, Location = "Vancouver", Location_Cleaned = "Vancouver"]
    },
    type table [EmployeeID = nullable number, Location = nullable text, Location_Cleaned = nullable text]
)
```




## Category
Table.Transformation
