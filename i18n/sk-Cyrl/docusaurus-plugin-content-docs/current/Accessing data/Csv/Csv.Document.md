---
title: Csv.Document
---

# Csv.Document


## Description

Vráti obsah dokumentu CSV ako tabuľku.


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

Vráti obsah CSV dokumentu ako tabuľku.    <ul>      <li>        <code>columns</code> môže mať hodnotu null, môže byť počtom stĺpcov, zoznamom názvov stĺpcov, typom tabuľky alebo záznamom možností.      </li>      <li>        <code>delimiter</code> môže byť samostatným znakom, zoznamom znakov alebo hodnotou <code>""</code>, ktorá označuje, že riadky by sa mali rozdeliť po sebe idúcimi prázdnymi znakmi. Predvolená možnosť: <code>","</code>.      </li>      <li>        V tabuľke <code>ExtraValues.Type</code> nájdete podporované hodnoty pre parameter <code>extraValues</code>.      </li>      <li>        <code>encoding</code> určuje typ kódovania textu.      </li>    </ul>    Ak je pre parameter <code>columns</code> určený záznam (a parametre <code>delimiter</code>, <code>extraValues</code> a <code>encoding</code> majú hodnotu null), môžu sa poskytnúť tieto polia záznamu:    <ul>      <li>        <code>Delimiter</code>: oddeľovač stĺpcov. Predvolená hodnota: <code>","</code>.      </li>      <li>        <code>Columns</code>: môže mať hodnotu null, môže byť počtom stĺpcov, zoznamom názvov stĺpcov alebo typom tabuľky. Ak je počet stĺpcov nižší ako hodnota na vstupe, ďalšie stĺpce sa ignorujú. Ak je počet stĺpcov vyšší ako hodnota na vstupe, pre ďalšie stĺpce sa nastaví hodnota null. Ak počet stĺpcov nie je zadaný, určí ho hodnota zadaná na vstupe.      </li>      <li>        <code>Encoding</code>: kódovanie textu v súbore. Predvolené: 65001 (UTF-8).      </li>      <li>        <code>CsvStyle</code>: určuje, ako sa budú používať úvodzovky.        <ul>          <li>            <code>CsvStyle.QuoteAfterDelimiter</code> (predvolené): úvodzovky v poli sú dôležité len v prípade, ak nasledujú hneď za oddeľovačom.          </li>          <li>            <code>CsvStyle.QuoteAlways</code>: úvodzovky v poli sú vždy dôležité bez ohľadu na to, kde sa nachádzajú.          </li>        </ul>      </li>      <li>        <code>QuoteStyle</code>: určuje spôsob spracovania zlomov riadkov v úvodzovkách.        <ul>          <li>            <code>QuoteStyle.None</code> (predvolené): všetky zlomy riadka sa považujú za koniec aktuálneho riadka, aj keď sa vyskytujú v hodnote v úvodzovkách.          </li>          <li>            <code>QuoteStyle.Csv</code>: zlomy riadka v úvodzovkách sa považujú za súčasť údajov, nie za koniec aktuálneho riadka.          </li>        </ul>      </li>    </ul>  


## Examples

### Example #1 
Spracujte text CSV s hlavičkami stĺpcov
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
