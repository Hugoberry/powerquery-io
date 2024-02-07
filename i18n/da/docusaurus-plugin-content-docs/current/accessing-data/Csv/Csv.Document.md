---
title: Csv.Document
---

# Csv.Document


Returnerer indholdet af CSV-dokumentet som en tabel.


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

Returnerer indholdet af csv-dokumentet som en tabel.    <ul>     <li>        <code>columns</code> kan være null, antallet af kolonner, en liste over kolonnenavne, en tabeltype eller en post med indstillinger.        </li>        <li>        <code>delimiter</code> kan være et enkelt tegn eller en liste over tegn eller værdien <code>""</code>, som indikerer, at rækker skal deles op af gentagne mellemrum. Standard: <code>","</code>.      </li>      <li>        Se <code>ExtraValues.Type</code> for de understøttede værdier for <code>extraValues</code>.        </li>        <li>        <code>encoding</code> angiver tekstens kodningstype.        </li>    </ul>        Hvis en post er angivet for <code>columns</code> (og <code>delimiter</code>, <code>extraValues</code> og <code>encoding</code> er null), kan følgende felter for posten angives:    <ul>     <li>        <code>Afgrænser</code>: Kolonneafgrænser. Standard: <code>","</code>.        </li>        <li>        <code>Kolonner</code>: Kan være null, antallet af kolonner, en liste over kolonnenavne eller en tabeltype. Hvis antallet af kolonner er lavere end tallet i inputtet, ignoreres de ekstra kolonner. Hvis antallet af kolonner er højere end antallet i inputtet, er de ekstra kolonner null. Hvis intet er angivet, afgøres antallet af kolonner af inputtet.        </li>    <li>        <code>Kodning</code>: Filens tekstkodning. Standard: 65001 (UTF-8).        </li>     <li>        <code>CsvStyle</code>: Angiver, hvordan citater behandles.        <ul>        <li>         <code>CsvStyle.QuoteAfterDelimiter</code> (standard): Citater i et felt er kun væsentlige umiddelbart efter afgrænseren.          </li>          <li>          <code>CsvStyle.QuoteAlways</code>: Citater i et felt er altid væsentlige, uanset hvor de vises.          </li>          </ul>          </li>          <li>          <code>QuoteStyle</code>: Angiver, hvordan citerede linjeskift håndteres.          <ul>          <li>           <code>QuoteStyle.None</code> (standard): Alle linjeskift behandles som slutningen af den aktuelle række, selv når de forekommer inden for en citeret værdi.          </li>          <li>           <code>QuoteStyle.Csv</code>: Citerede linjeskift behandles som del af dataene, ikke som afslutningen på den aktuelle række.          </li>          </ul>          </li>          </ul>  


## Examples

### Example #1 
Behandl CSV-tekst med kolonneoverskrifter
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
