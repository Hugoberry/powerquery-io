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

Raggruppa le righe di <code>table</code> in base ai valori con corrispondenza fuzzy nella colonna specificata, <code>key</code>, per ogni riga.    Per ogni gruppo, viene creato un record contenente le colonne chiave (e i relativi valori) insieme a tutte le colonne aggregate specificate da <code>aggregatedColumns</code>.    Questa funzione non può garantire la restituzione di un ordine fisso di righe.    È anche possibile includere un set facoltativo di <code>options</code> per specificare la modalità di confronto delle colonne chiave. Le opzioni includono:    <ul><li><code>Culture</code> : Consente di raggruppare i record in base a regole specifiche delle impostazioni cultura. Pu&#242; essere qualsiasi nome di impostazioni cultura valido. Ad esempio, l&#39;opzione delle impostazioni cultura &quot;ja-JP&quot; raggruppa i record in base alle impostazioni cultura per il giapponese. Il valore predefinito &#232; &quot;&quot;, che raggruppa in base alle impostazioni cultura inglese non dipendenti da paese/area geografica.</li><li><code>IgnoreCase</code> : Valore logico (true/false) che consente di raggruppare le chiavi senza distinzione tra maiuscole e minuscole. Ad esempio, quando &#232; true, il termine &quot;Uva&quot; &#232; raggruppato con &quot;uva&quot;. Il valore predefinito &#232; true.</li><li><code>IgnoreSpace</code> : Valore logico (true/false) che consente la combinazione di parti di testo per trovare i gruppi. Ad esempio, quando &#232; true, il termine &quot;Uva&quot; &#232; raggruppato con &quot;Uva&quot;. Il valore predefinito &#232; true.</li><li><code>SimilarityColumnName</code> : Nome per la colonna che mostra la similarit&#224; tra un valore di input e il valore rappresentativo per tale input. Il valore predefinito &#232; Null, nel qual caso non verr&#224; aggiunta una nuova colonna per le similarit&#224;.</li><li><code>Threshold</code> : Numero compreso tra 0,00 e 1,00 che specifica il punteggio di somiglianza in base a cui verranno raggruppati  due valori.    Ad esempio, i termini &quot;Uva&quot; e &quot;Ua&quot; (&quot;v&quot; mancante) sono raggruppati solo se questa opzione &#232; impostata su un valore inferiore a 0,90.    Una soglia di 1,00 consente corrispondenze esatte.    (Si noti che una &quot;corrispondenza esatta&quot; fuzzy potrebbe ignorare differenze quali la combinazione di maiuscole e minuscole, l&#39;ordine delle parole e la punteggiatura.)    Il valore predefinito &#232; 0,80.</li><li><code>TransformationTable</code> : Tabella che consente di raggruppare i record in base a mapping di valori personalizzati. Deve contenere le colonne &quot;Da&quot; e &quot;A&quot;. Ad esempio, il termine &quot;Uva&quot; viene raggruppato con &quot;Uvetta&quot; se viene specificata una tabella di trasformazione con la colonna &quot;Da&quot; contenente &quot;Uva&quot; e la colonna &quot;A&quot; contenente &quot;Uvetta&quot;. Si noti che la trasformazione verr&#224; applicata a tutte le occorrenze del testo nella tabella di trasformazione. Con la tabella di trasformazione precedente, la frase &quot;L&#39;uva &#232; dolce&quot; sar&#224; raggruppata anche con la frase &quot;L&#39;uvetta &#232; dolce&quot;.</li></ul><br />


## Examples

### Example #1 
Raggruppare la tabella aggiungendo una colonna aggregata [Count] contenente il numero di dipendenti in ogni sede (&#34;each Table.RowCount(_))&#34;).
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
