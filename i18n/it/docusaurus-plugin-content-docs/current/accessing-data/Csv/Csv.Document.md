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

Restituisce il contenuto del documento CSV come tabella.    <ul>      <li>        <code>columns</code> può essere Null, il numero di colonne, un elenco di nomi di colonna, un tipo di tabella o un record di opzioni.      </li>      <li>        <code>delimiter</code> può essere un singolo carattere, un elenco di caratteri o il valore <code>""</code>, che indica che le righe devono essere suddivise per spazi vuoti consecutivi. Impostazione predefinita: <code>","</code>.      </li>      <li>        Fare riferimento a <code>ExtraValues.Type</code> per i valori supportati di <code>extraValues</code>.      </li>      <li>        <code>encoding</code> specifica il tipo di codifica del testo.      </li>    </ul>    Se viene specificato un record per <code>columns</code> (e <code>delimiter</code>, <code>extraValues</code>, e <code>encoding</code> sono Null), è possibile specificare i campi record seguenti:    <ul>      <li>        <code>Delimiter</code>: delimitatore di colonna. Impostazione predefinita: <code>","</code>.      </li>      <li>        <code>Columns</code>: può essere Null, il numero di colonne, un elenco di nomi di colonna o un tipo di tabella. Se il numero di colonne è inferiore al numero trovato nell'input, le colonne aggiuntive verranno ignorate. Se il numero di colonne è maggiore del numero trovato nell'input, le colonne aggiuntive saranno Null. Se non specificato, il numero di colonne verrà determinato da ciò che viene trovato nell'input.      </li>      <li>        <code>Encoding</code>: codifica del testo del file. Valore predefinito: 65001 (UTF-8).      </li>      <li>        <code>CsvStyle</code>: specifica la modalità di gestione delle virgolette.        <ul>          <li>            <code>CsvStyle.QuoteAfterDelimiter</code> (default): In un campo le virgolette sono significative solo se immediatamente successive al delimitatore.          </li>          <li>            <code>CsvStyle.QuoteAlways</code>: in un campo le virgolette sono sempre significative, indipendentemente dalla posizione.          </li>        </ul>      </li>      <li>        <code>QuoteStyle</code>: specifica la modalità di gestione delle interruzioni di riga tra virgolette.        <ul>          <li>            <code>QuoteStyle.Csv</code> (impostazione predefinita): le interruzioni di riga tra virgolette vengono considerate come parte dei dati, non come fine della riga corrente.          </li>          <li>            <code>QuoteStyle.None</code>: tutte le interruzioni di riga vengono considerate come fine della riga corrente, anche quando si verificano all'interno di un valore racchiuso tra virgolette.          </li>        </ul>      </li>    </ul>  


## Examples

### Example #1 
Elabora il testo CSV con le intestazioni di colonna
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




## Category
Accessing data
