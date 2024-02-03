---
title: Csv.Document
---

# Csv.Document


## Description

Atgriež CSV dokumenta saturu kā tabulu.


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

Atgriež CSV dokumenta saturu kā tabulu.    <ul>      <li>        <code>columns</code> var būt Null, kolonnu skaits, kolonnu nosaukumu saraksts, tabulas tips vai opciju ieraksts.      </li>      <li>        <code>delimiter</code> var būt viena rakstzīme, rakstzīmju saraksts vai vērtība <code>""</code>, kas norāda, ka rindas ir jāsadala ar secīgām atstarpes rakstzīmēm. Noklusējums: <code>","</code>.      </li>      <li>        Skatiet <code>ExtraValues.Type</code>, lai uzzinātu <code>extraValues</code> atbalstītās vērtības.      </li>      <li>        <code>encoding</code> norāda teksta kodējuma tipu.      </li>    </ul>    Ja ir norādīts <code>columns</code> ieraksts (un <code>delimiter</code>, <code>extraValues</code>, un <code>encoding</code> vērtība ir Null), var tikt norādīti tālāk minētie ierakstu lauki:    <ul>      <li>        <code>Atdalītājs</code>: kolonnu atdalītājs. Noklusējums: <code>","</code>.      </li>      <li>        <code>Kolonnas</code>: var būt Null, kolonnu skaits, kolonnu nosaukumu saraksts vai tabulas tips. Ja kolonnu skaits ir mazāks nekā ievadē esošais skaitlis, papildu kolonnas tiek ignorētas. Ja kolonnu skaits ir lielāks nekā ievadē esošais skaitlis, papildu kolonnu vērtība ir Null. Ja skaits nav norādīts, kolonnu skaitu nosaka ievadē esošā vērtība.      </li>      <li>        <code>Kodējums</code>: faila teksta kodējums. Noklusējums: 65001 (UTF-8).      </li>      <li>        <code>CsvStyle</code>: norāda, kā tiek lietotas pēdiņas.        <ul>          <li>            <code>CsvStyle.QuoteAfterDelimiter</code> (noklusējums):  laukā esošām pēdiņām nozīme ir tikai tad, ja tās atrodas uzreiz aiz atdalītāja.          </li>          <li>            <code>CsvStyle.QuoteAlways</code>: laukā esošām pēdiņām vienmēr ir nozīme neatkarīgi no to novietojuma.          </li>        </ul>      </li>      <li>        <code>QuoteStyle</code>: norāda, kā tiek apstrādāti rindiņu pārtraukumi ar pēdiņām.        <ul>          <li>            <code>QuoteStyle.Csv</code> (noklusējums): rindiņu pārtraukumi ar pēdiņām tiek apstrādāti kā daļa no datiem, nevis kā pašreizējās rindas beigas.          </li>          <li>            <code>QuoteStyle.None</code>: visi rindiņu pārtraukumi tiek apstrādāti kā pašreizējās rindas beigas, pat ja tie ir daļa no pēdiņās esošas vērtības.          </li>        </ul>      </li>    </ul>  


## Examples

### Example #1 
Apstrādājiet CSV tekstu ar kolonnu galvenēm.
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
