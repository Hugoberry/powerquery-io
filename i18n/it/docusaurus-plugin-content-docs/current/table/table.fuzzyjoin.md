---
title: Table.FuzzyJoin
---

# Table.FuzzyJoin


Unisce in join le righe di due tabelle in cui è stata rilevata una corrispondenza fuzzy in base alle chiavi specificate.


## Syntax

```powerquery
Table.FuzzyJoin(
    table1 as table,
    key1 as any,
    table2 as table,
    key2 as any,
    optional joinKind as JoinKind.Type,
    optional joinOptions as record
) as table
```


## Remarks

Crea un join delle righe di `table1` con le righe di `table2` in base a una corrispondenza fuzzy dei valori delle colonne chiave selezionate da `key1` (per `table1`) e `key2` (per `table2`).

Per corrispondenza fuzzy si intende un confronto basato sulla somiglianza del testo anziché sull'uguaglianza del testo.

Per impostazione predefinita, viene eseguito un inner join, ma è possibile includere un set facoltativo di `joinKind` per specificare il tipo di join. Le opzioni includono:

-   `JoinKind.Inner`
-   `JoinKind.LeftOuter`
-   `JoinKind.RightOuter`
-   `JoinKind.FullOuter`
-   `JoinKind.LeftAnti`
-   `JoinKind.RightAnti`
-   `JoinKind.LeftSemi`
-   `JoinKind.RightSemi`

È possibile includere un set facoltativo di `joinOptions` per specificare la modalità di confronto delle colonne chiave. Le opzioni includono:

-   `ConcurrentRequests` : Numero compreso tra 1 e 8 che specifica il numero di thread paralleli da usare per la corrispondenza fuzzy. Il valore predefinito è 1.
-   `Culture` : Consente la corrispondenza dei record in base a regole specifiche delle impostazioni cultura. Può essere qualsiasi nome di impostazioni cultura valido. Ad esempio, l'opzione delle impostazioni cultura "ja-JP" trova la corrispondenza dei record in base alle impostazioni cultura per il giapponese. Il valore predefinito è "", che trova la corrispondenza in base alle impostazioni cultura inglese non dipendenti da paese/area geografica.
-   `IgnoreCase` : Valore logico (true/false) che consente la corrispondenza delle chiavi senza distinzione tra maiuscole e minuscole. Ad esempio, quando è true, il termine "Uva" viene abbinato a "uva". Il valore predefinito è true.
-   `IgnoreSpace` : Valore logico (true/false) che consente la combinazione di parti di testo per trovare le corrispondenze. Ad esempio, quando è true, il termine "Uva" è abbinato a "Uva". Il valore predefinito è true.
-   `NumberOfMatches` : Numero intero che specifica il numero massimo di righe corrispondenti che possono essere restituite per ogni riga di input. Ad esempio, un valore di 1 restituirà al massimo una riga corrispondente per ogni riga di input. Se questa opzione non viene specificata, vengono restituite tutte le righe corrispondenti.
-   `SimilarityColumnName` : Nome per la colonna che mostra la similarità tra un valore di input e il valore rappresentativo per tale input. Il valore predefinito è Null, nel qual caso non verrà aggiunta una nuova colonna per le similarità.
-   `Threshold` : Numero compreso tra 0,00 e 1,00 che specifica il punteggio di somiglianza in base a cui verranno abbinati due valori. Ad esempio, i termini "Uva" e "Ua" ("v" mancante) sono abbinati solo se questa opzione è impostata su un valore inferiore a 0,90. Una soglia di 1,00 consente corrispondenze esatte. (Si noti che una "corrispondenza esatta" fuzzy potrebbe ignorare differenze quali la combinazione di maiuscole e minuscole, l'ordine delle parole e la punteggiatura.) Il valore predefinito è 0,80.
-   `TransformationTable` : Tabella che consente di abbinare i record in base a mapping di valori personalizzati. Deve contenere le colonne "Da" e "A". Ad esempio, il termine "Uva" viene abbinato a "Uvetta" se viene specificata una tabella di trasformazione con la colonna "Da" contenente "Uva" e la colonna "A" contenente "Uvetta". Si noti che la trasformazione verrà applicata a tutte le occorrenze del testo nella tabella di trasformazione. Con la tabella di trasformazione precedente, la frase "L'uva è dolce" verrà anche abbinata alla frase "L'uvetta è dolce".


## Examples

### Example #1
Inner join fuzzy a sinistra di due tabelle in base a \[FirstName\]
```powerquery
Table.FuzzyJoin(
    Table.FromRecords(
        {
            [CustomerID = 1, FirstName1 = "Bob", Phone = "555-1234"],
            [CustomerID = 2, FirstName1 = "Robert", Phone = "555-4567"]
        },
        type table [CustomerID = nullable number, FirstName1 = nullable text, Phone = nullable text]
    ),
    {"FirstName1"},
    Table.FromRecords(
        {
            [CustomerStateID = 1, FirstName2 = "Bob", State = "TX"],
            [CustomerStateID = 2, FirstName2 = "bOB", State = "CA"]
        },
        type table [CustomerStateID = nullable number, FirstName2 = nullable text, State = nullable text]
    ),
    {"FirstName2"},
    JoinKind.LeftOuter,
    [IgnoreCase = true, IgnoreSpace = false]
)
```

Result: 
```powerquery
Table.FromRecords({
    [
        CustomerID = 1,
        FirstName1 = "Bob",
        Phone = "555-1234",
        CustomerStateID = 1,
        FirstName2 = "Bob",
        State = "TX"
    ],
    [
        CustomerID = 1,
        FirstName1 = "Bob",
        Phone = "555-1234",
        CustomerStateID = 2,
        FirstName2 = "bOB",
        State = "CA"
    ],
    [
        CustomerID = 2,
        FirstName1 = "Robert",
        Phone = "555-4567",
        CustomerStateID = null,
        FirstName2 = null,
        State = null
    ]
})
```




## Category
Table.Transformation
