---
title: Excel.Workbook
---

# Excel.Workbook


Hiermee wordt de inhoud van de Excel-werkmap geretourneerd.


## Syntax

```powerquery
Excel.Workbook(
    workbook as binary,
    optional useHeaders as any,
    optional delayTypes as logical
) as table
```


## Remarks

Retourneert de inhoud van de Excel-werkmap. <ul> <li> <code>useHeaders</code> kan null zijn, een logische waarde (waar/onwaar) die aangeeft of de eerste rij van elke geretourneerde tabel moet worden behandeld als een koptekst of een archief met opties. Standaard: onwaar.</li> <li> <code>delayTypes</code> kan null zijn of een logische waarde (waar/onwaar) die aangeeft of de kolommen van elke geretourneerde tabel niet moeten worden getypt. Standaard: onwaar.</li> </ul> Als er een archief is opgegeven voor <code>useHeaders</code> (en <code>delayTypes</code> null is), kunnen de volgende archiefvelden worden opgegeven: <ul> <li> <code>UseHeaders</code>: kan null zijn of een logische waarde (waar/onwaar) die aangeeft of de eerste rij van elke geretourneerde tabel moet worden behandeld als een koptekst. Standaard: onwaar.</li> <li> <code>DelayTypes</code>: kan null zijn of een logische waarde (waar/onwaar) die aangeeft of de kolommen van elke geretourneerde tabel niet moeten worden getypt. Standaard: onwaar.</li> <li> <code>InferSheetDimensions</code>: kan null zijn of een logische waarde (waar/onwaar) die aangeeft of het gebied van een werkblad dat gegevens bevat, moet worden gelezen door het werkblad zelf te lezen in plaats van de metagegevens van de dimensies uit het bestand te lezen. Dit kan handig zijn wanneer de metagegevens van de dimensie onjuist zijn. Houd er rekening mee dat deze optie alleen wordt ondersteund voor Open XML-Excel-bestanden en niet voor oudere Excel-bestanden. Standaard: onwaar.</li> </ul>    


## Examples

### Example #1 
De inhoud van Blad1 retourneren vanuit een Excel-werkmap.
```powerquery
Excel.Workbook(File.Contents("C:\Book1.xlsx"), null, true){[Item="Sheet1"]}[Data]
```

Result: 
```powerquery
Table.FromRecords({
    [Column1 = "ID", Column2 = "Name", Column3 = "Phone"],
    [Column1 = 1, Column2 = "Bob", Column3 = "123-4567"],
    [Column1 = 3, Column2 = "Pam", Column3 = "543-7890"],
    [Column1 = 2, Column2 = "Jim", Column3 = "987-6543"]
})
```




## Category
Accessing data
