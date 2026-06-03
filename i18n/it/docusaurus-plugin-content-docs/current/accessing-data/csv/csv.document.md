---
title: Csv.Document
---

# Csv.Document


Restituisce il contenuto del documento CSV come tabella.


## Syntax

```powerquery
Csv.Document(
    source as any,
    optional columns as any,
    optional delimiter as any,
    optional extraValues as number,
    optional encoding as TextEncoding.Type
) as table
```


## Remarks

Restituisce il contenuto del documento CSV come tabella.

-   `columns` può essere null, il numero di colonne, un elenco di nomi di colonna, un tipo di tabella o un record di opzioni.
-   `delimiter` può essere un singolo carattere, un elenco di caratteri o il valore `""`, che indica che le righe devono essere suddivise per spazi vuoti consecutivi. Impostazione predefinita: `","`.
-   Fare riferimento a `ExtraValues.Type` per i valori supportati di `extraValues`.
-   `encoding` specifica il tipo di codifica del testo.

Se viene specificato un record per `columns` (e `delimiter`, `extraValues` e `encoding` sono null), è possibile specificare i campi record seguenti:

-   `Delimiter`: delimitatore di colonna a carattere singolo. Impostazione predefinita: `","`.
-   `Columns`: può essere null, il numero di colonne, un elenco di nomi di colonna o un tipo di tabella. Se il numero di colonne è inferiore al numero trovato nell'input, le colonne aggiuntive verranno ignorate. Se il numero di colonne è superiore al numero trovato nell'input, le colonne aggiuntive saranno null. Se non specificato, il numero di colonne verrà determinato in base al valore trovato nell'input.
-   `Encoding`: codifica del testo del file. Impostazione predefinita: 65001 (UTF-8).
-   `CsvStyle`: specifica la modalità di gestione delle virgolette.
    -   `CsvStyle.QuoteAfterDelimiter` (impostazione predefinita): le virgolette in un campo sono significative solo se immediatamente successive al delimitatore.
    -   `CsvStyle.QuoteAlways`: le virgolette in un campo sono sempre significative, indipendentemente dalla posizione.
-   `QuoteStyle`: specifica la modalità di gestione delle interruzioni di riga tra virgolette.
    -   `QuoteStyle.Csv` (impostazione predefinita): le interruzioni di riga tra virgolette vengono considerate come parte dei dati, non come fine della riga corrente.
    -   `QuoteStyle.None`: tutte le interruzioni di riga vengono considerate come fine della riga corrente, anche quando si verificano all'interno di un valore racchiuso tra virgolette.
-   `IncludeByteOrderMark`: valore logico che indica se includere un Byte Order Mark (BOM) all'inizio dell'output CSV. Quando impostato su true, il BOM viene scritto (ad esempio, UTF-8 BOM: `0xEF 0xBB 0xBF`); quando impostato su false, non viene incluso alcun BOM. Questa opzione è applicabile solo negli scenari di output. Il valore predefinito è `false`.
-   `ExtraValues`: consulta `ExtraValues.Type` per i valori supportati di ExtraValues.


## Examples

### Example #1
Consente di elaborare il testo CSV con le intestazioni di colonna.
```powerquery
let
    csv = Text.Combine({"OrderID,Item", "1,Fishing rod", "2,1 lb. worms"}, "#(cr)#(lf)")
in
    Table.PromoteHeaders(Csv.Document(csv))
```

Result: 
```powerquery
Table.FromRecords({
    [OrderID = "1", Item = "Fishing rod"],
    [OrderID = "2", Item = "1 lb. worms"]
})
```


### Example #2
Process CSV text with multiple delimiter characters. In this example, the third parameter specifies the delimiter pattern `#|#` to use instead of the default.
```powerquery
let
    csv = Text.Combine({"OrderID#|#Color", "1#|#Red", "2#|#Blue"}, "#(cr)#(lf)")
in
    Table.PromoteHeaders(Csv.Document(csv, null, "#|#"))
```

Result: 
```powerquery
Table.FromRecords({
    [OrderID = "1", Color = "Red"],
    [OrderID = "2", Color = "Blue"]
})
```




## Category
Accessing data
