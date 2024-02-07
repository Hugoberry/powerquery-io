---
title: Csv.Document
---

# Csv.Document


Retourneert de inhoud van het CSV-document als een tabel.


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

Hiermee wordt de inhoud van het CSV-document als tabel geretourneerd.    <ul>     <li>        <code>columns</code> mag null, het aantal kolommen, een lijst met kolomnamen, een tabeltype of een optierecord zijn.      </li>      <li>        <code>delimiter</code> mag een teken, een lijst met tekens of de waarde <code>""</code> zijn, die aangeeft dat rijen moeten worden opgesplitst door opeenvolgende witruimtetekens. Standaard: <code>","</code>      </li>      <li>        Raadpleeg <code>ExtraValues.Type</code> voor de ondersteunde waarden van <code>extraValues</code>.      </li>      <li>        <code>encoding</code> geeft het type tekstcodering op.      </li>    </ul>    Als er een record is opgegeven voor <code>columns</code> (en <code>delimiter</code>, <code>extraValues</code> en <code>encoding</code> null zijn), kunnen de volgende recordvelden worden opgegeven:    <ul>      <li>        <code>Delimiter</code>: Het kolomscheidingsteken. Standaard: <code>","</code>.      </li>      <li>        <code>Columns</code>: Mag null, het aantal kolommen, een lijst met kolomnamen of een tabeltype zijn. Als het aantal kolommen lager is dan het aantal dat wordt aangetroffen in de invoer, worden de extra kolommen genegeerd. Als het aantal kolommen hoger is dan het aantal dat wordt aangetroffen in de invoer, worden de extra kolommen null. Als er geen waarde is opgegeven, wordt het aantal kolommen bepaald door wat wordt aangetroffen in de invoer.      </li>      <li>        <code>Encoding</code>: De tekstcodering van het bestand. Standaard: 65001 (UTF-8).      </li>      <li>        <code>CsvStyle</code>: Specificeert hoe aanhalingstekens worden verwerkt.        <ul>          <li>             <code>CsvStyle.QuoteAfterDelimiter</code> (standaard): Aanhalingstekens in een veld hebben alleen betekenis direct na het scheidingsteken.          </li>          <li>             <code>CsvStyle.QuoteAlways</code>: Aanhalingstekens in een veld hebben altijd betekenis, ongeacht waar deze verschijnen.           </li>        </ul>      </li>      <li>        <code>QuoteStyle</code>: Specificeert hoe regeleinden tussen aanhalingstekens worden verwerkt.        <ul>          <li>             <code>QuoteStyle.Csv</code> (standaard): Regeleinden tussen aanhalingstekens worden behandeld als onderdeel van de gegevens, niet als einde van de huidige rij.          </li>          <li>            <code>QuoteStyle.None</code>: Alle regeleinden worden behandeld als einde van de huidige rij, zelfs wanneer ze in een waarde met aanhalingstekens voorkomen.          </li>        </ul>      </li>    </ul>  


## Examples

### Example #1 
CSV-tekst met kolomkoppen verwerken
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
