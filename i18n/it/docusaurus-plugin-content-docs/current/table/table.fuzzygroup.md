---
title: Table.FuzzyGroup
---

# Table.FuzzyGroup


Raggruppa le righe nella tabella in base alla corrispondenza fuzzy delle chiavi.


## Syntax

```powerquery
Table.FuzzyGroup(
    table as table,
    key as any,
    aggregatedColumns as list,
    optional options as record
) as table
```


## Remarks

Raggruppa le righe di `table` in base ai valori con corrispondenza fuzzy nella colonna specificata, `key`, per ogni riga. Per ogni gruppo, viene creato un record contenente le colonne chiave (e i relativi valori) insieme a tutte le colonne aggregate specificate da `aggregatedColumns`. Questa funzione non può garantire la restituzione di un ordine fisso di righe.

È anche possibile includere un set facoltativo di `options` per specificare la modalità di confronto delle colonne chiave. Le opzioni includono:

-   `Culture` : Consente di raggruppare i record in base a regole specifiche delle impostazioni cultura. Può essere qualsiasi nome di impostazioni cultura valido. Ad esempio, l'opzione delle impostazioni cultura "ja-JP" raggruppa i record in base alle impostazioni cultura per il giapponese. Il valore predefinito è "", che raggruppa in base alle impostazioni cultura inglese non dipendenti da paese/area geografica.
-   `IgnoreCase` : Valore logico (true/false) che consente di raggruppare le chiavi senza distinzione tra maiuscole e minuscole. Ad esempio, quando è true, il termine "Uva" è raggruppato con "uva". Il valore predefinito è true.
-   `IgnoreSpace` : Valore logico (true/false) che consente la combinazione di parti di testo per trovare i gruppi. Ad esempio, quando è true, il termine "Uva" è raggruppato con "Uva". Il valore predefinito è true.
-   `SimilarityColumnName` : Nome per la colonna che mostra la similarità tra un valore di input e il valore rappresentativo per tale input. Il valore predefinito è Null, nel qual caso non verrà aggiunta una nuova colonna per le similarità.
-   `Threshold` : Numero compreso tra 0,00 e 1,00 che specifica il punteggio di somiglianza in base a cui verranno raggruppati due valori. Ad esempio, i termini "Uva" e "Ua" ("v" mancante) sono raggruppati solo se questa opzione è impostata su un valore inferiore a 0,90. Una soglia di 1,00 consente corrispondenze esatte. (Si noti che una "corrispondenza esatta" fuzzy potrebbe ignorare differenze quali la combinazione di maiuscole e minuscole, l'ordine delle parole e la punteggiatura.) Il valore predefinito è 0,80.
-   `TransformationTable` : Tabella che consente di raggruppare i record in base a mapping di valori personalizzati. Deve contenere le colonne "Da" e "A". Ad esempio, il termine "Uva" viene raggruppato con "Uvetta" se viene specificata una tabella di trasformazione con la colonna "Da" contenente "Uva" e la colonna "A" contenente "Uvetta". Si noti che la trasformazione verrà applicata a tutte le occorrenze del testo nella tabella di trasformazione. Con la tabella di trasformazione precedente, la frase "L'uva è dolce" sarà raggruppata anche con la frase "L'uvetta è dolce".


## Examples

### Example #1
Raggruppa la tabella aggiungendo una colonna aggregata \[Count\] contenente il numero di dipendenti in ogni sede (`each Table.RowCount(_)`).
```powerquery
Table.FuzzyGroup(
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
    {"Count", each Table.RowCount(_)},
    [IgnoreCase = true, IgnoreSpace = true]
)
```

Result: 
```powerquery
Table.FromRecords({
    [Location = "Seattle", Count = 4],
    [Location = "Vancouver", Count = 3]
})
```




## Category
Table.Transformation
