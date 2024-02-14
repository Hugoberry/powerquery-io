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

Crea un join delle righe di <code>table1</code> con le righe di <code>table2</code> in base a una corrispondenza fuzzy dei valori delle colonne chiave selezionate da <code>key1</code> (per <code>table1</code>) e <code>key2</code> (per <code>table2</code>).<br />Per corrispondenza fuzzy si intende un confronto basato sulla somiglianza del testo anziché sull'uguaglianza del testo.<br />Per impostazione predefinita, viene eseguito un inner join, ma è possibile includere un set facoltativo di <code>joinKind</code> per specificare il tipo di join. Le opzioni includono:    <ul><li><code>JoinKind.Inner</code></li><li><code>JoinKind.LeftOuter</code></li><li><code>JoinKind.RightOuter</code></li><li><code>JoinKind.FullOuter</code></li><li><code>JoinKind.LeftAnti</code></li><li><code>JoinKind.RightAnti</code></li></ul><br />È possibile includere un set facoltativo di <code>joinOptions</code> per specificare la modalità di confronto delle colonne chiave. Le opzioni includono:    <ul><li><code>ConcurrentRequests</code> : Numero compreso tra 1 e 8 che specifica il numero di thread paralleli da usare per la corrispondenza fuzzy. Il valore predefinito &#232; 1.</li><li><code>Culture</code> : Consente la corrispondenza dei record in base a regole specifiche delle impostazioni cultura. Pu&#242; essere qualsiasi nome di impostazioni cultura valido. Ad esempio, l&#39;opzione delle impostazioni cultura &quot;ja-JP&quot; trova la corrispondenza dei record in base alle impostazioni cultura per il giapponese. Il valore predefinito &#232; &quot;&quot;, che trova la corrispondenza in base alle impostazioni cultura inglese non dipendenti da paese/area geografica.</li><li><code>IgnoreCase</code> : Valore logico (true/false) che consente la corrispondenza delle chiavi senza distinzione tra maiuscole e minuscole. Ad esempio, quando &#232; true, il termine &quot;Uva&quot; viene abbinato a &quot;uva&quot;. Il valore predefinito &#232; true.</li><li><code>IgnoreSpace</code> : Valore logico (true/false) che consente la combinazione di parti di testo per trovare le corrispondenze. Ad esempio, quando &#232; true, il termine &quot;Uva&quot; &#232; abbinato a &quot;Uva&quot;. Il valore predefinito &#232; true.</li><li><code>NumberOfMatches</code> : Numero intero che specifica il numero massimo di righe corrispondenti che possono essere restituite per ogni riga di input. Ad esempio, un valore di 1 restituir&#224; al massimo una riga corrispondente per ogni riga di input. Se questa opzione non viene specificata, vengono restituite tutte le righe corrispondenti.</li><li><code>SimilarityColumnName</code> : Nome per la colonna che mostra la similarit&#224; tra un valore di input e il valore rappresentativo per tale input. Il valore predefinito &#232; Null, nel qual caso non verr&#224; aggiunta una nuova colonna per le similarit&#224;.</li><li><code>Threshold</code> : Numero compreso tra 0,00 e 1,00 che specifica il punteggio di somiglianza in base a cui verranno abbinati due valori.    Ad esempio, i termini &quot;Uva&quot; e &quot;Ua&quot; (&quot;v&quot; mancante) sono abbinati solo se questa opzione &#232; impostata su un valore inferiore a 0,90.    Una soglia di 1,00 consente corrispondenze esatte.    (Si noti che una &quot;corrispondenza esatta&quot; fuzzy potrebbe ignorare differenze quali la combinazione di maiuscole e minuscole, l&#39;ordine delle parole e la punteggiatura.)    Il valore predefinito &#232; 0,80.</li><li><code>TransformationTable</code> : Tabella che consente di abbinare i record in base a mapping di valori personalizzati. Deve contenere le colonne &quot;Da&quot; e &quot;A&quot;. Ad esempio, il termine &quot;Uva&quot; viene abbinato a &quot;Uvetta&quot; se viene specificata una tabella di trasformazione con la colonna &quot;Da&quot; contenente &quot;Uva&quot; e la colonna &quot;A&quot; contenente &quot;Uvetta&quot;. Si noti che la trasformazione verr&#224; applicata a tutte le occorrenze del testo nella tabella di trasformazione. Con la tabella di trasformazione precedente, la frase &quot;L&#39;uva &#232; dolce&quot; verr&#224; anche abbinata alla frase &quot;L&#39;uvetta &#232; dolce&quot;.</li></ul><br />


## Examples

### Example #1 
Inner join fuzzy a sinistra di due tabelle in base a [FirstName]
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
