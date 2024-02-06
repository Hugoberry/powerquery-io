---
title: Csv.Document
---

# Csv.Document


Returnerar innehållet i CSV-dokumentet som en tabell.


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

Returnerar innehållet i CSV-dokumentet som en tabell.    <ul>     <li>         <code>columns</code> kan vara null, antalet kolumner, en lista över kolumnnamn, en tabelltyp eller en alternativpost.      </li>      <li>        <code>delimiter</code> kan vara ett enstaka tecken, en lista med tecken eller värdet <code>""</code>, vilket indikerar att rader ska delas av på varandra följande blanktecken. Standard: <code>","</code>.      </li>      <li>        Kontrollera <code>ExtraValues.Type</code> för värden som stöds av <code>extraValues</code>.      </li>      <li>        <code>encoding</code> anger textkodningstypen.      </li>    </ul>    Om en post har angetts för <code>columns</code> (och <code>delimiter</code>, <code>extraValues</code> och <code>encoding</code> är null) kan följande postfält anges:    <ul>      <li>        <code>Avgränsare</code>: Kolumnavgränsaren. Standard: <code>","</code>.      </li>      <li>        <code>Kolumner</code>: Kan vara null, antalet kolumner, en lista med kolumnnamn eller en tabelltyp. Om antalet kolumner är lägre än antalet som återfinns i indata, ignoreras de ytterligare kolumnerna. Om antalet kolumner är högre än antalet i indata, blir de ytterligare kolumnerna null. När det inte anges, fastställs antalet kolumner efter vad som finns i indata.      </li>      <li>        <code>Kodning</code>: Filens textkodning. Standard: 65001 (UTF-8).      </li>      <li>        <code>CsvStyle</code>: Anger hur citatationstecken hanteras.        <ul>          <li>            <code>CsvStyle.QuoteAfterDelimiter</code> (standard): Citationstecken i ett fält är enbart betydande direkt efter avgränsaren.          </li>          <li>            <code>CsvStyle.QuoteAlways</code>: Citationstecken i ett fält är alltid betydande, oavsett var de visas.          </li>        </ul>      </li>      <li>        <code>QuoteStyle</code>: Anger hur radbrytningar inom citationstecken hanteras.         <ul>          <li>            <code>QuoteStyle.Csv</code> (default): Citerade radbrytningar hanteras som del av data, inte som slutet på den aktuella raden.          </li>          <li>            <code>QuoteStyle.None</code> (standard): Alla radbrytningar hanteras som slutet på aktuell rad, även när de inträffar inom ett citerat värde.          </li>        </ul>      </li>    </ul>  


## Examples

### Example #1 
Bearbeta CSV-text med kolumnrubriker
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
