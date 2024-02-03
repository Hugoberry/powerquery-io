---
title: Csv.Document
---

# Csv.Document


## Description

Returnează conţinutul documentului CSV ca tabel.


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

Returnează conținutul documentului CSV ca tabel.    <ul>      <li>        <code>columns</code> poate fi nul, numărul de coloane, o listă de nume de coloane, un tip de tabel sau o înregistrare de opțiuni.      </li>      <li>        <code>delimiter</code> poate fi un singur caracter, o listă de caractere sau valoarea <code>""</code>, care indică faptul că rândurile trebuie despărțite de caractere spațiu consecutive. <code>","</code>.      </li>      <li>        Consultați <code>ExtraValues.Type</code> pentru valorile acceptate de <code>extraValues</code>.      </li>      <li>        <code>encoding</code> specifică tipul de codificare a textului.      </li>    </ul>    Dacă se specifică o înregistrare pentru <code>columns</code> (și <code>delimiter</code>, <code>extraValues</code> și <code>encoding</code> sunt nule), se pot furniza următoarele câmpuri de înregistrare:    <ul>      <li>        <code>Delimiter</code>: delimitatorul de coloane. Implicit: <code>","</code>.      </li>      <li>        <code>Columns</code>: poate fi nul, numărul de coloane, o listă de nume de coloane sau un tip de tabel. Dacă numărul de coloane este mai mic decât numărul găsit în datele introduse, coloanele suplimentare vor fi ignorate. Dacă numărul de coloane este mai mare decât numărul găsit în datele introduse, coloanele suplimentare vor fi nule. Când nu este specificat, numărul de coloane va fi determinat de ceea ce se găsește în datele introduse.      </li>      <li>        <code>Encoding</code>: codificarea text a fișierului. Implicit: 65001 (UTF-8).      </li>      <li>        <code>CsvStyle</code>: specifică modul în care sunt tratate ghilimelele.        <ul>          <li>            <code>CsvStyle.QuoteAfterDelimiter</code> (implicit): ghilimelele dintr-un câmp sunt semnificative doar dacă urmează imediat delimitatorul.          </li>          <li>            <code>CsvStyle.QuoteAlways</code>: ghilimelele dintr-un câmp sunt semnificative întotdeauna, indiferent unde apar.          </li>        </ul>      </li>      <li>        <code>QuoteStyle</code>: specifică modul în care sunt tratate sfârșiturile de linie între ghilimele.        <ul>          <li>            <code>QuoteStyle.Csv</code> (implicit): toate sfârșiturile de linie sunt tratate ca sfârșit de rând curent, chiar și atunci când apar în interiorul unei valori între ghilimele.          </li>          <li>            <code>QuoteStyle.None</code>: Toate sfârșiturile de linie sunt tratate ca sfârșit de rând curent, chiar și atunci când apar în interiorul unei valori între ghilimele.          </li>        </ul>      </li>    </ul>  


## Examples

### Example #1 
Procesați textul CSV cu anteturi de coloană
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
