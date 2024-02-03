---
title: Csv.Document
---

# Csv.Document


## Description

Vraća sadržaj CSV dokumenta u vidu tabele.


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


## Details

Vraća sadržaj CSV dokumenta kao tabelu.    <ul>     <li>         <code>columns</code> može da bude bez vrednosti, broj kolona, lista imena kolona, tip tabele ili zapis opcija.     </li>      <li>          <code>delimiter</code>može da bude jedan znak ili lista znakova, ili vrednost <code>""</code>, što ukazuje da redovi treba da budu podeljeni uzastopnim razmacima. Podrazumevano: <code>","</code>.      </li>     <li>        Pogledajte <code>ExtraValues.Type</code> za podržane vrednosti <code>extraValues</code> .      </li>     <li>         <code>encoding</code>određuje tip kodiranja teksta.      </li>    </ul>    Ako je zapis određen za <code>columns</code> (i <code>delimiter</code>, <code>extraValues</code>, i <code>encoding</code> bez vrednosti), mogu se obezbediti sledeća polja zapisa:    <ul>     <li>        <code>Delimiter</code>: Znak za razgraničavanje kolona.Podrazumevano: <code>","</code>.      </li>     <li>        <code>Columns</code>: Može biti bez vrednosti, broj kolona, lista naziva kolona ili tip tabele. Ako je broj kolona manji od broja pronađenog u unosu, dodatne kolone će biti zanemarene. Ako je broj kolona veći od broja pronađenog u unosu, dodatne kolone će biti bez vrednosti. Kada nije navedeno, broj kolona će biti određen onim što se nalazi u unosu.      </li>     <li>        <code>Encoding</code>: Kodiranje teksta datoteke. Podrazumevano: 65001 (UTF-8).      </li>     <li>        <code>CsvStyle</code>: Određuje kako se postupa sa citatima.        <ul>        <li>        <code>CsvStyle.QuoteAfterDelimiter</code> (podrazumevano): Navodnici u polju su značajni samo odmah nakon znaka za razgraničavanje.        </li>        <li>        <code>CsvStyle.QuoteAlways</code>: Citati u polju su uvek značajni, bez obzira na to gde se pojavljuju.          </li>        </ul>      </li>      <li>        <code>QuoteStyle</code>: Određuje način na koji se postupa sa prelomima reda u navodnicima.        <ul>          <li>            <code>QuoteStyle.Csv</code> (podrazumevana vrednost): Prelomi linija u navodnicima se tretiraju kao deo podataka, a ne kao kraj trenutnog reda.          </li>          <li>            <code>QuoteStyle.None</code>: Svi prelomi redova se tretiraju kao kraj trenutnog reda, čak i kada se javljaju unutar vrednosti navoda.          </li>        </ul>      </li>    </ul>  


## Examples

### Example #1 
Obradite CSV tekst pomoću zaglavlja kolona
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
