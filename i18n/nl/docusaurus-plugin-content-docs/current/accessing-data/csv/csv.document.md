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

Retourneert de inhoud van het CSV-document als een tabel.

-   `columns` kan null, het aantal kolommen, een lijst met kolomnamen, een tabeltype of een optierecord zijn.
-   `delimiter` kan een enkel teken, een lijst met tekens of de waarde `""` zijn, waarmee wordt aangegeven dat rijen moeten worden gesplitst door opeenvolgende spaties. Standaard: `","`.
-   Raadpleeg `ExtraValues.Type` voor de ondersteunde waarden van `extraValues`.
-   `encoding` geeft het type tekstcodering aan.

Als er een record is opgegeven voor `columns` (en `delimiter`, `extraValues` en `encoding` null zijn), kunnen de volgende recordvelden worden opgegeven:

-   `Delimeter`: een kolomscheidingsteken met een enkel teken. Standaard: `","`.
-   `Columns`: kan null, het aantal kolommen, een lijst met kolomnamen of een tabeltype zijn. Als het aantal kolommen lager is dan het aantal dat wordt aangetroffen in de invoer, worden de extra kolommen genegeerd. Als het aantal kolommen hoger is dan het aantal dat wordt aangetroffen in de invoer, worden de extra kolommen null. Als u niets opgeeft, wordt het aantal kolommen bepaald door wat er in de invoer wordt gevonden.
-   `Encoding`: de tekstcodering van het bestand. Standaard: 65001 (UTF-8).
-   `CsvStyle`: hiermee geeft u op hoe aanhalingstekens worden verwerkt.
    -   `CsvStyle.QuoteAfterDelimiter` (standaard): aanhalingstekens in een veld zijn alleen direct na het scheidingsteken belangrijk.
    -   `CsvStyle.QuoteAlways`: aanhalingstekens in een veld zijn altijd belangrijk, ongeacht waar ze worden weergegeven.
-   `QuoteStyle`: hiermee geeft u op hoe regeleinden met aanhalingstekens worden verwerkt.
    -   `QuoteStyle.Csv` (standaard): regeleinden met aanhalingstekens worden behandeld als onderdeel van de gegevens, niet als het einde van de huidige rij.
    -   `QuoteStyle.None`: alle regeleinden worden behandeld als het einde van de huidige rij, zelfs wanneer ze voorkomen binnen een waarde tussen aanhalingstekens.
-   `IncludeByteOrderMark`: een logische waarde die aangeeft of aan het begin van de CSV-uitvoer een stuklijst (BOM) moet worden opgenomen. Als deze optie is ingesteld op waar, wordt de BOM geschreven (bijvoorbeeld UTF-8 BOM: `0xEF 0xBB 0xBF`); als deze optie is ingesteld op onwaar, wordt er geen BOM opgenomen. Deze optie is alleen van toepassing in uitvoerscenario's. De standaardwaarde is `false`.
-   `ExtraValues`: raadpleeg `ExtraValues.Type` voor de ondersteunde waarden van ExtraValues.


## Examples

### Example #1
CSV-tekst verwerken met kolomkoppen.
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
